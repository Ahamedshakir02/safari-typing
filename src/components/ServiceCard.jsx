import { Link } from 'react-router-dom'
import ServiceIcon from './ServiceIcon.jsx'
import Arabic from './Arabic.jsx'

/**
 * One service tile, linking to its detail page. `variant`:
 *   grid    -> homepage services grid (has the batch-reveal initial state)
 *   related -> compact card on a detail page
 * The `service-card` class is the hook the Services section animates.
 */
export default function ServiceCard({ service, variant = 'grid' }) {
  const compact = variant === 'related'
  return (
    <Link
      to={`/services/${service.slug}`}
      data-cursor="grow"
      className={`service-card group relative flex flex-col rounded-2xl border border-navy/8 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-navy/15 hover:shadow-cardHover ${
        compact ? 'p-5' : 'p-6'
      }`}
    >
      <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy/[0.06] text-navy transition-colors duration-300 group-hover:bg-red group-hover:text-white">
        <ServiceIcon name={service.icon} size={24} />
      </span>

      <h3 className={`font-display font-semibold text-navy ${compact ? 'text-lg' : 'text-xl'}`}>
        {service.name}
      </h3>
      <Arabic className="mt-0.5 text-sm text-muted">{service.nameAr}</Arabic>

      {!compact && (
        <p className="mt-2 font-body text-sm leading-relaxed text-muted">{service.subline}</p>
      )}

      <span className="mt-4 inline-flex items-center gap-1.5 font-body text-sm font-semibold text-red">
        Learn more
        <ServiceIcon
          name="arrowRight"
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </span>
    </Link>
  )
}
