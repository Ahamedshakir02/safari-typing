import Seo from '../components/Seo.jsx'
import Reveal from '../components/Reveal.jsx'
import Eyebrow from '../components/Eyebrow.jsx'
import LinkButton from '../components/LinkButton.jsx'
import CtaBlock from '../components/CtaBlock.jsx'
import { PRICING, PRICING_NOTE } from '../data/content.js'
import { waLink } from '../lib/wa.js'

export default function Pricing() {
  return (
    <>
      <Seo
        title="Pricing"
        description="Clear, honest service charges for typing, visa & labour, and business & PRO work. Official government fees are charged separately, at cost — and always confirmed before we start."
        path="/pricing"
      />

      {/* Header */}
      <Reveal as="section" className="mx-auto max-w-[860px] px-5 pb-[52px] pt-20 text-center sm:px-7">
        <Eyebrow className="mb-5">PRICING</Eyebrow>
        <h1 className="mb-5 text-[40px] font-medium sm:text-[52px] md:text-[62px]">
          Clear charges, no surprises.
        </h1>
        <p className="mx-auto max-w-[620px] font-body text-[19px] text-soft">
          The prices below are our typing &amp; service charges. Official government fees are charged
          separately, at cost — and always confirmed before we start.
        </p>
      </Reveal>

      {/* Packages */}
      <Reveal as="section" className="mx-auto max-w-[1120px] px-5 py-6 sm:px-7">
        <div className="grid items-stretch gap-6 lg:grid-cols-3">
          {PRICING.map((tier) => {
            const dark = tier.featured
            return (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-[24px] p-[38px] ${
                  dark ? 'bg-ink' : 'border border-line bg-cream-50'
                }`}
              >
                {tier.badge && (
                  <span className="absolute right-[22px] top-[22px] rounded-full bg-sage px-3 py-[5px] font-body text-[11px] font-semibold tracking-[0.08em] text-paper">
                    {tier.badge}
                  </span>
                )}
                <h3 className={`mb-1 text-[26px] font-medium ${dark ? 'text-paper' : ''}`}>{tier.name}</h3>
                <p className={`mb-6 font-body text-[14.5px] ${dark ? 'text-ink-dim' : 'text-gold'}`}>
                  {tier.note}
                </p>
                <div className="mb-[26px] flex items-baseline gap-2">
                  <span className={`font-body text-[15px] ${dark ? 'text-ink-dim' : 'text-gold'}`}>from</span>
                  <span className={`font-display text-[52px] ${dark ? 'text-paper' : 'text-ink'}`}>
                    {tier.from}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-[13px] font-body text-[14.5px]">
                  {tier.features.map((f) => (
                    <span key={f} className={`flex gap-2.5 ${dark ? 'text-ink-soft' : 'text-soft'}`}>
                      <span className={dark ? 'text-sage-light' : 'text-sage'}>—</span> {f}
                    </span>
                  ))}
                </div>
                <LinkButton
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant={dark ? 'onDarkSolid' : 'outline'}
                  size="md"
                  className="mt-7 w-full"
                >
                  Enquire
                </LinkButton>
              </div>
            )
          })}
        </div>

        <div className="mt-7 flex items-start gap-3 rounded-[18px] border border-line bg-cream-50 px-6 py-5">
          <span className="font-display text-[22px] italic leading-none text-sage">i</span>
          <p className="font-body text-[14.5px] text-soft">{PRICING_NOTE}</p>
        </div>
      </Reveal>

      {/* CTA */}
      <CtaBlock
        heading="Get an exact quote in minutes."
        body="Send us your documents on WhatsApp and we'll confirm the full cost before you commit."
        className="my-16"
      />
    </>
  )
}
