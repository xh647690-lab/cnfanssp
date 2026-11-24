import './build.mjs';
import { createServer } from 'node:http';

const { default: worker } = await import('./dist/server/index.js');
const portArgument = process.argv.indexOf('--port');
const port = Number(portArgument < 0 ? process.env.PORT ?? 3000 : process.argv[portArgument + 1]);
createServer(async (request, response) => {
  const result = await worker.fetch(new Request('http://localhost:' + port + request.url, {
    method: request.method
  }));
  response.writeHead(result.status, Object.fromEntries(result.headers));
  response.end(Buffer.from(await result.arrayBuffer()));
}).listen(port, '0.0.0.0', () => console.log('Local: http://localhost:' + port));
