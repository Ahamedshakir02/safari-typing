import Icon from './Icon.jsx'

/**
 * A labelled image slot. While the client has no photo, it renders a clearly
 * marked placeholder; pass `src` once a real image is available and it renders
 * that instead. `arch` applies the brand's arch radius. Extra props (e.g.
 * `data-hero-img` for parallax) are forwarded to the inner fill element.
 */
export default function ImagePlaceholder({
  label = 'Image placeholder',
  sublabel = 'Add a photo here',
  aspect = 'aspect-[16/9]',
  arch = false,
  src,
  alt = '',
  frameClassName = '',
  className = '',
  ...rest
}) {
  const radius = arch ? 'rounded-[28px] sm:rounded-[280px_280px_28px_28px]' : 'rounded-[24px]'

  return (
    <div className={`overflow-hidden border border-line ${radius} ${frameClassName}`}>
      {src ? (
        <img
          src={src}
          alt={alt}
          className={`${aspect} w-full object-cover ${className}`}
          loading="lazy"
          decoding="async"
          {...rest}
        />
      ) : (
        <div
          role="img"
          aria-label={`${label} — placeholder`}
          className={`flex ${aspect} w-full flex-col items-center justify-center bg-cream-100 text-center ${className}`}
          {...rest}
        >
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-line bg-cream-50 text-sage">
            <Icon name="image" size={24} strokeWidth={1.6} />
          </span>
          <div className="mt-3.5 font-body text-[12.5px] font-semibold uppercase tracking-[0.12em] text-gold">
            {label}
          </div>
          <div className="mt-0.5 font-body text-[12.5px] text-soft">{sublabel}</div>
        </div>
      )}
    </div>
  )
}
