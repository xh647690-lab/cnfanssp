import { readFile, writeFile } from 'node:fs/promises';
import { locales } from '../src/content.mjs';
import { articles } from '../src/editorial.mjs';

const routes = ['', 'catalogue', 'categories', 'faq', 'guides', ...articles.map(([slug]) => 'guides/' + slug)];
const pages = {};
for (const language of Object.keys(locales)) {
  for (const route of routes) {
    const directory = [language === 'en' ? '' : language, route].filter(Boolean).join('/');
    pages['/' + directory] = await readFile(['dist', directory, 'index.html'].filter(Boolean).join('/'), 'utf8');
  }
}
const assets = {};
for (const name of ['litbuy-logo.png', 'favicon.ico']) {
  assets['/' + name] = await readFile('public/' + name, 'base64');
}
const content = (await readFile('src/content.mjs','utf8')).replaceAll('export const ', 'const ');
const worker = (await readFile('src/worker.mjs','utf8')).replace(/^import .*\n/gm, '');
await writeFile('dist/_worker.js', content + '\nconst pages = ' + JSON.stringify(pages) +
  ';\nconst assets = ' + JSON.stringify(assets) + ';\n' + worker);
