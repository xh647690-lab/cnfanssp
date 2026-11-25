const production = 'https://hipobuyfindslist.shop';

function sitemap() {
  const localized = Object.keys(localeRows).flatMap(locale =>
    ['', 'spreadsheet/', 'categories/'].map(route => localePath(locale, route))
  );
  const editorial = ['/faq/', '/guides/', ...articles.map(([slug]) => '/guides/' + slug + '/')];
  const entries = [...localized, ...editorial].map(path => '<url><loc>' + production + path + '</loc></url>');
  return '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' +
    entries.join('') + '</urlset>';
}

const origin = 'https://www.cnfanssp.com';
const detailPath = '/AllProducts/6667.html';
const buy = 'https://hipobuy.com/product/weidian/7632511460';
async function catalogue() {
  const response = await fetch(origin + '/', {headers:{accept:'text/html'}, signal:AbortSignal.timeout(9000)});
  if (!response.ok) throw Error('Source unavailable');
  const items = [];
  let card;
  const rewriter = new HTMLRewriter()
    .on('.product-card', {element(element) {
      card = {title:'', price:''};
      items.push(card);
      element.onEndTag(() => { card = undefined; });
    }})
    .on('.product-card a.product-image', {element(element) {
      const href = element.getAttribute('href');
      if (card && /^\/AllProducts\/\d+\.html$/.test(href)) card.url = origin + href;
    }})
    .on('.product-card img', {element(element) {
      const src = element.getAttribute('data-src') || element.getAttribute('src');
      if (!card || !src) return;
      const url = new URL(src, origin);
      if (url.origin === origin) card.image = url.href;
      card.alt = element.getAttribute('alt');
    }})
    .on('.product-card .product-name', {text(chunk) { if (card) card.title += chunk.text; }})
    .on('.product-card .product-price', {text(chunk) { if (card) card.price += chunk.text; }});
  await rewriter.transform(response).arrayBuffer();
  const valid = items.filter(item => item.url && (item.title.trim() || item.alt))
    .map(item => ({...item,title:item.title.trim() || item.alt,price:item.price.trim()}));
  if (!valid.length) throw Error('No products found');
  return valid.slice(0, 16);
}

export default {
  async fetch(request, env = {}) {
    const url = new URL(request.url);
    if (url.pathname === '/robots.txt') return new Response('User-agent: *\nAllow: /\nSitemap: ' + production + '/sitemap.xml\n', {
      headers:{'content-type':'text/plain; charset=utf-8'}
    });
    if (url.pathname === '/sitemap.xml') return new Response(sitemap(), {
      headers:{'content-type':'application/xml; charset=utf-8'}
    });
    if (url.pathname === '/styles.css') return new Response(styles,{headers:{'content-type':'text/css; charset=utf-8'}});
    if (url.pathname === '/client.js') return new Response(client,{headers:{'content-type':'text/javascript; charset=utf-8'}});
    if (url.pathname === '/api/catalogue') {
      try { return Response.json(await catalogue()); }
      catch { return Response.json({error:'Catalogue unavailable'},{status:502}); }
    }
    if (url.pathname === '/favicon.png' || url.pathname === '/favicon.ico') {
      return new Response(Uint8Array.from(atob(favicon), char => char.charCodeAt(0)), {
        headers:{'content-type':'image/png','cache-control':'public, max-age=3600'}
      });
    }
    return render(url, env);
  }
};
