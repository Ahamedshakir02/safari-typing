// Module singleton for the single Lenis instance.
//
// Without an R3F canvas there is no per-frame scroll consumer, so we don't need
// a reactive store (zustand) — just a place for non-component code (anchor
// scrolling, route manager) to reach the live instance. Reachable from anywhere,
// no React plumbing.
let _lenis = null

export const setLenis = (instance) => {
  _lenis = instance
}

export const getLenis = () => _lenis
