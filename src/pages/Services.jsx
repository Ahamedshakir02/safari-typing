import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import Eyebrow from '../components/Eyebrow.jsx'
import UaeRibbon from '../components/UaeRibbon.jsx'
import Icon from '../components/Icon.jsx'
import AccentLine from '../components/AccentLine.jsx'
import Badge from '../components/Badge.jsx'
import ImagePlaceholder from '../components/ImagePlaceholder.jsx'
import Section from '../components/Section.jsx'
import CtaBlock from '../components/CtaBlock.jsx'
import LinkButton from '../components/LinkButton.jsx'
import { SERVICE_GROUPS, getServiceBySlug, CREDENTIALS } from '../data/content.js'
import { usePageMotion } from '../lib/usePageMotion.js'

export default function Services() {
  const root = usePageMotion()

  return (
    <div ref={root}>
      <Seo
        title="Services — Typing Centre in Ajman"
        description="Thirteen service areas covering every government, immigration and business formality in Ajman — visas, Emirates ID, Tasheel, attestation, business setup & PRO, medical, vehicle, passport, FEWA and more."
        path="/services"
      />

      {/* Header */}
      <section className="mx-auto max-w-[860px] px-5 pb-12 pt-20 text-center sm:px-7">
        <div data-hero>
          <UaeRibbon className="mb-6" />
          <Eyebrow className="mb-5">Our Services</Eyebrow>
          <h1 className="mb-5 text-[40px] font-medium sm:text-[52px] md:text-[62px]">
            Everything your paperwork needs.
          </h1>
          <AccentLine className="mx-auto mb-6" />
          <p className="mx-auto max-w-[600px] font-body text-[19px] text-soft">
            Thirteen service areas covering every government, immigration and business formality in
            Ajman — handled accurately, the first time.
          </p>
        </div>
      </section>

      {/* Signature image band */}
      <section data-reveal className="mx-auto max-w-content px-5 pb-2 sm:px-7">
        <ImagePlaceholder
          arch
          src="/photos/storefront.jpg"
          alt="Safari Typing Services storefront at Nazir Plaza, Shop 4, Ajman"
          label="Our service counter at Nazir Plaza"
          aspect="aspect-[16/9] sm:aspect-[16/7]"
          data-hero-img
          className="scale-110 will-change-transform"
        />
      </section>

      {/* Credentials */}
      <section className="mx-auto max-w-content px-5 py-10 sm:px-7">
        <div data-reveal className="flex flex-wrap items-center justify-center gap-2.5 text-center">
          {CREDENTIALS.map((c) => (
            <Badge key={c.label} icon={c.icon}>
              {c.label}
            </Badge>
          ))}
        </div>
      </section>

      {/* Service groups */}
      <Section containerClassName="pb-6 pt-2 sm:pb-10">
        <div data-services className="flex flex-col gap-14">
          {SERVICE_GROUPS.map((group) => {
            const services = group.slugs.map(getServiceBySlug).filter(Boolean)
            return (
              <div key={group.label}>
                <div data-reveal className="mb-6 flex items-center gap-4">
                  <h2 className="font-display text-[26px] font-medium sm:text-[30px]">{group.label}</h2>
                  <span className="h-px flex-1 bg-line" aria-hidden="true" />
                  <span className="font-body text-[13px] font-semibold text-sand">
                    {services.length} {services.length === 1 ? 'area' : 'areas'}
                  </span>
                </div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      data-service-row
                      className="group flex flex-col rounded-[20px] border border-line bg-cream-50 p-7 transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-sage/40 hover:shadow-lift"
                    >
                      <div className="mb-5 flex items-center justify-between">
                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-tag-bg text-sage transition-colors duration-300 group-hover:bg-sage group-hover:text-paper">
                          <Icon name={s.icon} size={22} strokeWidth={1.7} />
                        </span>
                        <span className="font-display text-[26px] italic text-sand">{s.n}</span>
                      </div>
                      <h3 className="mb-2 text-[21px] font-medium">{s.title}</h3>
                      <p className="font-body text-[15px] leading-[1.6] text-soft">{s.blurb}</p>
                      <span className="mt-5 inline-flex items-center gap-1.5 font-body text-[14px] font-semibold text-sage">
                        Explore
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </Section>

      {/* CTA */}
      <CtaBlock
        heading="Not sure which service you need?"
        body="Tell us your situation and we'll point you to the right one — free of charge."
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
