import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { localeRows, categoryLabels } from './locales.mjs';
import { editorialSources, guides, faqs } from './editorial.mjs';

const [source, logo, favicon] = await Promise.all([
  readFile('index.js', 'utf8'),
  readFile('brand/logo.png'),
  readFile('brand/favicon.ico')
]);
const data = { localeRows, categoryLabels, editorialSources, guides, faqs, logo: logo.toString('base64'), favicon: favicon.toString('base64') };
const constants = Object.entries(data).map(([key, value]) => 'const ' + key + ' = ' + JSON.stringify(value) + ';');
await mkdir('dist', { recursive: true });
await writeFile('dist/_worker.js', [...constants, source].join('\n'));
