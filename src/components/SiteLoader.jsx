import { useEffect, useState } from 'react'

/**
 * First-load brand beat: the Safari logo lockup over an indeterminate bar.
 *
 * This is deliberately NOT a progress meter. Every route is prerendered, so the
 * real headline and Call button are in the HTML and paint within a few hundred
 * milliseconds — there is no meaningful "loading" left to report, and a
 * percentage here could only ever be theatre. It shows a short brand moment,
 * then gets out of the way.
 *
 * The one thing worth waiting for is webfonts: the hero is type, not imagery,
 * so a late font swap is what would otherwise reflow the headline mid entrance
 * animation. Held between MIN_HOLD_MS (so it can't strobe on a warm cache) and
 * MAX_HOLD_MS (so a slow network never turns it into a wall).
 *
 * Shows once per full page load, not per route.
 */

// Never flash: below this the loader reads as a glitch rather than a beat.
const MIN_HOLD_MS = 250
// Never block: the content behind this has almost always painted already, so
// the cap matters more than the thing being awaited.
const MAX_HOLD_MS = 600

export default function SiteLoader() {
  const [done, setDone] = useState(false)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    const start = performance.now()
    let settled = false
    let minTimer

    const finish = () => {
      if (settled) return
      settled = true
      setDone(true)
      // The hero entrance animation is gated on this — usePageMotion listens
      // for the event, and reads the flag for the case where the loader
      // finished before the listener was attached. Both must always fire.
      window.__safariLoaderDone = true
      window.dispatchEvent(new Event('safari:loader-done'))
    }

    // Hold for the remainder of the minimum, then go.
    const finishAfterMin = () => {
      if (settled) return
      const waited = performance.now() - start
      if (waited >= MIN_HOLD_MS) finish()
      else minTimer = setTimeout(finish, MIN_HOLD_MS - waited)
    }

    // Fonts are the real signal. `document.fonts.ready` resolves immediately on
    // a warm cache, which is why the minimum hold exists.
    const fonts = document.fonts ? document.fonts.ready : Promise.resolve()
    fonts.then(finishAfterMin)

    const cap = setTimeout(finish, MAX_HOLD_MS)

    return () => {
      settled = true
      clearTimeout(cap)
      clearTimeout(minTimer)
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
      <div className="loader-brand">
        <img className="loader-logo" src="/safari-mark.svg" alt="" />
        <span className="loader-wordmark">
          <span className="loader-name">Safari</span>
          <span className="loader-sub">TYPING SERVICES</span>
        </span>
      </div>
      <div className="loader-track">
        <div className="loader-bar" />
      </div>
    </div>
  )
}
