import { CONTACT } from '../data/site.js'

/** Bare wa.me link (no message), e.g. for the floating button. */
export const waLink = (number = CONTACT.whatsapp.number) => `https://wa.me/${number}`

/** tel: link from an E.164 number. */
export const telLink = (e164) => `tel:${e164}`

/** mailto: link, optionally with a subject + body. */
export const mailLink = (email = CONTACT.email, { subject, body } = {}) => {
  const params = new URLSearchParams()
  if (subject) params.set('subject', subject)
  if (body) params.set('body', body)
  const qs = params.toString()
  return `mailto:${email}${qs ? `?${qs}` : ''}`
}

/**
 * Build a wa.me deep link with a pre-filled message. This is the primary
 * conversion path — the contact form composes the message, opens WhatsApp, no
 * backend involved.
 */
export function buildWhatsAppLink({ name = '', serviceName = '', number = '', message = '' } = {}) {
  const lines = ['Hello Safari Typing Services,']
  if (name) lines.push(`My name is ${name}.`)
  if (serviceName) lines.push(`I need help with: ${serviceName}.`)
  if (message) lines.push(message)
  if (number) lines.push(`My WhatsApp number: ${number}.`)
  lines.push('Please let me know what documents to bring.')
  const text = encodeURIComponent(lines.join('\n'))
  return `https://wa.me/${CONTACT.whatsapp.number}?text=${text}`
}
