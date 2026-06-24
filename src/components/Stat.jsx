import { useEffect, useRef, useState } from 'react'
import { useInView } from '../lib/useInView.js'
import { prefersReducedMotion } from '../lib/motion.js'

const fmt = (v, suffix = '') => Math.round(v).toLocaleString('en-US') + suffix

/**
 * Animated count-up stat. Counts once when scrolled into view via
 * requestAnimationFrame. Under reduced motion the final value is shown
 * immediately (no animation).
 */
export default function Stat({ value, suffix = '', label, className = '' }) {
  const [ref, inView] = useInView({ threshold: 0.4 })
  const [display, setDisplay] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true

    if (prefersReducedMotion()) {
      setDisplay(value)
      return
    }

    const duration = 1500
    const start = performance.now()
    let raf
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3) // easeOutCubic
      setDisplay(value * eased)
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  return (
    <div ref={ref} className={className}>
      <div className="font-display text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
        {fmt(display, suffix)}
      </div>
      <div className="mt-1 font-body text-sm text-muted">{label}</div>
    </div>
  )
}
