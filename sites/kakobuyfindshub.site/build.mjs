import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { localeRows, categoryLabels, extraLabels } from './locales.mjs';
import { editorialSources, guides, faqs } from './editorial.mjs';

const [styles, client, render, worker] = await Promise.all(
  ['styles.css', 'client.js', 'render.mjs', 'worker.mjs'].map(file => readFile(file, 'utf8'))
);
const brandLogo = (await readFile('brand/logo.png')).toString('base64');
const brandIcon = (await readFile('brand/favicon.ico')).toString('base64');
const data = {brandLogo, brandIcon, styles, client, localeRows, categoryLabels, extraLabels, editorialSources, guides, faqs};
const lines = Object.entries(data).map(([name, contents]) => `const ${name} = ${JSON.stringify(contents)};`);
await mkdir('dist/server', {recursive:true});
await writeFile('dist/server/index.js', [...lines, render, worker].join('\n'));
