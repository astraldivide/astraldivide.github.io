import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use relative asset paths so the built site works when served from the repo root (or gh-pages).
export default defineConfig({
  base: './',
  plugins: [react()],
})