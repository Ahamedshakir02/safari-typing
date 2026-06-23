import { gsap } from 'gsap'
import { useGsap } from '../lib/useGsap.js'
import Section from '../components/Section.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ServiceIcon from '../components/ServiceIcon.jsx'
import { WHY_US } from '../data/site.js'

export default function WhyUs() {
  const ref = useGsap(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from('.why-card', {
        y: 28,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.08,
        scrollTrigger: { trigger: '.why-grid', start: 'top 80%', once: true },
      })
    })
  })

  return (
    <section ref={ref} id="why-us" aria-labelledby="why-heading" className="bg-navy px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-content">
        <SectionHeading
          id="why-heading"
          eyebrow="Why choose us"
          title="A centre Sharjah residents come back to."
          align="center"
          className="!text-offwhite [&_h2]:text-offwhite"
        />

        <div className="why-grid mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((item) => (
            <div
              key={item.title}
              className="why-card rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors duration-300 hover:bg-white/[0.07]"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red/15 text-red">
                <ServiceIcon name={item.icon} size={24} />
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-offwhite">{item.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-offwhite/65">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
