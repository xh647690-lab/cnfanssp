import { mkdir, readFile, writeFile } from 'node:fs/promises';

const styles = await readFile('src/site.css', 'utf8');
const modules = await Promise.all(['languages', 'menu', 'editorial', 'worker'].map(name => readFile('src/' + name + '.js', 'utf8')));
await mkdir('dist', { recursive: true });
await writeFile('dist/_worker.js', 'const styles = ' + JSON.stringify(styles) + '\n' + modules.join('\n'));
await writeFile('dist/_routes.json', JSON.stringify({ version: 1, include: ['/*'], exclude: [] }));
