import { BoardState, PieceColor } from '../types';
// @ts-ignore
import wukongScript from '../Wukong/engine/wukong.js?raw';

// Types for the engine response
export interface EngineMove {
    from: [number, number];
    to: [number, number];
    notation: string;
}

export interface MoveCandidate {
    move: EngineMove;
    score: number; // centipawns
    pv: string[];
}

export interface EngineResult {
    bestMove: EngineMove | null; // Can be null for terminal positions
    candidates: MoveCandidate[];
    explanation: string;
}

let engineWorker: Worker | null = null;
let isReady = false;
let initPromise: Promise<void> | null = null;
let currentAnalysisRequest: { fen: string, turn: PieceColor, resolve: (result: EngineResult | null) => void } | null = null;
let analysisBuffer: { candidates: MoveCandidate[], bestMoveNotation?: string } = { candidates: [] };

// Wukong coordinates: 'a0' (bottom-left) to 'i9' (top-right)
// App coordinates: x=0 (left) to x=8 (right), y=0 (top) to y=9 (bottom)
const uciToCoords = (uci: string): { from: [number, number], to: [number, number] } | null => {
    if (!uci || uci.length < 4) return null;
    
    const fileMap: Record<string, number> = { 'a': 0, 'b': 1, 'c': 2, 'd': 3, 'e': 4, 'f': 5, 'g': 6, 'h': 7, 'i': 8 };
    
    const fromFile = fileMap[uci[0]];
    const fromRank = parseInt(uci[1]);
    const toFile = fileMap[uci[2]];
    const toRank = parseInt(uci[3]);

    if (fromFile === undefined || isNaN(fromRank) || toFile === undefined || isNaN(toRank)) return null;

    const fromY = 9 - fromRank;
    const toY = 9 - toRank;

    return {
        from: [fromFile, fromY],
        to: [toFile, toY]
    };
};

export const initEngine = () => {
    if (initPromise) return initPromise;

    initPromise = (async () => {
        if (engineWorker) return;

        try {
            console.log("[Wukong Engine] Initializing via bundled script...");
            
            // We use the bundled script content directly.
            // This avoids fetch failures and 404s on GitHub Pages.
            const engineScriptContent = wukongScript;

            const workerCode = `
                ${engineScriptContent}
                
                let engine = new Engine();
                
                // Override console.log to send messages back to the main thread
                self.console = {
                    ...self.console,
                    log: function(...args) {
                        self.postMessage({ type: 'log', data: args.join(' ') });
                    },
                    error: function(...args) {
                        self.postMessage({ type: 'error', data: args.join(' ') });
                    }
                };

                self.onmessage = function(e) {
                    const { type, payload } = e.data;
                    
                    if (type === 'analyze') {
                        if (!engine) {
                            self.postMessage({ type: 'error', data: 'Engine not initialized.' });
                            return;
                        }
                        engine.setBoard(payload.fen);
                        engine.search(payload.depth);
                    }
                };
                
                self.postMessage({ type: 'ready' });
            `;
            
            const blob = new Blob([workerCode], { type: 'application/javascript' });
            engineWorker = new Worker(URL.createObjectURL(blob));

            engineWorker.onmessage = (e) => {
                const { type, data } = e.data;
                if (type === 'ready') {
                    isReady = true;
                    console.log("[Wukong Engine] Ready!");
                } else if (type === 'log') {
                    handleEngineOutput(data);
                } else if (type === 'error') {
                    console.error("[Wukong Worker Error]", data);
                }
            };

            engineWorker.onerror = (err) => {
                console.error("Wukong Worker Error:", err);
                isReady = false;
                engineWorker = null; // Allow re-initialization
                initPromise = null;
            };
        
        } catch (e) {
            console.error("Failed to initialize Wukong engine:", e);
            initPromise = null;
        }
    })();

    return initPromise;
};

const handleEngineOutput = async (line: string) => {
    if (typeof line !== 'string') return;
    
    if (line.startsWith('info score')) {
        parseInfoLine(line);
    }

    if (line.startsWith('bestmove')) {
        const parts = line.split(' ');
        analysisBuffer.bestMoveNotation = parts[1];
        
        // This is the "terminal position" case from wukong.js
        if (analysisBuffer.bestMoveNotation === 'xxxx' || !currentAnalysisRequest) {
            if (currentAnalysisRequest) {
                const result: EngineResult = {
                    bestMove: null,
                    candidates: [],
                    explanation: "Position is a checkmate or stalemate. No legal moves available."
                };
                currentAnalysisRequest.resolve(result);
            }
            currentAnalysisRequest = null;
            return;
        }
        
        const result = finalizeResult();

        if (!result || !result.bestMove) {
            console.error("Failed to finalize engine result from notation:", analysisBuffer.bestMoveNotation);
            currentAnalysisRequest.resolve(null);
            currentAnalysisRequest = null;
            return;
        }

        currentAnalysisRequest.resolve(result);
        currentAnalysisRequest = null;
    }
};

