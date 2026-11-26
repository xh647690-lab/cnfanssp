import { copyFile, mkdir, readdir, readFile, writeFile } from 'node:fs/promises'

const dist = new URL('../dist/', import.meta.url)
const output = new URL('server/', dist)
const pages = {}
for (const file of await readdir(dist, { recursive:true })) {
  const entry = file.replaceAll('\\', '/')
  if (!entry.endsWith('index.html')) continue
  const path = '/' + entry.slice(0, -'index.html'.length)
  const html = await readFile(new URL(entry, dist), 'utf8')
  pages[path] = html
}
for (const path of ['/', '/zh-cn/', '/de/', '/es/']) {
  if (!pages[path]?.includes('<!-- live-products -->') || !pages[path]?.includes('<!-- live-categories -->')) {
    throw new Error('Catalog template markers missing for ' + path)
  }
}
if (Object.keys(pages).length !== 52) throw new Error('Unexpected route count')
await mkdir(output, { recursive:true })
await writeFile(new URL('pages.js', output), 'export const pages = ' + JSON.stringify(pages))
await copyFile(new URL('../src/locales.mjs', import.meta.url), new URL('locales.js', output))
await copyFile(new URL('../worker.mjs', import.meta.url), new URL('index.js', output))

const locales = await readFile(new URL('locales.js', output), 'utf8')
const worker = await readFile(new URL('index.js', output), 'utf8')
const bundled = [
  'const pages = ' + JSON.stringify(pages),
  locales.replaceAll('export const ', 'const '),
  worker.replace(/^import .*\n/gm, ''),
].join('\n')
await writeFile(new URL('_worker.js', dist), bundled)
