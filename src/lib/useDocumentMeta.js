import { useEffect } from 'react'
import { SITE_URL } from '../data/site.js'

const DEFAULT_OG_IMAGE = `${SITE_URL}/safari-banner.jpeg`

const upsertMeta = (selector, attrs) => {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    document.head.appendChild(el)
  }
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v))
  return el
}

/**
 * Per-route document head management without react-helmet.
 * Sets title, description, canonical, Open Graph + Twitter cards, optional
 * robots noindex, and injects an optional JSON-LD block (removed on unmount so
 * it doesn't stack). `image` overrides the social preview image (relative paths
 * are resolved against SITE_URL).
 */
export function useDocumentMeta({ title, description = '', path = '', image, jsonLd, noindex = false } = {}) {
  useEffect(() => {
    const full = title ? `${title} | Safari Typing Services` : 'Safari Typing Services — Sharjah'
    const url = SITE_URL + path
    const ogImage = image ? (/^https?:\/\//.test(image) ? image : SITE_URL + image) : DEFAULT_OG_IMAGE

    document.title = full
    upsertMeta('meta[name="description"]', { name: 'description', content: description })

    // Open Graph
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' })
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: 'Safari Typing Services' })
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: full })
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description })
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: url })
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: ogImage })

    // Twitter
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' })
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: full })
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description })
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: ogImage })

    const robots = upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: noindex ? 'noindex, nofollow' : 'index, follow',
    })

    let canon = document.head.querySelector('link[rel="canonical"]')
    if (!canon) {
      canon = document.createElement('link')
      canon.rel = 'canonical'
      document.head.appendChild(canon)
    }
    canon.href = url

    let script
    if (jsonLd) {
      script = document.createElement('script')
      script.type = 'application/ld+json'
      script.text = JSON.stringify(jsonLd)
      document.head.appendChild(script)
    }

    return () => {
      if (script) script.remove()
      robots.setAttribute('content', 'index, follow')
    }
  }, [title, description, path, image, jsonLd, noindex])
}
