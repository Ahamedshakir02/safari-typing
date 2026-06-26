// A page section "band": sets the background tone and wraps content in the
// site's standard max-width container. Vertical padding is left to the caller
// (via `containerClassName`) so individual sections keep full control of rhythm.
const TONES = {
  cream: 'bg-cream',
  sunken: 'bg-cream-100',
  raised: 'bg-cream-50',
  ink: 'bg-ink text-paper',
}

export default function Section({
  as: Tag = 'section',
  tone = 'cream',
  className = '',
  containerClassName = '',
  children,
  ...rest
}) {
  return (
    <Tag className={`${TONES[tone] ?? ''} ${className}`} {...rest}>
      <div className={`mx-auto max-w-content px-5 sm:px-7 ${containerClassName}`}>{children}</div>
    </Tag>
  )
}
