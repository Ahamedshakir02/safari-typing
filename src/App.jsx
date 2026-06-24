import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './lib/ScrollToTop.jsx'
import SkipLink from './components/SkipLink.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import FloatingButtons from './components/FloatingButtons.jsx'
import Logo from './components/Logo.jsx'
import Home from './pages/Home.jsx' // eager — the primary route

// Secondary routes are code-split so the home bundle stays lean.
const About = lazy(() => import('./pages/About.jsx'))
const Services = lazy(() => import('./pages/Services.jsx'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail.jsx'))
const ContactPage = lazy(() => import('./pages/ContactPage.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

// Branded fallback (not a white flash) while a lazy route loads.
function RouteFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center" aria-busy="true" aria-label="Loading">
      <Logo size={56} className="animate-pulse" />
    </div>
  )
}

export default function App() {
  return (
    <>
      <SkipLink />
      <ScrollToTop />
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
