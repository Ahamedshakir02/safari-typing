import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './App.jsx'

// Self-hosted brand fonts (replaces the render-blocking Google Fonts <link>).
// @fontsource ships @font-face with font-display: swap and Vite fingerprints
// the woff2 files into the bundle.
import '@fontsource/eb-garamond/400.css'
import '@fontsource/eb-garamond/500.css'
import '@fontsource/eb-garamond/600.css'
import '@fontsource/eb-garamond/400-italic.css'
import '@fontsource/figtree/400.css'
import '@fontsource/figtree/500.css'
import '@fontsource/figtree/600.css'
import '@fontsource/figtree/700.css'
// Wordmark fonts for the "Pay Later" badges — Baloo 2 echoes Tabby's rounded
// wordmark, Poppins echoes Tamara's geometric one (single weight each).
import '@fontsource/baloo-2/700.css'
import '@fontsource/poppins/600.css'
import './index.css'

// vite-react-ssg drives rendering: it prerenders each route to static HTML at
// build time and hydrates that markup on the client (createBrowserRouter under
// the hood, so BrowserRouter behaviour is preserved). Fonts are loaded via the
// <link> in index.html to match the brand design exactly.
export const createRoot = ViteReactSSG({ routes })
