const productionOrigin = 'https://hipobuyfindsbase.store';
const analytics = `<script async src="https://www.googletagmanager.com/gtag/js?id=G-C89Z99V3LG"></script>
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-C89Z99V3LG');
</script>`;
const sitemapPaths = ['/', '/catalog/', '/agents/', '/faq/', '/guides/', ...articles.map(([slug]) => '/guides/' + slug + '/')];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapPaths.map(path => '  <url><loc>' + productionOrigin + path + '</loc></url>').join('\n')}
</urlset>
`;

const origin = 'https://www.cnfanssp.com';

function sourceLink(path) {
  if (!path) return null;
  const url = URL.parse(path, origin);
  return url?.origin === origin ? url.href : null;
}

async function catalogue() {
  const upstream = await fetch(origin + '/AllProducts/', {signal: AbortSignal.timeout(8500)});
  if (!upstream.ok) throw new Error('Catalog request failed');
  const items = [];
  const categories = [];
  let category;
  let card;
  const rewriter = new HTMLRewriter()
    .on('.filter-btn[onclick]', { element(tag) {
      const path = tag.getAttribute('onclick').match(/=['"]([\w/-]+)['"]/);
      const url = sourceLink(path?.[1]);
      if (!url || path[1] === '/AllProducts/') return;
      category = { url, key: path[1].replaceAll('/', ''), title: '' };
      categories.push(category);
      tag.onEndTag(() => { category = undefined; });
    } })
    .on('.filter-btn .btn-text', { text(chunk) {
      if (category) category.title += chunk.text;
    } })
    .on('.product-card', { element(tag) {
      card = { price: '' };
      items.push(card);
      tag.onEndTag(() => { card = undefined; });
    } })
    .on('.product-card a.product-image', { element(tag) {
      if (card) card.url = sourceLink(tag.getAttribute('href'));
    } })
    .on('.product-card .product-image img', { element(tag) {
      if (!card) return;
      card.image = sourceLink(tag.getAttribute('data-src') || tag.getAttribute('src'));
      card.title = tag.getAttribute('alt');
    } })
    .on('.product-card .product-price', { text(chunk) {
      if (card) card.price += chunk.text;
    } });
  await rewriter.transform(upstream).arrayBuffer();
  const products = items.filter(item => item.url && item.title).slice(0, 12);
  if (!products.length) throw new Error('No catalog data');
  return Response.json({ products, categories: categories });
}

export default {
  async fetch(request) {
    const requestUrl = new URL(request.url);
    const { pathname: path } = requestUrl;
    const production = requestUrl.origin === productionOrigin;
    if (path === '/robots.txt') {
      const robots = production
        ? 'User-agent: *\nAllow: /\nSitemap: ' + productionOrigin + '/sitemap.xml\n'
        : 'User-agent: *\nDisallow: /\n';
      return new Response(robots, { headers: { 'content-type': 'text/plain; charset=utf-8' } });
    }
    if (path === '/sitemap.xml') {
      return new Response(sitemap, { headers: { 'content-type': 'application/xml; charset=utf-8' } });
    }
    if (path === '/api/catalog') {
      try {
        return await catalogue();
      } catch {
        return Response.json({ error: 'Catalog unavailable' }, { status: 502 });
      }
    }
    const asset = assets[path];
    if (asset) {
      const body = asset.binary ? Uint8Array.from(atob(asset.body), char => char.charCodeAt(0)) : asset.body;
      return new Response(body, { headers: { 'content-type': asset.type, 'x-robots-tag': 'noindex' } });
    }
    const normalized = path.endsWith('/') ? path : path + '/';
    const locale = normalized.match(/^\/(zh|de|es|fr|it|pt|pl)\//)?.[1];
    const route = locale ? normalized.slice(locale.length + 1) : normalized;
    const template = pageTemplate.replace('{{LANG}}', locale === 'zh' ? 'zh-Hans' : locale || 'en')
      .replace('{{CANONICAL}}', () => productionOrigin + route)
      .replace('{{ANALYTICS}}', () => production ? analytics : '');
    const page = renderPage(route, template, catalogMarkup);
    if (page === null) return new Response('Not found', { status: 404 });
    if (normalized !== path) {
      const url = new URL(request.url);
      url.pathname = normalized;
      return Response.redirect(url, 308);
    }
    const headers = { 'content-type': 'text/html; charset=utf-8' };
    if (!production) headers['x-robots-tag'] = 'noindex';
    return new Response(page, { headers });
  }
};
