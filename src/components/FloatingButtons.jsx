import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import ServiceIcon from './ServiceIcon.jsx'
import { CONTACT } from '../data/site.js'
import { waLink, telLink } from '../lib/wa.js'

/**
 * Always-visible WhatsApp + Call buttons — the #1 conversion element on mobile.
 * Fades/scales in after the user scrolls past the first viewport. Real wa.me /
 * tel: links so they work without JS. Icon-only, so aria-labelled.
 */
export default function FloatingButtons() {
  const root = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      const past = window.scrollY > window.innerHeight * 0.6
      gsap.to(root.current, {
        autoAlpha: past ? 1 : 0,
        y: past ? 0 : 16,
        duration: 0.4,
        ease: 'power2.out',
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      ref={root}
      className="fixed bottom-5 right-4 z-[120] flex flex-col gap-3 sm:bottom-6 sm:right-6"
      style={{ opacity: 0, visibility: 'hidden' }}
    >
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        data-cursor="grow"
        className="tap flex h-14 w-14 items-center justify-center rounded-full bg-red text-white shadow-float transition-transform duration-300 hover:scale-105"
      >
        <ServiceIcon name="whatsapp" size={28} />
      </a>
      <a
        href={telLink(CONTACT.phones[0].e164)}
        aria-label={`Call us on ${CONTACT.phones[0].display}`}
        data-cursor="grow"
        className="tap flex h-14 w-14 items-center justify-center rounded-full bg-navy text-offwhite shadow-float transition-transform duration-300 hover:scale-105"
      >
        <ServiceIcon name="phone" size={24} />
      </a>
    </div>
  )
}
