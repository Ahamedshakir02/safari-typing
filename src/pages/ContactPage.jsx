import { useState } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import Eyebrow from '../components/Eyebrow.jsx'
import Icon from '../components/Icon.jsx'
import AccentLine from '../components/AccentLine.jsx'
import { ENQUIRY_SERVICES } from '../data/content.js'
import { CONTACT } from '../data/site.js'
import { waLink, telLink, mailLink, buildWhatsAppLink } from '../lib/wa.js'
import { usePageMotion } from '../lib/usePageMotion.js'

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(CONTACT.mapsQuery)}&output=embed`
const inputClass =
  'w-full rounded-xl border border-line bg-cream-50 px-[15px] py-[13px] font-body text-[15px] text-ink'
const labelClass = 'mb-2 block font-body text-[13px] font-semibold text-soft'

export default function ContactPage() {
  const root = usePageMotion()
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: ENQUIRY_SERVICES[0],
    message: '',
  })
  const [sent, setSent] = useState(false)

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // Compose the enquiry into a WhatsApp message — the no-backend conversion path.
    const url = buildWhatsAppLink({
      name: form.name,
      serviceName: form.service,
      number: form.phone,
      message: form.message,
    })
    const win = window.open(url, '_blank', 'noopener,noreferrer')
    // If the pop-up was blocked, navigate this tab to WhatsApp instead of showing a
    // misleading "Thank you" for a message that never opened.
    if (!win) {
      window.location.href = url
      return
    }
    setSent(true)
  }

  return (
    <div ref={root}>
      <Seo
        title="Contact — Typing Centre In Ajman"
        description="Call, WhatsApp, Email Or Step Into Shop 4 At Nazir Plaza, Ajman. Send An Enquiry And We'll Reply By WhatsApp Or Email, Usually Within The Hour."
        path="/contact"
      />

      {/* Header */}
      <section className="mx-auto max-w-[820px] px-5 pb-11 pt-20 text-center sm:px-7">
        <div data-hero>
          <Eyebrow className="mb-5">Contact</Eyebrow>
          <h1 className="mb-5 text-[40px] font-medium sm:text-[52px] md:text-[62px]">
            Let's Get Your Paperwork Moving.
          </h1>
          <AccentLine className="mx-auto mb-6" />
          <p className="mx-auto max-w-[540px] font-body text-[19px] text-soft">
            Call, WhatsApp, Email Or Step Into Shop 4 — Whatever's Easiest For You.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section
        data-reveal
        className="mx-auto grid max-w-[1120px] items-start gap-12 px-5 pb-6 pt-12 sm:px-7 lg:grid-cols-[1fr_1.1fr]"
      >
        {/* Methods */}
        <div className="flex flex-col gap-4">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-[20px] border border-tag-line bg-tag-bg p-6 transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:border-sage hover:shadow-lift"
          >
            <div className="flex h-[46px] w-[46px] flex-none items-center justify-center rounded-full bg-sage text-paper">
              <Icon name="whatsapp" size={24} />
            </div>
            <div>
              <div className="font-body text-[12px] font-bold tracking-[0.08em] text-tag-ink">
                WHATSAPP · FASTEST
              </div>
              <div className="font-display text-[22px] text-ink">{CONTACT.whatsapp.display}</div>
            </div>
          </a>

          <div className="flex flex-col gap-[18px] rounded-[20px] border border-line bg-cream-50 p-7">
            <ContactRow icon="phone" label="CALL US">
              {[CONTACT.phones[0], CONTACT.phones[2]].map((p) => (
                <a
                  key={p.e164}
                  href={telLink(p.e164)}
                  className="block font-display text-[21px] text-ink transition-colors hover:text-sage"
                >
                  {p.display}
                </a>
              ))}
            </ContactRow>
            <div className="h-px bg-line" />
            <ContactRow icon="mail" label="EMAIL">
              <a
                href={mailLink()}
                className="break-all font-display text-[19px] text-ink transition-colors hover:text-sage"
              >
                {CONTACT.email}
              </a>
            </ContactRow>
            <div className="h-px bg-line" />
            <ContactRow icon="pin" label="VISIT">
              <div className="font-display text-[21px] text-ink">{CONTACT.address.line1}</div>
            </ContactRow>
            <div className="h-px bg-line" />
            <ContactRow icon="clock" label="HOURS">
              <ul className="space-y-1.5">
                {CONTACT.hours.map((h) => (
                  <li key={h.days} className="font-body text-[14.5px] leading-snug">
                    <span className="font-semibold text-ink">{h.days}</span>
                    <span className="text-soft"> · {h.time}</span>
                  </li>
                ))}
              </ul>
            </ContactRow>
          </div>

          <div className="overflow-hidden rounded-[20px] border border-line">
            <iframe
              title="Map To Safari Typing Services, Nazir Plaza"
              src={mapSrc}
              className="aspect-[16/9] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Form */}
        <div className="rounded-[24px] border border-line bg-cream-50 p-7 sm:p-[38px]">
          <h2 className="mb-1.5 text-[32px] font-medium">Send An Enquiry</h2>
          <p className="mb-7 font-body text-[15px] text-soft">
            Fill This In And We'll Reply By WhatsApp Or Email, Usually Within The Hour.
          </p>

          {sent ? (
            <div className="rounded-[18px] border border-tag-line bg-tag-bg p-9 text-center">
              <div className="mb-2 font-display text-[40px] italic text-sage">Thank You</div>
              <p className="font-body text-[15px] text-soft">
                Your Enquiry Is Ready In WhatsApp — Just Press Send. Or Message Us Directly Any Time For
                An Instant Reply.
              </p>
            </div>
          ) : (
            <form className="flex flex-col gap-[18px]" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="cf-name">
                    Full Name
                  </label>
                  <input
                    id="cf-name"
                    className={inputClass}
                    value={form.name}
                    onChange={set('name')}
                    placeholder="Your Name"
                    autoComplete="name"
                    required
                    minLength={2}
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="cf-phone">
                    Phone / WhatsApp
                  </label>
                  <input
                    id="cf-phone"
                    className={inputClass}
                    value={form.phone}
                    onChange={set('phone')}
                    placeholder="+971 5_ ___ ____"
                    inputMode="tel"
                    autoComplete="tel"
                    required
                    pattern="[0-9+()\-\s]{7,}"
                    title="Enter A Valid Phone Number (At Least 7 Digits)"
                  />
                </div>
              </div>
              <div>
                <label className={labelClass} htmlFor="cf-service">
                  Service Needed
                </label>
                <select id="cf-service" className={inputClass} value={form.service} onChange={set('service')}>
                  {ENQUIRY_SERVICES.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className={labelClass} htmlFor="cf-message">
                  How Can We Help?
                </label>
                <textarea
                  id="cf-message"
                  className={`${inputClass} resize-y`}
                  rows={4}
                  value={form.message}
                  onChange={set('message')}
                  placeholder="Tell Us A Little About What You Need..."
                />
              </div>
              <button
                type="submit"
                className="rounded-full bg-sage py-4 font-body text-base font-semibold text-paper transition-[transform,background-color,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:bg-sage-dark hover:shadow-lift"
              >
                Send Enquiry
              </button>
              <p className="text-center font-body text-[12.5px] text-gold">
                By Sending You Agree To Be Contacted About Your Request. See Our{' '}
                <Link to="/privacy" className="underline underline-offset-2 transition-colors hover:text-sage">
                  Privacy Policy
                </Link>
                .
              </p>
            </form>
          )}
        </div>
      </section>

      <div className="h-16" />
    </div>
  )
}

function ContactRow({ icon, label, children }) {
  return (
    <div className="flex gap-3.5">
      <span className="mt-[3px] flex-none text-sage">
        <Icon name={icon} size={18} strokeWidth={1.7} />
      </span>
      <div>
        <div className="mb-1.5 font-body text-[11.5px] font-bold tracking-[0.1em] text-gold">{label}</div>
        {children}
      </div>
    </div>
  )
}
