import Seo from '../components/Seo.jsx'
import Reveal from '../components/Reveal.jsx'
import Eyebrow from '../components/Eyebrow.jsx'
import Icon from '../components/Icon.jsx'
import { ABOUT_STATS, VALUES } from '../data/content.js'
import { CONTACT } from '../data/site.js'
import { telLink } from '../lib/wa.js'

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(CONTACT.mapsQuery)}&output=embed`

export default function About() {
  return (
    <>
      <Seo
        title="About"
        description="For over a decade, Safari Typing Services has been the neighbourhood document-services centre at Nazir Plaza — trusted by thousands of residents and businesses across the UAE."
        path="/about"
      />

      {/* Intro */}
      <Reveal as="section" className="mx-auto max-w-[880px] px-5 pb-6 pt-[84px] text-center sm:px-7">
        <Eyebrow className="mb-5">ABOUT US</Eyebrow>
        <h1 className="mb-6 text-[40px] font-medium sm:text-[52px] md:text-[62px]">
          Paperwork is our <em className="italic text-sage">profession.</em>
        </h1>
        <p className="mx-auto max-w-[640px] font-body text-[19px] text-soft">
          For over a decade, Safari Typing Services has been the neighbourhood go-to at Nazir Plaza — a
          small typing desk grown into a full document-services centre trusted by thousands of residents
          and businesses.
        </p>
      </Reveal>

      {/* Image */}
      <Reveal as="section" className="mx-auto max-w-content px-5 pt-12 sm:px-7">
        <div className="overflow-hidden rounded-[28px] border border-line sm:rounded-[240px_240px_28px_28px]">
          <img
            src="/safari-banner.jpeg"
            alt="The Safari Typing Services team at Nazir Plaza, Shop 4"
            className="aspect-[16/9] w-full object-cover sm:aspect-[16/7]"
            loading="lazy"
            decoding="async"
          />
        </div>
      </Reveal>

      {/* Stats */}
      <Reveal as="section" className="mx-auto max-w-content px-5 py-14 sm:px-7">
        <div className="grid grid-cols-2 gap-6 border-y border-line py-[34px] text-center sm:grid-cols-4">
          {ABOUT_STATS.map((s, i) => (
            <div key={s.label} className={i > 0 ? 'sm:border-l sm:border-line' : ''}>
              <div className={`font-display text-[46px] ${s.accent ? 'text-sage' : 'text-ink'}`}>{s.value}</div>
              <div className="font-body text-[12.5px] uppercase tracking-[0.06em] text-gold">{s.label}</div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Values */}
      <Reveal as="section" className="mx-auto max-w-content px-5 pb-16 pt-12 sm:px-7">
        <div className="mx-auto mb-14 max-w-[560px] text-center">
          <Eyebrow className="mb-4">HOW WE WORK</Eyebrow>
          <h2 className="text-[36px] font-medium sm:text-[46px]">The values behind every file.</h2>
        </div>
        <div className="grid gap-12 sm:grid-cols-3">
          {VALUES.map((v) => (
            <div key={v.title}>
              <div className="mb-3.5 font-display text-[30px] italic text-sage">{v.title}</div>
              <p className="font-body text-[15.5px] text-soft">{v.body}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Location */}
      <Reveal as="section" className="bg-cream-100">
        <div className="mx-auto grid max-w-content items-center gap-10 px-5 py-20 sm:px-7 lg:grid-cols-2 lg:gap-14">
          <div>
            <Eyebrow className="mb-4">FIND US</Eyebrow>
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
          <div className="overflow-hidden rounded-[24px] border border-line">
            <iframe
              title="Map to Safari Typing Services, Nazir Plaza"
              src={mapSrc}
              className="aspect-[4/3] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Reveal>
    </>
  )
}
