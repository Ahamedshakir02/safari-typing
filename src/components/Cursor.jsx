import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

/**
 * Subtle custom cursor — desktop / fine-pointer only. An instant dot plus a ring
 * that lags via quickTo, growing over anything marked data-cursor="grow".
 * Hidden entirely on touch (no pointer to track). Cheapest "crafted" signal.
 */
export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    document.body.classList.add('has-custom-cursor')

    const xDot = gsap.quickTo(dot.current, 'x', { duration: 0.08, ease: 'power3' })
    const yDot = gsap.quickTo(dot.current, 'y', { duration: 0.08, ease: 'power3' })
    const xRing = gsap.quickTo(ring.current, 'x', { duration: 0.45, ease: 'power3' })
    const yRing = gsap.quickTo(ring.current, 'y', { duration: 0.45, ease: 'power3' })

    const move = (e) => {
      xDot(e.clientX)
      yDot(e.clientY)
      xRing(e.clientX)
      yRing(e.clientY)
    }
    window.addEventListener('pointermove', move)

    // Delegate hover growth so it works for elements added after mount (routes).
    const grow = (e) => {
      if (e.target.closest?.('[data-cursor="grow"], a, button')) {
        gsap.to(ring.current, { scale: 1.8, opacity: 0.4, duration: 0.3 })
      }
    }
    const shrink = (e) => {
      if (e.target.closest?.('[data-cursor="grow"], a, button')) {
        gsap.to(ring.current, { scale: 1, opacity: 1, duration: 0.3 })
      }
    }
    document.addEventListener('pointerover', grow)
    document.addEventListener('pointerout', shrink)

    return () => {
      window.removeEventListener('pointermove', move)
      document.removeEventListener('pointerover', grow)
      document.removeEventListener('pointerout', shrink)
      document.body.classList.remove('has-custom-cursor')
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-[150] hidden md:block" aria-hidden="true">
      <div
        ref={ring}
        className="absolute h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-navy/60"
      />
      <div
        ref={dot}
        className="absolute h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red"
      />
    </div>
  )
}
