import { existsSync, copyFileSync } from 'node:fs'
import { join } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // vite-react-ssg options (read by `vite-react-ssg build`).
  ssgOptions: {
    entry: 'src/main.jsx',
    // nested: /services/visa-immigration -> /services/visa-immigration/index.html
    dirStyle: 'nested',
    // defer the hydration script so it never blocks first paint.
    script: 'defer',
    // Many static hosts (GitHub Pages, Netlify) serve /404.html on a miss; the
    // nested 404 route emits /404/index.html, so mirror it to the root.
    onFinished(dir) {
      const nested = join(dir, '404', 'index.html')
      if (existsSync(nested)) copyFileSync(nested, join(dir, '404.html'))
    },
  },

  build: {
    rollupOptions: {
      output: {
        // Keep the router + React and the motion libs in their own cached chunks
        // so the home bundle stays lean.
        manualChunks(id) {
          if (id.includes('node_modules/react-router') || id.includes('node_modules/react-router-dom')) {
            return 'router'
          }
          if (id.includes('node_modules/gsap') || id.includes('node_modules/lenis')) {
            return 'motion'
          }
        },
      },
    },
  },
})
