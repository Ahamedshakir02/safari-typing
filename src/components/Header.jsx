import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Brand from './Brand.jsx'
import Icon from './Icon.jsx'
import { NAV_LINKS, CONTACT } from '../data/site.js'
import { telLink, waLink } from '../lib/wa.js'

const primaryPhone = CONTACT.phones[0]

const linkClass = ({ isActive }) =>
  `font-body text-[15px] font-medium transition-colors ${
    isActive ? 'text-ink' : 'text-soft hover:text-sage'
  }`

export default function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  // Close the mobile menu on any route change.
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-content items-center gap-6 px-5 py-[18px] sm:px-7">
        <Brand markSize={40} eager />

        {/* Desktop nav */}
        <div className="ml-auto hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Call CTA */}
        <a
          href={telLink(primaryPhone.e164)}
          aria-label={`Call ${primaryPhone.display}`}
          className="ml-auto hidden items-center gap-2 rounded-full bg-sage px-[22px] py-[11px] font-body text-sm font-semibold text-paper shadow-soft transition-[transform,background-color,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:bg-sage-dark hover:shadow-lift sm:flex lg:ml-0"
        >
          <Icon name="phone" size={15} strokeWidth={1.9} />
          Call now
        </a>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="tap ml-auto rounded-full text-ink sm:ml-0 lg:hidden"
        >
          <Icon name={open ? 'close' : 'menu'} size={26} />
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="border-t border-line bg-cream/95 backdrop-blur-md lg:hidden">
          <div className="mx-auto flex max-w-content flex-col gap-1 px-5 py-4 sm:px-7">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-3 font-body text-base font-medium transition-colors ${
                    isActive ? 'bg-cream-100 text-ink' : 'text-soft hover:bg-cream-50 hover:text-sage'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mt-2 flex gap-3">
              <a
                href={telLink(primaryPhone.e164)}
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-sage px-5 py-3 font-body text-sm font-semibold text-paper shadow-soft"
              >
                <Icon name="phone" size={16} /> Call now
              </a>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-full border border-line bg-cream-50 px-5 py-3 font-body text-sm font-semibold text-ink shadow-soft"
              >
                <Icon name="whatsapp" size={16} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
