import { useEffect, useState } from 'react'

/**
 * First-load brand loader: the Safari logo lockup + a determinate progress bar
 * with a live percentage. The bar eases toward ~90% while the page loads, then
 * completes to 100% on window.load (with a short minimum so it never flashes and
 * a fallback so it never hangs), fades out and unmounts. Shows once per full page
 * load, not per route.
 */
export default function SiteLoader() {
  const [done, setDone] = useState(false)
  const [gone, setGone] = useState(false)
  const [progress, setProgress] = useState(8)

  // Ease the progress toward ~90% while we wait for the window to finish loading.
  useEffect(() => {
    const id = setInterval(() => {
      setProgress((p) => (p >= 90 ? p : p + Math.max(0.6, (90 - p) * 0.07)))
    }, 110)
    return () => clearInterval(id)
  }, [])

  // Complete + fade out after load (or a fallback timeout).
  useEffect(() => {
    let fallback
    const finish = () => {
      setProgress(100)
      setDone(true)
      // Let the hero (and any other entrance animation) start as the loader
      // fades. A flag covers the case where the loader finished before the
      // listener was attached.
      window.__safariLoaderDone = true
      window.dispatchEvent(new Event('safari:loader-done'))
    }
    if (document.readyState === 'complete') {
      fallback = setTimeout(finish, 600)
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

  const pct = Math.round(progress)

  return (
    <div className={`site-loader${done ? ' is-done' : ''}`} aria-hidden="true">
      <div className="loader-brand">
        <img className="loader-logo" src="/safari-mark.svg" alt="" />
        <span className="loader-wordmark">
          <span className="loader-name">Safari</span>
          <span className="loader-sub">TYPING SERVICES</span>
        </span>
      </div>
      <div className="loader-track">
        <div className="loader-bar" style={{ width: `${pct}%` }} />
      </div>
      <div className="loader-pct">{pct}%</div>
    </div>
  )
}
