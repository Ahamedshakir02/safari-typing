// Inline SVG icon set used across the site (stroked line icons + the filled
// WhatsApp glyph), matching the approved designs. Single source of truth so the
// header, footer, contact page and floating call-out stay consistent.

const STROKE = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const PATHS = {
  phone: (
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  pin: (
    <>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  check: <path d="M5 12.5l4.5 4.5L19 6.5" />,
  star: (
    <path d="M12 3.5l2.6 5.3 5.8.8-4.2 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.4 9.6l5.8-.8L12 3.5Z" />
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5.2c0 4.3 2.9 7.4 7 9.3 4.1-1.9 7-5 7-9.3V6l-7-3Z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.6 2.6 2.6 15.4 0 18M12 3c-2.6 2.6-2.6 15.4 0 18" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3 3 7.5 12 12l9-4.5L12 3Z" />
      <path d="M3 12l9 4.5L21 12" />
      <path d="M3 16.5 12 21l9-4.5" />
    </>
  ),
  chat: (
    <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z" />
  ),
  wallet: (
    <>
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M3 10h18" />
      <circle cx="16.5" cy="14.5" r="1.1" />
    </>
  ),
  doc: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
      <path d="M14 3v5h5M9 13h6M9 17h5" />
    </>
  ),
  building: (
    <>
      <path d="M4 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16" />
      <path d="M14 9h4a2 2 0 0 1 2 2v10" />
      <path d="M8 7h2M8 11h2M8 15h2M2 21h20" />
    </>
  ),
  car: (
    <>
      <path d="M5 11.5 6.6 7A2 2 0 0 1 8.5 5.7h7A2 2 0 0 1 17.4 7L19 11.5" />
      <path d="M4 11.5h16v5H4v-5Z" />
      <path d="M7 16.5v1.5M17 16.5v1.5M7.5 14h.5M16 14h.5" />
    </>
  ),
  passport: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <circle cx="12" cy="10" r="2.6" />
      <path d="M9.5 16.5h5" />
    </>
  ),
  image: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="8.5" cy="9.5" r="1.5" />
      <path d="m3 17 5-4 4 3 3-2 6 5" />
    </>
  ),
}

export default function Icon({ name, size = 18, className = '', ...rest }) {
  if (name === 'whatsapp') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="currentColor"
        aria-hidden="true"
        className={className}
        {...rest}
      >
        <path d="M16.04 4C9.96 4 5.02 8.94 5.02 15.02c0 2.12.6 4.1 1.64 5.78L5 28l7.36-1.62a11 11 0 0 0 3.68.64h.01c6.08 0 11.02-4.94 11.02-11.02C27.07 8.94 22.13 4 16.04 4Zm6.46 15.77c-.27.76-1.58 1.45-2.18 1.54-.56.08-1.27.12-2.05-.13-.47-.15-1.08-.35-1.86-.69-3.27-1.41-5.4-4.7-5.57-4.92-.16-.22-1.33-1.77-1.33-3.38 0-1.6.84-2.39 1.14-2.72.3-.33.65-.41.87-.41.22 0 .43 0 .62.01.2.01.47-.08.73.56.27.65.92 2.25 1 2.41.08.16.13.35.02.56-.1.22-.16.35-.32.54-.16.19-.34.42-.48.56-.16.16-.33.34-.14.66.19.32.85 1.4 1.83 2.27 1.26 1.12 2.32 1.47 2.64 1.63.32.16.51.13.7-.08.19-.22.81-.94 1.03-1.27.22-.32.43-.27.73-.16.3.11 1.9.9 2.22 1.06.32.16.54.24.62.37.08.13.08.76-.19 1.49Z" />
      </svg>
    )
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      {...STROKE}
      {...rest}
    >
      {PATHS[name] ?? null}
    </svg>
  )
}
