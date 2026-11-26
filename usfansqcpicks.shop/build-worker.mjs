import { cp, mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';

const paths = await readdir('dist', {recursive:true});
const pages = {};
for (const path of paths.filter(path => /(?:^|\/)index\.html$/.test(path))) {
  const directory = dirname(path);
  pages[directory === '.' ? '/' : '/' + directory + '/'] = await readFile('dist/' + path, 'utf8');
}
if (Object.keys(pages).length !== 100) throw new Error('Expected 100 localized Astro pages');
const code = (await readFile('worker.mjs', 'utf8')).replace(
  "import { pages } from './pages.mjs';",
  () => 'const pages = ' + JSON.stringify(pages) + ';'
);
await mkdir('dist/server', {recursive:true});
await writeFile('dist/server/index.js', code);
await cp('dist/server/index.js', 'dist/_worker.js');
