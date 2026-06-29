import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import Eyebrow from '../components/Eyebrow.jsx'
import Icon from '../components/Icon.jsx'
import LinkButton from '../components/LinkButton.jsx'
import CtaBlock from '../components/CtaBlock.jsx'
import Section from '../components/Section.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import FeatureCard from '../components/FeatureCard.jsx'
import Stat from '../components/Stat.jsx'
import PayLater from '../components/PayLater.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import Credentials from '../components/Credentials.jsx'
import Picture from '../components/Picture.jsx'
import TestimonialCard from '../components/TestimonialCard.jsx'
import UaeFlag from '../components/UaeFlag.jsx'
import AccentLine from '../components/AccentLine.jsx'
import { SERVICES, HOME_STATS, PROCESS, HOME, FAQS, PHOTOS } from '../data/content.js'
import { CONTACT, LOCAL_BUSINESS_JSONLD, WHY_US, REVIEWS, LANGUAGES } from '../data/site.js'
import { waLink, telLink } from '../lib/wa.js'
import { usePageMotion } from '../lib/usePageMotion.js'

const primaryPhone = CONTACT.phones[0]

// Photo for each of the three "How it works" steps (placeholders — see content.js).
const STEP_IMAGES = [
  { src: PHOTOS.step1, alt: 'A Safari Typing Services advisor ready to take your enquiry by phone or WhatsApp' },
  { src: PHOTOS.step2, alt: 'Sharing your documents and passport at the counter' },
  { src: PHOTOS.step3, alt: 'Collecting your completed passport and travel documents' },
]

