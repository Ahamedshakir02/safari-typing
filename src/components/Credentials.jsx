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
// Per-shape size caps so logos with very different aspect ratios (icp is 7.8:1,
// amer is 0.5:1, the square emblems are 1:1) all read at a similar optical size.
// Compact/square marks get more height; long wordmarks are held by width.
const LOGO_SIZE = {
  ultrawide: 'max-h-10 max-w-[156px]',
  wide: 'max-h-[50px] max-w-[140px]',
  tall: 'max-h-[60px] max-w-[122px]',
}

export default function Credentials({ className = '', ...rest }) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-3 ${className}`} {...rest}>
      {CREDENTIALS.map((c) => (
        <div
          key={c.label}
          className="flex h-[84px] w-[206px] items-center justify-center rounded-2xl border border-line bg-white px-5 transition-shadow duration-300 ease-out hover:shadow-lift"
        >
          <img
            src={c.logo}
            alt={c.label}
            className={`object-contain ${c.cls ?? LOGO_SIZE[c.box] ?? LOGO_SIZE.wide}`}
            loading="lazy"
            decoding="async"
          />
        </div>
      ))}
    </div>
  )
}
