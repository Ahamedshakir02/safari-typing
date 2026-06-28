import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { ClientOnly } from 'vite-react-ssg'
import ScrollToTop from './lib/ScrollToTop.jsx'
import SmoothScroll from './components/SmoothScroll.jsx'
import SkipLink from './components/SkipLink.jsx'
import SiteLoader from './components/SiteLoader.jsx'
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
      {/* The first-load splash is a purely client-side concern (animated
          progress + window.load listeners). Rendering it only on the client
          keeps it out of the prerendered HTML and avoids a hydration mismatch. */}
      <ClientOnly>{() => <SiteLoader />}</ClientOnly>
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
