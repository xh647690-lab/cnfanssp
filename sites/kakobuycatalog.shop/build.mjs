import {readFile, mkdir, writeFile} from 'node:fs/promises';

const assets = Object.fromEntries(await Promise.all(
  ['logo.png', 'favicon.ico'].map(async name => [name, (await readFile('brand/' + name)).toString('base64')])
));
const content = await readFile('guides.js', 'utf8');
const worker = await readFile('index.js', 'utf8');
await mkdir('dist', {recursive: true});
await writeFile('dist/_worker.js', 'const brandAssets = ' + JSON.stringify(assets) + ';\n' + content.replace('export ', '') + '\n' + worker.replace("import {editorial} from './guides.js';\n", ''));
