import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // dev -> "/"  |  build (GitHub Pages) -> "/jydgeotrack-frontend/"
  base: command === "serve" ? "/" : "/jydgeotrack-frontend/",
}));