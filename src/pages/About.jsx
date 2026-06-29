import Seo from '../components/Seo.jsx'
import Eyebrow from '../components/Eyebrow.jsx'
import Icon from '../components/Icon.jsx'
import AccentLine from '../components/AccentLine.jsx'
import Stat from '../components/Stat.jsx'
import FeatureCard from '../components/FeatureCard.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Section from '../components/Section.jsx'
import Picture from '../components/Picture.jsx'
import { ABOUT_STATS, VALUES, ABOUT_JOURNEY, ABOUT_WHY, PHOTOS } from '../data/content.js'
import { CONTACT } from '../data/site.js'
import { telLink } from '../lib/wa.js'
import { usePageMotion } from '../lib/usePageMotion.js'

// Map each value to an icon from the shared set.
const VALUE_ICONS = { Accuracy: 'check', Honesty: 'shield', Presence: 'chat' }

export default function About() {
  const root = usePageMotion()

  return (
    <div ref={root}>
      <Seo
        title="About — Typing Centre In Ajman"
        description="For Over 18 Years, Safari Typing Services Has Been The Neighbourhood Document-services Centre At Nazir Plaza, Ajman — Trusted By Thousands Of Residents And Businesses."
        path="/about"
      />

      {/* Intro */}
      <section className="mx-auto max-w-[880px] px-5 pb-6 pt-[84px] text-center sm:px-7">
        <div data-hero>
          <Eyebrow className="mb-5">About Us</Eyebrow>
          <h1 className="mb-6 text-[40px] font-medium sm:text-[52px] md:text-[62px]">
            Paperwork Is Our <em className="italic text-gradient-brand">Profession.</em>
          </h1>
          <AccentLine className="mx-auto mb-6" />
          <p className="mx-auto max-w-[640px] font-body text-[19px] text-soft">
            For Over 18 Years, Safari Typing Services Has Been The Neighbourhood Go-to At Nazir Plaza
            — A Small Typing Desk Grown Into A Full Document-services Centre Trusted By Thousands Of
            Residents And Businesses.
          </p>
        </div>
      </section>

      {/* Illustration */}
      <section data-reveal className="mx-auto max-w-content px-5 pt-12 sm:px-7">
        <div className="photo-panel aspect-[16/10] overflow-hidden rounded-[28px] sm:aspect-[16/8] sm:rounded-[280px_280px_28px_28px]">
          <Picture
            src={PHOTOS.aboutBand}
            alt="The Safari Typing Services Team"
            className="h-full w-full object-contain"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      {/* Journey roadmap */}
      <Section containerClassName="pb-6 pt-16">
        <SectionHeading
          data-reveal
          align="center"
          eyebrow="Our Journey"
          title="From One Desk To A Full Centre."
          intro="Eighteen Years Of Growing Alongside The Families And Businesses Of Ajman."
          className="mb-14"
        />
        <ol data-timeline className="relative mx-auto max-w-[640px]">
          {/* Sage progress line, drawn from first to last node as the section
              scrolls. Positioned + revealed by usePageMotion; reduced-motion and
              no-JS users keep the faint static track + nodes below. */}
          <span
            data-timeline-progress
            aria-hidden="true"
            className="pointer-events-none absolute left-[8px] z-[1] w-[2px] origin-top bg-sage opacity-0"
          />
          {ABOUT_JOURNEY.map((m, i) => {
            const isLast = i === ABOUT_JOURNEY.length - 1
            return (
              <li key={m.phase} className="relative grid grid-cols-[20px_1fr] gap-x-5 pb-11 last:pb-0">
                {/* faint static track (skipped on the final milestone) */}
                {!isLast && (
                  <span
                    aria-hidden="true"
                    className="absolute left-[8px] top-3 bottom-0 w-[2px] bg-line"
                  />
                )}
                {/* node — filled on the current ("today") milestone */}
                <span
                  data-timeline-node
                  className={`relative z-10 mt-1.5 h-[18px] w-[18px] rounded-full border-2 border-sage ${
                    isLast ? 'bg-sage' : 'bg-cream'
                  }`}
                />
                <div data-reveal className="-mt-0.5">
                  <span className="font-body text-[13px] uppercase tracking-[0.08em] text-gold">
                    {m.phase}
                  </span>
                  <h3 className="mt-1 text-[22px] font-medium">{m.title}</h3>
                  <p className="mt-2 font-body text-[15.5px] leading-[1.65] text-soft">{m.body}</p>
                </div>
              </li>
            )
          })}
        </ol>
      </Section>

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
          eyebrow="How We Work"
          title="The Values Behind Every File."
          className="mb-14"
        />
        <div data-reveal-group className="grid gap-5 sm:grid-cols-3">
          {VALUES.map((v) => (
            <FeatureCard key={v.title} icon={VALUE_ICONS[v.title]} title={v.title} body={v.body} />
          ))}
        </div>
      </Section>

      {/* Why choose us */}
      <Section tone="raised" containerClassName="py-16">
        <SectionHeading
          data-reveal
          align="center"
          accent
          eyebrow="Why Choose Us"
          title="Reasons People Keep Coming Back."
          className="mb-12"
        />
        <ul data-reveal-group className="mx-auto grid max-w-[820px] gap-x-10 gap-y-5 sm:grid-cols-2">
          {ABOUT_WHY.map((item) => (
            <li key={item} className="flex items-center gap-3.5">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-tag-bg text-sage">
                <Icon name="check" size={16} strokeWidth={2} />
              </span>
              <span className="font-body text-[16.5px] font-medium text-ink">{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Location */}
      <Section tone="sunken" containerClassName="py-20">
        <div data-reveal className="mx-auto max-w-[620px] text-center">
          <Eyebrow className="mb-4">Find Us</Eyebrow>
          <AccentLine className="mx-auto mb-6" />
          <h2 className="mb-5 text-[34px] font-medium sm:text-[42px]">Right At Nazir Plaza, Shop 4.</h2>
          <p className="mb-[26px] font-body text-[16.5px] text-soft">
            Drop In Six Days A Week — We’re Closed Sundays. Free Parking Nearby, And Our Counter Is
            Rarely A Long Wait.
          </p>
          <div className="mx-auto inline-flex flex-col gap-3.5 text-left font-body">
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
      </Section>
    </div>
  )
}
