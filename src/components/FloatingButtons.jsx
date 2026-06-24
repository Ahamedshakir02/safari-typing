import { useEffect, useState } from 'react'
import ServiceIcon from './ServiceIcon.jsx'
import { CONTACT } from '../data/site.js'
import { waLink, telLink } from '../lib/wa.js'

/**
 * Always-available WhatsApp + Call buttons — the #1 conversion element on
 * mobile. Fades in (CSS transition) once the user scrolls past the first
 * viewport. Real wa.me / tel: links so they work without JS.
 */
export default function FloatingButtons() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.6)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-5 right-4 z-[120] flex flex-col gap-3 transition-all duration-300 sm:bottom-6 sm:right-6 ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="tap flex h-14 w-14 items-center justify-center rounded-full bg-red text-white shadow-float transition-transform duration-300 hover:scale-105"
      >
        <ServiceIcon name="whatsapp" size={28} />
      </a>
      <a
        href={telLink(CONTACT.phones[0].e164)}
        aria-label={`Call us on ${CONTACT.phones[0].display}`}
        className="tap flex h-14 w-14 items-center justify-center rounded-full bg-navy text-offwhite shadow-float transition-transform duration-300 hover:scale-105"
      >
        <ServiceIcon name="phone" size={24} />
      </a>
    </div>
  )
}
