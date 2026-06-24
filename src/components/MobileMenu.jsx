import { useEffect, useRef } from 'react'
import SmartLink from './SmartLink.jsx'
import ServiceIcon from './ServiceIcon.jsx'
import Arabic from './Arabic.jsx'
import Logo from './Logo.jsx'
import { NAV_LINKS, CONTACT } from '../data/site.js'
import { waLink, telLink } from '../lib/wa.js'

/**
 * Full-screen navigation overlay (mobile). Traps focus, closes on Escape, locks
 * page scroll and restores focus on close. No animation library — it just
 * appears; light enough for the older mobile audience.
 */
export default function MobileMenu({ open, onClose }) {
  const panel = useRef(null)

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'

    const node = panel.current
    const focusables = node.querySelectorAll('a[href], button')
    focusables[0]?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key === 'Tab' && focusables.length) {
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', onKey)

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[130] bg-navy text-offwhite lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
    >
      <div ref={panel} className="flex h-full flex-col px-6 pb-8 pt-5">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2.5">
            <Logo size={36} />
            <span className="font-display text-base font-semibold">Safari Typing</span>
          </span>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="tap -mr-2 rounded-full text-offwhite/80 hover:text-offwhite"
          >
            <ServiceIcon name="close" size={26} />
          </button>
        </div>

        <nav className="mt-10 flex flex-1 flex-col gap-1" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <SmartLink
              key={link.to}
              to={link.to}
              onNavigate={onClose}
              className="border-b border-white/10 py-4 font-display text-3xl font-medium tracking-tight"
            >
              {link.label}
            </SmartLink>
          ))}
        </nav>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="tap gap-2 rounded-full bg-red px-4 py-3 text-center font-body text-sm font-semibold text-white"
          >
            <ServiceIcon name="whatsapp" size={18} /> WhatsApp
          </a>
          <a
            href={telLink(CONTACT.phones[0].e164)}
            className="tap gap-2 rounded-full bg-white/12 px-4 py-3 text-center font-body text-sm font-semibold text-white ring-1 ring-inset ring-white/30"
          >
            <ServiceIcon name="phone" size={18} /> Call
          </a>
        </div>
        <Arabic className="mt-6 block text-center text-sm text-offwhite/60">
          سفاري لخدمات الطباعة — الشارقة
        </Arabic>
      </div>
    </div>
  )
}
