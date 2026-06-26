import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import Brand from './Brand.jsx'
import Icon from './Icon.jsx'
import { NAV_LINKS, CONTACT } from '../data/site.js'
import { SERVICE_GROUPS, getServiceBySlug } from '../data/content.js'
import { telLink, waLink } from '../lib/wa.js'

const primaryPhone = CONTACT.phones[0]

// Resolve the mega-menu groups once (slug → service object).
const MENU_GROUPS = SERVICE_GROUPS.map((g) => ({
  ...g,
  services: g.slugs.map(getServiceBySlug).filter(Boolean),
}))

const linkClass = ({ isActive }) =>
  `font-body text-[15px] font-medium transition-colors ${
    isActive ? 'text-ink' : 'text-soft hover:text-sage'
  }`

export default function Header() {
  const [open, setOpen] = useState(false) // mobile drawer
  const [megaOpen, setMegaOpen] = useState(false) // desktop services panel
  const [mobileServices, setMobileServices] = useState(false)
  const location = useLocation()

  // Close every menu on any route change.
  useEffect(() => {
    setOpen(false)
    setMegaOpen(false)
    setMobileServices(false)
  }, [location.pathname])

  return (
    <header
      className="sticky top-0 z-50 border-b border-line bg-cream/85 backdrop-blur-md"
      onMouseLeave={() => setMegaOpen(false)}
    >
      <nav className="mx-auto flex max-w-content items-center gap-6 px-5 py-[18px] sm:px-7">
        <Brand markSize={40} eager />

        {/* Desktop nav */}
        <div className="ml-auto hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) =>
            link.label === 'Services' ? (
              <div
                key={link.to}
                className="flex items-center"
                onMouseEnter={() => setMegaOpen(true)}
              >
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `inline-flex items-center gap-1 ${linkClass({ isActive })}`
                  }
                  aria-expanded={megaOpen}
                  onFocus={() => setMegaOpen(true)}
                >
                  {link.label}
                  <Icon
                    name="arrow"
                    size={13}
                    strokeWidth={2}
                    className={`mt-px rotate-90 transition-transform duration-200 ${
                      megaOpen ? '-rotate-90' : ''
                    }`}
                  />
                </NavLink>
              </div>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={linkClass}
                onMouseEnter={() => setMegaOpen(false)}
              >
                {link.label}
              </NavLink>
            ),
          )}
        </div>

        {/* Call CTA */}
        <a
          href={telLink(primaryPhone.e164)}
          aria-label={`Call ${primaryPhone.display}`}
          className="ml-auto hidden items-center gap-2 rounded-full bg-sage px-[22px] py-[11px] font-body text-sm font-semibold text-paper transition-[transform,background-color,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:bg-sage-dark hover:shadow-lift sm:flex lg:ml-0"
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

      {/* Desktop mega-menu */}
      {megaOpen && (
        <div className="absolute inset-x-0 top-full hidden border-t border-line bg-cream-50 shadow-lift lg:block">
          <div className="mx-auto max-w-content px-5 py-8 sm:px-7">
            <div className="grid grid-cols-3 gap-x-8 gap-y-2">
              {MENU_GROUPS.map((group) => (
                <div key={group.label}>
                  <h3 className="mb-3 font-body text-[11.5px] font-bold uppercase tracking-[0.14em] text-gold">
                    {group.label}
                  </h3>
                  <div className="flex flex-col">
                    {group.services.map((s) => (
                      <Link
                        key={s.slug}
                        to={`/services/${s.slug}`}
                        onClick={() => setMegaOpen(false)}
                        className="group flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-cream-100"
                      >
                        <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-tag-bg text-sage transition-colors group-hover:bg-sage group-hover:text-paper">
                          <Icon name={s.icon} size={17} strokeWidth={1.8} />
                        </span>
                        <span className="flex flex-col">
                          <span className="font-body text-[14.5px] font-semibold text-ink">{s.title}</span>
                          <span className="font-body text-[12.5px] leading-snug text-soft">{s.blurb}</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 border-t border-line pt-4">
              <Link
                to="/services"
                onClick={() => setMegaOpen(false)}
                className="group inline-flex items-center gap-2 font-body text-[14.5px] font-semibold text-sage transition-colors hover:text-ink"
              >
                View all services
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Mobile dropdown */}
      {open && (
        <div className="max-h-[calc(100vh-72px)] overflow-y-auto border-t border-line bg-cream-50 lg:hidden">
          <div className="mx-auto flex max-w-content flex-col gap-1 px-5 py-4 sm:px-7">
            {NAV_LINKS.map((link) =>
              link.label === 'Services' ? (
                <div key={link.to}>
                  <div className="flex items-center">
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        `flex-1 rounded-xl px-3 py-3 font-body text-base font-medium transition-colors ${
                          isActive ? 'bg-cream-100 text-ink' : 'text-soft hover:bg-cream-50 hover:text-sage'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                    <button
                      type="button"
                      onClick={() => setMobileServices((v) => !v)}
                      aria-label={mobileServices ? 'Collapse services' : 'Expand services'}
                      aria-expanded={mobileServices}
                      className="tap rounded-xl px-3 py-3 text-soft"
                    >
                      <Icon
                        name="arrow"
                        size={16}
                        strokeWidth={2}
                        className={`rotate-90 transition-transform duration-200 ${
                          mobileServices ? '-rotate-90' : ''
                        }`}
                      />
                    </button>
                  </div>

                  {mobileServices && (
                    <div className="mb-1 ml-3 border-l border-line pl-3">
                      {MENU_GROUPS.map((group) => (
                        <div key={group.label} className="mb-1.5">
                          <div className="px-2 py-1.5 font-body text-[10.5px] font-bold uppercase tracking-[0.14em] text-gold">
                            {group.label}
                          </div>
                          {group.services.map((s) => (
                            <NavLink
                              key={s.slug}
                              to={`/services/${s.slug}`}
                              className={({ isActive }) =>
                                `flex items-center gap-2.5 rounded-lg px-2 py-2 font-body text-[14.5px] transition-colors ${
                                  isActive ? 'text-sage' : 'text-soft hover:text-sage'
                                }`
                              }
                            >
                              <Icon name={s.icon} size={16} strokeWidth={1.8} />
                              {s.title}
                            </NavLink>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
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
              ),
            )}
            <div className="mt-2 flex gap-3">
              <a
                href={telLink(primaryPhone.e164)}
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-sage px-5 py-3 font-body text-sm font-semibold text-paper transition-shadow duration-300 ease-out hover:shadow-lift"
              >
                <Icon name="phone" size={16} /> Call now
              </a>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-full border border-line bg-cream-50 px-5 py-3 font-body text-sm font-semibold text-ink transition-shadow duration-300 ease-out hover:shadow-lift"
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
