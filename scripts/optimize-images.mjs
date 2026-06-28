// One-off / repeatable image optimiser: generates WebP siblings (resized to a
// max width, quality 80) next to the raster photos the app actually uses, so
// <Picture> can serve them with the original PNG/JPG as fallback.
//
//   npm run optimize:images
//
// Re-run after adding or replacing a photo in public/photos. Commit the
// resulting .webp files; the build just copies them.
import sharp from 'sharp'
import { readdir, stat } from 'node:fs/promises'
import { join, extname, basename } from 'node:path'

const PHOTOS = join(process.cwd(), 'public', 'photos')
const MAX_WIDTH = 1400
const QUALITY = 80

// Band/step PNG cut-outs referenced by content.js PHOTOS.
const USED_PNGS = [
  'team-four.png',
  'services-visa-team.png',
  'home-typing-center.png',
  'step-welcome-tablet.png',
  'step-documents.png',
  'step-collect.png',
]

const all = await readdir(PHOTOS)
const serviceJpgs = all.filter((f) => f.startsWith('service-') && /\.jpe?g$/i.test(f))
const targets = [...USED_PNGS.filter((f) => all.includes(f)), ...serviceJpgs]

let before = 0
let after = 0
for (const file of targets) {
  const src = join(PHOTOS, file)
  const out = join(PHOTOS, basename(file, extname(file)) + '.webp')
  const inSize = (await stat(src)).size
  await sharp(src).resize({ width: MAX_WIDTH, withoutEnlargement: true }).webp({ quality: QUALITY, effort: 5 }).toFile(out)
  const outSize = (await stat(out)).size
  before += inSize
  after += outSize
  console.log(`${file.padEnd(38)} ${(inSize / 1024).toFixed(0).padStart(5)}KB -> ${(outSize / 1024).toFixed(0).padStart(4)}KB`)
}
console.log(`\nTOTAL  ${(before / 1024 / 1024).toFixed(1)}MB -> ${(after / 1024 / 1024).toFixed(2)}MB  (${targets.length} files)`)
