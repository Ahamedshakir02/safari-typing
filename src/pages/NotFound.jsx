import Seo from '../components/Seo.jsx'
import Button from '../components/Button.jsx'
import Monogram from '../components/Monogram.jsx'

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" description="The page you were looking for could not be found." noindex />
      <section className="flex min-h-[70vh] flex-col items-center justify-center px-5 py-28 text-center sm:px-8">
        <Monogram size={72} />
        <h1 className="mt-8 font-display text-4xl font-semibold text-navy sm:text-5xl">Page not found</h1>
        <p className="mt-3 max-w-md font-body text-base text-muted">
          The page you were looking for doesn't exist or has moved. Let's get you back on track.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button as="route" to="/" variant="navy" size="lg">
            Back to home
          </Button>
          <Button as="route" to="/#services" variant="ghost" size="lg">
            Browse services
          </Button>
        </div>
      </section>
    </>
  )
}
