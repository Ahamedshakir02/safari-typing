import { gsap } from 'gsap'
import { useGsap } from '../lib/useGsap.js'
import { splitWords } from '../lib/splitText.js'
import Monogram from '../components/Monogram.jsx'
import Arabic from '../components/Arabic.jsx'
import Button from '../components/Button.jsx'
import ServiceIcon from '../components/ServiceIcon.jsx'
import { HERO, CONTACT, TRUST_BADGES } from '../data/site.js'
import { waLink, telLink } from '../lib/wa.js'

export default function Hero() {
  const ref = useGsap(() => {
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const words = splitWords(ref.current.querySelector('.hero-headline'))

      // Intro plays as the preloader curtain lifts (~1.2s).
      const tl = gsap.timeline({ delay: 1.15 })
      tl.from(words, { yPercent: 115, duration: 1, ease: 'expo.out', stagger: 0.05 })
        .from('.hero-eyebrow', { y: 16, opacity: 0, duration: 0.6, ease: 'power3.out' }, 0.2)
        .from('.hero-sub', { y: 20, opacity: 0, duration: 0.7, ease: 'power3.out' }, '-=0.6')
        .from('.hero-cta', { y: 18, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' }, '-=0.45')
        .from('.hero-trust', { opacity: 0, duration: 0.6, ease: 'power2.out' }, '-=0.3')
        .from('.hero-cue', { opacity: 0, duration: 0.6 }, '-=0.2')

      // Content drifts up + fades as you scroll away.
      gsap.to('.hero-inner', {
        yPercent: -22,
        opacity: 0.15,
        ease: 'none',
        scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: true },
      })

      // Watermark monogram parallax (slower than content = depth).
      gsap.to('.hero-mark', {
        yPercent: 18,
        ease: 'none',
        scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: true },
      })

      // Magnetic primary CTA — desktop / fine pointer only.
      mm.add('(pointer: fine)', () => {
        const btn = ref.current.querySelector('.cta-magnetic')
        if (!btn) return
        const xTo = gsap.quickTo(btn, 'x', { duration: 0.4, ease: 'power3' })
        const yTo = gsap.quickTo(btn, 'y', { duration: 0.4, ease: 'power3' })
        const move = (e) => {
          const r = btn.getBoundingClientRect()
          xTo((e.clientX - (r.left + r.width / 2)) * 0.3)
          yTo((e.clientY - (r.top + r.height / 2)) * 0.3)
        }
        const leave = () => {
          xTo(0)
          yTo(0)
        }
        btn.addEventListener('pointermove', move)
        btn.addEventListener('pointerleave', leave)
        return () => {
          btn.removeEventListener('pointermove', move)
          btn.removeEventListener('pointerleave', leave)
        }
      })
    })
  })

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-offwhite px-5 pb-16 pt-28 sm:px-8 sm:pt-32"
    >
      {/* Soft brand wash */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy/[0.04] via-transparent to-transparent"
        aria-hidden="true"
      />
      {/* Parallax monogram watermark */}
      <Monogram
        decorative
        size={620}
        className="hero-mark pointer-events-none absolute -right-40 -top-24 opacity-[0.04] sm:-right-20"
      />

      <div className="hero-inner relative mx-auto w-full max-w-content">
        <span className="hero-eyebrow inline-flex items-center gap-2 rounded-full bg-navy/[0.06] px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.18em] text-navy">
          <span className="h-1.5 w-1.5 rounded-full bg-red" aria-hidden="true" />
          Sharjah · United Arab Emirates
        </span>

        <h1 className="hero-headline mt-6 max-w-4xl font-display text-[2.6rem] font-semibold leading-[1.02] tracking-tight text-navy sm:text-6xl md:text-7xl">
          {HERO.headline}
        </h1>

        <Arabic className="hero-sub mt-5 block text-xl text-red sm:text-2xl">{HERO.sublineAr}</Arabic>
        <p className="hero-sub mt-2 max-w-xl font-body text-base leading-relaxed text-muted sm:text-lg">
          {HERO.sublineEn}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button
            as="a"
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="lg"
            icon="whatsapp"
            className="hero-cta cta-magnetic"
          >
            WhatsApp Us
          </Button>
          <Button
            as="a"
            href={telLink(CONTACT.phones[0].e164)}
            variant="ghost"
            size="lg"
            icon="phone"
            className="hero-cta"
          >
            Call Now
          </Button>
        </div>

        <ul className="hero-trust mt-10 flex flex-wrap gap-x-6 gap-y-2">
          {TRUST_BADGES.slice(0, 3).map((badge) => (
            <li key={badge} className="flex items-center gap-2 font-body text-sm text-navy/70">
              <ServiceIcon name="check" size={16} className="text-red" />
              {badge}
            </li>
          ))}
        </ul>
      </div>

      {/* Scroll cue */}
      <div className="hero-cue absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-navy/50">
        <span className="font-body text-[0.7rem] uppercase tracking-[0.2em]">Scroll</span>
        <ServiceIcon name="chevronDown" size={18} className="animate-bob" />
      </div>
    </section>
  )
}
