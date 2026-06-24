import Seo from '../components/Seo.jsx'
import Eyebrow from '../components/Eyebrow.jsx'
import Icon from '../components/Icon.jsx'
import AccentLine from '../components/AccentLine.jsx'
import LinkButton from '../components/LinkButton.jsx'
import CtaBlock from '../components/CtaBlock.jsx'
import Section from '../components/Section.jsx'
import { PRICING, PRICING_NOTE } from '../data/content.js'
import { waLink } from '../lib/wa.js'
import { usePageMotion } from '../lib/usePageMotion.js'

export default function Pricing() {
  const root = usePageMotion()

  return (
    <div ref={root}>
      <Seo
        title="Pricing"
        description="Clear, honest service charges for typing, visa & labour, and business & PRO work. Official government fees are charged separately, at cost — and always confirmed before we start."
        path="/pricing"
      />

      {/* Header */}
      <section className="mx-auto max-w-[860px] px-5 pb-[52px] pt-20 text-center sm:px-7">
        <div data-hero>
          <Eyebrow className="mb-5">PRICING</Eyebrow>
          <h1 className="mb-5 text-[40px] font-medium sm:text-[52px] md:text-[62px]">
            Clear charges, no surprises.
          </h1>
          <AccentLine className="mx-auto mb-6" />
          <p className="mx-auto max-w-[620px] font-body text-[19px] text-soft">
            The prices below are our typing &amp; service charges. Official government fees are charged
            separately, at cost — and always confirmed before we start.
          </p>
        </div>
      </section>

      {/* Packages */}
      <Section containerClassName="py-6">
        <div data-reveal-group className="grid items-stretch gap-6 lg:grid-cols-3">
          {PRICING.map((tier) => {
            const dark = tier.featured
            return (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-[24px] p-[38px] shadow-soft transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-lift ${
                  dark ? 'bg-ink' : 'border border-line bg-cream-50'
                }`}
              >
                {tier.badge && (
                  <span className="absolute right-[22px] top-[22px] rounded-full bg-sage px-3 py-[5px] font-body text-[11px] font-semibold tracking-[0.08em] text-paper">
                    {tier.badge}
                  </span>
                )}
                <h2 className={`mb-1 text-[26px] font-medium ${dark ? 'text-paper' : ''}`}>{tier.name}</h2>
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
                    <span key={f} className={`flex items-start gap-2.5 ${dark ? 'text-ink-soft' : 'text-soft'}`}>
                      <span className={`mt-[3px] flex-none ${dark ? 'text-sage-light' : 'text-sage'}`}>
                        <Icon name="check" size={15} strokeWidth={2} />
                      </span>
                      {f}
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

        <div
          data-reveal
          className="mt-7 flex items-start gap-3 rounded-[18px] border border-line bg-cream-50 px-6 py-5 shadow-soft"
        >
          <span className="font-display text-[22px] italic leading-none text-sage">i</span>
          <p className="font-body text-[14.5px] text-soft">{PRICING_NOTE}</p>
        </div>
      </Section>

      {/* CTA */}
      <CtaBlock
        heading="Get an exact quote in minutes."
        body="Send us your documents on WhatsApp and we'll confirm the full cost before you commit."
        className="my-16"
      />
    </div>
  )
}
