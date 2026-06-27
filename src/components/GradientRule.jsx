// Slim blue→red brand rule — the logo's two colours (sage blue → gold red)
// blended into one divider. The default decorative line under section
// headings; the UAE tricolour `AccentLine` is the opt-in national variant.
export default function GradientRule({ className = '' }) {
  return (
    <span
      aria-hidden="true"
      className={`block h-[3px] w-16 rounded-full bg-gradient-to-r from-sage to-gold ${className}`}
    />
  )
}
