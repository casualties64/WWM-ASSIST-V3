
import { BoardState, PieceColor, PieceType } from '../types';

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
    bestMove: EngineMove;
    candidates: MoveCandidate[];
    explanation: string;
}

let engineWorker: Worker | null = null;
let isReady = false;
let currentResolve: ((result: EngineResult | null) => void) | null = null;
let candidatesBuffer: Map<number, MoveCandidate> = new Map(); // Map multipv index to candidate

// Coordinates mapping
// Engine (UCI): Files a-i (0-8), Ranks 0-9
// Fairy-Stockfish Xiangqi:
// File a=0 (Left) ... i=8 (Right)
// Rank 0 (Bottom/Red) ... 9 (Top/Black)
// App Board: x=0 (Left), y=0 (Top/Black), y=9 (Bottom/Red)
// Mapping: Engine File = App x; Engine Rank = 9 - App y
const uciToCoords = (uci: string): { from: [number, number], to: [number, number] } | null => {
    if (!uci || uci.length < 4) return null;
    
    const fileMap: Record<string, number> = { 'a': 0, 'b': 1, 'c': 2, 'd': 3, 'e': 4, 'f': 5, 'g': 6, 'h': 7, 'i': 8 };
    
    const fFile = fileMap[uci[0]];
    const fRank = parseInt(uci[1]);
    const tFile = fileMap[uci[2]];
    const tRank = parseInt(uci[3]);

    if (fFile === undefined || isNaN(fRank) || tFile === undefined || isNaN(tRank)) return null;

    // Convert Rank to Y (0->9, 9->0)
    const fy = 9 - fRank;
    const ty = 9 - tRank;

    return {
        from: [fFile, fy],
        to: [tFile, ty]
    };
};

async function fetchStockfishScript(): Promise<{ content: string, url: string }> {
    const pathsToTry = [];
    
    // 1. Try constructed path from Vite env
    // Use type assertion to safely access import.meta.env
    const meta = import.meta as any;
    let envBase = (meta && meta.env && meta.env.BASE_URL) ? meta.env.BASE_URL : '/';
    if (!envBase.endsWith('/')) envBase += '/';
    
    // Configured path
    pathsToTry.push(`${envBase}fairy-stockfish/stockfish.js`);
    
    // 2. Try standard public folder path (often works in dev)
    pathsToTry.push('/fairy-stockfish/stockfish.js');
    
    // 3. Try relative path (fallback)
    pathsToTry.push('fairy-stockfish/stockfish.js');

    // Remove duplicates
    const uniquePaths = [...new Set(pathsToTry)];

    for (const path of uniquePaths) {
        try {
            // Resolve against current location to get absolute URL for fetch
            // This handles cases where window.location is in a subdir
            const resolvedUrl = new URL(path, window.location.href).toString();
            const response = await fetch(resolvedUrl);
            if (response.ok) {
                const content = await response.text();
                // Basic validation to ensure we didn't get an HTML 404 page
                if (content.trim().startsWith('<!DOCTYPE html>') || content.trim().startsWith('<html')) {
                    console.warn(`Path ${path} returned HTML instead of JS, skipping.`);
                    continue;
                }
                console.log(`[Xiangqi Engine] Successfully loaded engine from: ${resolvedUrl}`);
                return { content, url: resolvedUrl };
            }
        } catch (e) {
            console.warn(`[Xiangqi Engine] Failed to fetch stockfish from ${path}`, e);
        }
    }
    throw new Error("Could not load stockfish.js from any candidate path. Please ensure 'public/fairy-stockfish/stockfish.js' exists.");
}

export const initEngine = async () => {
    if (engineWorker) return;

    try {
        console.log("[Xiangqi Engine] Initializing...");
        
        // Fetch the script content first to avoid importScripts() CORS/Path issues in Blob
        const { content: scriptContent, url: scriptUrl } = await fetchStockfishScript();
        
        // Calculate WASM URL based on the successful JS URL
        // We assume stockfish.wasm is in the same directory
        const wasmUrl = scriptUrl.replace('stockfish.js', 'stockfish.wasm');

        // Create a blob worker. We embed the script content directly.
        // We also inject the Module configuration so it finds the WASM file correctly.
        const blobContent = `
            var Module = {
                locateFile: function(path, prefix) {
                    if (path.indexOf('stockfish.wasm') > -1) {
                        return '${wasmUrl}';
                    }
                    return prefix + path;
                }
            };
            // End of Module config
            
            ${scriptContent}
        `;

        const blob = new Blob([blobContent], { type: 'application/javascript' });
        const blobUrl = URL.createObjectURL(blob);

        engineWorker = new Worker(blobUrl);

        engineWorker.onmessage = (e) => {
            const line = e.data;
            
            if (line === 'uciok') {
                engineWorker?.postMessage('setoption name UCI_Variant value xiangqi');
                engineWorker?.postMessage('setoption name MultiPV value 3'); // Request 3 best moves
                engineWorker?.postMessage('isready');
            } else if (line === 'readyok') {
                isReady = true;
                console.log("[Xiangqi Engine] Ready!");
            } else {
                handleEngineOutput(line);
            }
        };

        engineWorker.onerror = (err) => {
            console.error("Fairy Stockfish Worker Error:", err);
        };

        engineWorker.postMessage('uci');

    } catch (e) {
        console.error("Failed to initialize engine:", e);
    }
};

