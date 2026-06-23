// Shared motion constants + a tiny reduced-motion helper.
// Reduced-motion gating in animated sections is done with gsap.matchMedia();
// this helper is for one-off non-GSAP decisions (e.g. Loader timing).

export const EASE = {
  out: 'expo.out',
  power: 'power3.out',
  inOut: 'expo.inOut',
  none: 'none',
}

export const NO_MOTION = '(prefers-reduced-motion: reduce)'
export const MOTION = '(prefers-reduced-motion: no-preference)'

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches
