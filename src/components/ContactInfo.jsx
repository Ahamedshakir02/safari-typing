import ServiceIcon from './ServiceIcon.jsx'
import { CONTACT } from '../data/site.js'
import { telLink, mailLink, waLink } from '../lib/wa.js'

const Row = ({ icon, children }) => (
  <li className="flex items-start gap-3">
    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy/[0.06] text-navy">
      <ServiceIcon name={icon} size={18} />
    </span>
    <div className="font-body text-sm leading-relaxed text-ink/80">{children}</div>
  </li>
)

export default function ContactInfo() {
  return (
    <div className="rounded-2xl border border-navy/8 bg-white p-6 shadow-card sm:p-8">
      <h3 className="font-display text-xl font-semibold text-navy">Visit or contact us</h3>
      <ul className="mt-5 space-y-4">
        <Row icon="mapPin">
          <span className="font-medium text-navy">{CONTACT.address.line1}</span>
          <br />
          {CONTACT.address.city}, {CONTACT.address.country}
        </Row>

        <Row icon="phone">
          <div className="flex flex-col gap-0.5">
            {CONTACT.phones.map((p) => (
              <a key={p.e164} href={telLink(p.e164)} className="transition-colors hover:text-red">
                {p.display}
                <span className="ml-2 text-xs text-muted">{p.label}</span>
              </a>
            ))}
          </div>
        </Row>

        <Row icon="whatsapp">
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-red">
            {CONTACT.whatsapp.display} — WhatsApp
          </a>
        </Row>

        <Row icon="mail">
          <a href={mailLink()} className="transition-colors hover:text-red">
            {CONTACT.email}
          </a>
        </Row>

        <Row icon="clock">
          <div className="flex flex-col gap-0.5">
            {CONTACT.hours.map((h) => (
              <span key={h.days}>
                <span className="font-medium text-navy">{h.days}:</span> {h.time}
              </span>
            ))}
          </div>
        </Row>
      </ul>
    </div>
  )
}
