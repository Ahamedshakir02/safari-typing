// A single statistic: large serif numeral + label. The numeral carries
// `data-count` so the Home page's count-up animation finds and animates it.
// `value` should be a display string (e.g. "14+", "5,000+", "Same day"); the
// count-up parses any leading number and leaves non-numeric values be.
export default function Stat({ value, label, accent = false, className = '' }) {
  return (
    <div className={className}>
      <div
        data-count
        className={`font-display text-[44px] leading-none sm:text-[52px] ${accent ? 'text-sage' : 'text-ink'}`}
      >
        {value}
      </div>
      <div className="mt-2 font-body text-[13px] uppercase tracking-[0.08em] text-gold">{label}</div>
    </div>
  )
}
