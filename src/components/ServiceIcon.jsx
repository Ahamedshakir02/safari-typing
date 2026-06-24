// A single line-icon set keyed by name. Stroke = currentColor so the parent
// controls colour (navy by default). Used by service cards, Why-Us, socials and
// small UI affordances. 24x24 grid, Feather-ish weight.

const PATHS = {
  // --- services ---
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M3 12h18" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20a6 6 0 0112 0M16 6a3 3 0 010 6M18 20a6 6 0 00-3-5.2" />
    </>
  ),
  family: (
    <>
      <circle cx="7" cy="7" r="2.4" />
      <circle cx="17" cy="7" r="2.4" />
      <path d="M3 20v-1a4 4 0 014-4 4 4 0 014 4v1M13 20v-1a4 4 0 014-4 4 4 0 014 4v1" />
    </>
  ),
  building: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="1.5" />
      <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2M10 21v-3h4v3" />
    </>
  ),
  idcard: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="8.5" cy="11" r="2" />
      <path d="M13 9h5M13 12h5M6 15.5c.6-1.2 1.6-1.5 2.5-1.5s1.9.3 2.5 1.5" />
    </>
  ),
  medical: (
    <>
      <path d="M3 12h4l2-5 3 10 2.5-5H21" />
    </>
  ),
  contract: (
    <>
      <path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z" />
      <path d="M14 3v5h5M8 13h6M8 16.5h4" />
    </>
  ),
  stamp: (
    <>
      <path d="M9 9a3 3 0 116 0c0 2-1.5 2.5-1.5 4h-3C10 11.5 9 11 9 9z" />
      <path d="M5 21h14M6 18h12v-2H6z" />
    </>
  ),
  certificate: (
    <>
      <circle cx="12" cy="9" r="5" />
      <path d="M9 13.5L8 21l4-2 4 2-1-7.5M10 9l1.4 1.4L14 8" />
    </>
  ),
  translate: (
    <>
      <path d="M3 6h8M7 4v2c0 4-2 6-4 7M5 9c0 2 2 3.5 5 3.5" />
      <path d="M21 20l-3.5-8-3.5 8M15.2 17h4.6" />
    </>
  ),
  car: (
    <>
      <path d="M5 13l1.5-4.5A2 2 0 018.4 7h7.2a2 2 0 011.9 1.5L19 13M4 13h16v4h-2v-2H6v2H4z" />
      <circle cx="7.5" cy="16.5" r="1" />
      <circle cx="16.5" cy="16.5" r="1" />
    </>
  ),
  passport: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <circle cx="12" cy="10" r="3" />
      <path d="M9.5 19h5" />
    </>
  ),
  online: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
    </>
  ),
  umbrella: (
    <>
      <path d="M12 3a9 9 0 019 8H3a9 9 0 019-8z" />
      <path d="M12 11v7a2 2 0 01-4 0" />
    </>
  ),
  // --- why-us ---
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.4 2.3 2.4 14.7 0 17M12 3.5c-2.4 2.3-2.4 14.7 0 17" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3l8 4-8 4-8-4 8-4z" />
      <path d="M4 12l8 4 8-4M4 16l8 4 8-4" />
    </>
  ),
  chat: (
    <>
      <path d="M4 5h16v11H9l-4 3v-3H4z" />
      <path d="M8 9h8M8 12h5" />
    </>
  ),
  wallet: (
    <>
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M3 10h18M16.5 13.5h1.5" />
      <path d="M17 6V4.5A1.5 1.5 0 0015.5 3H6" />
    </>
  ),
  // --- ui / contact ---
  phone: <path d="M5 4h3l1.5 5-2 1.5a12 12 0 006 6l1.5-2 5 1.5v3a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </>
  ),
  mapPin: (
    <>
      <path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  check: <path d="M5 12.5l4.5 4.5L19 7" />,
  chevronDown: <path d="M6 9l6 6 6-6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  // --- socials ---
  whatsapp: (
    <path d="M12 3a9 9 0 00-7.7 13.6L3 21l4.6-1.2A9 9 0 1012 3zm0 2a7 7 0 11-3.6 13l-.4-.2-2.3.6.6-2.2-.2-.4A7 7 0 0112 5zm-2.4 3.3c-.2 0-.5.05-.7.3-.25.25-.9.85-.9 2 0 1.2.85 2.35 1 2.5.15.2 1.7 2.7 4.2 3.7 2 .8 2.4.65 2.85.6.45-.05 1.4-.55 1.6-1.1.2-.55.2-1 .15-1.1-.05-.1-.2-.15-.45-.3-.25-.15-1.4-.7-1.6-.75-.2-.1-.35-.1-.5.1s-.6.7-.7.85c-.15.15-.25.15-.5.05-.25-.1-1-.4-1.9-1.2-.7-.6-1.15-1.4-1.3-1.65-.15-.25 0-.35.1-.5.1-.1.25-.3.35-.45.1-.15.15-.25.25-.45.05-.15 0-.3-.05-.4-.05-.1-.5-1.25-.7-1.7-.15-.4-.35-.35-.5-.35z" />
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="16.8" cy="7.2" r="0.9" fill="currentColor" stroke="none" />
    </>
  ),
  facebook: <path d="M14.5 8.5H17V5.5h-2.5C12.6 5.5 11 7 11 9v2H9v3h2v6h3v-6h2.2l.5-3H14V9c0-.3.2-.5.5-.5z" />,
  tiktok: (
    <path d="M14 4c.4 2.2 1.8 3.7 4 4v3c-1.5 0-2.9-.5-4-1.3V15a5 5 0 11-5-5c.35 0 .7 0 1 .1v3.1a2 2 0 101.5 1.9V4z" />
  ),
}

// These glyphs are designed as solid shapes — fill them instead of stroking.
const FILLED = new Set(['whatsapp', 'facebook', 'tiktok'])

export default function ServiceIcon({ name, size = 24, className = '', strokeWidth = 1.6 }) {
  const content = PATHS[name]
  if (!content) return null
  const filled = FILLED.has(name)
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      fill={filled ? 'currentColor' : 'none'}
      stroke={filled ? 'none' : 'currentColor'}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {content}
    </svg>
  )
}
