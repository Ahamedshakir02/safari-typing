import Arabic from '../components/Arabic.jsx'
import Button from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'
import ServiceIcon from '../components/ServiceIcon.jsx'
import UaeFlag from '../components/UaeFlag.jsx'
import { HERO, CONTACT, TRUST_BADGES } from '../data/site.js'
import { waLink, telLink } from '../lib/wa.js'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy-50/60 via-offwhite to-offwhite">
      <div className="mx-auto grid max-w-content items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-10 lg:py-24">
        {/* Copy */}
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white px-3.5 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.16em] text-navy shadow-card">
              <UaeFlag height={14} />
              Sharjah · United Arab Emirates
            </span>
          </Reveal>

          <Reveal as="h1" delay={60} className="mt-6 max-w-xl font-display text-[2.5rem] font-semibold leading-[1.04] tracking-tight text-navy sm:text-5xl md:text-6xl">
            {HERO.headline}
          </Reveal>

          <Reveal delay={120}>
            <Arabic className="mt-5 block text-xl text-red sm:text-2xl">{HERO.sublineAr}</Arabic>
            <p className="mt-2 max-w-lg font-body text-base leading-relaxed text-muted sm:text-lg">
              {HERO.sublineEn}
            </p>
          </Reveal>

          <Reveal delay={180} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              as="a"
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
              icon="whatsapp"
            >
              WhatsApp Us
            </Button>
            <Button as="a" href={telLink(CONTACT.phones[0].e164)} variant="ghost" size="lg" icon="phone">
              Call Now
            </Button>
          </Reveal>

          <Reveal delay={240} as="ul" className="mt-9 flex flex-wrap gap-x-6 gap-y-2">
            {TRUST_BADGES.slice(0, 3).map((badge) => (
              <li key={badge} className="flex items-center gap-2 font-body text-sm text-navy/70">
                <ServiceIcon name="check" size={16} className="text-red" />
                {badge}
              </li>
            ))}
          </Reveal>
        </div>

        {/* Visual */}
        <Reveal delay={120} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative flex items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-blue via-blue-600 to-navy p-10 shadow-cardHover sm:p-14">
            {/* faint motif */}
            <div
              className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-white/10 blur-2xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-12 -left-8 h-48 w-48 rounded-full bg-red/20 blur-2xl"
              aria-hidden="true"
            />
            <img
              src="/safari-logo.jpeg"
              width={260}
              height={260}
              alt="Safari Typing Services logo"
              className="relative h-44 w-44 rounded-full object-cover shadow-float ring-8 ring-white/20 sm:h-56 sm:w-56"
              loading="eager"
              decoding="async"
            />
          </div>

          {/* floating credibility chips */}
          <div className="absolute -left-2 top-6 flex items-center gap-2 rounded-xl bg-white px-3 py-2 font-body text-xs font-semibold text-navy shadow-float sm:-left-5">
            <ServiceIcon name="clock" size={16} className="text-red" />
            Same-day service
          </div>
          <div className="absolute -right-2 bottom-6 flex items-center gap-2 rounded-xl bg-white px-3 py-2 font-body text-xs font-semibold text-navy shadow-float sm:-right-5">
            <ServiceIcon name="globe" size={16} className="text-blue" />
            5 languages
          </div>
        </Reveal>
      </div>
    </section>
  )
}
