const origin = 'https://www.cnfanssp.com';
const featuredProductPath = '/AllProducts/6667.html';
const featuredItemId = '7632511460';
const href = 'href="([^"]+)"';

function sourceUrl(value) {
  try {
    const url = new URL(value, origin);
    return url.origin === origin ? url.href : '';
  } catch {
    return '';
  }
}
function clean(value) {
  return value.trim().replaceAll('&amp;', '&').replaceAll('&quot;', '"').replaceAll('&#39;', "'");
}
export function parseCatalog(html) {
  const categories = Array.from(
    html.matchAll(new RegExp(href+' class="category-item[^"]*"[^>]*>[\\s\\S]*?<h3>([^<]+)</h3>', 'g')),
    ([, url, name]) => ({url:sourceUrl(url), name:clean(name)})
  ).filter(category => category.url);
  const products = html.split(/<div class="product-card glass-card">/).slice(1,13).flatMap(card => {
    const path = card.match(/href="([^"]+)" class="product-image"/)?.[1];
    const image = sourceUrl(card.match(/data-src="([^"]+)"/)?.[1] || '/');
    const name = card.match(/<h3>([^<]+)<\/h3>/)?.[1];
    const price = card.match(/class="product-price">\s*([\d.]+)/)?.[1];
    const url = sourceUrl(path || '/');
    if (!path || !name || !url || !image.startsWith(origin+'/uploads/')) return [];
    const buy = path === featuredProductPath
      ? 'https://hipobuy.com/goods/details?id='+featuredItemId+'&channel=WEIDIAN'
      : '';
    return [{ name:clean(name), image, price, url, buy }];
  });
  return {categories, products};
}
export default {
  async fetch(request) {
    const path = new URL(request.url).pathname;
    const site = 'https://hipobuysheetindex.space';
    const headers = {};
    if (path === '/robots.txt') return new Response('User-agent: *\nAllow: /\nSitemap: '+site+'/sitemap.xml\n',{headers:{'Content-Type':'text/plain'}});
    if (path === '/sitemap.xml') {
      const routes = ['', ...Object.keys(pages)];
      const urls = routes.map(route=>'<url><loc>'+site+'/'+route+'</loc></url>').join('');
      return new Response('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+urls+'</urlset>',{headers:{'Content-Type':'application/xml'}});
    }
    const route = path.replace(/^\/(en|zh|fr|es|de)(?=\/|$)/,'').replace(/^\//,'');
    if (path !== '/catalog.json') {
      const entry = route ? Object.hasOwn(pages,route) && pages[route] : null;
      if (route && !entry) return new Response('Not found',{status:404,headers});
      const html = entry
        ? page.replace('<title>Hipobuy Finds</title>', '<title>'+entry[0]+' | Hipobuy Finds</title><meta name="description" content="'+(entry[2] || entry[0])+'">')
          .replace(/<main>[\s\S]*?<\/main>/,'<main class="inner">'+entry[1]+'</main>')
        : page.replace('<!-- editorial -->',editorial);
      const canonical = site + (route ? "/"+route : "/");
      return new Response(html.replace("<title>",'<link rel="canonical" href="'+canonical+'"><title>'),{headers:{...headers,'Content-Type':'text/html; charset=utf-8'}});
    }
    try {
      const upstream = await fetch(origin+'/', {signal:AbortSignal.timeout(8500)});
      if (!upstream.ok) throw Error('Upstream unavailable');
      const catalog = parseCatalog(await upstream.text());
      if (!catalog.products.length || !catalog.categories.length) throw Error('Catalog markup unavailable');
      return Response.json(catalog,{headers:{...headers,'Cache-Control':'public, max-age=60'}});
    } catch {
      return Response.json({error:'Catalog unavailable'},{status:502,headers});
    }
  }
};
