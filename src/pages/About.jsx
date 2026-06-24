import Seo from '../components/Seo.jsx'
import Arabic from '../components/Arabic.jsx'
import Button from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'
import ServiceIcon from '../components/ServiceIcon.jsx'
import Map from '../components/Map.jsx'
import TrustStrip from '../sections/TrustStrip.jsx'
import WhyUs from '../sections/WhyUs.jsx'
import Languages from '../sections/Languages.jsx'
import { ABOUT, CONTACT } from '../data/site.js'
import { waLink } from '../lib/wa.js'

export default function About() {
  return (
    <>
      <Seo
        title="About"
        description="Safari Typing Services is a trusted government typing & document centre in Sharjah, UAE — multilingual staff handling visas, Emirates ID, Tasheel, attestation and more under one roof."
        path="/about"
      />

      {/* Intro + banner */}
      <section className="bg-gradient-to-b from-navy-50/60 to-offwhite px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-content items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <span className="mb-3 inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-red">
              <span className="h-px w-6 bg-red" aria-hidden="true" />
              About us
            </span>
            <h1 className="font-display text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
              {ABOUT.heading}
            </h1>
            <Arabic className="mt-2 block text-xl text-muted sm:text-2xl">{ABOUT.headingAr}</Arabic>
            <div className="mt-6 space-y-4">
              {ABOUT.lines.map((line, i) => (
                <p key={i} className="font-body text-base leading-relaxed text-ink/80 sm:text-lg">
                  {line}
                </p>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button as="a" href={waLink()} target="_blank" rel="noopener noreferrer" variant="primary" icon="whatsapp">
                WhatsApp Us
              </Button>
              <Button as="route" to="/contact" variant="ghost" iconRight="arrowRight">
                Visit or contact us
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120} className="rounded-3xl border border-navy/10 bg-white p-5 shadow-cardHover sm:p-7">
            <img
              src="/safari-banner.jpeg"
              alt="Safari Typing Services — سفاري لخدمات الطباعة"
              className="w-full rounded-xl"
              loading="lazy"
              decoding="async"
            />
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <TrustStrip />

      {/* Why us */}
      <WhyUs />

      {/* Location & landmarks */}
      <section aria-labelledby="location-heading" className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-content items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <span className="mb-3 inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-red">
              <span className="h-px w-6 bg-red" aria-hidden="true" />
              Find us
            </span>
            <h2 id="location-heading" className="font-display text-3xl text-navy sm:text-4xl">
              Conveniently located in Sharjah.
            </h2>
            <p className="mt-4 font-body text-base leading-relaxed text-muted">
              You'll find us at {CONTACT.address.line1}, in the heart of Sharjah — easy to reach whether
              you're a resident sorting personal paperwork or a business handling labour and licensing.
              Prefer to stay home? Send your documents on WhatsApp and we'll take it from there.
            </p>

            <ul className="mt-6 space-y-3 font-body text-sm">
              <li className="flex items-start gap-3">
                <ServiceIcon name="mapPin" size={20} className="mt-0.5 shrink-0 text-red" />
                <span className="text-ink/80">
                  <span className="font-semibold text-navy">{CONTACT.address.line1}</span>
                  <br />
                  {CONTACT.address.city}, {CONTACT.address.country}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ServiceIcon name="clock" size={20} className="mt-0.5 shrink-0 text-red" />
                <span className="flex flex-col gap-0.5 text-ink/80">
                  {CONTACT.hours.map((h) => (
                    <span key={h.days}>
                      <span className="font-semibold text-navy">{h.days}:</span> {h.time}
                    </span>
                  ))}
                </span>
              </li>
            </ul>

            <Button as="route" to="/contact" variant="navy" className="mt-7" iconRight="arrowRight">
              Get directions & contact
            </Button>
          </Reveal>

          <Reveal delay={120}>
            <Map />
          </Reveal>
        </div>
      </section>

      <Languages />
    </>
  )
}
