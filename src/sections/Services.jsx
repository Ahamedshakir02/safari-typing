import ServiceCard from '../components/ServiceCard.jsx'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import { SERVICES } from '../data/services.js'

/**
 * Core section. A CSS `position: sticky` heading column sits beside the card
 * grid; cards reveal as they enter the viewport (CSS / IntersectionObserver).
 */
export default function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-content">
        <div className="md:grid md:grid-cols-12 md:gap-10">
          {/* Sticky heading column */}
          <div className="md:col-span-4">
            <div className="md:sticky md:top-32">
              <span className="mb-3 inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-red">
                <span className="h-px w-6 bg-red" aria-hidden="true" />
                What we do
              </span>
              <h2
                id="services-heading"
                className="font-display text-3xl text-navy sm:text-4xl md:text-5xl"
              >
                Almost every government service, under one roof.
              </h2>
              <p className="mt-4 max-w-sm font-body text-base leading-relaxed text-muted">
                Tap any service to see what's included, the documents to bring and the simple steps.
              </p>
              <Button as="route" to="/services" variant="ghost" className="mt-6" iconRight="arrowRight">
                View all services
              </Button>
            </div>
          </div>

          {/* Cards */}
          <div className="mt-10 md:col-span-8 md:mt-0">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {SERVICES.map((s, i) => (
                <Reveal key={s.slug} delay={Math.min(i, 4) * 60} className="h-full">
                  <ServiceCard service={s} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
