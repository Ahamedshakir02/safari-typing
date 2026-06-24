import { prefersReducedMotion } from './motion.js'
import { getLenis } from './lenis.js'

// Sticky-header height to clear when jumping to an in-page anchor.
const HEADER_OFFSET = 104

/**
 * Smooth-scroll to an element by id, offset to clear the sticky header. Routes
 * through Lenis when smooth scrolling is active, otherwise uses native
 * scrolling. Honors prefers-reduced-motion (jumps instantly). Returns false if
 * the target isn't in the DOM yet (caller can retry after route paint).
 */
export function scrollToId(id, { offset = HEADER_OFFSET } = {}) {
  const el = document.getElementById(id)
  if (!el) return false

  const lenis = getLenis()
  if (lenis) {
    lenis.scrollTo(el, { offset: -offset })
    return true
  }

  const top = el.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({
    top,
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
  })
  return true
}
