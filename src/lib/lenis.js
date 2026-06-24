// Holds the active Lenis instance, set by <SmoothScroll/> on mount. Scroll
// helpers (scrollToId, ScrollToTop) read it so in-page jumps and route changes
// go through smooth scroll when it's active, and fall back to native scrolling
// when it isn't (e.g. under prefers-reduced-motion, where Lenis never starts).
let activeLenis = null

export const setLenis = (instance) => {
  activeLenis = instance
}

export const getLenis = () => activeLenis
