import { useNavigate, useLocation } from 'react-router-dom'
import { scrollToId } from '../lib/scrollToId.js'

/**
 * One link component for all nav. Handles three cases:
 *  - "/contact"        -> normal route navigation
 *  - "/#services"      -> on home, smooth-scroll via Lenis; elsewhere, navigate
 *                         home with the hash (ScrollManager finishes the scroll)
 *  - "#services"       -> same-page anchor on the current route
 */
export default function SmartLink({ to, children, onNavigate, className = '', ...rest }) {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const [path, id] = to.split('#')
  const targetPath = path || '/'

  const handleClick = (e) => {
    onNavigate?.()
    if (!id) {
      // Plain route — let react-router handle it.
      e.preventDefault()
      navigate(targetPath)
      return
    }
    e.preventDefault()
    if (pathname === targetPath) {
      scrollToId(id)
    } else {
      navigate(`${targetPath}#${id}`)
    }
  }

  return (
    <a href={to} onClick={handleClick} className={className} {...rest}>
      {children}
    </a>
  )
}
