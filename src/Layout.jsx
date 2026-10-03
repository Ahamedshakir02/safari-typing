import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import ScrollToTop from './lib/ScrollToTop.jsx'
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
 * The persistent site chrome (smooth scroll, header, footer, floating
 * WhatsApp) wrapped around the routed page <Outlet>. This is the root route's
 * element under vite-react-ssg, replacing the old App component shell.
 */
export default function Layout() {
  return (
    <>
      {/* No first-load splash by design. Every route is prerendered, so the
          headline and Call button paint in a few hundred milliseconds — a
          client-only overlay could only ever arrive *after* that paint and
          cover content the visitor was already reading, which read as the page
          reloading itself. The entrance animation is the brand beat now. */}
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
