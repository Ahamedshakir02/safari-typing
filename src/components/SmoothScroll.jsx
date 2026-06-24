import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap, ScrollTrigger } from '../lib/gsap.js'
import { prefersReducedMotion } from '../lib/motion.js'
import { setLenis } from '../lib/lenis.js'

/**
 * Site-wide smooth scrolling (Lenis), wired into GSAP's ticker so ScrollTrigger
 * stays in sync. Renders nothing.
 *
 * Accessibility: under prefers-reduced-motion we never start Lenis — the page
 * uses the browser's native scrolling and all GSAP motion is disabled too (see
 * the matchMedia branches in the pages).
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (prefersReducedMotion()) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    setLenis(lenis)

    // Drive Lenis from GSAP's ticker and keep ScrollTrigger updated.
    lenis.on('scroll', ScrollTrigger.update)
    const tick = (time) => lenis.raf(time * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(tick)
      lenis.destroy()
      setLenis(null)
    }
  }, [])

  return null
}
