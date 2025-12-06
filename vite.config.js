import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio-antony/',   // 👈 VERY IMPORTANT for GitHub Pages
  build: {
    outDir: 'docs',             // 👈 build directly into docs
  },
})
