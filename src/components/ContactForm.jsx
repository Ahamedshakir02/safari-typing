import { useState } from 'react'
import ServiceIcon from './ServiceIcon.jsx'
import { SERVICES } from '../data/services.js'
import { buildWhatsAppLink, mailLink } from '../lib/wa.js'

/**
 * No-backend lead form. Composes a pre-filled wa.me message and opens WhatsApp
 * (the primary path), with a mailto fallback for people who prefer email.
 * Real <label>s, tel inputmode, basic required validation.
 */
export default function ContactForm() {
  const [name, setName] = useState('')
  const [service, setService] = useState('')
  const [number, setNumber] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const validate = () => {
    if (!name.trim() || !service) {
      setError('Please add your name and choose a service.')
      return false
    }
    setError('')
    return true
  }

  const serviceName = () => SERVICES.find((s) => s.slug === service)?.name || service

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    const link = buildWhatsAppLink({
      name: name.trim(),
      serviceName: serviceName(),
      number: number.trim(),
      message: message.trim(),
    })
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  const handleEmail = () => {
    if (!validate()) return
    const body = [
      `Name: ${name.trim()}`,
      `Service needed: ${serviceName()}`,
      number.trim() && `Contact number: ${number.trim()}`,
      message.trim() && `\n${message.trim()}`,
    ]
      .filter(Boolean)
      .join('\n')
    window.location.href = mailLink(undefined, {
      subject: `Enquiry: ${serviceName()}`,
      body,
    })
  }

  const field =
    'w-full rounded-xl border border-navy/15 bg-white px-4 py-3 font-body text-base text-ink outline-none transition-colors focus:border-navy/40'

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-navy/10 bg-white p-6 shadow-card sm:p-8"
    >
      <h3 className="font-display text-xl font-semibold text-navy">Send us a message</h3>
      <p className="mt-1 font-body text-sm text-muted">
        Fill this in and we'll open WhatsApp with your details ready to send — or email us instead.
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <label htmlFor="cf-name" className="mb-1.5 block font-body text-sm font-medium text-navy">
            Your name
          </label>
          <input
            id="cf-name"
            type="text"
            autoComplete="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={field}
            placeholder="e.g. Ahmed"
          />
        </div>

        <div>
          <label htmlFor="cf-service" className="mb-1.5 block font-body text-sm font-medium text-navy">
            Service needed
          </label>
          <div className="relative">
            <select
              id="cf-service"
              required
              value={service}
              onChange={(e) => setService(e.target.value)}
              className={`${field} appearance-none pr-10`}
            >
              <option value="" disabled>
                Choose a service…
              </option>
              {SERVICES.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.name}
                </option>
              ))}
            </select>
            <ServiceIcon
              name="chevronDown"
              size={18}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted"
            />
          </div>
        </div>

        <div>
          <label htmlFor="cf-number" className="mb-1.5 block font-body text-sm font-medium text-navy">
            Phone / WhatsApp number <span className="font-normal text-muted">(optional)</span>
          </label>
          <input
            id="cf-number"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className={field}
            placeholder="+971 5x xxx xxxx"
          />
        </div>

        <div>
          <label htmlFor="cf-message" className="mb-1.5 block font-body text-sm font-medium text-navy">
            Message <span className="font-normal text-muted">(optional)</span>
          </label>
          <textarea
            id="cf-message"
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`${field} resize-y`}
            placeholder="Tell us briefly what you need…"
          />
        </div>
      </div>

      {error && (
        <p role="alert" className="mt-3 font-body text-sm text-red">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="tap mt-6 w-full gap-2 rounded-full bg-red px-6 py-3.5 font-body text-base font-semibold text-white transition-colors hover:bg-red-600"
      >
        <ServiceIcon name="whatsapp" size={20} /> Send on WhatsApp
      </button>
      <button
        type="button"
        onClick={handleEmail}
        className="tap mt-3 w-full gap-2 rounded-full bg-transparent px-6 py-3 font-body text-sm font-semibold text-navy ring-1 ring-inset ring-navy/20 transition-colors hover:ring-navy/50"
      >
        <ServiceIcon name="mail" size={18} /> Email us instead
      </button>
    </form>
  )
}
