import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import Reveal from '../components/Reveal.jsx'
import Eyebrow from '../components/Eyebrow.jsx'
import Icon from '../components/Icon.jsx'
import LinkButton from '../components/LinkButton.jsx'
import CtaBlock from '../components/CtaBlock.jsx'
import { SERVICES, HOME_STATS, PROCESS } from '../data/content.js'
import { CONTACT, LOCAL_BUSINESS_JSONLD } from '../data/site.js'
import { waLink, telLink } from '../lib/wa.js'

const primaryPhone = CONTACT.phones[0]

export default function Home() {
  return (
    <>
      <Seo
        title="Government paperwork, handled with quiet care"
        description="Visas, Emirates ID, attestation, business licences and PRO services — managed calmly and correctly at Nazir Plaza, Shop 4, United Arab Emirates."
        path="/"
        jsonLd={LOCAL_BUSINESS_JSONLD}
      />

      {/* Hero */}
      <section className="mx-auto max-w-[1000px] px-5 pb-[72px] pt-[84px] text-center sm:px-7">
        <Eyebrow className="mb-[30px] inline-flex items-center gap-2.5">
          <span className="h-1.5 w-1.5 rounded-full bg-sage" />
          NAZIR PLAZA · UNITED ARAB EMIRATES
        </Eyebrow>
        <h1 className="mb-[26px] text-[44px] font-medium leading-[1.05] sm:text-[60px] md:text-[78px]">
          Government paperwork,
          <br />
          handled with <em className="italic text-sage">quiet care.</em>
        </h1>
        <p className="mx-auto mb-10 max-w-[600px] font-body text-lg leading-[1.55] text-soft sm:text-[21px]">
          Visas, Emirates ID, attestation, business licences and PRO services — managed calmly and
          correctly, so you never have to think about the queue again.
        </p>
        <div className="flex flex-wrap justify-center gap-3.5">
          <LinkButton href={telLink(primaryPhone.e164)} variant="solid">
            <Icon name="phone" size={17} /> Call {primaryPhone.display}
          </LinkButton>
          <LinkButton href={waLink()} target="_blank" rel="noopener noreferrer" variant="outline">
            <Icon name="whatsapp" size={18} /> WhatsApp us
          </LinkButton>
        </div>
      </section>

      {/* Hero image */}
      <Reveal as="section" className="mx-auto max-w-content px-5 pb-6 sm:px-7">
        <div className="overflow-hidden rounded-[28px] border border-line sm:rounded-[280px_280px_28px_28px]">
          <img
            src="/safari-banner.jpeg"
            alt="Safari Typing Services counter at Nazir Plaza, Shop 4"
            className="aspect-[16/9] w-full object-cover sm:aspect-[16/8]"
            loading="lazy"
            decoding="async"
          />
        </div>
      </Reveal>

      {/* Trust strip */}
      <Reveal as="section" className="mx-auto max-w-content px-5 py-11 sm:px-7">
        <div className="grid grid-cols-1 gap-6 border-y border-line py-[30px] text-center sm:grid-cols-3">
          {HOME_STATS.map((s, i) => (
            <div key={s.label} className={i === 1 ? 'sm:border-x sm:border-line' : ''}>
              <div className="font-display text-[42px] text-ink">{s.value}</div>
              <div className="font-body text-[13px] uppercase tracking-[0.06em] text-gold">{s.label}</div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Services */}
      <Reveal as="section" className="mx-auto max-w-content px-5 pb-10 pt-16 sm:px-7">
        <div className="mb-[52px] max-w-[620px]">
          <Eyebrow className="mb-4">WHAT WE DO</Eyebrow>
          <h2 className="mb-4 text-[36px] font-medium sm:text-[46px]">Every formality, under one calm roof.</h2>
          <p className="font-body text-lg text-soft">
            From a first residence visa to a full trade licence — we manage the forms, fees and
            follow-ups on your behalf.
          </p>
        </div>

        <div className="border-t border-line">
          {SERVICES.map((s) => (
            <Link
              key={s.n}
              to="/services"
              className="grid grid-cols-[40px_1fr_auto] items-center gap-5 border-b border-line px-2 py-[30px] transition-colors hover:bg-cream-100 sm:grid-cols-[64px_1fr_auto] sm:gap-7"
            >
              <span className="font-display text-2xl italic text-sand sm:text-[28px]">{s.n}</span>
              <div>
                <h3 className="mb-1 text-xl font-medium sm:text-[27px]">{s.title}</h3>
                <p className="font-body text-[15px] text-soft">{s.blurb}</p>
              </div>
              <span className="text-[22px] text-sage" aria-hidden="true">
                →
              </span>
            </Link>
          ))}
        </div>
      </Reveal>

      {/* Process */}
      <Reveal as="section" className="bg-cream-100">
        <div className="mx-auto max-w-content px-5 py-20 sm:px-7 sm:py-[88px]">
          <div className="mx-auto mb-14 max-w-[560px] text-center">
            <Eyebrow className="mb-4">THE PROCESS</Eyebrow>
            <h2 className="text-[36px] font-medium sm:text-[46px]">Three unhurried steps.</h2>
          </div>
          <div className="grid gap-12 sm:grid-cols-3">
            {PROCESS.map((step) => (
              <div key={step.numeral} className="text-center">
                <div className="mb-3.5 font-display text-[56px] italic text-sage">{step.numeral}</div>
                <h3 className="mb-2.5 text-2xl font-medium">{step.title}</h3>
                <p className="font-body text-[15.5px] text-soft">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Pull quote */}
      <Reveal as="section" className="mx-auto max-w-[900px] px-5 py-24 text-center sm:px-7">
        <Eyebrow className="mb-6">WHY SAFARI</Eyebrow>
        <p className="font-display text-[28px] font-medium leading-[1.32] text-ink sm:text-[38px]">
          Rules change constantly. We stay current so your application is{' '}
          <em className="italic text-sage">right the first time</em> — no rejections, no wasted trips,
          no surprise fees.
        </p>
        <Link
          to="/about"
          className="mt-[34px] inline-block font-body text-base font-semibold text-sage transition-colors hover:text-ink"
        >
          Read our story →
        </Link>
      </Reveal>

      {/* CTA */}
      <CtaBlock
        heading="Need it done today?"
        body="Message us on WhatsApp or step into Shop 4 — we'll take it from here."
        className="mb-[88px]"
      />
    </>
  )
}
