import Seo from '../components/Seo.jsx'
import Logo from '../components/Logo.jsx'
import AccentLine from '../components/AccentLine.jsx'
import LinkButton from '../components/LinkButton.jsx'
import { usePageMotion } from '../lib/usePageMotion.js'

export default function NotFound() {
  const root = usePageMotion()

  return (
    <div ref={root}>
      <Seo title="Page not found" description="The page you were looking for could not be found." noindex />
      <section className="flex min-h-[60vh] flex-col items-center justify-center px-5 py-24 text-center sm:px-7">
        <div data-hero className="flex flex-col items-center">
          <Logo size={72} />
          <div className="mt-7 font-display text-[64px] italic text-sage">404</div>
          <h1 className="mt-2 text-[34px] font-medium sm:text-[42px]">Page not found.</h1>
          <AccentLine className="mt-5" />
          <p className="mt-4 max-w-md font-body text-[17px] text-soft">
            The page you were looking for doesn't exist or has moved. Let's get you back on track.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3.5">
            <LinkButton to="/" variant="solid">
              Back to home
            </LinkButton>
            <LinkButton to="/services" variant="outline">
              Browse services
            </LinkButton>
          </div>
        </div>
      </section>
    </div>
  )
}
