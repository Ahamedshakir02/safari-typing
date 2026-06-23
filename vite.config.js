import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Split the motion + router libs into their own cached chunks so the
        // home bundle stays lean. Fonts are emitted as CSS/woff2 assets.
        manualChunks: {
          gsap: ['gsap', 'gsap/ScrollTrigger'],
          router: ['react-router-dom'],
        },
      },
    },
  },
})
