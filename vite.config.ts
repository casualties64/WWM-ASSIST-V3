import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path set to root ('/') for custom domain usage (e.g., wwmcompanion.dev)
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true, // Enable source maps for easier debugging
    emptyOutDir: true,
    target: 'es2020', // Ensure compatibility with modern browsers
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react']
  }
});