const handleEngineOutput = (line: string) => {
    if (typeof line !== 'string') return;

    if (line.startsWith('info') && line.includes('score') && line.includes('pv')) {
        parseInfoLine(line);
    }

    if (line.startsWith('bestmove')) {
        const parts = line.split(' ');
        const bestMoveStr = parts[1];
        
        if (currentResolve) {
            const result = finalizeResult(bestMoveStr);
            currentResolve(result);
            currentResolve = null;
        }
    }
};

const parseInfoLine = (line: string) => {
    let multipv = 1;
    const mpvMatch = line.match(/multipv (\d+)/);
    if (mpvMatch) multipv = parseInt(mpvMatch[1]);

    let score = 0;
    const scoreCpMatch = line.match(/score cp (-?\d+)/);
    const scoreMateMatch = line.match(/score mate (-?\d+)/);

    if (scoreMateMatch) {
        const movesToMate = parseInt(scoreMateMatch[1]);
        // Prefer shorter mate
        score = movesToMate > 0 ? 20000 - movesToMate : -20000 - movesToMate;
    } else if (scoreCpMatch) {
        score = parseInt(scoreCpMatch[1]);
    }

    const pvIndex = line.indexOf(' pv ');
    let pvMoves: string[] = [];
    if (pvIndex !== -1) {
        pvMoves = line.substring(pvIndex + 4).split(' ');
    }
    
    if (pvMoves.length > 0) {
        const moveStr = pvMoves[0];
        const coords = uciToCoords(moveStr);
        if (coords) {
            candidatesBuffer.set(multipv, {
                move: {
                    from: coords.from,
                    to: coords.to,
                    notation: moveStr
                },
                score: score,
                pv: pvMoves
            });
        }
    }
};

const finalizeResult = (bestMoveUci: string): EngineResult | null => {
    // Convert map to array and sort by score descending
    const candidates = Array.from(candidatesBuffer.values()).sort((a, b) => b.score - a.score);
    candidatesBuffer.clear();

    const bestMoveCoords = uciToCoords(bestMoveUci);
    if (!bestMoveCoords) return null;

    const bestCandidate = candidates.find(c => c.move.notation === bestMoveUci) || candidates[0];
    
    let scoreDisplay = "?";
    if (bestCandidate) {
        if (Math.abs(bestCandidate.score) > 10000) {
             scoreDisplay = `Mate`;
        } else {
             // Engine CP score is relative to side to move. 
             scoreDisplay = (bestCandidate.score / 100).toFixed(2);
        }
    }

    return {
        bestMove: {
            from: bestMoveCoords.from,
            to: bestMoveCoords.to,
            notation: bestMoveUci
        },
        candidates: candidates,
        explanation: `Eval: ${scoreDisplay}`
    };
};

export const getBestMove = async (fen: string, depth: number = 15): Promise<EngineResult | null> => {
    if (!engineWorker) {
        await initEngine();
        if (!engineWorker) return null;
    }

    // Reset state
    candidatesBuffer.clear();

    return new Promise((resolve) => {
        currentResolve = resolve;
        
        const runAnalysis = () => {
             engineWorker?.postMessage(`position fen ${fen}`);
             engineWorker?.postMessage(`go depth ${depth}`);
        };

        if (!isReady) {
            setTimeout(runAnalysis, 500);
        } else {
            runAnalysis();
        }
    });
};

export const boardToFen = (board: BoardState, turn: PieceColor): string => {
  let fen = "";
  // Rank 9 (Top) to Rank 0 (Bottom)
  // App Y=0 is Rank 9. App Y=9 is Rank 0.
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
        let char = '';
        switch (piece.type) {
          case PieceType.KING: char = 'k'; break;
          case PieceType.ADVISOR: char = 'a'; break;
          case PieceType.ELEPHANT: char = 'b'; break;
          case PieceType.HORSE: char = 'n'; break;
          case PieceType.ROOK: char = 'r'; break;
          case PieceType.CANNON: char = 'c'; break;
          case PieceType.PAWN: char = 'p'; break;
        }
        
        // Red is Uppercase
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
