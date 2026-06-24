import Stat from '../components/Stat.jsx'
import ServiceIcon from '../components/ServiceIcon.jsx'
import { STATS, TRUST_BADGES } from '../data/site.js'

/**
 * Slim credibility band: accurate badges + count-up stats.
 * Stat numbers are placeholders — see the README "Content to confirm" list.
 */
export default function TrustStrip() {
  return (
    <section aria-label="Why people trust us" className="bg-mist px-5 py-10 sm:px-8">
      <div className="mx-auto max-w-content">
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-b border-navy/10 pb-8">
          {TRUST_BADGES.map((badge) => (
            <li
              key={badge}
              className="flex items-center gap-2 font-body text-sm font-medium text-navy/80"
            >
              <ServiceIcon name="check" size={16} className="text-red" />
              {badge}
            </li>
          ))}
        </ul>

        <dl className="mt-8 grid grid-cols-2 gap-6 text-center md:grid-cols-4">
          {STATS.map((s) => (
            <Stat key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </dl>
      </div>
    </section>
  )
}
