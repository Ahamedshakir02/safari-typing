import { CREDENTIALS } from '../data/content.js'

/**
 * "Official channels" trust strip — the real service logos (ICP, Tasheel, Amer,
 * MOFA) on uniform white cards so the mixed marks read consistently. Each logo's
 * `label` doubles as its accessible alt text. Shared by Home, Services and the
 * category pages so the strip stays identical everywhere.
 *
 * Drop a replacement file at the same `/logos/*` path (see CREDENTIALS in
 * content.js) to swap in an official asset.
 */
export default function Credentials({ className = '', ...rest }) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-3 ${className}`} {...rest}>
      {CREDENTIALS.map((c) => (
        <div
          key={c.label}
          className="flex h-[77px] w-[206px] items-center justify-center rounded-2xl border border-line bg-white px-5 transition-shadow duration-300 ease-out hover:shadow-lift"
        >
          <img
            src={c.logo}
            alt={c.label}
            className="max-h-12 max-w-full object-contain"
            loading="lazy"
            decoding="async"
          />
        </div>
      ))}
    </div>
  )
}
