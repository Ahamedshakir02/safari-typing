import { getLenis } from './lenis.js'

/**
 * Smooth-scroll to an element by id via the live Lenis instance.
 * offset:-80 clears the sticky header. Returns false if the target/Lenis
 * isn't ready yet (caller can retry after route paint).
 */
export function scrollToId(id, { offset = -80 } = {}) {
  const lenis = getLenis()
  const el = document.getElementById(id)
  if (!el || !lenis) return false
  lenis.scrollTo(el, {
    offset,
    duration: 1.1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  })
  return true
}
