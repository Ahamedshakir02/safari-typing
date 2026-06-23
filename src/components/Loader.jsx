import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Monogram from './Monogram.jsx'
import Arabic from './Arabic.jsx'
import { prefersReducedMotion } from '../lib/motion.js'

/**
 * Cinematic-but-brief preloader: the ST monogram scales in while its red ring
 * draws, the bilingual name fades up, then a navy curtain lifts to reveal the
 * hero. Kept under ~1.5s — long loaders read as slow, not premium. Calls
 * onDone() after the curtain clears.
 */
export default function Loader({ onDone }) {
  const root = useRef(null)
  const reduce = prefersReducedMotion()

  useEffect(() => {
    const ring = root.current.querySelector('.st-ring')
    const circumference = 2 * Math.PI * 46

    const finish = () => {
      gsap.to(root.current, {
        yPercent: -100,
        duration: 0.8,
        ease: 'expo.inOut',
        onComplete: () => onDone?.(),
      })
    }

    if (reduce) {
      // Show the brand briefly, then reveal — no big motion.
      const t = gsap.delayedCall(0.5, finish)
      return () => t.kill()
    }

    gsap.set(ring, { strokeDasharray: circumference, strokeDashoffset: circumference })

    const tl = gsap.timeline({ onComplete: finish })
    tl.from('.loader-mark', { scale: 0.8, opacity: 0, duration: 0.6, ease: 'power3.out' })
      .to(ring, { strokeDashoffset: 0, duration: 0.9, ease: 'power2.inOut' }, 0.1)
      .from('.loader-name', { y: 14, opacity: 0, duration: 0.6, ease: 'power3.out' }, 0.35)
      .to({}, { duration: 0.25 }) // brief hold

    return () => tl.kill()
  }, [onDone, reduce])

  return (
    <div
      ref={root}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-navy text-offwhite"
      role="status"
      aria-label="Loading"
    >
      <Monogram size={92} className="loader-mark" />
      <div className="loader-name mt-6 text-center">
        <div className="font-display text-lg font-semibold tracking-tight">Safari Typing Services</div>
        <Arabic className="mt-1 block text-sm text-offwhite/70">سفاري لخدمات الطباعة</Arabic>
      </div>
    </div>
  )
}
