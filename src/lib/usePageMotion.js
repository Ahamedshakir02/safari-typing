import { useRef } from 'react'
import { gsap, useGSAP } from './gsap.js'

/**
 * Shared page-entrance + scroll motion. Returns a ref to spread on a page's
 * root element; everything inside is animated by tagging elements with data
 * attributes:
 *   - [data-hero]          staggered entrance (plays as the loader hands off,
 *                          or immediately on client-side navigation)
 *   - [data-reveal]        fade-up once scrolled into view
 *   - [data-reveal-group]  its direct children fade-up in a stagger
 *   - [data-services] / [data-service-row]  sequenced card/row reveal
 *   - [data-count]         count-up of any leading number (suffix preserved)
 *   - [data-quote]         editorial top-to-bottom mask wipe
 *   - [data-hero-img]      gentle parallax (desktop only)
 *
 * All motion is gated through gsap.matchMedia(): reduced-motion users get the
 * static (already-visible) page, mobile gets light reveals only, desktop adds
 * the parallax. useGSAP reverts everything on unmount.
 */
export function usePageMotion() {
  const root = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add(
        {
          reduce: '(prefers-reduced-motion: reduce)',
          desktop: '(prefers-reduced-motion: no-preference) and (min-width: 768px)',
          mobile: '(prefers-reduced-motion: no-preference) and (max-width: 767px)',
        },
        (ctx) => {
          if (ctx.conditions.reduce) return

          const { desktop } = ctx.conditions
          const q = gsap.utils.selector(root)

          // ---- Header / hero entrance — plays as the brand loader hands off,
          // or immediately on client-side navigation (loader already done) ----
          let startHero
          const heroItems = q('[data-hero] > *')
          if (heroItems.length) {
            gsap.set(heroItems, { opacity: 0, y: 28 })
            const heroTl = gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } })
            heroTl.to(heroItems, { opacity: 1, y: 0, duration: 0.85, stagger: 0.1 })

            startHero = () => heroTl.play()
            if (window.__safariLoaderDone) startHero()
            else window.addEventListener('safari:loader-done', startHero, { once: true })
          }

          // ---- Generic scroll reveals ----
          // clearProps:'transform' removes the inline transform GSAP leaves
          // behind, so CSS hover transforms (card/button lift) still work.
          q('[data-reveal]').forEach((el) => {
            gsap.from(el, {
              opacity: 0,
              y: 32,
              duration: 0.9,
              ease: 'power3.out',
              clearProps: 'transform',
              scrollTrigger: { trigger: el, start: 'top 85%', once: true },
            })
          })

          // ---- Staggered groups ----
          q('[data-reveal-group]').forEach((group) => {
            gsap.from(group.children, {
              opacity: 0,
              y: 32,
              duration: 0.8,
              ease: 'power3.out',
              stagger: 0.12,
              clearProps: 'transform',
              scrollTrigger: { trigger: group, start: 'top 82%', once: true },
            })
          })

          // ---- Card/row sequences ----
          const services = q('[data-services]')[0]
          if (services) {
            gsap.from(q('[data-service-row]'), {
              opacity: 0,
              y: 24,
              duration: 0.7,
              ease: 'power3.out',
              clearProps: 'transform',
              scrollTrigger: { trigger: services, start: 'top 80%', once: true },
            })
          }

          // ---- Count-up stats (numeric values only) ----
          q('[data-count]').forEach((el) => {
            const finalText = el.textContent
            const match = finalText.match(/^([\d.,]+)(.*)$/)
            if (!match) {
              gsap.from(el, {
                opacity: 0,
                y: 16,
                duration: 0.7,
                ease: 'power2.out',
                scrollTrigger: { trigger: el, start: 'top 88%', once: true },
              })
              return
            }
            const target = parseFloat(match[1].replace(/,/g, ''))
            const suffix = match[2]
            const counter = { v: 0 }
            el.textContent = '0' + suffix
            gsap.to(counter, {
              v: target,
              duration: 1.6,
              ease: 'power2.out',
              scrollTrigger: { trigger: el, start: 'top 88%', once: true },
              onUpdate: () => {
                el.textContent = Math.round(counter.v).toLocaleString('en-US') + suffix
              },
              onComplete: () => {
                el.textContent = finalText
              },
            })
          })

          // ---- Pull quote: an editorial top-to-bottom mask wipe ----
          const quote = q('[data-quote]')[0]
          if (quote) {
            gsap.fromTo(
              quote,
              { opacity: 0, y: 30, clipPath: 'inset(0 0 100% 0)' },
              {
                opacity: 1,
                y: 0,
                clipPath: 'inset(0 0 0% 0)',
                duration: 1.1,
                ease: 'power3.out',
                scrollTrigger: { trigger: quote, start: 'top 80%', once: true },
              }
            )
          }

          // ---- Image parallax (desktop only) ----
          if (desktop) {
            const heroImg = q('[data-hero-img]')[0]
            if (heroImg) {
              gsap.fromTo(
                heroImg,
                { yPercent: -4 },
                {
                  yPercent: 4,
                  ease: 'none',
                  scrollTrigger: {
                    trigger: heroImg.parentElement,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                  },
                }
              )
            }
          }

          // Drop the loader listener if this branch reverts before it fired.
          return () => {
            if (startHero) window.removeEventListener('safari:loader-done', startHero)
          }
        }
      )

      return () => mm.revert()
    },
    { scope: root }
  )

  return root
}
