import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Run GSAP animations scoped to a container, with automatic cleanup.
 *
 * gsap.context() collects every tween/ScrollTrigger/matchMedia created inside
 * `setup` and reverts them on unmount. Without this, ScrollTriggers leak on
 * route changes and hot-reloads, then fire on the wrong elements. Always scope.
 *
 *   const ref = useGsap(() => {
 *     const mm = gsap.matchMedia()
 *     mm.add('(prefers-reduced-motion: no-preference)', () => {
 *       gsap.from('.thing', { y: 24, opacity: 0, ... })
 *     })
 *   })
 *   return <section ref={ref}>...</section>
 */
export function useGsap(setup, deps = []) {
  const ref = useRef(null)
  useLayoutEffect(() => {
    const ctx = gsap.context(setup, ref)
    return () => ctx.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
  return ref
}
