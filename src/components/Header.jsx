import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Monogram from './Monogram.jsx'
import Arabic from './Arabic.jsx'
import SmartLink from './SmartLink.jsx'
import ServiceIcon from './ServiceIcon.jsx'
import MobileMenu from './MobileMenu.jsx'
import { NAV_LINKS, CONTACT } from '../data/site.js'
import { waLink, telLink } from '../lib/wa.js'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[110] transition-all duration-300 ${
          scrolled
            ? 'border-b border-navy/8 bg-offwhite/85 backdrop-blur-md'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-5 py-3 sm:px-8">
          {/* Brand lockup */}
          <Link to="/" aria-label="Safari Typing Services — home" className="flex items-center gap-3">
            <Monogram size={42} className="shrink-0" />
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
                className="font-body text-sm font-medium text-navy/80 transition-colors hover:text-red"
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
