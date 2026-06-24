import { useState } from 'react'
import Seo from '../components/Seo.jsx'
import Reveal from '../components/Reveal.jsx'
import Eyebrow from '../components/Eyebrow.jsx'
import LinkButton from '../components/LinkButton.jsx'
import { FAQS } from '../data/content.js'
import { waLink } from '../lib/wa.js'

export default function Faq() {
  // First item starts open, matching the design. -1 = all closed.
  const [open, setOpen] = useState(0)

  return (
    <>
      <Seo
        title="FAQ"
        description="Answers to the questions people ask us most — what to bring, how long applications take, pricing, sending documents on WhatsApp and our opening hours."
        path="/faq"
      />

      {/* Header */}
      <Reveal as="section" className="mx-auto max-w-[820px] px-5 pb-11 pt-20 text-center sm:px-7">
        <Eyebrow className="mb-5">FREQUENTLY ASKED</Eyebrow>
        <h1 className="mb-5 text-[40px] font-medium sm:text-[52px] md:text-[62px]">Questions, answered.</h1>
        <p className="mx-auto max-w-[540px] font-body text-[19px] text-soft">
          The things people ask us most. Can't find yours? Message us — we're glad to help.
        </p>
      </Reveal>

      {/* Accordion */}
      <Reveal as="section" className="mx-auto max-w-[820px] border-t border-line px-5 pb-6 pt-8 sm:px-7">
        {FAQS.map((item, i) => {
          const isOpen = i === open
          return (
            <div key={item.q} className="border-b border-line">
              <h2>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-[18px] px-1 py-7 text-left font-display text-[21px] font-medium text-ink sm:text-[25px]"
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
                  <p className="max-w-[680px] px-1 pb-7 font-body text-base text-soft">{item.a}</p>
                </div>
              </div>
            </div>
          )
        })}
      </Reveal>

      {/* CTA */}
      <Reveal as="section" className="mx-auto mb-[88px] mt-[50px] max-w-[820px] px-5 sm:px-7">
        <div className="rounded-[28px] border border-line bg-cream-100 px-6 py-12 text-center sm:p-[52px]">
          <h2 className="mb-3 text-[30px] font-medium sm:text-[36px]">Still have a question?</h2>
          <p className="mb-7 font-body text-[16.5px] text-soft">
            Reach us any day of the week — we usually reply within minutes.
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
      </Reveal>
    </>
  )
}
