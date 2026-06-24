import SectionHeading from '../components/SectionHeading.jsx'
import Stars from '../components/Stars.jsx'
import Reveal from '../components/Reveal.jsx'
import ServiceIcon from '../components/ServiceIcon.jsx'
import { REVIEWS } from '../data/site.js'

/**
 * Testimonials grid. Placeholder content — wire real Google reviews in
 * data/site.js before launch (see the README "Content to confirm" list).
 */
export default function Reviews() {
  return (
    <section id="reviews" aria-labelledby="reviews-heading" className="bg-mist px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-content">
        <SectionHeading
          id="reviews-heading"
          eyebrow="Reviews"
          title="Trusted by families and businesses in Sharjah."
          align="center"
          className="!mx-auto"
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal
              as="article"
              key={i}
              delay={Math.min(i, 3) * 70}
              dir={r.lang === 'ar' ? 'rtl' : 'ltr'}
              className={`flex flex-col rounded-2xl border border-navy/10 bg-white p-6 shadow-card ${
                r.lang === 'ar' ? 'font-arabic text-right' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <Stars count={r.stars} />
                <ServiceIcon name="check" size={18} className="text-red/70" />
              </div>
              <p className="mt-4 flex-1 font-body text-[0.95rem] leading-relaxed text-ink/80">{r.text}</p>
              <div className="mt-5 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy/[0.06] font-display text-sm font-semibold text-navy">
                  {r.name.charAt(0)}
                </span>
                <span className="font-body text-sm font-semibold text-navy">{r.name}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center font-body text-xs text-muted">
          Placeholder reviews — replace with live Google reviews before launch.
        </p>
      </div>
    </section>
  )
}
