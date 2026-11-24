import { getCatalog, getDetail } from './catalog.mjs';
import { styles, script, faviconBase64 } from './assets.mjs';
import { getRoute, renderPage, renderSitemap, sourceOrigin, siteOrigin, analyticsScriptHash } from './pages.mjs';

const favicon = Uint8Array.from(atob(faviconBase64), char => char.charCodeAt(0));
const staticFiles = new Map([
  ['/sitemap.xml', [renderSitemap(), 'application/xml; charset=utf-8']],
  ['/robots.txt', ['User-agent: *\nDisallow:\nSitemap: ' + siteOrigin + '/sitemap.xml\n', 'text/plain; charset=utf-8']],
  ['/favicon.ico', [favicon, 'image/x-icon']],
  ['/catalog.css', [styles, 'text/css; charset=utf-8']],
  ['/catalog.js', [script, 'text/javascript; charset=utf-8']]
]);

const replacedGuides = {
  'cnfans-spreadsheet-guide': 'kakobuy-spreadsheet-guide',
  'search-cnfanssp-by-name-or-id': 'kakobuy-spreadsheet-guide',
  'weidian-jersey-size-checklist': 'kakobuy-shoe-jersey-size-check',
  'original-weidian-link-vs-agent-link': 'kakobuy-weidian-taobao-1688',
  'weidian-taobao-1688-shopping-guide': 'kakobuy-weidian-taobao-1688',
  'cnfanssp-registration-and-login': 'how-to-order-on-kakobuy',
  'seller-photos-vs-qc-photos': 'kakobuy-qc-photos',
  'yuan-price-and-shipping-costs': 'kakobuy-fees-total-cost',
  'shopping-agent-order-and-warehouse': 'kakobuy-warehouse-parcel-tracking',
  'fix-cnfanssp-product-links': 'kakobuy-weidian-taobao-1688'
};

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
    const headers = {
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Content-Security-Policy': "default-src 'self'; script-src 'self' '" + analyticsScriptHash + "' https://www.googletagmanager.com; connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com; img-src 'self' https://www.cnfanssp.com https://nstatic.kakobuy.com https://*.google-analytics.com https://*.googletagmanager.com; object-src 'none'; base-uri 'none'; frame-ancestors 'none'; form-action 'self' https://www.cnfanssp.com"
    };
    if (!['HEAD', 'GET'].includes(request.method)) {
      return new Response(null, { status: 405, headers: { ...headers, Allow: 'GET, HEAD' } });
    }
    if (url.pathname === '/search/') return redirectToSearch(url);
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
    const oldGuide = url.pathname.match(/^(\/(?:[a-z]{2})\/|\/)articles\/([a-z0-9-]+)\/?$/);
    const updatedSlug = oldGuide && replacedGuides[oldGuide[2]];
    if (updatedSlug) {
      return Response.redirect(new URL(oldGuide[1] + 'articles/' + updatedSlug + '/', url.origin), 301);
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
    return new Response(request.method === 'HEAD' ? null : renderPage(siteOrigin, route, categories), {
      headers: { ...headers, 'Content-Type': 'text/html; charset=utf-8' }
    });
  }
};
