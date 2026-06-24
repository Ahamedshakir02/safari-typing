import Eyebrow from './Eyebrow.jsx'
import AccentLine from './AccentLine.jsx'

/**
 * Consistent section opening: eyebrow label + heading + optional intro, with an
 * optional UAE tricolour accent line under the heading. Pass `align="center"`
 * for centred headings; extra props (e.g. `data-reveal`) are forwarded to the
 * wrapper so it can be animated.
 */
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  accent = false,
  align = 'left',
  className = '',
  headingClassName = '',
  ...rest
}) {
  const center = align === 'center'
  return (
    <div className={`${center ? 'mx-auto max-w-[640px] text-center' : 'max-w-[640px]'} ${className}`} {...rest}>
      {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
      <h2 className={`text-[34px] font-medium leading-[1.08] sm:text-[46px] ${headingClassName}`}>{title}</h2>
      {accent && <AccentLine className={`mt-5 ${center ? 'mx-auto' : ''}`} />}
      {intro && <p className="mt-4 font-body text-lg leading-[1.55] text-soft">{intro}</p>}
    </div>
  )
}
