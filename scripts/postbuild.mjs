// vite-react-ssg prerenders every route, including /404, as a nested directory
// (dist/404/index.html). Static hosts (Vercel, Netlify, GitHub Pages) all look
// for a top-level dist/404.html when a request matches no file, so copy it up.
//
// Without this the host has nothing to serve for an unknown path, and the only
// way to keep deep links working is a catch-all rewrite to index.html — which
// makes every typo'd or stale URL return 200 with the homepage. Google reads
// that as a soft 404 / duplicate content.
import { copyFile } from 'node:fs/promises'
import { join } from 'node:path'

const dist = join(process.cwd(), 'dist')
await copyFile(join(dist, '404', 'index.html'), join(dist, '404.html'))
console.log('postbuild: dist/404/index.html -> dist/404.html')
