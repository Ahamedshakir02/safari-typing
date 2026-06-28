// Serves a WebP version of a raster image with the original PNG/JPG as fallback.
// Pass the original `src` (e.g. /photos/home-typing-center.png); the matching
// `.webp` sibling (generated at build time, max 1400px) is offered first.
//
// <picture> uses display:contents so it doesn't disturb layout — the <img>
// keeps behaving as the direct child of its aspect-ratio wrapper (h-full
// w-full object-contain/cover), so there's no CLS.
export default function Picture({ src, alt = '', className = '', ...rest }) {
  const webp = src.replace(/\.(png|jpe?g)$/i, '.webp')
  return (
    <picture className="contents">
      <source srcSet={webp} type="image/webp" />
      <img src={src} alt={alt} className={className} {...rest} />
    </picture>
  )
}
