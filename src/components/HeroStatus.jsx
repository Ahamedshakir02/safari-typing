import { useEffect, useRef, useState } from 'react'
import { gsap, useGSAP } from '../lib/gsap.js'
import Icon from './Icon.jsx'
import { CONTACT } from '../data/site.js'
import { getOpenStatus } from '../lib/hours.js'

/**
 * Live hero status row — replaces the old static flag ribbon + plain location
 * line at the top of the home hero. Shows whether the counter is open right now
 * (computed in UAE time from the real opening hours) with a soft "sonar" pulse
 * on the dot, plus the location as a tap-through to Google Maps. Re-checks every
 * minute so it stays honest if the page is left open across an opening time.
 */
export default function HeroStatus({ className = '' }) {
  const root = useRef(null)
  const [status, setStatus] = useState(getOpenStatus)

  useEffect(() => {
    const id = setInterval(() => setStatus(getOpenStatus()), 60_000)
    return () => clearInterval(id)
  }, [])

  // Sonar pulse on the live dot — GSAP so it reverts cleanly on unmount and is
  // skipped for reduced-motion users. Re-runs whenever open/closed flips.
  useGSAP(
    () => {
      if (!status.open) return
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
      gsap.fromTo(
        '[data-pulse]',
        { scale: 1, opacity: 0.5 },
        { scale: 2.8, opacity: 0, duration: 1.8, ease: 'power2.out', repeat: -1 }
      )
    },
    { scope: root, dependencies: [status.open], revertOnUpdate: true }
  )

  const dot = status.open ? 'bg-uae-green' : 'bg-gold'

  return (
    <div ref={root} className={`flex flex-wrap items-center justify-center gap-2.5 ${className}`}>
      {/* Live open / closed pill */}
      <span className="inline-flex items-center gap-2 rounded-full border border-line bg-cream-50 px-3.5 py-[7px] font-body text-[13px] shadow-soft">
        <span className="relative flex h-2 w-2 items-center justify-center">
          {status.open && <span data-pulse className={`absolute h-2 w-2 rounded-full ${dot}`} />}
          <span className={`relative h-2 w-2 rounded-full ${dot}`} />
        </span>
        <span className="font-semibold text-ink">{status.label}</span>
        <span className="text-soft">· {status.detail}</span>
      </span>

      {/* Location → Google Maps */}
      <a
        href={CONTACT.mapsLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-1.5 rounded-full border border-line bg-cream-50 px-3.5 py-[7px] font-body text-[13px] text-soft transition-colors hover:text-ink"
      >
        <Icon name="pin" size={14} className="text-sage" />
        <span>
          {CONTACT.address.line1} · {CONTACT.address.city}
        </span>
      </a>
    </div>
  )
}
