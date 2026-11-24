import { getCatalog, getDetail } from './catalog.mjs';
import { styles, script } from './assets.mjs';
import { getRoute, renderPage, sourceOrigin } from './pages.mjs';
import { articles } from './editorial.mjs';
import { languageOrder, localizedPath } from './locales.mjs';

const productionHost = 'kakobuyfindsdesk.space';
const productionOrigin = 'https://' + productionHost;

function sitemap() {
  const browsing = languageOrder.flatMap(locale =>
    ['/', '/spreadsheet/', '/categories/'].map(path => localizedPath(locale, path)));
  const editorial = ['en', 'zh'].flatMap(locale =>
    ['/faq/', '/articles/', ...articles.map(article => '/articles/' + article.slug + '/')]
      .map(path => localizedPath(locale, path)));
  return '<?xml version="1.0" encoding="UTF-8"?>' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' +
    [...browsing, ...editorial].map(path => '<url><loc>' + productionOrigin + path + '</loc></url>').join('') +
    '</urlset>';
}

const staticFiles = new Map([
  ['/catalog.css', [styles, 'text/css; charset=utf-8']],
  ['/catalog.js', [script, 'text/javascript; charset=utf-8']]
]);

async function redirectToSearch(url) {
  let keyword = (url.searchParams.get('q') ?? '').trim().slice(0, 100);
  if (!keyword) return Response.redirect(sourceOrigin + '/AllProducts/', 302);
  if (keyword === '7632511460') {
    try {
      const product = await getDetail('/AllProducts/6667.html');
      if (product?.id === keyword) keyword = product.name;
    } catch (error) {
      console.error('CNFansSP search ID resolution:', error.message);
    }
  }
  const query = new URLSearchParams({ channelid: '2', keywords: keyword });
  return Response.redirect(sourceOrigin + '/search.html?' + query, 302);
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const isProduction = url.hostname === productionHost;
    const headers = {
      'X-Content-Type-Options': 'nosniff',
      ...(!isProduction && { 'X-Robots-Tag': 'noindex, nofollow' }),
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Content-Security-Policy': "default-src 'self'; img-src https://www.cnfanssp.com; object-src 'none'; base-uri 'none'; frame-ancestors 'none'; form-action 'self' https://www.cnfanssp.com"
    };
    if (!['HEAD', 'GET'].includes(request.method)) {
      return new Response(null, { status: 405, headers: { ...headers, Allow: 'GET, HEAD' } });
    }
    if (url.hostname === 'www.' + productionHost || (isProduction && url.protocol !== 'https:')) {
      url.host = productionHost;
      url.protocol = 'https:';
      return Response.redirect(url.href, 308);
    }
    if (url.pathname === '/robots.txt') {
      return new Response(request.method === 'HEAD' ? null : isProduction
        ? 'User-agent: *\nDisallow: /api/\nDisallow: /search/\nSitemap: ' + productionOrigin + '/sitemap.xml\n'
        : 'User-agent: *\nDisallow: /\n', { headers: { ...headers, 'Content-Type': 'text/plain; charset=utf-8' } });
    }
    if (isProduction && url.pathname === '/sitemap.xml') {
      return new Response(request.method === 'HEAD' ? null : sitemap(), {
        headers: { ...headers, 'Content-Type': 'application/xml; charset=utf-8' }
      });
    }
    if (url.pathname === '/search/') return redirectToSearch(url);
    if (url.pathname === '/favicon.ico') return Response.redirect(sourceOrigin + '/favicon.ico', 302);
    const asset = staticFiles.get(url.pathname);
    if (asset) {
      return new Response(request.method === 'HEAD' ? null : asset[0], {
        headers: { ...headers, 'Content-Type': asset[1] }
      });
    }
    if (['/api/catalog', '/api/product'].includes(url.pathname)) {
      try {
        const data = url.pathname === '/api/catalog'
          ? await getCatalog(url.searchParams)
          : await getDetail(url.searchParams.get('path'));
        return Response.json(data ?? { error: 'Not found' }, { status: data ? 200 : 404, headers });
      } catch (error) {
        console.error('CNFansSP catalog request:', error.message);
        return Response.json({ error: 'CNFansSP is temporarily unavailable' }, { status: 502, headers });
      }
    }
    const route = getRoute(url.pathname);
    if (!route) return new Response('Page not found', { status: 404, headers });
    let categories;
    if (route.section === 'categories' && request.method === 'GET') {
      try {
        categories = (await getCatalog(new URLSearchParams())).categories;
      } catch (error) {
        console.error('CNFansSP category request:', error.message);
      }
    }
    return new Response(request.method === 'HEAD' ? null : renderPage(url.origin, route, categories), {
      headers: { ...headers, 'Content-Type': 'text/html; charset=utf-8' }
    });
  }
};
