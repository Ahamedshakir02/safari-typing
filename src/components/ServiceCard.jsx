import { Link } from 'react-router-dom'
import ServiceArt from './illustrations/ServiceArt.jsx'

/**
 * Service category card — illustration header + title + blurb + CTA. Shared by
 * the Home services grid and the /services group grids so the design stays
 * identical. Keeps the `data-service-row` hook for the staggered reveal and the
 * hover-only lift/shadow.
 */
export default function ServiceCard({ service, cta = 'Learn more' }) {
  const s = service
  return (
    <Link
      to={`/services/${s.slug}`}
      data-service-row
      className="group flex flex-col overflow-hidden rounded-[20px] border border-line bg-cream-50 transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-sage/40 hover:shadow-lift"
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line">
        <ServiceArt
          slug={s.slug}
          className="transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
        <span className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/85 font-display text-[15px] italic text-sage ring-1 ring-line">
          {s.n}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-[20px] font-medium">{s.title}</h3>
        <p className="font-body text-[14.5px] leading-[1.6] text-soft">{s.blurb}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 font-body text-[14px] font-semibold text-sage">
          {cta}
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  )
}
