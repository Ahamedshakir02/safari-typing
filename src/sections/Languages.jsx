import Reveal from '../components/Reveal.jsx'
import Arabic from '../components/Arabic.jsx'
import { LANGUAGES } from '../data/site.js'

export default function Languages() {
  return (
    <section aria-label="Languages we serve in" className="bg-mist px-5 py-16 sm:px-8">
      <Reveal className="mx-auto flex max-w-content flex-col items-center gap-6 text-center">
        <p className="font-display text-lg font-medium text-navy sm:text-xl">We serve you in your language</p>
        <ul className="flex flex-wrap items-center justify-center gap-3">
          {LANGUAGES.map((lang) => {
            const Label =
              lang.dir === 'rtl' ? (
                <Arabic>{lang.label}</Arabic>
              ) : (
                <span>{lang.label}</span>
              )
            return (
              <li
                key={lang.label}
                className="rounded-full border border-navy/12 bg-white px-5 py-2 font-body text-base font-medium text-navy shadow-card"
              >
                {Label}
              </li>
            )
          })}
        </ul>
      </Reveal>
    </section>
  )
}
