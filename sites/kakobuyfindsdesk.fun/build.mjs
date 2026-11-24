import {mkdir, readFile, writeFile} from 'node:fs/promises';

await mkdir('dist/server', {recursive:true});
const files = ['worker/locales.js','worker/editorial.js','worker/index.js'];
const parts = await Promise.all(files.map(file => readFile(file, 'utf8')));
await writeFile('dist/server/index.js', parts.join('\n'));
