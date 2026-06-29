import { waLink } from '../lib/wa.js'
import Icon from './Icon.jsx'

/**
 * Always-present floating WhatsApp button — the site's primary conversion path,
 * reachable from any page. Fixed bottom-right, respects the iOS safe area, and
 * sits above the page (but below the first-load loader).
 */
export default function WhatsAppButton() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat With Us On WhatsApp"
      className="fixed right-5 z-50 inline-flex items-center gap-2.5 rounded-full bg-uae-green px-[18px] py-3.5 font-body text-sm font-semibold text-white shadow-lift transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_10px_34px_rgba(0,122,61,0.4)] sm:right-7 bottom-[max(1.25rem,env(safe-area-inset-bottom))] sm:bottom-7"
    >
      <Icon name="whatsapp" size={22} />
      <span className="hidden sm:inline">WhatsApp Us</span>
    </a>
  )
}
