import { useEffect, useState } from 'react'

/**
 * First-load brand loader: the floating logo + sliding progress bar from the
 * design. Fades out once the window has loaded (with a short minimum so it
 * doesn't flash), then unmounts. Shows once per full page load, not per route.
 */
export default function SiteLoader() {
  const [done, setDone] = useState(false)
  const [gone, setGone] = useState(false)

  // Trigger the fade-out after load (or a fallback timeout).
  useEffect(() => {
    let fallback
    const finish = () => {
      setDone(true)
      // Let the hero (and any other entrance animation) start as the loader
      // fades. A flag covers the case where the loader finished before the
      // listener was attached.
      window.__safariLoaderDone = true
      window.dispatchEvent(new Event('safari:loader-done'))
    }
    if (document.readyState === 'complete') {
      fallback = setTimeout(finish, 550)
    } else {
      window.addEventListener('load', finish)
      fallback = setTimeout(finish, 2200)
    }
    return () => {
      clearTimeout(fallback)
      window.removeEventListener('load', finish)
    }
  }, [])

  // Remove from the tree after the fade transition completes.
  useEffect(() => {
    if (!done) return
    const t = setTimeout(() => setGone(true), 750)
    return () => clearTimeout(t)
  }, [done])

  if (gone) return null

  return (
    <div className={`site-loader${done ? ' is-done' : ''}`} aria-hidden="true">
      <img className="loader-logo" src="/safari-logo.svg" alt="" />
      <div className="loader-track">
        <div className="loader-bar" />
      </div>
    </div>
  )
}
