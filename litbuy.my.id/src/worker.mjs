import { locales, main, sampleDetail, sampleBuy } from './content.mjs';
import { pages } from './pages.mjs';

const catalogue = main + '/AllProducts/';
const entities = {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'};
const escape = value => String(value).replace(/[&<>"']/g, character => entities[character]);

function mainUrl(value, pathPattern) {
  if (typeof value !== 'string' || !value) return null;
  try {
    const url = new URL(value, main);
    return url.origin === main && pathPattern.test(url.pathname) ? url.href : null;
  } catch {
    return null;
  }
}

function listFromPage(html) {
  for (const match of html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      const data = JSON.parse(match[1]);
      if (data['@type'] === 'ItemList' && Array.isArray(data.itemListElement)) return data.itemListElement;
    } catch {
      continue;
    }
  }
  return [];
}

function renderProducts(html, labels) {
  const cards = [];
  for (const row of listFromPage(html)) {
    const { item, url } = row ?? {};
    const detail = mainUrl(url, /^\/[a-z0-9-]+\/\d+\.html$/i);
    if (!item?.name || !detail) continue;
    const image = mainUrl(item.image, /^\/uploads\//);
    const { price, priceCurrency } = item.offers ?? {};
    cards.push('<article>' +
      (image ? '<a href="' + escape(detail) + '"><img src="' + escape(image) + '" alt="' + escape(item.name) + '" width="400" height="300" loading="lazy"></a>' : '') +
      '<div class="info"><h3>' + escape(item.name) + '</h3>' +
      (price != null && priceCurrency ? '<p>' + escape(priceCurrency) + ' ' + escape(price) + '</p>' : '') +
      '<a href="' + escape(detail) + '">' + labels[9] + '</a>' +
      (detail === sampleDetail ? '<a href="' + sampleBuy + '">' + labels[10] + '</a>' : '') +
      '</div></article>');
    if (cards.length === 8) break;
  }
  return cards.length ? '<div class="products">' + cards.join('') + '</div>' : '';
}

function renderCategories(html) {
  const links = [];
  for (const [, path, title] of html.matchAll(/<button\b[^>]*class="filter-btn[^"]*"[^>]*onclick="window\.location\.href='([^']+)'">\s*<span class="btn-text">([^<]+)<\/span>/g)) {
    const url = mainUrl(path, /^\/[a-z0-9-]+\/$/i);
    if (url) links.push('<a href="' + escape(url) + '">' + escape(title.trim()) + '</a>');
  }
  return links.length ? '<div class="categories">' + links.join('') + '</div>' : '';
}

export default {
  async fetch(request, env = {}) {
    const route = new URL(request.url).pathname.replace(/\/$/, '') || '/';
    if (route === '/robots.txt') {
      return new Response('User-agent: *\nAllow: /\nSitemap: https://litbuy.my.id/sitemap.xml\n', {
        headers: {'content-type':'text/plain; charset=utf-8'}
      });
    }
    if (route === '/sitemap.xml') {
      const urls = Object.keys(pages).filter(path => !/^\/[a-z]{2}\/guides\//.test(path));
      const entries = urls.map(path => '<url><loc>https://litbuy.my.id' + (path === '/' ? path : path + '/') + '</loc></url>').join('');
      return new Response('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + entries + '</urlset>', {
        headers: {'content-type':'application/xml; charset=utf-8'}
      });
    }
    if (Object.hasOwn(assets, route)) {
      return new Response(Uint8Array.from(atob(assets[route]), character => character.charCodeAt(0)), {
        headers: {'content-type': 'image/png', 'cache-control': 'public, max-age=86400'}
      });
    }
    if (!Object.hasOwn(pages, route)) return new Response('Not found', {status:404});
    const firstSegment = route.split('/')[1];
    const language = Object.hasOwn(locales, firstSegment) ? firstSegment : 'en';
    const labels = locales[language];
    const id = /^G-[A-Z0-9]+$/.test(env.GA4_MEASUREMENT_ID ?? '') ? env.GA4_MEASUREMENT_ID : '';
    const analytics = id ? '<script async src="https://www.googletagmanager.com/gtag/js?id=' + id +
      '"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag("js",new Date());gtag("config","' + id + '");</script>' : '';
    const template = analytics ? pages[route].replace('</head>', analytics + '</head>') : pages[route];
    const headers = {
      'content-type':'text/html; charset=utf-8',
      'content-security-policy':"default-src 'none'; style-src 'unsafe-inline'; img-src 'self' https://www.cnfanssp.com; form-action https://www.cnfanssp.com; base-uri 'none'" + (id ? "; script-src 'unsafe-inline' https://www.googletagmanager.com; connect-src https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com" : '')
    };
    if (!template.includes('<!--CATALOGUE-->') && !template.includes('<!--CATEGORIES-->')) {
      return new Response(template, {headers});
    }
    let categories = '';
    let products = '';
    try {
      const response = await fetch(catalogue, {headers:{accept:'text/html'}, signal:AbortSignal.timeout(9000)});
      if (!response.ok) throw new Error('Source status ' + response.status);
      const html = await response.text();
      categories = renderCategories(html);
      products = renderProducts(html, labels);
    } catch (error) {
      console.warn('CNFansSP unavailable', error.message);
    }
    const fallback = '<a href="' + catalogue + '">' + labels[8] + '</a>';
    const page = template.replace('<!--CATEGORIES-->', () => categories || fallback)
      .replace('<!--CATALOGUE-->', () => products || '<p>' + labels[11] + ' ' + fallback + '</p>');
    return new Response(page, {headers});
  }
};
