// Live "open now" status for the typing centre, computed in UAE time
// (Asia/Dubai) regardless of the visitor's own timezone, from the real hours:
//   Saturday – Thursday   8:00 AM – 9:00 PM
//   Friday                2:00 PM – 9:00 PM
// The centre is open every day, so the only weekday difference is the Friday
// late start. Keep this in sync with CONTACT.hours in src/data/site.js.

const CLOSE_MIN = 21 * 60 // 9:00 PM, every day
const openMinFor = (day) => (day === 5 ? 14 * 60 : 8 * 60) // Fri opens 2 PM, else 8 AM

// Current weekday (0 = Sun … 6 = Sat) and minutes-since-midnight in Asia/Dubai,
// so the status is correct for the business even when the visitor is elsewhere.
function uaeNow() {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Dubai',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).formatToParts(new Date())
  const get = (t) => parts.find((p) => p.type === t)?.value
  const days = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 }
  const day = days[get('weekday')] ?? new Date().getDay()
  let hour = parseInt(get('hour'), 10)
  if (hour === 24) hour = 0 // some engines emit "24" at midnight
  return { day, mins: hour * 60 + parseInt(get('minute'), 10) }
}

function fmt(mins) {
  let h = Math.floor(mins / 60)
  const m = mins % 60
  const ap = h >= 12 ? 'PM' : 'AM'
  h = h % 12 || 12
  return m ? `${h}:${String(m).padStart(2, '0')} ${ap}` : `${h}:00 ${ap}`
}

/**
 * @returns {{ open: boolean, label: string, detail: string }}
 *   e.g. { open: true,  label: 'Open now',   detail: 'until 9:00 PM' }
 *        { open: false, label: 'Closed now', detail: 'opens 8:00 AM' }
 */
export function getOpenStatus() {
  const { day, mins } = uaeNow()
  const open = openMinFor(day)

  if (mins >= open && mins < CLOSE_MIN) {
    return { open: true, label: 'Open now', detail: `until ${fmt(CLOSE_MIN)}` }
  }
  if (mins < open) {
    return { open: false, label: 'Closed now', detail: `opens ${fmt(open)}` }
  }
  const next = (day + 1) % 7
  return { open: false, label: 'Closed now', detail: `opens ${fmt(openMinFor(next))} tomorrow` }
}
