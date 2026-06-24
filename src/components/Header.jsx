import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo.jsx'
import Arabic from './Arabic.jsx'
import SmartLink from './SmartLink.jsx'
import ServiceIcon from './ServiceIcon.jsx'
import MobileMenu from './MobileMenu.jsx'
import TopBar from './TopBar.jsx'
import { NAV_LINKS, CONTACT } from '../data/site.js'
import { waLink, telLink } from '../lib/wa.js'

export default function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false)
  }, [location.pathname, location.hash])

  const isActive = (to) => to === '/' ? location.pathname === '/' : location.pathname.startsWith(to)

  return (
    <>
      <header className="sticky top-0 z-[110] border-b border-navy/10 bg-white/95 shadow-sm backdrop-blur-md">
        <TopBar />
        <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-5 py-3 sm:px-8">
          {/* Brand lockup */}
          <Link to="/" aria-label="Safari Typing Services — home" className="flex items-center gap-3">
            <Logo size={44} eager className="shrink-0" />
            <span className="leading-tight">
              <span className="block font-display text-base font-semibold tracking-tight text-navy sm:text-lg">
                Safari Typing Services
              </span>
              <Arabic className="block text-xs text-muted sm:text-sm">سفاري لخدمات الطباعة</Arabic>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <SmartLink
                key={link.to}
                to={link.to}
                aria-current={isActive(link.to) ? 'page' : undefined}
                className={`font-body text-sm font-medium transition-colors hover:text-red ${
                  isActive(link.to) ? 'text-red' : 'text-navy/80'
                }`}
              >
                {link.label}
              </SmartLink>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <a
              href={telLink(CONTACT.phones[0].e164)}
              aria-label={`Call ${CONTACT.phones[0].display}`}
              className="tap hidden gap-2 rounded-full px-4 py-2 font-body text-sm font-semibold text-navy ring-1 ring-inset ring-navy/20 transition-colors hover:ring-navy/50 sm:inline-flex"
            >
              <ServiceIcon name="phone" size={16} /> Call
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="tap hidden gap-2 rounded-full bg-red px-4 py-2 font-body text-sm font-semibold text-white transition-colors hover:bg-red-600 sm:inline-flex"
            >
              <ServiceIcon name="whatsapp" size={16} /> WhatsApp
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="tap rounded-full text-navy lg:hidden"
            >
              <ServiceIcon name="menu" size={26} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  )
}
