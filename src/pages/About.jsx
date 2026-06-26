import Seo from '../components/Seo.jsx'
import Eyebrow from '../components/Eyebrow.jsx'
import Icon from '../components/Icon.jsx'
import AccentLine from '../components/AccentLine.jsx'
import Stat from '../components/Stat.jsx'
import FeatureCard from '../components/FeatureCard.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Section from '../components/Section.jsx'
import ImagePlaceholder from '../components/ImagePlaceholder.jsx'
import { ABOUT_STATS, VALUES } from '../data/content.js'
import { CONTACT } from '../data/site.js'
import { telLink } from '../lib/wa.js'
import { usePageMotion } from '../lib/usePageMotion.js'

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(CONTACT.mapsQuery)}&output=embed`

// Map each value to an icon from the shared set.
const VALUE_ICONS = { Accuracy: 'check', Honesty: 'shield', Presence: 'chat' }

export default function About() {
  const root = usePageMotion()

  return (
    <div ref={root}>
      <Seo
        title="About — Typing Centre in Ajman"
        description="For over a decade, Safari Typing Services has been the neighbourhood document-services centre at Nazir Plaza, Ajman — trusted by thousands of residents and businesses."
        path="/about"
      />

      {/* Intro */}
      <section className="mx-auto max-w-[880px] px-5 pb-6 pt-[84px] text-center sm:px-7">
        <div data-hero>
          <Eyebrow className="mb-5">ABOUT US</Eyebrow>
          <h1 className="mb-6 text-[40px] font-medium sm:text-[52px] md:text-[62px]">
            Paperwork is our <em className="italic text-sage">profession.</em>
          </h1>
          <AccentLine className="mx-auto mb-6" />
          <p className="mx-auto max-w-[640px] font-body text-[19px] text-soft">
            For over a decade, Safari Typing Services has been the neighbourhood go-to at Nazir Plaza
            — a small typing desk grown into a full document-services centre trusted by thousands of
            residents and businesses.
          </p>
        </div>
      </section>

      {/* Image */}
      <section data-reveal className="mx-auto max-w-content px-5 pt-12 sm:px-7">
        <ImagePlaceholder
          arch
          src="/photos/reception.jpg"
          alt="Safari Typing Services reception at Nazir Plaza, Shop 4, Ajman"
          label="Our office & team at Nazir Plaza"
          aspect="aspect-[16/9] sm:aspect-[16/7]"
          data-hero-img
          className="scale-110 will-change-transform"
        />
      </section>

      {/* Stats */}
      <Section containerClassName="py-14">
        <div
          data-reveal-group
          className="grid grid-cols-2 gap-6 border-y border-line py-[34px] text-center sm:grid-cols-4"
        >
          {ABOUT_STATS.map((s, i) => (
            <Stat
              key={s.label}
              value={s.value}
              label={s.label}
              accent={s.accent}
              className={i > 0 ? 'sm:border-l sm:border-line' : ''}
            />
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section containerClassName="pb-16 pt-12">
        <SectionHeading
          data-reveal
          align="center"
          accent
          eyebrow="HOW WE WORK"
          title="The values behind every file."
          className="mb-14"
        />
        <div data-reveal-group className="grid gap-5 sm:grid-cols-3">
          {VALUES.map((v) => (
            <FeatureCard key={v.title} icon={VALUE_ICONS[v.title]} title={v.title} body={v.body} />
          ))}
        </div>
      </Section>

      {/* Location */}
      <Section tone="sunken" containerClassName="py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div data-reveal>
            <Eyebrow className="mb-4">FIND US</Eyebrow>
            <AccentLine className="mb-6" />
            <h2 className="mb-5 text-[34px] font-medium sm:text-[42px]">Right at Nazir Plaza, Shop 4.</h2>
            <p className="mb-[26px] font-body text-[16.5px] text-soft">
              Drop in any day of the week. Free parking nearby, and our counter is rarely a long wait.
            </p>
            <div className="flex flex-col gap-3.5 font-body">
              <div className="flex items-center gap-[13px]">
                <span className="shrink-0 text-sage">
                  <Icon name="pin" size={18} strokeWidth={1.7} />
                </span>
                <span className="text-[15.5px] font-medium text-ink">{CONTACT.address.line1}</span>
              </div>
              <div className="flex items-center gap-[13px]">
                <span className="shrink-0 text-sage">
                  <Icon name="phone" size={18} strokeWidth={1.7} />
                </span>
                <a
                  href={telLink(CONTACT.phones[0].e164)}
                  className="text-[15.5px] font-medium text-ink transition-colors hover:text-sage"
                >
                  {CONTACT.phones[0].display}
                </a>
              </div>
              <div className="flex items-center gap-[13px]">
                <span className="shrink-0 text-sage">
                  <Icon name="clock" size={18} strokeWidth={1.7} />
                </span>
                <span className="text-[15.5px] font-medium text-ink">{CONTACT.hoursShort}</span>
              </div>
            </div>
          </div>
          <div data-reveal className="overflow-hidden rounded-[24px] border border-line shadow-soft">
            <iframe
              title="Map to Safari Typing Services, Nazir Plaza"
              src={mapSrc}
              className="aspect-[4/3] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Section>
    </div>
  )
}
