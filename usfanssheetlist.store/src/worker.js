import pages from './pages.js';
const source = 'https://www.cnfanssp.com';

export async function catalog() {
  const response = await fetch(source + '/', { signal: AbortSignal.timeout(9000) });
  if (!response.ok) throw new Error('Catalog unavailable');
  const products = [];
  const categories = [];
  let product;
  let category;
  const absolute = (path) => {
    if (!path) return null;
    const url = new URL(path, source);
    return url.origin === source ? url.href : null;
  };
  const collect = (item, key, chunk) => {
    if (item) item[key] = (item[key] || '') + chunk.text;
  };
  const parsed = new HTMLRewriter()
    .on('.category-item', { element(element) {
      category = { url: absolute(element.getAttribute('href')) };
      categories.push(category);
    } })
    .on('.category-item h3', { text(chunk) { collect(category, 'name', chunk); } })
    .on('.product-card', { element() { product = {}; products.push(product); } })
    .on('.product-card .product-image', { element(element) {
      product.url = absolute(element.getAttribute('href'));
    } })
    .on('.product-card .product-image img', { element(element) {
      product.name = element.getAttribute('alt');
      product.image = absolute(element.getAttribute('data-src'));
    } })
    .on('.product-card .product-price', { text(chunk) { collect(product, 'price', chunk); } })
    .transform(response);
  await parsed.text();
  const items = products.filter(item => item.name && item.url).slice(0, 12);
  if (!items.length) throw new Error('Products unavailable');
  return { categories: categories.filter(item => item.name && item.url), products: items };
}

export default {
  async fetch(request, env) {
    const path = new URL(request.url).pathname.replace(/\/$/, '') || '/';
    const origin = 'https://usfanssheetlist.store';
    const official = new URL(request.url).origin === origin;
    const headers = { 'Cache-Control': 'no-store' };
    if (!official) headers['X-Robots-Tag'] = 'noindex';
    if (path === '/robots.txt') {
      return new Response(official ? `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n` : 'User-agent: *\nDisallow: /\n', {
        headers: { ...headers, 'Content-Type': 'text/plain; charset=utf-8' },
      });
    }
    if (path === '/sitemap.xml') {
      const urls = Object.keys(pages).map(route => `<url><loc>${origin}${route === '/' ? route : route + '/'}</loc></url>`).join('');
      return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, {
        headers: { ...headers, 'Content-Type': 'application/xml; charset=utf-8' },
      });
    }
    if (path === '/catalog.json') {
      try {
        return Response.json(await catalog(), { headers });
      } catch {
        return Response.json({ error: 'Catalog unavailable' }, { headers, status: 502 });
      }
    }
    if (!Object.hasOwn(pages, path)) return new Response('Not found', { headers, status: 404 });
    const measurement = env?.GA4_MEASUREMENT_ID;
    const page = official && /^G-[A-Z0-9]+$/.test(measurement ?? '')
      ? pages[path].replace('</head>', `<script async src="https://www.googletagmanager.com/gtag/js?id=${measurement}"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${measurement}');</script></head>`)
      : pages[path];
    return new Response(page, {
      headers: { ...headers, 'Content-Type': 'text/html; charset=utf-8' },
    });
  },
};
