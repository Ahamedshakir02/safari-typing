import Eyebrow from './Eyebrow.jsx'
import AccentLine from './AccentLine.jsx'
import GradientRule from './GradientRule.jsx'

/**
 * Consistent section opening: eyebrow label + heading + a rule + optional intro.
 * The rule defaults to the blue→red brand `GradientRule`; pass `accent` to swap
 * in the UAE tricolour `AccentLine`, or `rule={false}` to drop it entirely. Pass
 * `align="center"` for centred headings; extra props (e.g. `data-reveal`) are
 * forwarded to the wrapper so it can be animated.
 */
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  accent = false,
  rule = true,
  align = 'left',
  className = '',
  headingClassName = '',
  ...rest
}) {
  const center = align === 'center'
  const ruleClass = `mt-5 ${center ? 'mx-auto' : ''}`
  return (
    <div className={`${center ? 'mx-auto max-w-[640px] text-center' : 'max-w-[640px]'} ${className}`} {...rest}>
      {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
      <h2 className={`text-[34px] font-medium leading-[1.08] sm:text-[46px] ${headingClassName}`}>{title}</h2>
      {rule && (accent ? <AccentLine className={ruleClass} /> : <GradientRule className={ruleClass} />)}
      {intro && <p className="mt-4 font-body text-lg leading-[1.55] text-soft">{intro}</p>}
    </div>
  )
}
