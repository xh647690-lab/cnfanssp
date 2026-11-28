import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import { copy, origin } from '../src/copy.js';

const pages = {};
for (const entry of await readdir('dist', {recursive: true})) {
  const file = entry.split('\\').join('/');
  if (file !== 'index.html' && !file.endsWith('/index.html')) continue;
  const page = file.slice(0, -'index.html'.length).replace(/\/$/, '');
  pages[page] = await readFile('dist/' + file, 'utf8');
}
const runtime = await readFile('src/worker.js', 'utf8');
await mkdir('pages-dist', { recursive: true });
await writeFile('pages-dist/_worker.js', `const pages = ${JSON.stringify(pages)};\nconst copy = ${JSON.stringify(copy)};\nconst origin = ${JSON.stringify(origin)};\n${runtime}`);
