import {mkdir, readdir, readFile, writeFile, copyFile} from 'node:fs/promises';
const pages = {};
const entries = await readdir('dist', {recursive:true});
for (const entry of entries.filter(entry => /(?:^|\/)index\.html$/.test(entry))) {
  const path = '/' + entry.replace(/\/?index\.html$/, '');
  pages[path] = await readFile('dist/' + entry, 'utf8');
}
if (!pages['/']?.includes('<!--CATALOG-->')) throw new Error('Missing catalog insertion point');
await mkdir('dist/server', {recursive:true});
await writeFile('dist/server/pages.mjs', 'export default ' + JSON.stringify(pages));
await copyFile('scripts/runtime.mjs', 'dist/server/index.js');
const site = 'https://usfansfindsindex.shop';
await writeFile('dist/robots.txt', 'User-agent: *\nAllow: /\nSitemap: ' + site + '/sitemap.xml\n');
const urls = Object.keys(pages).map(path => '<url><loc>' + site + path + (path === '/' ? '' : '/') + '</loc></url>');
await writeFile('dist/sitemap.xml', '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + urls.join('') + '</urlset>');
await mkdir('dist/_worker.js', {recursive:true});
await copyFile('dist/server/index.js', 'dist/_worker.js/index.js');
await copyFile('dist/server/pages.mjs', 'dist/_worker.js/pages.mjs');
await (await import('node:fs/promises')).rm('dist/server', {recursive:true});
