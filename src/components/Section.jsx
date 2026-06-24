/** Semantic section wrapper with consistent horizontal padding + max width. */
export default function Section({
  id,
  as: Tag = 'section',
  className = '',
  innerClassName = '',
  labelledBy,
  children,
}) {
  return (
    <Tag id={id} aria-labelledby={labelledBy} className={`relative px-5 sm:px-8 ${className}`}>
      <div className={`mx-auto w-full max-w-content ${innerClassName}`}>{children}</div>
    </Tag>
  )
}
