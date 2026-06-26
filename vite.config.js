import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Keep the router + React, the motion libs and three.js in their own
        // cached chunks so the home bundle stays lean. (three is also imported
        // dynamically in FlowingFlag, so it loads off the critical path.)
        manualChunks(id) {
          if (id.includes('node_modules/react-router') || id.includes('node_modules/react-router-dom')) {
            return 'router'
          }
          if (id.includes('node_modules/gsap') || id.includes('node_modules/lenis')) {
            return 'motion'
          }
          if (id.includes('node_modules/three')) {
            return 'three'
          }
        },
      },
    },
  },
})
