// One-off / repeatable image optimiser: generates WebP siblings (resized to a
// max width, quality 80) next to the raster photos/logos the app actually
// uses, so <Picture> can serve them with the original PNG/JPG as fallback.
//
//   npm run optimize:images
//
// Re-run after adding or replacing a photo in public/photos or a logo in
// public/logos. Commit the resulting .webp files; the build just copies them.
import sharp from 'sharp'
import { readdir, stat, writeFile } from 'node:fs/promises'
import { join, extname, basename } from 'node:path'

const PHOTOS = join(process.cwd(), 'public', 'photos')
const LOGOS = join(process.cwd(), 'public', 'logos')
const MAX_WIDTH = 1400
const QUALITY = 80

// Band/step PNG cut-outs referenced by content.js PHOTOS.
const USED_PNGS = [
  'team-four.png',
  'services-visa-team.png',
  'team-duo.png',
  'step-welcome-tablet.png',
  'step-documents.png',
  'step-collect.png',
  'uae-flag-ribbon.png',
]

async function convert(dir, files, { maxWidth = MAX_WIDTH, quality = QUALITY } = {}) {
  let before = 0
  let after = 0
  for (const file of files) {
    const src = join(dir, file)
    const out = join(dir, basename(file, extname(file)) + '.webp')
    const inBuf = await sharp(src).resize({ width: maxWidth, withoutEnlargement: true }).toBuffer()
    const inSize = (await stat(src)).size

    // Some flat-colour/gradient logo art re-encodes larger at this quality
    // than the source PNG. Step quality down until webp actually wins — a
    // <Picture> source that isn't smaller than its PNG fallback is pointless.
    let webpBuf = await sharp(inBuf).webp({ quality, effort: 5 }).toBuffer()
    for (const q of [60, 40]) {
      if (webpBuf.length <= inSize) break
      webpBuf = await sharp(inBuf).webp({ quality: q, effort: 5 }).toBuffer()
    }

    await writeFile(out, webpBuf)
    const outSize = webpBuf.length
    before += inSize
    after += outSize
    const flag = outSize >= inSize ? '  ** no smaller, kept anyway **' : ''
    console.log(`${file.padEnd(38)} ${(inSize / 1024).toFixed(0).padStart(5)}KB -> ${(outSize / 1024).toFixed(0).padStart(4)}KB${flag}`)
  }
  return { before, after, count: files.length }
}

const photoFiles = await readdir(PHOTOS)
const serviceJpgs = photoFiles.filter((f) => f.startsWith('service-') && /\.jpe?g$/i.test(f))
const photoTargets = [...USED_PNGS.filter((f) => photoFiles.includes(f)), ...serviceJpgs]
const photoResult = await convert(PHOTOS, photoTargets)

// Credentials marquee logos — small already, so a lower max width is plenty;
// quality bumped slightly since flat-colour logo art shows banding sooner
// than photos do.
console.log()
const logoFiles = (await readdir(LOGOS)).filter((f) => /\.png$/i.test(f))
const logoResult = await convert(LOGOS, logoFiles, { maxWidth: 400, quality: 82 })

const before = photoResult.before + logoResult.before
const after = photoResult.after + logoResult.after
console.log(`\nTOTAL  ${(before / 1024 / 1024).toFixed(1)}MB -> ${(after / 1024 / 1024).toFixed(2)}MB  (${photoResult.count + logoResult.count} files)`)
