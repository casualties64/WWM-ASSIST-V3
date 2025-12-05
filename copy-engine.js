import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the installed package
const srcDir = path.resolve(__dirname, 'node_modules/fairy-stockfish-nnue.wasm');
// Destination in public folder
const destDir = path.resolve(__dirname, 'public/fairy-stockfish');

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

// Files required by the engine
const files = ['stockfish.js', 'stockfish.wasm'];

files.forEach(file => {
    const srcPath = path.join(srcDir, file);
    const destPath = path.join(destDir, file);
    
    try {
        if (fs.existsSync(srcPath)) {
            fs.copyFileSync(srcPath, destPath);
            console.log(`[Engine Setup] Copied ${file} to public/fairy-stockfish/`);
        } else {
            console.warn(`[Engine Setup] Warning: Could not find ${srcPath}. Ensure dependencies are installed.`);
        }
    } catch (err) {
        console.error(`[Engine Setup] Error copying ${file}:`, err);
    }
});