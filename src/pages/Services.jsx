import Seo from '../components/Seo.jsx'
import Button from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import { SERVICES } from '../data/services.js'
import { CONTACT } from '../data/site.js'
import { waLink, telLink } from '../lib/wa.js'

export default function Services() {
  return (
    <>
      <Seo
        title="Services"
        description="Government typing & document services in Sharjah — business setup, PRO, family & company visas, Emirates ID, Tasheel (MOHRE), ICP, attestation, legal translation, vehicle, passport, registrations and insurance."
        path="/services"
      />

      {/* Header */}
      <section className="bg-gradient-to-b from-navy-50/60 to-offwhite px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-content">
          <span className="mb-3 inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-red">
            <span className="h-px w-6 bg-red" aria-hidden="true" />
            What we do
          </span>
          <h1 className="max-w-3xl font-display text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
            Almost every government service, under one roof.
          </h1>
          <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-muted sm:text-lg">
            From visas and Emirates ID to Tasheel, attestation, translation and business setup — our
            multilingual team handles your paperwork accurately and follows up until it's done. Tap any
            service for what's included, the documents to bring and the simple steps.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section aria-label="All services" className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-content grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={Math.min(i, 5) * 50} className="h-full">
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-20 sm:px-8">
        <div className="mx-auto flex max-w-content flex-col items-center gap-5 rounded-3xl bg-navy px-6 py-12 text-center">
          <h2 className="max-w-xl font-display text-2xl font-semibold text-offwhite sm:text-3xl">
            Not sure which service you need?
          </h2>
          <p className="max-w-lg font-body text-sm leading-relaxed text-offwhite/70">
            Message us on WhatsApp and we'll point you to the right one and tell you exactly what to bring.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button as="a" href={waLink()} target="_blank" rel="noopener noreferrer" variant="primary" size="lg" icon="whatsapp">
              WhatsApp Us
            </Button>
            <Button as="a" href={telLink(CONTACT.phones[0].e164)} variant="white" size="lg" icon="phone">
              Call {CONTACT.phones[0].display}
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
