/**
 * Scoped RTL helper. The document stays LTR English; Arabic appears as accents
 * (brand lockup, service names, some reviews). Wrapping only the Arabic fragment
 * keeps layout from mirroring and loads the Arabic font only where used.
 */
export default function Arabic({ as: Tag = 'span', className = '', children, ...rest }) {
  return (
    <Tag dir="rtl" lang="ar" className={`font-arabic ${className}`} {...rest}>
      {children}
    </Tag>
  )
}
