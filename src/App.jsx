import { lazy, Suspense, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import SmoothScroll from './lib/SmoothScroll.jsx'
import ScrollManager from './lib/ScrollManager.jsx'
import SkipLink from './components/SkipLink.jsx'
import Cursor from './components/Cursor.jsx'
import Loader from './components/Loader.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import FloatingButtons from './components/FloatingButtons.jsx'
import Monogram from './components/Monogram.jsx'
import Home from './pages/Home.jsx' // eager — the LCP / primary route

// Secondary routes are code-split so the home bundle stays lean.
const ServiceDetail = lazy(() => import('./pages/ServiceDetail.jsx'))
const ContactPage = lazy(() => import('./pages/ContactPage.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

// Branded fallback (not null / not a spinner) — avoids a white flash on
// lazy-route load.
function RouteFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center" aria-busy="true" aria-label="Loading">
      <Monogram size={56} className="animate-pulse" />
    </div>
  )
}

export default function App() {
  const [ready, setReady] = useState(false)

  return (
    <>
      {!ready && <Loader onDone={() => setReady(true)} />}
      <SkipLink />
      <Cursor />

      <SmoothScroll>
        <ScrollManager />
        <Header />
        <main id="main" tabIndex={-1} className="relative outline-none">
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </SmoothScroll>

      <FloatingButtons />
    </>
  )
}
