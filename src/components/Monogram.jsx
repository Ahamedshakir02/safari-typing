/**
 * The ST monogram — single source of truth. Reused as the header brand mark,
 * the preloader animation, the footer mark and a faint recurring section motif.
 *
 * The red ring carries class `st-ring` so the Loader can stroke-draw it.
 * Pass `decorative` for the oversized background-watermark usage (aria-hidden).
 */
export default function Monogram({
  size = 48,
  className = '',
  decorative = false,
  title = 'Safari Typing Services',
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      role={decorative ? undefined : 'img'}
      aria-label={decorative ? undefined : title}
      aria-hidden={decorative ? true : undefined}
      focusable="false"
    >
      <circle cx="50" cy="50" r="46" className="st-fill" fill="#0B1F3A" />
      <circle
        cx="50"
        cy="50"
        r="46"
        className="st-ring"
        fill="none"
        stroke="#D7261E"
        strokeWidth="3"
      />
      <text
        x="50"
        y="52"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="'Space Grotesk Variable', 'Space Grotesk', sans-serif"
        fontWeight="700"
        fontSize="38"
        letterSpacing="1"
        fill="#F6F7F9"
      >
        ST
      </text>
    </svg>
  )
}
