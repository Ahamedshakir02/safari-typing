import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import ScrollToTop from './lib/ScrollToTop.jsx'
import SiteLoader from './components/SiteLoader.jsx'
import SmoothScroll from './components/SmoothScroll.jsx'
import SkipLink from './components/SkipLink.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Logo from './components/Logo.jsx'

// Branded fallback (not a white flash) while a lazy route loads.
function RouteFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center" aria-busy="true" aria-label="Loading">
      <Logo size={56} className="animate-float" />
    </div>
  )
}

/**
 * The persistent site chrome (loader, smooth scroll, header, footer, floating
 * WhatsApp) wrapped around the routed page <Outlet>. This is the root route's
 * element under vite-react-ssg, replacing the old App component shell.
 */
export default function Layout() {
  return (
    <>
      {/* Rendered into the prerendered HTML, NOT wrapped in <ClientOnly>. That
          wrapper was the bug: it mounted the splash only after hydration, so
          the static headline and Call button painted first and the overlay
          dropped on top of content the visitor was already reading — which is
          what made it look like the page reloaded itself. Its first render is
          deterministic (nothing read from window), so there is no hydration
          mismatch to avoid here. */}
      <SiteLoader />
      <SmoothScroll />
      <div className="grain" aria-hidden="true" />
      <SkipLink />
      <ScrollToTop />
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <Suspense fallback={<RouteFallback />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
