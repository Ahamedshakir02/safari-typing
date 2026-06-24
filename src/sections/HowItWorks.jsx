import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import { HOW_IT_WORKS } from '../data/site.js'

export default function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-heading" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-content">
        <SectionHeading
          id="how-heading"
          eyebrow="How it works"
          title="Done in three simple steps."
          align="center"
          className="!mx-auto"
        />

        <ol className="relative mt-14 grid gap-10 md:grid-cols-3 md:gap-6">
          {/* Connectors (static, decorative) */}
          <span
            className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-7 hidden h-px bg-navy/15 md:block"
            aria-hidden="true"
          />
          <span
            className="pointer-events-none absolute left-7 top-7 h-[calc(100%-3.5rem)] w-px bg-navy/15 md:hidden"
            aria-hidden="true"
          />

          {HOW_IT_WORKS.map((s, i) => (
            <Reveal
              as="li"
              key={s.step}
              delay={i * 120}
              className="relative flex items-start gap-4 md:flex-col md:items-center md:gap-0 md:text-center"
            >
              <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-navy font-display text-xl font-semibold text-offwhite ring-8 ring-offwhite">
                {s.step}
              </span>
              <div className="md:mt-5">
                <h3 className="font-display text-xl font-semibold text-navy">{s.title}</h3>
                <p className="mt-2 max-w-xs font-body text-sm leading-relaxed text-muted">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
