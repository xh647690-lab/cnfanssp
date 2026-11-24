import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';

const output = new URL('./dist/server/', import.meta.url);
const sources = [['styles', 'catalog.css'], ['script', 'catalog.js']];
const assets = await Promise.all(sources.map(async ([name, file]) => {
  const content = await readFile(new URL('src/' + file, import.meta.url), 'utf8');
  return 'export const ' + name + ' = ' + JSON.stringify(content) + ';';
}));
await mkdir(output, { recursive: true });
await Promise.all([
  writeFile(new URL('assets.mjs', output), assets.join('\n')),
  ...['catalog.mjs', 'editorial.mjs', 'locales.mjs', 'pages.mjs'].map(file =>
    copyFile(new URL('src/' + file, import.meta.url), new URL(file, output))),
  copyFile(new URL('src/worker.mjs', import.meta.url), new URL('index.js', output))
]);
