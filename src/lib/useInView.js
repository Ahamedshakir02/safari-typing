import { useEffect, useRef, useState } from 'react'
import { prefersReducedMotion } from './motion.js'

/**
 * Returns [ref, inView]. Sets inView=true once the element scrolls into view
 * (fires once, then disconnects). Under reduced motion — or when
 * IntersectionObserver is unavailable — it reports true immediately so content
 * is never trapped hidden.
 */
export function useInView({ rootMargin = '0px 0px -10% 0px', threshold = 0.15 } = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true)
          io.disconnect()
        }
      },
      { rootMargin, threshold }
    )
    io.observe(node)
    return () => io.disconnect()
  }, [rootMargin, threshold])

  return [ref, inView]
}
