import { mkdir, readFile, writeFile } from 'node:fs/promises';

const files = [
  ['/style.css', 'style.css', 'text/css; charset=utf-8'],
  ['/app.js', 'app.js', 'text/javascript; charset=utf-8'],
  ['/logo.png', 'logo.png', 'image/png'],
  ['/favicon.png', 'favicon.png', 'image/png']
];
const assets = Object.fromEntries(await Promise.all(files.map(async ([path, file, type]) => {
  const binary = type.startsWith('image/');
  return [path, { type, binary, body: await readFile(file, binary ? 'base64' : 'utf8') }];
})));
const [template, catalog, editorial, pages, worker] = await Promise.all(
  ['index.html','catalog.html','editorial.mjs','pages.mjs','worker.mjs'].map(file => readFile(file,'utf8'))
);
const bundle = [
  'const assets = ' + JSON.stringify(assets) + ';',
  'const pageTemplate = ' + JSON.stringify(template) + ';',
  'const catalogMarkup = ' + JSON.stringify(catalog) + ';',
  editorial.replaceAll('export const ', 'const '),
  pages.replace(/^import .*\n/,'').replace('export function ', 'function '),
  worker
].join('\n');
await mkdir('dist/server', { recursive: true });
await writeFile('dist/server/index.js', bundle);

await writeFile('dist/_worker.js', bundle);
