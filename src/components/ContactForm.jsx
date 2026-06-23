import { useState } from 'react'
import ServiceIcon from './ServiceIcon.jsx'
import { SERVICES } from '../data/services.js'
import { buildWhatsAppLink } from '../lib/wa.js'

/**
 * WhatsApp-first lead form. No backend: it composes a pre-filled wa.me message
 * and opens WhatsApp. Real <label>s, tel inputmode, basic required validation.
 */
export default function ContactForm() {
  const [name, setName] = useState('')
  const [service, setService] = useState('')
  const [number, setNumber] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim() || !service) {
      setError('Please add your name and choose a service.')
      return
    }
    setError('')
    const serviceName = SERVICES.find((s) => s.slug === service)?.name || service
    const link = buildWhatsAppLink({ name: name.trim(), serviceName, number: number.trim() })
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  const field =
    'w-full rounded-xl border border-navy/15 bg-white px-4 py-3 font-body text-base text-ink outline-none transition-colors focus:border-navy/40'

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-navy/8 bg-white p-6 shadow-card sm:p-8">
      <h3 className="font-display text-xl font-semibold text-navy">Send us a message</h3>
      <p className="mt-1 font-body text-sm text-muted">
        Fill this in and we'll open WhatsApp with your details ready to send.
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
            WhatsApp number <span className="font-normal text-muted">(optional)</span>
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
    </form>
  )
}
