import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './App.jsx'
import './index.css'

// vite-react-ssg drives rendering: it prerenders each route to static HTML at
// build time and hydrates that markup on the client (createBrowserRouter under
// the hood, so BrowserRouter behaviour is preserved). Fonts are loaded via the
// <link> in index.html to match the brand design exactly.
export const createRoot = ViteReactSSG({ routes })
