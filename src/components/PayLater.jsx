import Eyebrow from './Eyebrow.jsx'
import Section from './Section.jsx'
import AccentLine from './AccentLine.jsx'

/**
 * "Pay Later" band — tells visitors the centre accepts the two big UAE BNPL
 * providers, Tabby and Tamara. The wordmarks are set in their own brand colours
 * and lookalike fonts (Baloo 2 ≈ Tabby, Poppins ≈ Tamara) on uniform white
 * cards, matching the official-channels logo strip. Swap the styled wordmarks
 * for official /logos/tabby.svg + /logos/tamara.svg if the client supplies them.
 */
const PROVIDERS = [
  { name: 'tabby', color: '#16BE9C', font: '"Baloo 2", system-ui, cursive', tracking: '-0.01em' },
  { name: 'tamara', color: '#7A4DFF', font: 'Poppins, system-ui, sans-serif', tracking: '-0.02em' },
]

export default function PayLater() {
  return (
    <Section containerClassName="py-16 sm:py-20">
      <div
        data-reveal
        className="overflow-hidden rounded-[28px] border border-line bg-cream-50 px-6 py-12 text-center sm:px-12"
      >
        <Eyebrow className="mb-4">Flexible Payment</Eyebrow>
        <h2 className="mx-auto max-w-[640px] text-[30px] font-medium sm:text-[40px]">
          Split Your Payment — Pay Later With Tabby & Tamara.
        </h2>
        <AccentLine className="mx-auto mb-6 mt-5" />
        <p className="mx-auto mb-9 max-w-[560px] font-body text-[16.5px] leading-[1.6] text-soft">
          Now Available At Safari Typing Services. Pay In 4 Interest-Free Instalments With Tabby Or
          Tamara — So Your Paperwork Never Has To Wait On Your Budget.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {PROVIDERS.map((p) => (
            <div
              key={p.name}
              className="flex h-[78px] w-[188px] items-center justify-center rounded-2xl border border-line bg-white shadow-soft"
            >
              <span
                className="text-[34px] leading-none"
                style={{ fontFamily: p.font, fontWeight: 700, color: p.color, letterSpacing: p.tracking }}
              >
                {p.name}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-7 font-body text-[13px] text-gold">Pay In 4 · 0% Interest · No Hidden Fees</p>
      </div>
    </Section>
  )
}
