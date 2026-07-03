import { useState } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import Eyebrow from '../components/Eyebrow.jsx'
import Icon from '../components/Icon.jsx'
import AccentLine from '../components/AccentLine.jsx'
import Section from '../components/Section.jsx'
import LinkButton from '../components/LinkButton.jsx'
import CtaBlock from '../components/CtaBlock.jsx'
import { getSubServicePage, SUBSERVICE_PAGES } from '../data/content.js'
import { SITE_URL, CONTACT } from '../data/site.js'
import { waLink, telLink } from '../lib/wa.js'
import { usePageMotion } from '../lib/usePageMotion.js'

const primaryPhone = CONTACT.phones[0]

export default function SubServicePage() {
  const { slug, subId } = useParams()
  const match = getSubServicePage(slug, subId)
  const root = usePageMotion()
  const [openFaq, setOpenFaq] = useState(0)

  // Unknown category/sub-service pair → fall back to the category hub.
  if (!match) return <Navigate to={`/services/${slug}`} replace />

  const { service, sub } = match
  const { detail } = sub

  // Other pages promoted within the same category, plus a link back to the
  // full category (which still lists every sub-service, including anchors).
  const siblings = SUBSERVICE_PAGES.filter(
    ({ service: s, sub: si }) => s.slug === service.slug && si.id !== sub.id,
  )

  const canonical = `${SITE_URL}/services/${service.slug}/${sub.id}`

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
      { '@type': 'ListItem', position: 3, name: service.title, item: `${SITE_URL}/services/${service.slug}` },
      { '@type': 'ListItem', position: 4, name: sub.title, item: canonical },
    ],
  }

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: sub.title,
    serviceType: `${sub.title} Ajman`,
    description: detail.metaDescription,
    url: canonical,
    areaServed: { '@type': 'City', name: 'Ajman' },
    provider: {
      '@type': 'LocalBusiness',
      name: CONTACT.brand,
      '@id': `${SITE_URL}/#business`,
    },
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: detail.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <div ref={root}>
      <Seo
        title={`${sub.title} in Ajman`}
        description={detail.metaDescription}
        path={`/services/${service.slug}/${sub.id}`}
        jsonLd={[breadcrumbJsonLd, serviceJsonLd, faqJsonLd]}
      />

      {/* Hero */}
      <section className="mx-auto max-w-[860px] px-5 pb-10 pt-16 text-center sm:px-7 sm:pt-20">
        <div data-hero>
          <nav className="mb-6 font-body text-[13px] font-semibold text-soft" aria-label="Breadcrumb">
            <Link to="/services" className="transition-colors hover:text-sage">
              Services
            </Link>
            <span className="px-2 text-line" aria-hidden="true">
              /
            </span>
            <Link to={`/services/${service.slug}`} className="transition-colors hover:text-sage">
              {service.title}
            </Link>
            <span className="px-2 text-line" aria-hidden="true">
              /
            </span>
            <span className="text-soft">{sub.title}</span>
          </nav>

          <span className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-tag-bg text-sage">
            <Icon name={service.icon} size={26} strokeWidth={1.7} />
          </span>

          <Eyebrow as="h1" className="mb-4 leading-[1.6]">{`${sub.title} in Ajman`}</Eyebrow>
          <p className="mb-3 font-display text-ink tracking-[-0.01em] leading-[1.08] text-[38px] font-medium sm:text-[50px] md:text-[58px]">
            {sub.title}
          </p>
          {sub.titleAr && (
            <p dir="rtl" lang="ar" className="mb-5 font-body text-[20px] text-soft">
              {sub.titleAr}
            </p>
          )}
          <AccentLine className="mx-auto mb-6" />
          <p className="mx-auto max-w-[620px] font-body text-[19px] leading-[1.6] text-soft">{detail.overview}</p>

          <div className="mt-8 flex flex-wrap justify-center gap-3.5">
            <LinkButton href={waLink()} target="_blank" rel="noopener noreferrer">
              WhatsApp Us
            </LinkButton>
            <LinkButton href={telLink(primaryPhone.e164)} variant="outline">
              Call {primaryPhone.display}
            </LinkButton>
          </div>
        </div>
      </section>

      {/* Process steps */}
      <Section containerClassName="pb-6 pt-4 sm:pb-10">
        <h2 data-reveal className="mb-6 font-display text-[24px] font-medium sm:text-[28px]">
          How It Works
        </h2>
        <div data-services className="grid gap-5 sm:grid-cols-2">
          {detail.steps.map((step, i) => (
            <article
              key={step.title}
              data-service-row
              className="flex gap-4 rounded-[22px] border border-line bg-cream-50 p-7 sm:p-8"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sage font-display text-[15px] font-medium text-paper">
                {i + 1}
              </span>
              <div>
                <h3 className="mb-1.5 text-[19px] font-medium">{step.title}</h3>
                <p className="font-body text-[15.5px] leading-[1.6] text-soft">{step.body}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Documents checklist */}
      <Section tone="raised" containerClassName="py-12 sm:py-14">
        <h2 data-reveal className="mb-6 font-display text-[24px] font-medium sm:text-[28px]">
          Documents You’ll Need
        </h2>
        <ul data-reveal-group className="grid gap-3 sm:grid-cols-2">
          {detail.documents.map((doc) => (
            <li key={doc} className="flex items-start gap-3 rounded-2xl border border-line bg-cream px-5 py-4">
              <Icon name="check" size={18} strokeWidth={2} className="mt-0.5 shrink-0 text-sage" />
              <span className="font-body text-[15px] leading-[1.5] text-soft">{doc}</span>
            </li>
          ))}
        </ul>
        <p data-reveal className="mt-5 font-body text-[14px] text-soft">
          Not Sure What Applies To You? Message Us First And We&rsquo;ll Send The Exact Checklist For Your Case So
          You Only Make One Trip.
        </p>
      </Section>

      {/* Fees & timeline */}
      <section className="mx-auto max-w-content px-5 py-8 sm:px-7">
        <div data-reveal className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[24px] border border-sage/25 bg-sage/[0.06] p-7 sm:p-8">
            <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-sage text-paper">
              <Icon name="doc" size={20} strokeWidth={1.7} />
            </span>
            <h2 className="mb-2 font-display text-[21px] font-medium text-ink">Government Fee Vs. Service Fee</h2>
            <p className="font-body text-[15.5px] leading-[1.65] text-soft">{detail.feeNote}</p>
          </div>
          <div className="rounded-[24px] border border-line bg-cream-50 p-7 sm:p-8">
            <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-tag-bg text-sage">
              <Icon name="globe" size={20} strokeWidth={1.7} />
            </span>
            <h2 className="mb-2 font-display text-[21px] font-medium text-ink">How Long It Takes</h2>
            <p className="font-body text-[15.5px] leading-[1.65] text-soft">{detail.timelineNote}</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Section tone="sunken" containerClassName="py-14 sm:py-16">
        <h2 data-reveal className="mb-6 font-display text-[24px] font-medium sm:text-[28px]">
          Questions About {sub.title}
        </h2>
        <div data-reveal className="rounded-[24px] border border-line bg-cream px-6 sm:px-8">
          {detail.faqs.map((item, i) => {
            const isOpen = i === openFaq
            return (
              <div key={item.q} className="border-b border-line last:border-b-0">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-[18px] py-6 text-left font-display text-[18px] font-medium text-ink transition-colors hover:text-sage sm:text-[20px]"
                  >
                    <span>{item.q}</span>
                    <span
                      aria-hidden="true"
                      className="w-[22px] flex-none text-center font-display text-[22px] italic text-sage"
                    >
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                </h3>
                <div
                  className="grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr', opacity: isOpen ? 1 : 0 }}
                >
                  <div className="min-h-0">
                    <p className="max-w-[680px] pb-6 font-body text-[15px] leading-[1.6] text-soft">{item.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Section>

      {/* Related */}
      <Section containerClassName="py-14 sm:py-16">
        <h2 data-reveal className="mb-6 font-display text-[24px] font-medium sm:text-[28px]">
          More {service.title}
        </h2>
        <div data-reveal className="flex flex-wrap gap-2.5">
          <Link
            to={`/services/${service.slug}`}
            className="inline-flex items-center gap-2 rounded-full border border-sage/40 bg-tag-bg px-4 py-2.5 font-body text-[14px] font-semibold text-sage transition-colors hover:border-sage"
          >
            <Icon name={service.icon} size={16} strokeWidth={1.8} />
            All {service.title}
          </Link>
          {siblings.map(({ sub: sibling }) => (
            <Link
              key={sibling.id}
              to={`/services/${service.slug}/${sibling.id}`}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-cream-50 px-4 py-2.5 font-body text-[14px] font-semibold text-soft transition-colors hover:border-sage/40 hover:text-sage"
            >
              {sibling.title}
            </Link>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <CtaBlock
        heading={`Need Help With ${sub.title}?`}
        body="Tell Us Your Situation On WhatsApp And We'll Confirm The Documents And Exact Fees Before We Start."
        primaryLabel="WhatsApp Us"
        secondary={
          <LinkButton to="/contact" variant="onDarkOutline">
            Contact Page
          </LinkButton>
        }
        className="my-16"
      />
    </div>
  )
}
