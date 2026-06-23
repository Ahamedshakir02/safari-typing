import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { setLenis } from './lenis.js'

gsap.registerPlugin(ScrollTrigger)

// Avoid pin/refresh jumps when the mobile URL bar shows/hides (it fires resize).
ScrollTrigger.config({ ignoreMobileResize: true })

/**
 * The single source of truth for scrolling. Mounted ONCE above the router so
 * Lenis survives navigation.
 *
 * THE THREE LINES PEOPLE GET WRONG:
 *   1. lenis.on('scroll', ScrollTrigger.update) -> ScrollTrigger reads Lenis, not native scroll
 *   2. gsap.ticker.add((t) => lenis.raf(t * 1000)) -> Lenis driven by GSAP's one clock
 *   3. gsap.ticker.lagSmoothing(0) -> stop GSAP "catching up" after a frame drop (the desync)
 *
 * Never run your own requestAnimationFrame loop alongside gsap.ticker — two
 * clocks fighting is the #1 cause of scroll stutter.
 *
 * Cleanup is symmetric (destroy + remove + null) so React 18 StrictMode's
 * mount→cleanup→mount nets exactly one instance.
 */
export default function SmoothScroll({ children }) {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const lenis = new Lenis({
      duration: reduce ? 0 : 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo-out
      smoothWheel: !reduce,
      syncTouch: false, // native momentum on touch feels better than forced smoothing
    })
    setLenis(lenis)

    lenis.on('scroll', ScrollTrigger.update)
    const raf = (time) => lenis.raf(time * 1000)
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    // Re-measure once fonts settle (variable fonts swap in after first paint and
    // shift headline heights, which would leave triggers measured at the wrong Y).
    let cancelled = false
    document.fonts?.ready.then(() => {
      if (!cancelled) ScrollTrigger.refresh()
    })

    return () => {
      cancelled = true
      gsap.ticker.remove(raf)
      lenis.destroy()
      setLenis(null)
    }
  }, [])

  return children
}
