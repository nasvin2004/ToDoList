import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  root: 'frontend', // 👈 tells Vite to start from frontend/
  plugins: [react()],
  build: {
    outDir: '../dist',     // 👈 output to project-root/dist
    emptyOutDir: true,
  },
})
