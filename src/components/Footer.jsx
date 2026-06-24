import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import Arabic from './Arabic.jsx'
import SmartLink from './SmartLink.jsx'
import ServiceIcon from './ServiceIcon.jsx'
import { SERVICES } from '../data/services.js'
import { CONTACT, NAV_LINKS } from '../data/site.js'
import { waLink, telLink, mailLink } from '../lib/wa.js'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="bg-navy text-offwhite/80">
      <div className="mx-auto max-w-content px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand + contact */}
          <div className="md:col-span-4">
            <Link to="/" aria-label="Safari Typing Services — home" className="flex items-center gap-3">
              <Logo size={48} />
              <span className="leading-tight">
                <span className="block font-display text-lg font-semibold text-offwhite">
                  Safari Typing Services
                </span>
                <Arabic className="block text-sm text-offwhite/60">سفاري لخدمات الطباعة</Arabic>
              </span>
            </Link>
            <p className="mt-5 max-w-xs font-body text-sm leading-relaxed text-offwhite/60">
              Government typing & document services under one roof in Sharjah, UAE.
            </p>
            <div className="mt-5 flex gap-3">
              {CONTACT.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="tap h-10 w-10 rounded-full bg-white/10 text-offwhite transition-colors hover:bg-white/20"
                >
                  <ServiceIcon name={s.icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Services quick links */}
          <div className="md:col-span-4">
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-offwhite/50">
              Services
            </h3>
            <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="font-body text-sm text-offwhite/70 transition-colors hover:text-red"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + nav */}
          <div className="md:col-span-4">
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-offwhite/50">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-3 font-body text-sm">
              <li className="flex items-start gap-2.5">
                <ServiceIcon name="mapPin" size={18} className="mt-0.5 shrink-0 text-red" />
                <span className="text-offwhite/70">{CONTACT.address.full}</span>
              </li>
              {CONTACT.phones.map((p) => (
                <li key={p.e164} className="flex items-center gap-2.5">
                  <ServiceIcon name="phone" size={18} className="shrink-0 text-red" />
                  <a href={telLink(p.e164)} className="text-offwhite/70 transition-colors hover:text-offwhite">
                    {p.display}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-2.5">
                <ServiceIcon name="mail" size={18} className="shrink-0 text-red" />
                <a href={mailLink()} className="text-offwhite/70 transition-colors hover:text-offwhite">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <ServiceIcon name="whatsapp" size={18} className="shrink-0 text-red" />
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-offwhite/70 transition-colors hover:text-offwhite"
                >
                  WhatsApp us
                </a>
              </li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              {NAV_LINKS.map((link) => (
                <SmartLink
                  key={link.to}
                  to={link.to}
                  className="font-body text-sm text-offwhite/60 transition-colors hover:text-offwhite"
                >
                  {link.label}
                </SmartLink>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="font-body text-xs text-offwhite/50">
            © {year} Safari Typing Services. All rights reserved.
          </p>
          <p className="font-body text-xs text-offwhite/40">Nazir Plaza Building, Shop 4 · Sharjah, UAE</p>
        </div>
      </div>
    </footer>
  )
}
