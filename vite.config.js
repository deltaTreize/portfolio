import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './',
  base: "/",
  server: {
    open: true,
    port: 3000,
    historyApiFallback: true, // Seulement utile avec React Router
  },
  build: {
    outDir: 'dist',
  },
});
