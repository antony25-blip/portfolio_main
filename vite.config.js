import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/portfolio_main/", // 👈 IMPORTANT for GitHub Pages
});
