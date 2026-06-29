// Decorative flowing UAE-flag ribbon, drawn as inline SVG (transparent, no
// watermark, crisp at any size). Four lengthwise stripes — red, green, white,
// black — follow one S-curve, with a soft drop-shadow for depth and a one-sided
// sheen for a 3D ribbon feel. Used in the dark CtaBlock corners.
// Purely decorative: aria-hidden + no pointer events. The gentle sway only runs
// when the user allows motion (motion-safe variant).

// Shared centreline of the ribbon's vertical S-wave.
const WAVE = 'M65 -8 C105 50 25 110 65 168 C105 226 25 286 65 392'

// Four stripes offset across the ribbon's width (stroke 20, gap 18 → slight
// overlap so no background shows through the seams). Painted left → right.
const STRIPES = [
  { dx: -27, color: '#ce1126' }, // uae-red
  { dx: -9, color: '#007a3d' }, // uae-green
  { dx: 9, color: '#ffffff' }, // white
  { dx: 27, color: '#1a1a1a' }, // uae-black
]

export default function FlagRibbon({ className = '' }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 130 380"
      fill="none"
      className={`origin-bottom motion-safe:animate-ribbonWave ${className}`}
    >
      <defs>
        <filter id="flagRibbonShadow" x="-40%" y="-20%" width="180%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#0b1626" floodOpacity="0.45" />
        </filter>
        {/* One-sided highlight to fake a glossy ribbon surface. Kept subtle so
            the flag colours (esp. the leftmost red stripe) stay vivid. */}
        <linearGradient id="flagRibbonSheen" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.18" />
          <stop offset="0.5" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0.05" />
        </linearGradient>
        {/* Top fade so the ribbon dissolves instead of ending in a hard cut.
            On tall (desktop) panels the top is clipped off-panel anyway; on short
            mobile panels the flat top would otherwise show mid-panel and read as
            "broken" — this makes it look finished at any height. */}
        <linearGradient id="flagRibbonFade" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="380">
          <stop offset="0" stopColor="#000000" />
          <stop offset="0.26" stopColor="#ffffff" />
          <stop offset="1" stopColor="#ffffff" />
        </linearGradient>
        <mask id="flagRibbonMask">
          <rect x="-20" y="-20" width="170" height="420" fill="url(#flagRibbonFade)" />
        </mask>
      </defs>

      <g mask="url(#flagRibbonMask)">
        <g filter="url(#flagRibbonShadow)">
          {STRIPES.map((s) => (
            <path
              key={s.dx}
              d={WAVE}
              transform={`translate(${s.dx} 0)`}
              stroke={s.color}
              strokeWidth="20"
              strokeLinecap="round"
              fill="none"
            />
          ))}
          {/* Sheen overlay across the full ribbon width. */}
          <path d={WAVE} stroke="url(#flagRibbonSheen)" strokeWidth="74" strokeLinecap="round" fill="none" />
        </g>
      </g>
    </svg>
  )
}
