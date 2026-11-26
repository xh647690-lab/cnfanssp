import { readFile, readdir, mkdir, writeFile } from 'node:fs/promises';

const pages = {};
for (const file of await readdir('dist', { recursive: true })) {
  if (file === 'index.html' || file.endsWith('/index.html')) {
    const route = '/' + file.replace(/\/?index\.html$/, '');
    pages[route] = await readFile('dist/' + file, 'utf8');
  }
}
await mkdir('dist/_worker.js', { recursive: true });
await writeFile('dist/_worker.js/pages.js', `export default ${JSON.stringify(pages)};\n`);
await writeFile('dist/_worker.js/index.js', await readFile('src/worker.js'));
