import Arabic from './Arabic.jsx'

/**
 * Consistent eyebrow + heading block. `id` is referenced by the section's
 * aria-labelledby.
 */
export default function SectionHeading({
  id,
  eyebrow,
  title,
  titleAr,
  intro,
  align = 'left',
  className = '',
}) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'
  return (
    <div className={`flex max-w-2xl flex-col ${alignment} ${className}`}>
      {eyebrow && (
        <span className="mb-3 inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-red">
          <span className="h-px w-6 bg-red" aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <h2 id={id} className="text-3xl text-navy sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {titleAr && (
        <Arabic className="mt-2 text-xl text-muted sm:text-2xl">{titleAr}</Arabic>
      )}
      {intro && <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-muted">{intro}</p>}
    </div>
  )
}
