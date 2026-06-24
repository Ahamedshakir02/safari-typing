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
