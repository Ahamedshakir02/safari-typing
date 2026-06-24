// Small, correctly-proportioned UAE flag (2:1). Red hoist band + green/white/
// black stripes. Decorative national accent used in the hero trust line and
// footer. Width is set by the caller via className (e.g. `w-6`).
export default function UaeFlag({ className = '', title = 'United Arab Emirates' }) {
  return (
    <svg
      viewBox="0 0 24 12"
      role="img"
      aria-label={title}
      className={`inline-block h-auto overflow-hidden rounded-[2px] ring-1 ring-black/10 ${className}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <rect x="0" y="0" width="6" height="12" fill="#ce1126" />
      <rect x="6" y="0" width="18" height="4" fill="#007a3d" />
      <rect x="6" y="4" width="18" height="4" fill="#ffffff" />
      <rect x="6" y="8" width="18" height="4" fill="#1a1a1a" />
    </svg>
  )
}
