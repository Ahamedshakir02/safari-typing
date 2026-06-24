// Tiny reduced-motion helper. The reveal/marquee/bob animations are pure CSS
// and gate themselves via the prefers-reduced-motion media query in index.css;
// this helper is for one-off JS decisions (count-up, observer skip).

export const NO_MOTION = '(prefers-reduced-motion: reduce)'

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches
