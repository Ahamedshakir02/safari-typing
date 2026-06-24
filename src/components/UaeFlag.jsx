import { useId } from 'react'

/**
 * Flag of the United Arab Emirates — inline SVG so it stays crisp at any size.
 * Red hoist band + green / white / black horizontal stripes, with a faint
 * rounded border. Used in the top utility bar and the hero, the way UAE
 * government-service sites display the national flag. Decorative-but-labelled.
 */
export default function UaeFlag({ height = 16, className = '' }) {
  // Strip the colons React's useId() includes — they're unsafe inside url(#…).
  const id = `uae-${useId().replace(/:/g, '')}`
  const width = Math.round(height * 1.55)
  return (
    <svg
      viewBox="0 0 32 20"
      width={width}
      height={height}
      className={`shrink-0 ${className}`}
      role="img"
      aria-label="Flag of the United Arab Emirates"
    >
      <defs>
        <clipPath id={id}>
          <rect width="32" height="20" rx="2.5" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${id})`}>
        <rect x="8" width="24" height="6.667" fill="#00732F" />
        <rect x="8" y="6.667" width="24" height="6.666" fill="#FFFFFF" />
        <rect x="8" y="13.333" width="24" height="6.667" fill="#000000" />
        <rect width="8" height="20" fill="#CE1126" />
      </g>
      <rect
        x="0.5"
        y="0.5"
        width="31"
        height="19"
        rx="2.5"
        fill="none"
        stroke="#000000"
        strokeOpacity="0.12"
      />
    </svg>
  )
}
