import { CREDENTIALS } from '../data/content.js'

/**
 * "Official channels" trust strip — the real service logos (ICP, Tasheel, Amer,
 * MOFA…) on uniform white cards so the mixed marks read consistently. Each
 * logo's `label` doubles as its accessible alt text. Shared by Home, Services
 * and the category pages so the strip stays identical everywhere.
 *
 * The logos scroll as two opposing marquee rows (top → right, bottom → left) so
 * the strip stays tidy however many marks are added — just append to CREDENTIALS
 * in content.js (drop the asset at the same `/logos/*` path). The track holds two
 * copies of each row for a seamless loop; the duplicate set is aria-hidden, the
 * rows pause on hover, and under prefers-reduced-motion (index.css) they collapse
 * back to a static centred wrap.
 */
// Per-shape size caps so logos with very different aspect ratios (icp is 7.8:1,
// amer is 0.5:1, the square emblems are 1:1) all read at a similar optical size.
// Compact/square marks get more height; long wordmarks are held by width.
const LOGO_SIZE = {
  ultrawide: 'max-h-10 max-w-[156px]',
  wide: 'max-h-[50px] max-w-[140px]',
  tall: 'max-h-[60px] max-w-[122px]',
}

function LogoCard({ c, dup = false }) {
  return (
    <div
      aria-hidden={dup || undefined}
      className="mx-1.5 flex h-[84px] w-[206px] shrink-0 items-center justify-center rounded-2xl border border-line bg-white px-5 transition-shadow duration-300 ease-out hover:shadow-lift"
    >
      <img
        src={c.logo}
        alt={dup ? '' : c.label}
        className={`object-contain ${c.cls ?? LOGO_SIZE[c.box] ?? LOGO_SIZE.wide}`}
        loading="lazy"
        decoding="async"
      />
    </div>
  )
}

function MarqueeRow({ items, reverse = false }) {
  return (
    <div className="cred-row group relative overflow-hidden [-webkit-mask-image:linear-gradient(to_right,transparent,#000_7%,#000_93%,transparent)] [mask-image:linear-gradient(to_right,transparent,#000_7%,#000_93%,transparent)]">
      <div
        className={`cred-track flex w-max animate-marquee group-hover:[animation-play-state:paused] ${
          reverse ? '[animation-direction:reverse]' : ''
        }`}
      >
        {items.map((c) => (
          <LogoCard key={c.label} c={c} />
        ))}
        {items.map((c) => (
          <LogoCard key={`${c.label}-dup`} c={c} dup />
        ))}
      </div>
    </div>
  )
}

export default function Credentials({ className = '', ...rest }) {
  const mid = Math.ceil(CREDENTIALS.length / 2)
  const rowOne = CREDENTIALS.slice(0, mid)
  const rowTwo = CREDENTIALS.slice(mid)

  return (
    <div className={`flex w-full flex-col gap-3 ${className}`} {...rest}>
      <MarqueeRow items={rowOne} reverse />
      <MarqueeRow items={rowTwo} />
    </div>
  )
}
