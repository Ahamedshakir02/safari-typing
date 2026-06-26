import Seo from '../components/Seo.jsx'
import Eyebrow from '../components/Eyebrow.jsx'
import Icon from '../components/Icon.jsx'
import AccentLine from '../components/AccentLine.jsx'
import Badge from '../components/Badge.jsx'
import ImagePlaceholder from '../components/ImagePlaceholder.jsx'
import Section from '../components/Section.jsx'
import CtaBlock from '../components/CtaBlock.jsx'
import LinkButton from '../components/LinkButton.jsx'
import { SERVICES, SERVICE_ICONS, CREDENTIALS } from '../data/content.js'
import { usePageMotion } from '../lib/usePageMotion.js'

export default function Services() {
  const root = usePageMotion()

  return (
    <div ref={root}>
      <Seo
        title="Services — Typing Centre in Ajman"
        description="Ten service areas covering every government, immigration and business formality in Ajman — Tasheel, Amer, Emirates ID, attestation, business setup, PRO, medical, vehicle and passport services."
        path="/services"
      />

      {/* Header */}
      <section className="mx-auto max-w-[860px] px-5 pb-12 pt-20 text-center sm:px-7">
        <div data-hero>
          <Eyebrow className="mb-5">OUR SERVICES</Eyebrow>
          <h1 className="mb-5 text-[40px] font-medium sm:text-[52px] md:text-[62px]">
            Everything your paperwork needs.
          </h1>
          <AccentLine className="mx-auto mb-6" />
          <p className="mx-auto max-w-[600px] font-body text-[19px] text-soft">
            Ten service areas covering every government, immigration and business formality in
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

      {/* Service blocks */}
      <Section containerClassName="pb-6 pt-2 sm:pb-10">
        <div data-services className="grid gap-5 sm:grid-cols-2">
          {SERVICES.map((s) => (
            <div
              key={s.n}
              data-service-row
              className="group flex flex-col rounded-[22px] border border-line bg-cream-50 p-7 shadow-soft transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-sage/40 hover:shadow-lift sm:p-8"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-tag-bg text-sage transition-colors duration-300 group-hover:bg-sage group-hover:text-paper">
                  <Icon name={SERVICE_ICONS[s.n]} size={22} strokeWidth={1.7} />
                </span>
                <span className="font-display text-[30px] italic text-sand">{s.n}</span>
              </div>
              <h2 className="mb-3 text-[24px] font-medium sm:text-[27px]">{s.titleLong}</h2>
              <p className="mb-5 font-body text-[15.5px] leading-[1.6] text-soft">{s.desc}</p>
              <div className="mt-auto flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-tag-bg px-[13px] py-[7px] font-body text-[13px] font-semibold text-tag-ink"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
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
