import { useDocumentMeta } from '../lib/useDocumentMeta.js'

/** Declarative head management. Renders nothing. */
export default function Seo(props) {
  useDocumentMeta(props)
  return null
}
