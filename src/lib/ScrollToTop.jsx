import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollToId } from './scrollToId.js'
import { getLenis } from './lenis.js'

/**
 * On route change: jump to the top of a new page, or — if the URL carries a
 * hash — scroll to that section once it has painted. Renders nothing.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1)
      // Retry briefly while the (possibly lazy) route finishes mounting.
      let tries = 0
      const tick = () => {
        if (scrollToId(id) || tries++ > 10) return
        requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
      return
    }
    // Jump to the top instantly on a new page. Lenis needs to be told to reset
    // too, or it keeps its own (now stale) scroll position.
    const lenis = getLenis()
    if (lenis) lenis.scrollTo(0, { immediate: true })
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname, hash])

  return null
}
