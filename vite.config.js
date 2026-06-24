import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Keep the router + React in their own cached chunk so the home bundle
        // stays lean. (Function form — required by Vite 8 / rolldown.)
        manualChunks(id) {
          if (id.includes('node_modules/react-router') || id.includes('node_modules/react-router-dom')) {
            return 'router'
          }
        },
      },
    },
  },
})
