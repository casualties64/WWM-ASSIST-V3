
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path must match your GitHub repository name for Pages deployment
  base: '/WWM-ASSIST-V3/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true, // Enable source maps for easier debugging
    emptyOutDir: true,
    target: 'es2020', // Ensure compatibility with modern browsers
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react']
  },
  define: {
    // This allows the app to access process.env.API_KEY in the browser
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
  }
});
