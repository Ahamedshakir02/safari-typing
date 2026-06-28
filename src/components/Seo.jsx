import { Head } from 'vite-react-ssg'
import { SITE_URL } from '../data/site.js'

const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`
const OG_IMAGE_ALT = 'Safari Typing Services — government typing & document services, Ajman, UAE'

/**
 * Per-route document head, rendered through vite-react-ssg's <Head> (a React
 * Helmet wrapper) so the tags land in the *prerendered* static HTML — not only
 * after hydration. Sets title, description, canonical, robots, Open Graph +
 * Twitter cards and any JSON-LD.
 *
 *   path   → route path; canonical/og:url = SITE_URL + path
 *   image  → overrides the social image (relative paths resolve against SITE_URL)
 *   jsonLd → a single schema object or an array of them (emitted as one block)
 *   noindex→ robots noindex,nofollow (e.g. the 404 page)
 */
export default function Seo({ title, description = '', path = '', image, jsonLd, noindex = false }) {
  const full = title
    ? `${title} | Safari Typing Services`
    : 'Safari Typing Services — Typing Centre in Ajman'
  const url = SITE_URL + path
  const ogImage = image ? (/^https?:\/\//.test(image) ? image : SITE_URL + image) : DEFAULT_OG_IMAGE
  const blocks = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : null

  return (
    <Head>
      <title>{full}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Safari Typing Services" />
      <meta property="og:title" content={full} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={OG_IMAGE_ALT} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={full} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {blocks && (
        <script type="application/ld+json">
          {JSON.stringify(blocks.length === 1 ? blocks[0] : blocks)}
        </script>
      )}
    </Head>
  )
}
