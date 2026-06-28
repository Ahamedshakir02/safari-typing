import { useState } from 'react'
import Seo from '../components/Seo.jsx'
import Eyebrow from '../components/Eyebrow.jsx'
import AccentLine from '../components/AccentLine.jsx'
import LinkButton from '../components/LinkButton.jsx'
import { FAQS } from '../data/content.js'
import { waLink } from '../lib/wa.js'
import { usePageMotion } from '../lib/usePageMotion.js'

// FAQPage structured data — helps the questions surface as rich results.
const FAQ_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function Faq() {
  const root = usePageMotion()
  // First item starts open, matching the design. -1 = all closed.
  const [open, setOpen] = useState(0)

  return (
    <div ref={root}>
      <Seo
        title="FAQ"
        description="Answers to the questions people ask us most — what to bring, how long applications take, pricing, sending documents on WhatsApp and our opening hours."
        path="/faq"
        jsonLd={FAQ_JSONLD}
      />

      {/* Header */}
      <section className="mx-auto max-w-[820px] px-5 pb-11 pt-20 text-center sm:px-7">
        <div data-hero>
          <Eyebrow className="mb-5">Frequently Asked</Eyebrow>
          <h1 className="mb-5 text-[40px] font-medium sm:text-[52px] md:text-[62px]">Questions, answered.</h1>
          <AccentLine className="mx-auto mb-6" />
          <p className="mx-auto max-w-[540px] font-body text-[19px] text-soft">
            The things people ask us most. Can't find yours? Message us — we're glad to help.
          </p>
        </div>
      </section>

      {/* Accordion */}
      <section data-reveal className="mx-auto max-w-[820px] px-5 pb-6 sm:px-7">
        <div className="rounded-[24px] border border-line bg-cream-50 px-6 sm:px-8">
          {FAQS.map((item, i) => {
            const isOpen = i === open
            return (
              <div key={item.q} className="border-b border-line last:border-b-0">
                <h2>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-[18px] py-7 text-left font-display text-[21px] font-medium text-ink transition-colors hover:text-sage sm:text-[25px]"
                  >
                    <span>{item.q}</span>
                    <span
                      aria-hidden="true"
                      className="w-[26px] flex-none text-center font-display text-[26px] italic text-sage"
                    >
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                </h2>
                <div
                  className="grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr', opacity: isOpen ? 1 : 0 }}
                >
                  <div className="min-h-0">
                    <p className="max-w-[680px] pb-7 font-body text-base text-soft">{item.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section data-reveal className="mx-auto mb-[88px] mt-[50px] max-w-[820px] px-5 sm:px-7">
        <div className="rounded-[28px] border border-line bg-cream-100 px-6 py-12 text-center sm:p-[52px]">
          <h2 className="mb-3 text-[30px] font-medium sm:text-[36px]">Still have a question?</h2>
          <p className="mb-7 font-body text-[16.5px] text-soft">
            Message us during opening hours — we usually reply within minutes.
          </p>
          <div className="flex flex-wrap justify-center gap-3.5">
            <LinkButton href={waLink()} target="_blank" rel="noopener noreferrer" variant="solid">
              WhatsApp us
            </LinkButton>
            <LinkButton to="/contact" variant="outline">
              Contact page
            </LinkButton>
          </div>
        </div>
      </section>
    </div>
  )
}
