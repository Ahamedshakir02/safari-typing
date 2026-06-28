import { useSyncExternalStore } from 'react'
import { Link, useLocation } from 'react-router-dom'

// `false` during SSR and the *first* client render, then `true` after
// hydration. This is the canonical React 18 "is hydrated" signal.
const subscribe = () => () => {}
const useHydrated = () => useSyncExternalStore(subscribe, () => true, () => false)

const strip = (p) => (p.length > 1 ? p.replace(/\/+$/, '') : p)

/**
 * Drop-in replacement for react-router's <NavLink> that is SSR-safe.
 *
 * <NavLink> computes `isActive` (and sets aria-current) from the router
 * location, which under static prerendering matches the server but NOT the
 * client's first hydration render (the prerendered page is "active", the
 * client's initial pass is not) — producing a hydration mismatch that bails the
 * whole tree to client rendering. Here active state is suppressed until the app
 * is hydrated, so server and first client render agree; the active styling then
 * applies a tick later. Trailing slashes are normalised so nested-dirStyle URLs
 * (/about/) still match `to="/about"`.
 */
export default function NavItem({ to, end = false, className, children, ...rest }) {
  const hydrated = useHydrated()
  const { pathname } = useLocation()

  const here = strip(pathname)
  const target = strip(to)
  const isActive = hydrated && (end ? here === target : here === target || here.startsWith(target + '/'))

  const resolved = typeof className === 'function' ? className({ isActive }) : className

  return (
    <Link to={to} aria-current={isActive ? 'page' : undefined} className={resolved} {...rest}>
      {children}
    </Link>
  )
}
