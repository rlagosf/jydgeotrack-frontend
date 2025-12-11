import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/jydgeotrack-frontend/', // 👈 importante para GitHub Pages
})
