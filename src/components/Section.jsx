// A page section "band": sets the background tone and wraps content in the
// site's standard max-width container. Vertical padding is left to the caller
// (via `containerClassName`) so individual sections keep full control of rhythm.
// Slightly translucent so the flowing-flag backdrop (FlowingFlag.jsx) reads
// softly through every band while keeping text crisp and readable.
const TONES = {
  cream: 'bg-cream/80 backdrop-blur-[2px]',
  sunken: 'bg-cream-100/82 backdrop-blur-[2px]',
  raised: 'bg-cream-50/82 backdrop-blur-[2px]',
  ink: 'bg-ink/90 backdrop-blur-[2px] text-paper',
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
