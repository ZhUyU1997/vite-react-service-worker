import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/vite-react-service-worker/",
  build: {
    outDir: "./docs",
  },
  plugins: [
    react(),
    VitePWA({})
  ]
})