const parseInfoLine = (line: string) => {
    const parts = line.split(' ');
    let score = 0;
    let pvMoves: string[] = [];

    const scoreCpIndex = parts.indexOf('cp');
    const scoreMateIndex = parts.indexOf('mate');
    const pvIndex = parts.indexOf('pv');

    if (scoreMateIndex !== -1) {
        const movesToMate = parseInt(parts[scoreMateIndex + 1]);
        score = (movesToMate > 0 ? 32000 - movesToMate : -32000 - movesToMate);
    } else if (scoreCpIndex !== -1) {
        score = parseInt(parts[scoreCpIndex + 1]);
    }
    
    if (pvIndex !== -1) {
        pvMoves = parts.slice(pvIndex + 1);
    }
    
    if (pvMoves.length > 0) {
        const moveStr = pvMoves[0];
        const coords = uciToCoords(moveStr);
        if (coords) {
            const candidate: MoveCandidate = {
                move: {
                    from: coords.from,
                    to: coords.to,
                    notation: moveStr
                },
                score: score,
                pv: pvMoves
            };
            
            const existingIndex = analysisBuffer.candidates.findIndex(c => c.move.notation === moveStr);
            if (existingIndex !== -1) {
                analysisBuffer.candidates[existingIndex] = candidate;
            } else {
                analysisBuffer.candidates.push(candidate);
            }
        }
    }
};

const finalizeResult = (): EngineResult | null => {
    if (!analysisBuffer.bestMoveNotation) return null;
    
    const bestMoveCoords = uciToCoords(analysisBuffer.bestMoveNotation);
    if (!bestMoveCoords) return null;

    analysisBuffer.candidates.sort((a, b) => b.score - a.score);

    const bestCandidate = analysisBuffer.candidates.find(c => c.move.notation === analysisBuffer.bestMoveNotation) || analysisBuffer.candidates[0];
    
    let scoreDisplay = "?";
    let explanationText = "";

    if (bestCandidate) {
        if (Math.abs(bestCandidate.score) > 30000) {
             const mateIn = 32000 - Math.abs(bestCandidate.score);
             scoreDisplay = `Mate in ${mateIn}`;
             explanationText = `Checkmate sequence found in ${mateIn} moves.`;
        } else {
             const scoreVal = bestCandidate.score / 100; // Convert centipawns to pawns
             scoreDisplay = scoreVal > 0 ? `+${scoreVal.toFixed(2)}` : scoreVal.toFixed(2);
             
             if (scoreVal > 2) explanationText = "Red has a decisive winning advantage.";
             else if (scoreVal > 0.5) explanationText = "Red has a slight advantage.";
             else if (scoreVal > -0.5) explanationText = "The position is roughly balanced.";
             else if (scoreVal > -2) explanationText = "Black has a slight advantage.";
             else explanationText = "Black has a decisive winning advantage.";
        }
    }

    const result: EngineResult = {
        bestMove: {
            from: bestMoveCoords.from,
            to: bestMoveCoords.to,
            notation: analysisBuffer.bestMoveNotation
        },
        candidates: analysisBuffer.candidates,
        explanation: `Evaluation Score: ${scoreDisplay}. ${explanationText}`
    };

    analysisBuffer = { candidates: [] };
    return result;
};

export const getBestMove = async (fen: string, turn: PieceColor, depth: number = 7): Promise<EngineResult | null> => {
    await initEngine();

    if (!isReady || !engineWorker) {
        console.error("Engine could not be initialized or is not ready.");
        return null;
    }
    
    if (currentAnalysisRequest) {
        console.warn("Analysis already in progress. Ignoring new request.");
        return null;
    }

    analysisBuffer = { candidates: [] };

    return new Promise((resolve) => {
        currentAnalysisRequest = { fen, turn, resolve };
        engineWorker!.postMessage({ type: 'analyze', payload: { fen, depth } });
    });
};

export const boardToFen = (board: BoardState, turn: PieceColor): string => {
  let fen = "";
  for (let y = 0; y < 10; y++) { 
    let emptyCount = 0;
    for (let x = 0; x < 9; x++) {
      const piece = board[`${x},${y}`];
      if (!piece) {
        emptyCount++;
      } else {
        if (emptyCount > 0) {
          fen += emptyCount;
          emptyCount = 0;
        }
        
        let char = piece.type as string;
        
        if (piece.color === PieceColor.RED) {
          char = char.toUpperCase();
        }
        fen += char;
      }
    }
    if (emptyCount > 0) {
      fen += emptyCount;
    }
    if (y < 9) {
      fen += "/";
    }
  }
  
  fen += ` ${turn}`; 
  fen += " - - 0 1";
  
  return fen;
};