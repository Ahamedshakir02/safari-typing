import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGsap } from '../lib/useGsap.js'
import { splitWords } from '../lib/splitText.js'
import ServiceCard from '../components/ServiceCard.jsx'
import { SERVICES } from '../data/services.js'

/**
 * The core section. The heading uses CSS `position: sticky` (NOT ScrollTrigger
 * pin — avoids pin-spacer recompute fragility with lazy routes + mobile URL-bar
 * resize). Cards reveal in a coordinated stagger via ScrollTrigger.batch with
 * once:true (cheap, no replay/leak on refresh). Reduced motion = all visible.
 */
export default function Services() {
  const ref = useGsap(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const heading = ref.current.querySelector('.services-heading')
      const words = splitWords(heading)
      gsap.from(words, {
        yPercent: 110,
        duration: 0.9,
        ease: 'expo.out',
        stagger: 0.04,
        scrollTrigger: { trigger: heading, start: 'top 85%', once: true },
      })

      // Hidden initial state set in JS (inside no-preference) — never in CSS.
      gsap.set('.service-card', { opacity: 0, y: 28 })
      ScrollTrigger.batch('.service-card', {
        start: 'top 90%',
        once: true,
        onEnter: (els) =>
          gsap.to(els, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            stagger: 0.06,
            overwrite: true,
          }),
      })
    })
  })

  return (
    <section ref={ref} id="services" aria-labelledby="services-heading" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-content">
        <div className="md:grid md:grid-cols-12 md:gap-10">
          {/* Sticky heading column */}
          <div className="md:col-span-4">
            <div className="md:sticky md:top-28">
              <span className="mb-3 inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-red">
                <span className="h-px w-6 bg-red" aria-hidden="true" />
                What we do
              </span>
              <h2
                id="services-heading"
                className="services-heading font-display text-3xl text-navy sm:text-4xl md:text-5xl"
              >
                Almost every government service, under one roof.
              </h2>
              <p className="mt-4 max-w-sm font-body text-base leading-relaxed text-muted">
                Tap any service to see what's included, the documents to bring and the simple steps.
              </p>
            </div>
          </div>

          {/* Cards */}
          <div className="mt-10 md:col-span-8 md:mt-0">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {SERVICES.map((s) => (
                <ServiceCard key={s.slug} service={s} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
