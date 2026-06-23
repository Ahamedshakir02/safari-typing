import { gsap } from 'gsap'
import { useGsap } from '../lib/useGsap.js'
import SectionHeading from '../components/SectionHeading.jsx'
import { HOW_IT_WORKS } from '../data/site.js'

export default function HowItWorks() {
  const ref = useGsap(() => {
    const mm = gsap.matchMedia()

    // Steps reveal sequentially (both breakpoints).
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from('.how-step', {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.18,
        scrollTrigger: { trigger: '.how-steps', start: 'top 75%', once: true },
      })
    })

    // Connecting line draws on scrub. Two paths exist (vertical / horizontal);
    // matchMedia animates only whichever is visible at this breakpoint.
    const draw = (selector) => {
      const path = ref.current.querySelector(selector)
      if (!path) return
      const len = path.getTotalLength()
      gsap.set(path, { strokeDasharray: len, strokeDashoffset: len })
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: '.how-steps',
          start: 'top 70%',
          end: 'bottom 75%',
          scrub: 1,
          invalidateOnRefresh: true,
        },
      })
    }
    mm.add('(min-width: 768px) and (prefers-reduced-motion: no-preference)', () =>
      draw('.how-line-h .how-draw')
    )
    mm.add('(max-width: 767px) and (prefers-reduced-motion: no-preference)', () =>
      draw('.how-line-v .how-draw')
    )
  })

  return (
    <section ref={ref} id="how-it-works" aria-labelledby="how-heading" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-content">
        <SectionHeading
          id="how-heading"
          eyebrow="How it works"
          title="Done in three simple steps."
          align="center"
        />

        <ol className="how-steps relative mt-14 grid gap-10 md:grid-cols-3 md:gap-6">
          {/* Horizontal connector (desktop) */}
          <svg
            className="how-line-h pointer-events-none absolute left-[16.66%] right-[16.66%] top-7 hidden h-1 md:block"
            viewBox="0 0 100 1"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path className="how-track" d="M0 0.5 H100" stroke="#0B1F3A" strokeOpacity="0.12" strokeWidth="1" />
            <path className="how-draw" d="M0 0.5 H100" stroke="#D7261E" strokeWidth="1" />
          </svg>

          {/* Vertical connector (mobile) */}
          <svg
            className="how-line-v pointer-events-none absolute left-[27px] top-7 h-[calc(100%-3.5rem)] w-1 md:hidden"
            viewBox="0 0 1 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path className="how-track" d="M0.5 0 V100" stroke="#0B1F3A" strokeOpacity="0.12" strokeWidth="1" />
            <path className="how-draw" d="M0.5 0 V100" stroke="#D7261E" strokeWidth="1" />
          </svg>

          {HOW_IT_WORKS.map((s) => (
            <li
              key={s.step}
              className="how-step relative flex items-start gap-4 md:flex-col md:items-center md:gap-0 md:text-center"
            >
              <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-navy font-display text-xl font-semibold text-offwhite ring-8 ring-offwhite">
                {s.step}
              </span>
              <div className="md:mt-5">
                <h3 className="font-display text-xl font-semibold text-navy">{s.title}</h3>
                <p className="mt-2 max-w-xs font-body text-sm leading-relaxed text-muted">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
