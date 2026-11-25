import { copyFile, mkdir, writeFile } from 'node:fs/promises';

await mkdir('dist', { recursive: true });
await copyFile('worker/index.js', 'dist/_worker.js');
await writeFile('dist/_routes.json', JSON.stringify({ version: 1, include: ['/*'], exclude: [] }));
