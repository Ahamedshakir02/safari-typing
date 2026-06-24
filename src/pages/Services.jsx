import Seo from '../components/Seo.jsx'
import Reveal from '../components/Reveal.jsx'
import Eyebrow from '../components/Eyebrow.jsx'
import CtaBlock from '../components/CtaBlock.jsx'
import LinkButton from '../components/LinkButton.jsx'
import { SERVICES } from '../data/content.js'

export default function Services() {
  return (
    <>
      <Seo
        title="Services"
        description="Ten service areas covering every government, immigration and business formality in the UAE — Tasheel, Amer, Emirates ID, attestation, business setup, PRO, medical, vehicle and passport services."
        path="/services"
      />

      {/* Header */}
      <Reveal as="section" className="mx-auto max-w-[860px] px-5 pb-14 pt-20 text-center sm:px-7">
        <Eyebrow className="mb-5">OUR SERVICES</Eyebrow>
        <h1 className="mb-5 text-[40px] font-medium sm:text-[52px] md:text-[62px]">
          Everything your paperwork needs.
        </h1>
        <p className="mx-auto max-w-[600px] font-body text-[19px] text-soft">
          Ten service areas covering every government, immigration and business formality in the UAE —
          handled accurately, the first time.
        </p>
      </Reveal>

      {/* Service blocks */}
      <Reveal as="section" className="mx-auto max-w-[1000px] border-t border-line px-5 sm:px-7">
        {SERVICES.map((s) => (
          <div
            key={s.n}
            className="grid grid-cols-1 gap-4 border-b border-line px-2 py-11 sm:grid-cols-[72px_1fr] sm:gap-8"
          >
            <div className="font-display text-[34px] italic text-sand">{s.n}</div>
            <div>
              <h2 className="mb-3 text-[26px] font-medium sm:text-[30px]">{s.titleLong}</h2>
              <p className="mb-[18px] max-w-[640px] font-body text-base text-soft">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
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
          </div>
        ))}
      </Reveal>

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
    </>
  )
}
