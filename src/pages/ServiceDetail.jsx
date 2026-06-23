import { useParams, Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import Arabic from '../components/Arabic.jsx'
import Button from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'
import ServiceIcon from '../components/ServiceIcon.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import NotFound from './NotFound.jsx'
import { getService, getRelated } from '../data/services.js'
import { CONTACT } from '../data/site.js'
import { waLink, telLink, buildWhatsAppLink } from '../lib/wa.js'

function List({ title, items, icon }) {
  return (
    <Reveal className="rounded-2xl border border-navy/8 bg-white p-6 shadow-card sm:p-7">
      <h2 className="font-display text-lg font-semibold text-navy">{title}</h2>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 font-body text-sm leading-relaxed text-ink/80">
            <ServiceIcon name={icon} size={18} className="mt-0.5 shrink-0 text-red" />
            {item}
          </li>
        ))}
      </ul>
    </Reveal>
  )
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getService(slug)

  if (!service) return <NotFound />

  const related = getRelated(service)
  const waMessage = buildWhatsAppLink({ serviceName: service.name })

  return (
    <>
      <Seo title={service.name} description={service.subline} path={`/services/${service.slug}`} />

      {/* Hero */}
      <header className="bg-navy px-5 pb-16 pt-28 text-offwhite sm:px-8 sm:pt-32">
        <div className="mx-auto max-w-content">
          <nav aria-label="Breadcrumb" className="mb-6 font-body text-sm text-offwhite/60">
            <Link to="/" className="transition-colors hover:text-offwhite">
              Home
            </Link>
            <span className="px-2">/</span>
            <Link to="/#services" className="transition-colors hover:text-offwhite">
              Services
            </Link>
            <span className="px-2">/</span>
            <span className="text-offwhite/90">{service.name}</span>
          </nav>

          <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-red text-white">
            <ServiceIcon name={service.icon} size={28} />
          </span>
          <h1 className="mt-5 max-w-3xl font-display text-3xl font-semibold tracking-tight text-offwhite sm:text-5xl">
            {service.name}
          </h1>
          <Arabic className="mt-2 block text-xl text-offwhite/70 sm:text-2xl">{service.nameAr}</Arabic>
          <p className="mt-5 max-w-2xl font-body text-base leading-relaxed text-offwhite/75 sm:text-lg">
            {service.intro}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button as="a" href={waMessage} target="_blank" rel="noopener noreferrer" variant="primary" size="lg" icon="whatsapp">
              Ask about this on WhatsApp
            </Button>
            <Button as="a" href={telLink(CONTACT.phones[0].e164)} variant="white" size="lg" icon="phone">
              Call Now
            </Button>
          </div>
        </div>
      </header>

      {/* Details */}
      <div className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-content gap-6 lg:grid-cols-2">
          <List title="What's included" items={service.included} icon="check" />
          <List title="Documents to bring" items={service.documents} icon="contract" />
        </div>

        {/* Steps */}
        <div className="mx-auto mt-6 max-w-content">
          <Reveal className="rounded-2xl border border-navy/8 bg-white p-6 shadow-card sm:p-7">
            <h2 className="font-display text-lg font-semibold text-navy">Simple steps</h2>
            <ol className="mt-5 grid gap-5 sm:grid-cols-3">
              {service.steps.map((step, i) => (
                <li key={i} className="relative">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy font-display text-sm font-semibold text-offwhite">
                    {i + 1}
                  </span>
                  <p className="mt-3 font-body text-sm leading-relaxed text-ink/80">{step}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section aria-labelledby="related-heading" className="bg-mist px-5 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-content">
            <h2 id="related-heading" className="font-display text-2xl font-semibold text-navy sm:text-3xl">
              Related services
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {related.map((r) => (
                <ServiceCard key={r.slug} service={r} variant="related" />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Closing CTA */}
      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto flex max-w-content flex-col items-center gap-5 rounded-3xl bg-navy px-6 py-12 text-center">
          <h2 className="max-w-xl font-display text-2xl font-semibold text-offwhite sm:text-3xl">
            Need {service.name.toLowerCase()}? We'll handle it.
          </h2>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button as="a" href={waMessage} target="_blank" rel="noopener noreferrer" variant="primary" size="lg" icon="whatsapp">
              WhatsApp Us
            </Button>
            <Button as="route" to="/#services" variant="white" size="lg">
              Browse all services
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
