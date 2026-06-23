import Section from '../components/Section.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import { ABOUT } from '../data/site.js'

export default function About() {
  return (
    <Section id="about" labelledBy="about-heading" className="py-20 sm:py-28">
      <div className="grid gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-5">
          <SectionHeading
            id="about-heading"
            eyebrow="About us"
            title={ABOUT.heading}
            titleAr={ABOUT.headingAr}
          />
        </div>
        <div className="md:col-span-7">
          <div className="space-y-5">
            {ABOUT.lines.map((line, i) => (
              <Reveal
                as="p"
                key={i}
                delay={i * 0.05}
                className="font-body text-lg leading-relaxed text-ink/80 sm:text-xl"
              >
                {line}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
