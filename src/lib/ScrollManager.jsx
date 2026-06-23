import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { getLenis } from './lenis.js'
import { scrollToId } from './scrollToId.js'

/**
 * Handles scroll position + ScrollTrigger measurement across route changes.
 * Renders nothing. Must live inside both <BrowserRouter> and <SmoothScroll>.
 *
 * - Plain route change: jump to top, then refresh triggers after the (possibly
 *   lazy) route has laid out + painted. Move focus to #main for keyboard/SR users.
 * - Hash route (e.g. /#contact, incl. cross-route): SKIP the top-reset, refresh,
 *   then smooth-scroll to the anchor. The double rAF defers work until paint.
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation()

  // Plain route change (no hash) -> top + refresh + focus.
  useLayoutEffect(() => {
    if (hash) return
    getLenis()?.scrollTo(0, { immediate: true })

    let r2
    const r1 = requestAnimationFrame(() => {
      r2 = requestAnimationFrame(() => {
        ScrollTrigger.refresh()
        const main = document.getElementById('main')
        if (main) main.focus({ preventScroll: true })
      })
    })
    return () => {
      cancelAnimationFrame(r1)
      cancelAnimationFrame(r2)
    }
  }, [pathname, hash])

  // Hash route -> refresh, then smooth-scroll to the target.
  useLayoutEffect(() => {
    if (!hash) return
    let r2
    const r1 = requestAnimationFrame(() => {
      r2 = requestAnimationFrame(() => {
        ScrollTrigger.refresh()
        scrollToId(hash.slice(1))
      })
    })
    return () => {
      cancelAnimationFrame(r1)
      cancelAnimationFrame(r2)
    }
  }, [pathname, hash])

  return null
}
