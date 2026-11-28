const examplePath = '/AllProducts/6667.html';
const exampleId = '7632511460';

function escape(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[char]);
}

function upstreamUrl(value) {
  if (typeof value !== 'string' || !value) return null;
  try {
    const url = new URL(value, origin);
    return url.origin === origin ? url : null;
  } catch {
    return null;
  }
}

async function upstream(path) {
  try {
    const response = await fetch(origin + path, {
      headers: { accept: 'text/html' },
      signal: AbortSignal.timeout(6500),
    });
    if (response.ok) return await response.text();
  } catch {
    // Upstream failure leaves the direct catalog link available.
  }
  return '';
}

function catalogProducts(html) {
  for (const [, source] of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    let data;
    try {
      data = JSON.parse(source);
    } catch {
      continue;
    }
    if (data?.['@type'] !== 'ItemList' || !Array.isArray(data.itemListElement)) continue;
    return data.itemListElement.flatMap(({ item, url }) => {
      const link = upstreamUrl(item?.url ?? url);
      const image = upstreamUrl(item?.image);
      return item?.name && link ? [{ name: item.name, link, image }] : [];
    });
  }
  return [];
}

function categoryLinks(html) {
  return Array.from(html.matchAll(/<a href="([^"]+)" class="category-item[^"]*">[\s\S]*?<h3>([^<]+)<\/h3>/g), ([, href, name]) => {
    const url = upstreamUrl(href);
    return url ? `<a href="${escape(url)}">${escape(name)}</a>` : '';
  }).join('');
}

function imageTag(product, loading) {
  return product.image ? `<img src="${escape(product.image)}" alt="" loading="${loading}" referrerpolicy="no-referrer">` : '';
}

const site = 'https://litbuysheet.food';
const indexableRoutes = Object.keys(pages).filter(route => {
  const [prefix, page] = route.split('/');
  return !Object.hasOwn(copy, prefix) || !page || page === 'categories';
});

function siteMap() {
  const urls = indexableRoutes.map(route => '<url><loc>' + site + (route ? '/' + route + '/' : '/') + '</loc></url>').join('');
  return '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + urls + '</urlset>';
}

function analytics(id) {
  if (!/^G-[A-Z0-9]+$/.test(id ?? '')) return '';
  return `<script async src="https://www.googletagmanager.com/gtag/js?id=${id}"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${id}');</script>`;
}

export default {
  async fetch(request, env = {}) {
    const url = new URL(request.url);
    if (url.pathname === '/robots.txt') {
      return new Response(url.origin === site ? 'User-agent: *\nAllow: /\nSitemap: ' + site + '/sitemap.xml\n' : 'User-agent: *\nDisallow: /\n', { headers: { 'content-type': 'text/plain' } });
    }
    if (url.pathname === '/sitemap.xml') {
      return new Response(siteMap(), {headers: {'content-type': 'application/xml; charset=utf-8'}});
    }
    const route = url.pathname.replace(/^\/|\/$/g, '');
    const prefix = route.split('/')[0];
    const lang = Object.hasOwn(copy, prefix) ? prefix : 'en';
    if (!Object.hasOwn(pages, route)) return new Response('Page not found', { status: 404 });
    if (request.method === 'HEAD') return new Response(null, {headers: {'content-type': 'text/html; charset=utf-8'}});

    let body = pages[route];
    const isHome = !route || route === lang;
    if (isHome) body = await renderCatalog(body, lang);
    else if (route.split('/').at(-1) === 'categories') {
      const categories = categoryLinks(await upstream('/'));
      body = body.replace('<span id="categories-slot"></span>', () => categories);
    }
    if (url.origin === site) body = body.replace('</head>', () => analytics(env.GA4_MEASUREMENT_ID) + '</head>');
    return new Response(body, { headers: {
      'content-type': 'text/html; charset=utf-8',
      ...(url.origin === site ? {} : {'x-robots-tag': 'noindex'}),
      'content-security-policy': "default-src 'none'; style-src 'unsafe-inline'; script-src 'unsafe-inline' https://www.googletagmanager.com; connect-src https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com; img-src https://*.google-analytics.com https://*.googletagmanager.com https://www.cnfanssp.com https://litbuy.com; form-action https://www.cnfanssp.com; base-uri 'none'",
    } });
  },
};

async function renderCatalog(page, lang) {
  const [, , , , , , , , , buy, unavailable, detail] = copy[lang];
  const [home, list, listing] = await Promise.all([
    upstream('/'), upstream('/AllProducts/'), upstream(examplePath),
  ]);
  const products = catalogProducts(list);
  const example = products.find(product => product.link.pathname === examplePath);
  const categories = categoryLinks(home);
  const featured = example && listing.includes(`https://weidian.com/item.html?itemID=${exampleId}`)
    ? `${imageTag(example, 'eager')}<h3><a href="${escape(example.link)}">${escape(example.name)}</a></h3><div class="id">Weidian · ${exampleId}</div><a class="button" href="https://litbuy.com/product/weidian/${exampleId}">${escape(buy)}</a>`
    : '';
  const cards = products.filter(product => !featured || product !== example).slice(0, 8).map(product =>
    `<a class="card" href="${escape(product.link)}">${imageTag(product, 'lazy')}<div><strong>${escape(product.name)}</strong><small>${escape(detail)}</small></div></a>`
  ).join('');

  return page
    .replace('<span id="featured-slot"></span>', snippet => featured || snippet)
    .replace('<span id="categories-slot"></span>', snippet => categories || snippet)
    .replace('<span id="products-slot"></span>', () => cards || `<p role="status">${escape(unavailable)}</p>`);
}
