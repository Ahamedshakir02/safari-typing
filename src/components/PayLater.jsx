import Eyebrow from './Eyebrow.jsx'
import Section from './Section.jsx'
import AccentLine from './AccentLine.jsx'

/**
 * "Pay Later" band — tells visitors the centre accepts the two big UAE BNPL
 * providers, Tabby and Tamara. Uses their official wordmark logos on uniform
 * white cards, matching the official-channels logo strip.
 */
const PROVIDERS = [
  { name: 'Tabby', src: '/logos/tabby.png' },
  { name: 'Tamara', src: '/logos/tamara.jpg' },
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
              className="flex h-[80px] w-[180px] items-center justify-center rounded-2xl bg-white p-1.5 shadow-soft"
            >
              <img
                src={p.src}
                alt={`${p.name} — Pay Later`}
                loading="lazy"
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>

        <p className="mt-7 font-body text-[13px] text-gold">Pay In 4 · 0% Interest · No Hidden Fees</p>
      </div>
    </Section>
  )
}
