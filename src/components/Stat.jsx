import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGsap } from '../lib/useGsap.js'

const fmt = (v, suffix = '') => Math.round(v).toLocaleString('en-US') + suffix

/**
 * Animated count-up stat. Fires once when scrolled into view. Under reduced
 * motion the final value is written synchronously (no animation).
 */
export default function Stat({ value, suffix = '', label, className = '' }) {
  const ref = useGsap(() => {
    const el = ref.current.querySelector('.stat-num')
    const mm = gsap.matchMedia()
    mm.add(
      { motion: '(prefers-reduced-motion: no-preference)', reduce: '(prefers-reduced-motion: reduce)' },
      (ctx) => {
        if (ctx.conditions.reduce) {
          el.textContent = fmt(value, suffix)
          return
        }
        const obj = { v: 0 }
        ScrollTrigger.create({
          trigger: ref.current,
          start: 'top 85%',
          once: true,
          onEnter: () =>
            gsap.to(obj, {
              v: value,
              duration: 1.6,
              ease: 'power2.out',
              onUpdate: () => {
                el.textContent = fmt(obj.v, suffix)
              },
            }),
        })
      }
    )
  })

  return (
    <div ref={ref} className={className}>
      <div className="stat-num font-display text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
        {fmt(0, suffix)}
      </div>
      <div className="mt-1 font-body text-sm text-muted">{label}</div>
    </div>
  )
}
