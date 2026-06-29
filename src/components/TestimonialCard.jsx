import Icon from './Icon.jsx'

// Customer review card: star rating + quote + name. Arabic reviews render RTL.
export default function TestimonialCard({ stars = 5, text, name, lang, className = '' }) {
  return (
    <figure
      dir={lang === 'ar' ? 'rtl' : undefined}
      className={`flex h-full flex-col rounded-[22px] border border-line bg-cream-50 p-7 ${className}`}
    >
      <div className="mb-4 flex gap-1 text-sage" aria-label={`${stars} Out Of 5 Stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Icon
            key={i}
            name="star"
            size={16}
            className={i < stars ? 'fill-current' : 'text-line'}
          />
        ))}
      </div>
      <blockquote className="flex-1 font-display text-[19px] leading-[1.5] text-ink">{text}</blockquote>
      <figcaption className="mt-5 font-body text-[13.5px] font-semibold uppercase tracking-[0.06em] text-gold">
        {name}
      </figcaption>
    </figure>
  )
}
