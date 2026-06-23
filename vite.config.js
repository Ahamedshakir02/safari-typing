import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Keep the router in its own cached chunk so the home bundle stays lean.
        manualChunks: {
          router: ['react-router-dom'],
        },
      },
    },
  },
})
