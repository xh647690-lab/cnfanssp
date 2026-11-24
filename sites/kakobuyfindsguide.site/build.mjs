import { mkdir, readFile, writeFile } from 'node:fs/promises'

const [styles, languages, editorial, worker] = await Promise.all([
  readFile('src/site.css', 'utf8'),
  readFile('src/languages.js', 'utf8'),
  readFile('src/editorial.js', 'utf8'),
  readFile('src/worker.js', 'utf8')
])

await mkdir('dist/server', { recursive: true })
await writeFile('dist/server/index.js', 'const styles = ' + JSON.stringify(styles) + '\n' + [languages, editorial, worker].join('\n'))

const { default: app } = await import('./dist/server/index.js')
const response = await app.fetch(new Request('https://preview.invalid/site.css'))
if (response.status !== 200 || !(await response.text()).includes('.hero')) throw new Error('Stylesheet failed to build')
