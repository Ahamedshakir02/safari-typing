/**
 * Flat vector "government documents" scene — original artwork in the brand
 * palette (logo blue + warm sand/cream): a government building with floating
 * document cards, a stamp and an approval check. Slices to cover its frame.
 */
export default function DocumentsScene({ className = '' }) {
  return (
    <svg
      viewBox="0 0 640 480"
      role="img"
      aria-label="Illustration Of Government Documents And A Ministry Building"
      className={`h-full w-full ${className}`}
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Background */}
      <rect width="640" height="480" fill="#eef1f8" />
      <rect y="392" width="640" height="88" fill="#e6e0d1" />

      {/* Government building */}
      <g>
        {/* pediment */}
        <path d="M250 150 320 108 390 150Z" fill="#1f54a6" />
        <path d="M250 150 320 108 390 150Z" fill="#18437f" opacity=".25" />
        {/* architrave */}
        <rect x="252" y="150" width="136" height="20" rx="3" fill="#3a6cbf" />
        {/* columns */}
        <rect x="262" y="172" width="16" height="120" rx="3" fill="#f3f6fc" />
        <rect x="294" y="172" width="16" height="120" rx="3" fill="#f3f6fc" />
        <rect x="330" y="172" width="16" height="120" rx="3" fill="#f3f6fc" />
        <rect x="362" y="172" width="16" height="120" rx="3" fill="#f3f6fc" />
        {/* base steps */}
        <rect x="244" y="292" width="152" height="14" rx="3" fill="#1f54a6" />
        <rect x="232" y="306" width="176" height="14" rx="3" fill="#18437f" />
        {/* flagpole + UAE flag */}
        <path d="M320 108v-30" stroke="#9aa3b2" strokeWidth="4" strokeLinecap="round" />
        <path d="M320 80h26v16h-26Z" fill="#ce1126" />
        <path d="M324 80h22v5h-22ZM324 85h22v6h-22ZM324 91h22v5h-22Z" fill="#fff" opacity=".0" />
      </g>

      {/* Floating document card (left) */}
      <g transform="rotate(-8 150 250)">
        <rect x="96" y="206" width="118" height="148" rx="10" fill="#ffffff" stroke="#dfe5ef" strokeWidth="2" />
        <rect x="114" y="226" width="40" height="40" rx="6" fill="#e3eaf6" />
        <path d="M168 232h30M168 246h30M114 286h82M114 304h82M114 322h60" stroke="#c6d0e2" strokeWidth="6" strokeLinecap="round" />
      </g>

      {/* Floating document card (right) */}
      <g transform="rotate(7 470 250)">
        <rect x="426" y="200" width="118" height="150" rx="10" fill="#ffffff" stroke="#dfe5ef" strokeWidth="2" />
        <path d="M444 224h82M444 244h82M444 264h82M444 284h54" stroke="#c6d0e2" strokeWidth="6" strokeLinecap="round" />
        {/* red ribbon seal */}
        <circle cx="500" cy="320" r="16" fill="#ce1126" />
        <path d="M492 332l-6 16 14-6 14 6-6-16" fill="#b00f20" />
      </g>

      {/* Approval check badge */}
      <circle cx="320" cy="356" r="30" fill="#1f54a6" />
      <path d="M306 356l9 9 19-20" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
