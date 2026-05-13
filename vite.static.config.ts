// Build SPA estática para hospedagem compartilhada (Hostinger).
// Uso: npm run build:static  ->  pasta dist/ contendo index.html + assets.
// Esta config é INDEPENDENTE de vite.config.ts (TanStack Start) e não afeta o Lovable.
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  // Hospedagem em subpasta? Mude para "./" ou "/subpasta/".
  base: "/",
});
