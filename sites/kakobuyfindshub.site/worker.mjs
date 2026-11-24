const origin = 'https://www.cnfanssp.com';
const catalogue = '/AllProducts/';
const categories = ['shoes', 'hoodies-sweaters', 't-shirts', 'jackets', 'pants-shorts', 'headwear', 'accessories', 'short-sets', 'electronics', 'other-stuff', 'jersey'];
const categoryPath = new RegExp('^/(' + ['AllProducts', ...categories].join('|') + ')/(?:list_\\d+_\\d+/)?$');
const productPath = new RegExp('^/(' + ['AllProducts', ...categories].join('|') + ')/\\d+\\.html$');

function sourceUrl(path) {
  if (!path) return null;
  try {
    const url = new URL(path, origin);
    return url.origin === origin ? url : null;
  } catch {
    return null;
  }
}

async function upstream(url) {
  const response = await fetch(url, {
    headers: { accept: 'text/html', 'accept-language': 'en', 'user-agent': 'Mozilla/5.0' },
    signal: AbortSignal.timeout(10000)
  });
  if (!response.ok) throw new Error('CNFansSP returned ' + response.status);
  return response;
}

function addText(record, key, selector, rewriter) {
  rewriter.on(selector, { text(chunk) { if (record()) record()[key] += chunk.text; } });
}

async function products(url) {
  const items = [];
  const links = [];
  let current;
  let next;
  let heading = '';
  const rewrite = new HTMLRewriter()
    .on('.product-card', { element(el) {
      current = { title: '', price: '', id: el.getAttribute('data-id') };
      items.push(current);
      el.onEndTag(() => { current = null; });
    } })
    .on('.product-card a.product-image', { element(el) {
      const link = sourceUrl(el.getAttribute('href'));
      if (current && link && productPath.test(link.pathname)) current.url = link.href;
    } })
    .on('.product-card .product-image img', { element(el) {
      const link = sourceUrl(el.getAttribute('data-src') || el.getAttribute('src'));
      if (current && link) current.image = link.href;
    } })
    .on('.pagination a[href]', {
      element(el) {
        next = { text: '', href: el.getAttribute('href').replaceAll('&amp;', '&') };
        links.push(next);
        el.onEndTag(() => { next = null; });
      },
      text(chunk) { if (next) next.text += chunk.text; }
    })
    .on('h1', { text(chunk) { heading += chunk.text; } });
  addText(() => current, 'title', '.product-card .product-name', rewrite);
  addText(() => current, 'price', '.product-card .product-price', rewrite);
  await rewrite.transform(await upstream(url)).arrayBuffer();
  if (!items.length && url.pathname !== '/search.html' && !heading.trim()) {
    throw new Error('CNFansSP catalogue markup unavailable');
  }
  return {
    items: items.filter(item => item.url && item.title.trim()).map(item => ({
      ...item, title: item.title.trim(), price: item.price.trim()
    })),
    next: links.find(link => /下一页|^next$/i.test(link.text.trim()))?.href || null
  };
}

function listUrl(params) {
  const search = params.get('q')?.trim().slice(0, 100);
  const category = params.get('category');
  const continuation = sourceUrl(params.get('next'));
  if (search) {
    const page = continuation?.pathname === '/search.html' ? continuation.searchParams.get('page') : null;
    const url = new URL('/search.html', origin);
    url.search = new URLSearchParams({ channelid: '2', keywords: search });
    if (page && /^\d+$/.test(page)) url.searchParams.set('page', page);
    return url;
  }
  if (continuation && categoryPath.test(continuation.pathname)) return continuation;
  return new URL(categories.includes(category) ? '/' + category + '/' : catalogue, origin);
}

async function buy() {
  let itemUrl;
  const rewrite = new HTMLRewriter().on('a[href]', { element(el) {
    try {
      const url = new URL(el.getAttribute('href'), origin);
      if (url.origin === 'https://weidian.com' && url.pathname === '/item.html' &&
          url.searchParams.get('itemID') === '7632511460') itemUrl = url.href;
    } catch {}
  } });
  try {
    await rewrite.transform(await upstream(origin + '/AllProducts/6667.html')).arrayBuffer();
  } catch {}
  return Response.redirect(itemUrl || origin + '/AllProducts/6667.html', 302);
}

function brandAsset(encoded, contentType) {
  return new Response(Uint8Array.from(atob(encoded), byte => byte.charCodeAt(0)), {
    headers: { 'content-type': contentType, 'cache-control': 'public, max-age=3600' }
  });
}

const productionOrigin = 'https://kakobuyfindshub.site';

function searchMetadata(path) {
  if (path === '/robots.txt') {
    return new Response(`User-agent: *\nAllow: /\nSitemap: ${productionOrigin}/sitemap.xml\n`, {
      headers: { 'content-type': 'text/plain; charset=utf-8' }
    });
  }
  const routes = Object.keys(localeRows).flatMap(language =>
    navPaths.filter(page => !['faq/', 'guides/'].includes(page) || localizedEditorial.includes(language))
      .map(page => localePath(language, page))
      .concat(localizedEditorial.includes(language) ? guides.map(guide => localePath(language, 'guides/' + guide.slug + '/')) : [])
  );
  const entries = routes.map(route => `<url><loc>${productionOrigin}${route}</loc></url>`).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`, {
    headers: { 'content-type': 'application/xml; charset=utf-8' }
  });
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.origin === productionOrigin && ['/robots.txt', '/sitemap.xml'].includes(url.pathname)) {
      return searchMetadata(url.pathname);
    }
    if (url.pathname === '/styles.css') return new Response(styles, {headers:{'content-type':'text/css; charset=utf-8'}});
    if (url.pathname === '/client.js') return new Response(client, {headers:{'content-type':'text/javascript; charset=utf-8'}});
    if (url.pathname === '/brand-logo.png') return brandAsset(brandLogo, 'image/png');
    if (url.pathname === '/favicon.ico') return brandAsset(brandIcon, 'image/x-icon');
    if (url.pathname === '/buy/7632511460') return buy();
    if (url.pathname !== '/api/catalogue') return render(url);
    try {
      return Response.json(await products(listUrl(url.searchParams)));
    } catch {
      return Response.json({ error: 'Catalogue unavailable' }, { status: 502 });
    }
  }
};
