import { gsap } from 'gsap'
import { useGsap } from '../lib/useGsap.js'
import SectionHeading from '../components/SectionHeading.jsx'
import Stars from '../components/Stars.jsx'
import ServiceIcon from '../components/ServiceIcon.jsx'
import { REVIEWS } from '../data/site.js'

/**
 * Testimonial marquee. One translated track, items rendered twice for a seamless
 * loop; the modifiers wrap keeps x bounded over long sessions. Pauses on hover,
 * and is NOT created under reduced motion (static, all cards readable).
 * Placeholder content — wire real Google reviews in data/site.js.
 */
export default function Reviews() {
  const ref = useGsap(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const track = ref.current.querySelector('.marquee-track')
      const half = track.scrollWidth / 2
      const loop = gsap.to(track, {
        x: -half,
        ease: 'none',
        duration: 36,
        repeat: -1,
        modifiers: { x: gsap.utils.unitize((x) => parseFloat(x) % half) },
      })
      const pause = () => loop.pause()
      const play = () => loop.play()
      const node = ref.current
      node.addEventListener('pointerenter', pause)
      node.addEventListener('pointerleave', play)
      return () => {
        node.removeEventListener('pointerenter', pause)
        node.removeEventListener('pointerleave', play)
      }
    })
  })

  return (
    <section id="reviews" aria-labelledby="reviews-heading" className="overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeading
          id="reviews-heading"
          eyebrow="Reviews"
          title="Trusted by families and businesses in Sharjah."
          align="center"
        />
      </div>

      <div ref={ref} className="relative mt-12">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-offwhite to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-offwhite to-transparent" />

        <div className="marquee-track flex w-max gap-5 will-change-transform">
          {[...REVIEWS, ...REVIEWS].map((r, i) => (
            <article
              key={i}
              aria-hidden={i >= REVIEWS.length}
              dir={r.lang === 'ar' ? 'rtl' : 'ltr'}
              className={`w-[78vw] shrink-0 rounded-2xl border border-navy/8 bg-white p-6 shadow-card sm:w-[360px] ${
                r.lang === 'ar' ? 'font-arabic text-right' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <Stars count={r.stars} />
                <ServiceIcon name="check" size={18} className="text-red/70" />
              </div>
              <p className="mt-4 font-body text-[0.95rem] leading-relaxed text-ink/80">{r.text}</p>
              <div className="mt-5 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy/[0.06] font-display text-sm font-semibold text-navy">
                  {r.name.charAt(0)}
                </span>
                <span className="font-body text-sm font-semibold text-navy">{r.name}</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <p className="mx-auto mt-8 max-w-content px-5 text-center font-body text-xs text-muted sm:px-8">
        Placeholder reviews — replace with live Google reviews before launch.
      </p>
    </section>
  )
}
