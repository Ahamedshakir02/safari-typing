/**
 * Split an element's text into per-word spans for staggered reveals.
 * GSAP's official SplitText is a paid plugin; for most reveals this is enough.
 *
 * Wraps each word in an outer (overflow-hidden) + inner span so you can animate
 * yPercent from ~110 for the classic "lines rising into view" effect.
 *
 * Returns the inner spans (animate these). Idempotent — safe if called twice.
 */
export function splitWords(el) {
  if (!el || el.dataset.split === 'true') {
    return el ? Array.from(el.querySelectorAll('[data-word]')) : []
  }
  const text = el.textContent
  el.textContent = ''
  const inners = []
  text.split(/(\s+)/).forEach((token) => {
    if (token.trim() === '') {
      el.appendChild(document.createTextNode(token))
      return
    }
    const outer = document.createElement('span')
    outer.style.display = 'inline-block'
    outer.style.overflow = 'hidden'
    outer.style.verticalAlign = 'top'
    outer.style.paddingBottom = '0.05em' // room for descenders inside the mask
    const inner = document.createElement('span')
    inner.style.display = 'inline-block'
    inner.dataset.word = ''
    inner.textContent = token
    outer.appendChild(inner)
    el.appendChild(outer)
    inners.push(inner)
  })
  el.dataset.split = 'true'
  return inners
}
