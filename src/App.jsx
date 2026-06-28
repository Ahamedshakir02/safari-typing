import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx' // eager — the primary route
import { SERVICES } from './data/content.js'

// Client-side redirect for the legacy /privacy alias. Renders nothing during
// prerender (the effect only runs in the browser), per vite-react-ssg's
// recommended redirect pattern — don't redirect inside a loader.
function RedirectToPrivacyPolicy() {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/privacy-policy', { replace: true })
  }, [navigate])
  return null
}

// vite-react-ssg data routes. The root route renders the site chrome (Layout)
// with each page in its <Outlet>. `getStaticPaths` enumerates the 15 category
// pages so every /services/:slug is prerendered to its own static HTML.
//
// NOTE: the `import()` MUST sit directly inside each `lazy` function — that's
// how vite-react-ssg statically detects the route chunk and preloads it before
// hydration. Hiding it behind a helper breaks detection and triggers a Suspense
// fallback (hydration mismatch) on first load.
export const routes = [
  {
    path: '/',
    element: <Layout />,
    entry: 'src/Layout.jsx',
    children: [
      { index: true, element: <Home /> },
      { path: 'services', lazy: async () => ({ Component: (await import('./pages/Services.jsx')).default }) },
      {
        path: 'services/:slug',
        lazy: async () => ({ Component: (await import('./pages/CategoryPage.jsx')).default }),
        getStaticPaths: () => SERVICES.map((s) => `services/${s.slug}`),
      },
      { path: 'about', lazy: async () => ({ Component: (await import('./pages/About.jsx')).default }) },
      { path: 'faq', lazy: async () => ({ Component: (await import('./pages/Faq.jsx')).default }) },
      { path: 'contact', lazy: async () => ({ Component: (await import('./pages/ContactPage.jsx')).default }) },
      { path: 'privacy-policy', lazy: async () => ({ Component: (await import('./pages/Privacy.jsx')).default }) },
      { path: 'privacy', element: <RedirectToPrivacyPolicy /> },
      { path: 'terms', lazy: async () => ({ Component: (await import('./pages/Terms.jsx')).default }) },
      // Static 404 page (prerendered to /404/index.html → mirrored to /404.html).
      { path: '404', lazy: async () => ({ Component: (await import('./pages/NotFound.jsx')).default }) },
      // Client-side catch-all (not prerendered; the splat is filtered out of SSG).
      { path: '*', lazy: async () => ({ Component: (await import('./pages/NotFound.jsx')).default }) },
    ],
  },
]
