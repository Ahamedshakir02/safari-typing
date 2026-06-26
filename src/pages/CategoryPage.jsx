import { useParams, Navigate, Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import Eyebrow from '../components/Eyebrow.jsx'
import UaeRibbon from '../components/UaeRibbon.jsx'
import Icon from '../components/Icon.jsx'
import AccentLine from '../components/AccentLine.jsx'
import Credentials from '../components/Credentials.jsx'
import Section from '../components/Section.jsx'
import LinkButton from '../components/LinkButton.jsx'
import CtaBlock from '../components/CtaBlock.jsx'
import { getServiceBySlug, SERVICES } from '../data/content.js'
import { SITE_URL, CONTACT } from '../data/site.js'
import { waLink, telLink } from '../lib/wa.js'
import { usePageMotion } from '../lib/usePageMotion.js'

const primaryPhone = CONTACT.phones[0]

export default function CategoryPage() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)
  const root = usePageMotion()

  // Unknown slug → fall back to the services hub rather than a hard 404.
  if (!service) return <Navigate to="/services" replace />

  // Other categories, for internal linking at the foot of the page.
  const related = SERVICES.filter((s) => s.slug !== service.slug)

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.title,
        item: `${SITE_URL}/services/${service.slug}`,
      },
    ],
  }

  return (
    <div ref={root}>
      <Seo
        title={`${service.title} in Ajman`}
        description={service.intro}
        path={`/services/${service.slug}`}
        jsonLd={breadcrumbJsonLd}
      />

      {/* Hero */}
      <section className="mx-auto max-w-[860px] px-5 pb-10 pt-16 text-center sm:px-7 sm:pt-20">
        <div data-hero>
          <UaeRibbon className="mb-6" />
          <nav className="mb-6 font-body text-[13px] font-semibold text-sand" aria-label="Breadcrumb">
            <Link to="/services" className="transition-colors hover:text-sage">
              Services
            </Link>
            <span className="px-2 text-line" aria-hidden="true">
              /
            </span>
            <span className="text-soft">{service.title}</span>
          </nav>

          <span className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-tag-bg text-sage">
            <Icon name={service.icon} size={26} strokeWidth={1.7} />
          </span>

          <Eyebrow className="mb-4">{service.keyword}</Eyebrow>
          <h1 className="mb-3 text-[38px] font-medium sm:text-[50px] md:text-[58px]">{service.title}</h1>
          <p dir="rtl" lang="ar" className="mb-5 font-body text-[20px] text-soft">
            {service.titleAr}
          </p>
          <AccentLine className="mx-auto mb-6" />
          <p className="mx-auto max-w-[620px] font-body text-[19px] leading-[1.6] text-soft">
            {service.intro}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3.5">
            <LinkButton href={waLink()} target="_blank" rel="noopener noreferrer">
              WhatsApp us
            </LinkButton>
            <LinkButton href={telLink(primaryPhone.e164)} variant="outline">
              Call {primaryPhone.display}
            </LinkButton>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="mx-auto max-w-content px-5 py-6 sm:px-7">
        <Credentials data-reveal />
      </section>

      {/* In-page anchor nav */}
      <section className="mx-auto max-w-content px-5 pb-2 pt-6 sm:px-7">
        <div data-reveal className="flex flex-wrap justify-center gap-2.5">
          {service.subservices.map((sub) => (
            <a
              key={sub.id}
              href={`#${sub.id}`}
              className="rounded-full border border-line bg-cream-50 px-[15px] py-2 font-body text-[13.5px] font-semibold text-soft transition-colors hover:border-sage/40 hover:text-sage"
            >
              {sub.title}
            </a>
          ))}
        </div>
      </section>

      {/* Sub-services */}
      <Section containerClassName="pb-6 pt-10 sm:pb-10">
        <div data-services className="grid gap-5 sm:grid-cols-2">
          {service.subservices.map((sub) => (
            <article
              key={sub.id}
              id={sub.id}
              data-service-row
              className="group flex scroll-mt-28 flex-col rounded-[22px] border border-line bg-cream-50 p-7 transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-sage/40 hover:shadow-lift sm:p-8"
            >
              <h2 className="mb-1.5 text-[22px] font-medium sm:text-[24px]">{sub.title}</h2>
              <p dir="rtl" lang="ar" className="mb-3 font-body text-[15px] text-sand">
                {sub.titleAr}
              </p>
              <p className="mb-5 font-body text-[15.5px] leading-[1.6] text-soft">{sub.desc}</p>
              <div className="mt-auto flex flex-wrap gap-2">
                {sub.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-tag-bg px-[13px] py-[7px] font-body text-[13px] font-semibold text-tag-ink"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* What to bring */}
      <section className="mx-auto max-w-content px-5 py-8 sm:px-7">
        <div
          data-reveal
          className="flex flex-col gap-4 rounded-[24px] border border-sage/25 bg-sage/[0.06] p-7 sm:flex-row sm:items-start sm:p-9"
        >
          <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sage text-paper">
            <Icon name="doc" size={22} strokeWidth={1.7} />
          </span>
          <div>
            <h2 className="mb-2 font-display text-[24px] font-medium text-ink">What to bring</h2>
            <p className="font-body text-[16px] leading-[1.65] text-soft">{service.whatToBring}</p>
            <p className="mt-3 font-body text-[14px] text-sand">
              Not sure what applies to you? Message us first and we&rsquo;ll send the exact checklist so
              you only make one trip.
            </p>
          </div>
        </div>
      </section>

      {/* Other services */}
      <Section tone="sunken" containerClassName="py-14 sm:py-16">
        <h2 data-reveal className="mb-6 font-display text-[24px] font-medium sm:text-[28px]">
          Other services
        </h2>
        <div data-reveal className="flex flex-wrap gap-2.5">
          {related.map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-cream-50 px-4 py-2.5 font-body text-[14px] font-semibold text-soft transition-colors hover:border-sage/40 hover:text-sage"
            >
              <Icon name={s.icon} size={16} strokeWidth={1.8} />
              {s.title}
            </Link>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <CtaBlock
        heading={`Need help with ${service.title}?`}
        body="Tell us your situation on WhatsApp and we'll confirm the documents and exact fees before we start."
        primaryLabel="WhatsApp us"
        secondary={
          <LinkButton to="/contact" variant="onDarkOutline">
            Contact page
          </LinkButton>
        }
        className="my-16"
      />
    </div>
  )
}
