import Seo from '../components/Seo.jsx'
import Eyebrow from '../components/Eyebrow.jsx'
import AccentLine from '../components/AccentLine.jsx'
import Credentials from '../components/Credentials.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import Section from '../components/Section.jsx'
import Picture from '../components/Picture.jsx'
import CtaBlock from '../components/CtaBlock.jsx'
import LinkButton from '../components/LinkButton.jsx'
import { SERVICE_GROUPS, getServiceBySlug, PHOTOS } from '../data/content.js'
import { usePageMotion } from '../lib/usePageMotion.js'

export default function Services() {
  const root = usePageMotion()

  return (
    <div ref={root}>
      <Seo
        title="Services — Typing Centre In Ajman"
        description="Fifteen Service Areas Covering Every Government, Immigration And Business Formality In Ajman — Visas, Emirates ID, Tasheel, Attestation, Business Setup & PRO, VAT & Tax, Medical, Vehicle, Passport, FEWA, Website Design And More."
        path="/services"
      />

      {/* Header */}
      <section className="mx-auto max-w-[860px] px-5 pb-12 pt-20 text-center sm:px-7">
        <div data-hero>
          <Eyebrow className="mb-5">Our Services</Eyebrow>
          <h1 className="mb-5 text-[40px] font-medium sm:text-[52px] md:text-[62px]">
            Everything Your Paperwork Needs.
          </h1>
          <AccentLine className="mx-auto mb-6" />
          <p className="mx-auto max-w-[600px] font-body text-[19px] text-soft">
            Fifteen Service Areas Covering Every Government, Immigration And Business Formality In
            Ajman — Handled Accurately, The First Time.
          </p>
        </div>
      </section>

      {/* Signature illustration band */}
      <section data-reveal className="mx-auto max-w-content px-5 pb-2 sm:px-7">
        <div className="photo-panel aspect-[16/10] overflow-hidden rounded-[28px] sm:aspect-[16/8]">
          <Picture
            src={PHOTOS.servicesBand}
            alt="Safari Typing Services Advisors Presenting A Completed UAE Visa"
            className="h-full w-full object-contain"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      {/* Credentials */}
      <section className="mx-auto max-w-content px-5 py-10 sm:px-7">
        <Credentials data-reveal />
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

                <div className="flex flex-wrap justify-center gap-5">
                  {services.map((s) => (
                    <div key={s.slug} className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]">
                      <ServiceCard service={s} cta="Explore" />
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </Section>

      {/* CTA */}
      <CtaBlock
        heading="Not Sure Which Service You Need?"
        body="Tell Us Your Situation And We'll Point You To The Right One — Free Of Charge."
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
