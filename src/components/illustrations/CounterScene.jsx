/**
 * Flat vector "service counter" scene — original artwork in the brand palette
 * (logo blue + warm sand/cream). Used where the shop/counter photo used to be.
 * Renders as a full-bleed SVG that slices to cover its frame like a photo.
 */
export default function CounterScene({ className = '' }) {
  return (
    <svg
      viewBox="0 0 640 480"
      role="img"
      aria-label="Illustration of the Safari Typing Services counter — documents, a stamp and a service desk"
      className={`h-full w-full ${className}`}
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Background */}
      <rect width="640" height="480" fill="#eef1f8" />
      <rect y="372" width="640" height="108" fill="#e6e0d1" />

      {/* Brand arch window backdrop */}
      <path d="M236 250V168a84 84 0 0 1 168 0v82Z" fill="#d4def2" />
      <path d="M252 250v-82a68 68 0 0 1 136 0v82Z" fill="#f3f6fc" />
      <path d="M320 100v150M252 188h136" stroke="#c2cfe8" strokeWidth="5" strokeLinecap="round" />
      <circle cx="320" cy="150" r="26" fill="#f4d27a" />

      {/* Potted plant */}
      <path d="M126 372c-10-34-4-60 10-78-2 24 6 40 16 52" fill="#7d9b73" />
      <path d="M126 372c8-30 24-48 44-56-14 18-20 38-22 56" fill="#6c8a63" />
      <path d="M104 372h44l-6 40h-32Z" fill="#b6a888" />

      {/* Counter / desk */}
      <rect x="70" y="300" width="500" height="20" rx="7" fill="#3a6cbf" />
      <rect x="96" y="320" width="448" height="118" rx="6" fill="#1f54a6" />
      <rect x="96" y="320" width="448" height="118" rx="6" fill="#18437f" opacity=".0" />
      <path d="M150 320v118M490 320v118" stroke="#18437f" strokeWidth="4" />

      {/* Stack of documents on the counter */}
      <rect x="250" y="232" width="150" height="74" rx="8" fill="#ffffff" stroke="#dfe5ef" strokeWidth="2" transform="rotate(-5 325 269)" />
      <rect x="262" y="222" width="150" height="74" rx="8" fill="#ffffff" stroke="#dfe5ef" strokeWidth="2" />
      <path d="M278 244h118M278 262h118M278 280h78" stroke="#c6d0e2" strokeWidth="6" strokeLinecap="round" />
      <circle cx="404" cy="230" r="18" fill="#1f54a6" />
      <path d="M396 230l6 6 12-13" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />

      {/* Stamp */}
      <rect x="436" y="276" width="56" height="14" rx="5" fill="#ce1126" />
      <rect x="452" y="252" width="24" height="26" rx="5" fill="#b00f20" />
      <rect x="448" y="246" width="32" height="10" rx="4" fill="#ce1126" />
    </svg>
  )
}
