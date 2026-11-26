import { mkdir, writeFile } from 'node:fs/promises'
import { build } from 'esbuild'

await mkdir('dist', { recursive:true })
await build({
  entryPoints:['src/production.mjs'],
  outfile:'dist/_worker.js',
  bundle:true,
  format:'esm',
  target:'es2022'
})
await writeFile('dist/_routes.json', JSON.stringify({version:1,include:['/*'],exclude:[]}))
