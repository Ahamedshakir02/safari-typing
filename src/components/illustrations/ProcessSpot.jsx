/**
 * Small flat "spot" illustrations for the three-step "How it works" band.
 * `name`: 'chat' (tell us) · 'share' (send papers) · 'collect' (collect & carry on).
 * Original artwork in the brand palette; slices to cover its 16:10-ish frame.
 */
const SPOTS = {
  chat: (
    <g>
      {/* speech bubble */}
      <rect x="120" y="70" width="170" height="110" rx="22" fill="#1f54a6" />
      <path d="M150 178l4 34 30-26Z" fill="#1f54a6" />
      <circle cx="170" cy="125" r="9" fill="#fff" />
      <circle cx="205" cy="125" r="9" fill="#fff" />
      <circle cx="240" cy="125" r="9" fill="#fff" />
      {/* small reply bubble */}
      <rect x="248" y="150" width="70" height="48" rx="16" fill="#3a6cbf" />
    </g>
  ),
  share: (
    <g>
      {/* document */}
      <rect x="150" y="60" width="120" height="150" rx="12" fill="#fff" stroke="#dfe5ef" strokeWidth="2" />
      <path d="M168 92h84M168 112h84M168 132h60" stroke="#c6d0e2" strokeWidth="7" strokeLinecap="round" />
      {/* upload arrow badge */}
      <circle cx="262" cy="168" r="30" fill="#1f54a6" />
      <path d="M262 182v-28M250 166l12-12 12 12" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  ),
  collect: (
    <g>
      {/* folder */}
      <path d="M140 96h44l14 16h62a14 14 0 0 1 14 14v74a14 14 0 0 1-14 14H140a14 14 0 0 1-14-14v-90a14 14 0 0 1 14-14Z" fill="#1f54a6" />
      <rect x="126" y="120" width="148" height="88" rx="12" fill="#3a6cbf" />
      {/* check seal */}
      <circle cx="262" cy="92" r="26" fill="#ce1126" />
      <path d="M250 92l8 8 16-17" stroke="#fff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  ),
}

export default function ProcessSpot({ name = 'chat', className = '' }) {
  return (
    <svg
      viewBox="0 0 400 250"
      role="img"
      aria-label="Step Illustration"
      className={`h-full w-full ${className}`}
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="400" height="250" fill="#eef1f8" />
      {SPOTS[name] ?? SPOTS.chat}
    </svg>
  )
}
