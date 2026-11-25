import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { localeRows, categoryLabels, extraLabels } from './locales.mjs';
import { articles, faqs, sources } from './editorial.mjs';

const [worker, render, styles, client, icon] = await Promise.all(
  ['worker.js', 'render.mjs', 'styles.css', 'client.js', 'favicon.png'].map(path => readFile(path))
);
const data = { styles: String(styles), client: String(client), favicon: icon.toString('base64'),
  localeRows, categoryLabels, extraLabels, articles, faqs, sources };
const constants = Object.entries(data).map(([name, value]) => 'const ' + name + ' = ' + JSON.stringify(value) + ';');
await mkdir('public', { recursive: true });
await writeFile('public/_worker.js', [...constants, render, worker].join('\n'));