export default function Home() {
  const root = usePageMotion()
  // Only show the testimonials section once real (non-placeholder) reviews exist,
  // so we never publish invented reviews. Swap `placeholder: true` off in site.js.
  const realReviews = REVIEWS.filter((r) => !r.placeholder)

  return (
    <div ref={root}>
      <Seo
        title="Typing Centre In Ajman — Visas, Emirates ID, Tasheel & Attestation"
        description="Government Typing Services In Ajman (Nazir Plaza, Shop 4): Visas, Emirates ID, Tasheel, Amer, Attestation, Business Licences And PRO Services — Handled Calmly And Correctly."
        path="/"
        jsonLd={LOCAL_BUSINESS_JSONLD}
      />

      {/* 1 — Hero */}
      <section className="relative mx-auto max-w-[1040px] px-5 pb-14 pt-[84px] text-center sm:px-7">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[460px] bg-[radial-gradient(60%_60%_at_50%_-5%,rgba(31,84,166,0.12),transparent_70%)]"
        />
        {/* Decorative UAE-flag ribbon — descends from the top-right, behind the
            centred copy. Mirrored so the red end leads the eye inward; gentle
            sway only when motion is allowed. Hidden on smaller screens so the
            centred hero stays uncluttered (and never collides with the copy). */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-60px] top-[14px] -z-10 hidden w-[190px] origin-top motion-safe:animate-ribbonWave xl:block xl:right-[-72px] xl:w-[208px] 2xl:right-[-84px] 2xl:w-[236px]"
        >
          {/* Soft top fade so the ribbon's red end eases in below the
              translucent header instead of smudging through its blur. */}
          <Picture
            src="/photos/uae-flag-ribbon.png"
            alt=""
            className="h-auto w-full -scale-x-100 opacity-90 [mask-image:linear-gradient(to_bottom,transparent_0%,black_16%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_16%)]"
            decoding="async"
          />
        </div>
        <div data-hero>
          <Eyebrow className="mb-[26px] inline-flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-sage to-gold" />
            {HOME.hero.eyebrow}
          </Eyebrow>
          <h1 className="mb-[24px] text-[44px] font-medium leading-[1.05] sm:text-[60px] md:text-[78px]">
            Government Paperwork,
            <br />
            Handled With <em className="italic text-gradient-brand">Quiet Care.</em>
          </h1>
          <p className="mx-auto mb-9 max-w-[620px] font-body text-lg leading-[1.55] text-soft sm:text-[21px]">
            {HOME.hero.subline}
          </p>
          <div className="flex flex-wrap justify-center gap-3.5">
            <LinkButton href={telLink(primaryPhone.e164)} variant="solid">
              <Icon name="phone" size={17} /> Call {primaryPhone.display}
            </LinkButton>
            <LinkButton href={waLink()} target="_blank" rel="noopener noreferrer" variant="outline">
              <Icon name="whatsapp" size={18} /> WhatsApp Us
            </LinkButton>
          </div>
          <div className="mt-7 inline-flex items-center gap-2.5 font-body text-[13.5px] text-gold">
            <UaeFlag className="w-5 shrink-0" />
            {HOME.hero.trustLine}
          </div>
        </div>
      </section>

      {/* 2 — Credentials strip */}
      <section className="mx-auto max-w-content px-5 sm:px-7">
        <div data-reveal className="flex flex-col items-center gap-5 border-y border-line py-7 text-center">
          <span className="font-body text-[13px] font-semibold tracking-[0.04em] text-gold">
            {HOME.credentialsLabel}
          </span>
          <Credentials />
        </div>
      </section>

      {/* 3 — Stats */}
      <Section containerClassName="py-12">
        <div
          data-reveal-group
          className="grid grid-cols-2 gap-8 border-y border-line py-9 text-center sm:grid-cols-4"
        >
          {HOME_STATS.map((s, i) => (
            <Stat
              key={s.label}
              value={s.value}
              label={s.label}
              className={i > 0 ? 'sm:border-l sm:border-line' : ''}
            />
          ))}
        </div>
      </Section>

      {/* 3.5 — Pay Later (Tabby & Tamara) */}
      <PayLater />

      {/* 4 — Inside Shop 4 (image band, replaces the old banner) */}
      <Section containerClassName="py-16 sm:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div data-reveal>
            <Eyebrow className="mb-4">Inside Shop 4</Eyebrow>
            <AccentLine className="mb-6" />
            <h2 className="mb-5 text-[32px] font-medium sm:text-[42px]">
              A Calm Counter For Complicated Paperwork.
            </h2>
            <p className="mb-4 font-body text-lg leading-[1.6] text-soft">
              Step Into Our Office At Nazir Plaza And You’re Met By A Multilingual Team Who Handle The
              Forms, The Fees And The Follow-ups — So You Don’t Have To.
            </p>
            <p className="font-body text-[15.5px] leading-[1.6] text-soft">
              Prefer To Stay Home? Send Your Documents On WhatsApp And We’ll Begin Straight Away.
            </p>
          </div>
          <div data-reveal>
            <div className="photo-panel aspect-[4/3] overflow-hidden rounded-[28px] sm:rounded-[280px_280px_28px_28px]">
              <Picture
                src={PHOTOS.homeBand}
                alt="Two Multilingual Safari Typing Services Advisors At The Ajman Counter, Holding Clients' UAE Government Paperwork"
                className="h-full w-full object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* 5 — Services */}
      <Section containerClassName="py-16 sm:py-24">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            data-reveal
            eyebrow={HOME.services.eyebrow}
            title={HOME.services.title}
            intro={HOME.services.intro}
          />
          <Link
            to="/services"
            data-reveal
            className="group inline-flex shrink-0 items-center gap-2 font-body text-[15px] font-semibold text-sage transition-colors hover:text-ink"
          >
            {HOME.services.allLabel}
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div data-services className="mt-12 flex flex-wrap justify-center gap-5">
          {SERVICES.map((s) => (
            <div key={s.n} className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]">
              <ServiceCard service={s} />
            </div>
          ))}
        </div>
      </Section>

      {/* 6 — Why Safari */}
      <Section tone="sunken" containerClassName="py-20 sm:py-24">
        <SectionHeading
          data-reveal
          align="center"
          accent
          eyebrow={HOME.why.eyebrow}
          title={HOME.why.title}
          intro={HOME.why.intro}
          className="mb-14"
        />
        <div data-reveal-group className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((w) => (
            <FeatureCard key={w.title} icon={w.icon} title={w.title} body={w.body} />
          ))}
        </div>
      </Section>

      {/* 7 — How it works */}
      <Section containerClassName="py-20 sm:py-24">
        <SectionHeading
          data-reveal
          align="center"
          accent
          eyebrow={HOME.process.eyebrow}
          title={HOME.process.title}
          intro={HOME.process.intro}
          className="mb-14"
        />
        <div data-reveal-group className="grid gap-8 sm:grid-cols-3">
          {PROCESS.map((step, i) => (
            <div key={step.numeral}>
              <div className="photo-panel mb-6 aspect-[16/10] overflow-hidden rounded-[24px]">
                <Picture
                  src={STEP_IMAGES[i].src}
                  alt={STEP_IMAGES[i].alt}
                  className="h-full w-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="flex items-baseline gap-3">
                <span className="font-display text-[34px] italic leading-none text-sage">{step.numeral}</span>
                <h3 className="text-2xl font-medium">{step.title}</h3>
              </div>
              <p className="mt-2.5 font-body text-[15.5px] leading-[1.6] text-soft">{step.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 8 — Languages served */}
      <Section tone="ink" containerClassName="py-20 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div data-reveal>
            <Eyebrow className="mb-4 text-sage-light">{HOME.languages.eyebrow}</Eyebrow>
            <h2 className="text-[34px] font-medium text-paper sm:text-[46px]">{HOME.languages.title}</h2>
            <p className="mt-4 max-w-[460px] font-body text-lg leading-[1.55] text-ink-soft">
              {HOME.languages.intro}
            </p>
          </div>
          <div data-reveal className="flex flex-wrap gap-3 lg:justify-end">
            {LANGUAGES.map((l) => (
              <span
                key={l.label}
                dir={l.dir}
                className="rounded-full border border-ink-line px-5 py-2.5 font-body text-[15px] font-medium text-paper"
              >
                {l.label}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* 9 — Testimonials (only rendered once real reviews exist) */}
      {realReviews.length > 0 && (
        <Section tone="sunken" containerClassName="py-20 sm:py-24">
          <SectionHeading
            data-reveal
            align="center"
            accent
            eyebrow={HOME.testimonials.eyebrow}
            title={HOME.testimonials.title}
            className="mb-12"
          />
          <div data-reveal-group className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {realReviews.slice(0, 3).map((r) => (
              <TestimonialCard key={r.name} stars={r.stars} text={r.text} name={r.name} lang={r.lang} />
            ))}
          </div>
        </Section>
      )}

      {/* 10 — Brand pull quote */}
      <section className="mx-auto max-w-[920px] px-5 py-24 text-center sm:px-7">
        <Eyebrow data-reveal className="mb-6">Our Promise</Eyebrow>
        <p
          data-quote
          className="font-display text-[28px] font-medium leading-[1.32] text-ink sm:text-[40px]"
        >
          Rules Change Constantly. We Stay Current So Your Application Is{' '}
          <em className="italic text-gradient-brand">Right The First Time</em> — No Rejections, No Wasted Trips,
          No Surprise Fees.
        </p>
        <Link
          to="/about"
          data-reveal
          className="mt-8 inline-block font-body text-base font-semibold text-sage transition-colors hover:text-ink"
        >
          Read Our Story →
        </Link>
      </section>

      {/* 11 — FAQ teaser */}
      <Section tone="sunken" containerClassName="py-20 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading data-reveal eyebrow={HOME.faq.eyebrow} title={HOME.faq.title} />
          <div data-reveal-group className="flex flex-col">
            {FAQS.slice(0, 4).map((f) => (
              <div key={f.q} className="border-b border-line py-5 first:pt-0">
                <h3 className="mb-1.5 font-display text-[20px] font-medium text-ink sm:text-[22px]">{f.q}</h3>
                <p className="font-body text-[15px] leading-[1.6] text-soft">{f.a}</p>
              </div>
            ))}
            <Link
              to="/faq"
              className="group mt-6 inline-flex items-center gap-1.5 font-body text-[15px] font-semibold text-sage transition-colors hover:text-ink"
            >
              {HOME.faq.allLabel}
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </Section>

      {/* 12 — CTA */}
      <CtaBlock
        heading="Need It Done Today?"
        body="Message Us On WhatsApp Or Step Into Shop 4 — We'll Take It From Here."
        className="my-20 sm:my-24"
      />
    </div>
  )
}
