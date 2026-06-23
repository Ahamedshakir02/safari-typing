import { gsap } from 'gsap'
import { useGsap } from '../lib/useGsap.js'

/**
 * Generic scroll-reveal wrapper. Content rests in its visible state; the entrance
 * is only created under no-preference, so reduced-motion users and the pre-JS
 * paint always see the content (never trapped at opacity:0).
 */
export default function Reveal({
  as: Tag = 'div',
  y = 24,
  delay = 0,
  duration = 0.8,
  className = '',
  children,
  ...rest
}) {
  const ref = useGsap(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from(ref.current, {
        y,
        opacity: 0,
        duration,
        delay,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 88%', once: true },
      })
    })
  })

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  )
}
