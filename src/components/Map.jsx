import { CONTACT } from '../data/site.js'

/**
 * Google Maps embed — no API key (uses the &output=embed search form).
 * Lazy-loaded so it never blocks first paint. Replace the query with the exact
 * place once the pin is verified (see CONTENT-NOTES.md).
 */
export default function Map() {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(CONTACT.mapsQuery)}&output=embed`
  return (
    <div className="overflow-hidden rounded-2xl border border-navy/8 shadow-card">
      <iframe
        title={`Map to ${CONTACT.brand}, ${CONTACT.address.full}`}
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-64 w-full border-0 sm:h-72"
        allowFullScreen
      />
    </div>
  )
}
