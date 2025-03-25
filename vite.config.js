import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

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
    outDir: "dist",
    minify: "terser", // Optimisation avancée avec Terser
    terserOptions: {
      compress: {
        drop_console: true, // Supprime console.log
        pure_funcs: ["console.info", "console.debug"]
      }
    },
    rollupOptions: {
      treeshake: true, // Active le Tree Shaking pour supprimer le JS inutile
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor"; // Séparation des dépendances
          }
        }
      }
    }
  }
  });
