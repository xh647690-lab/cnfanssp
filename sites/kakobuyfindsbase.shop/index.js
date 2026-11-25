const source = 'https://www.cnfanssp.com';
const featuredPath = '/AllProducts/6667.html';
const text = {
  en: ['Catalog','Categories','Sign up','Kakobuy\\nSpreadsheet','Browse products from CNFansSP and open listings in Kakobuy.','Search products','Search','Browse catalog','Featured listing','View details','Buy on Kakobuy','Browse by category','Recently added','All products','The catalog is temporarily unavailable.','Open CNFansSP'],
  zh: ['商品目录','分类','注册','Kakobuy\\n选品表','浏览 CNFansSP 商品，在 Kakobuy 打开购买链接。','搜索商品','搜索','浏览商品','精选商品','查看详情','在 Kakobuy 购买','按分类浏览','最新上架','全部商品','暂时无法加载商品目录。','打开 CNFansSP'],
  es: ['Catálogo','Categorías','Registrarse','Catálogo de\\nKakobuy','Explora productos de CNFansSP y abre las fichas en Kakobuy.','Buscar productos','Buscar','Explorar catálogo','Producto destacado','Ver detalles','Comprar en Kakobuy','Explorar por categoría','Añadidos recientemente','Todos los productos','El catálogo no está disponible temporalmente.','Abrir CNFansSP'],
  fr: ['Catalogue','Catégories','Inscription','Catalogue\\nKakobuy','Parcourez les produits de CNFansSP et ouvrez les fiches dans Kakobuy.','Rechercher des produits','Rechercher','Voir le catalogue','Produit en vedette','Voir la fiche','Acheter sur Kakobuy','Parcourir par catégorie','Ajouts récents','Tous les produits','Le catalogue est temporairement indisponible.','Ouvrir CNFansSP']
};
const esc = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));

async function upstream(path) {
  const result = await fetch(source + path, {headers: {accept: 'text/html'}, signal: AbortSignal.timeout(9500)});
  if (!result.ok) throw new Error('Catalog HTTP ' + result.status);
  return result.text();
}

function readCatalog(html) {
  const lists = html.matchAll(/<script\s+type="application\/ld\+json"\s*>([\s\S]*?)<\/script>/gi);
  let products = [];
  for (const [, block] of lists) {
    let data;
    try { data = JSON.parse(block); } catch { continue; }
    if (data['@type'] !== 'ItemList') continue;
    products = (data.itemListElement ?? []).map(entry => ({...entry.item, url: entry.item?.url || entry.url || entry.item?.offers?.url})).filter(item =>
      typeof item?.name === 'string' && /^\/AllProducts\/\d+\.html$/.test(item.url) &&
      /^\/uploads\/[\w./-]+$/.test(item.image) && /^\d+(\.\d+)?$/.test(item.offers?.price));
    if (products.length) break;
  }
  const categories = [...html.matchAll(/href="https:\/\/www\.cnfanssp\.com(\/[\w/-]+\/)"\s+class="category-item[^"]*"[^>]*>[\s\S]*?<h3>([^<]+)<\/h3>/gi)];
  const catalogueCategories = [...html.matchAll(/onclick="window.location.href='(\/[\w/-]+\/)'"[^>]*>\s*<span class="btn-text">([^<]+)/gi)]
    .map(([, path, name]) => ['', path, name]);
  return {products, categories: catalogueCategories.length ? catalogueCategories.filter(([, path]) => path !== '/AllProducts/') : categories};
}

function readPurchase(html) {
  const href = html.match(/href="(https:\/\/(?:www\.)?kakobuy\.com\/item\/details\?[^"]+)"/i)?.[1];
  if (!href) return null;
  const url = new URL(href.replaceAll('&amp;', '&'));
  return url.searchParams.get('url')?.match(/^https:\/\/weidian\.com\/item\.html\?itemID=7632511460$/) ? url : null;
}

const css = `
:root{color:#24241e;background:#f8f7f2;font:16px/1.5 Inter,system-ui,sans-serif;--line:#e1dfd6;--orange:#a93f1c}
*{box-sizing:border-box}body{margin:0}a{color:inherit;text-decoration:none}a:hover{text-decoration:underline;text-underline-offset:.22em}button,input{font:inherit}a:focus-visible,button:focus-visible,input:focus-visible,summary:focus-visible{outline:3px solid #af4c2a;outline-offset:3px}
.wrap{width:min(1200px,calc(100% - 64px));margin:auto}header{border-bottom:1px solid var(--line)}.nav{height:72px;display:flex;align-items:center;gap:30px}.brand{display:flex;align-items:center;gap:10px;font-weight:800;letter-spacing:-.045em;font-size:1.24rem;margin-right:auto}.mark{display:grid;place-items:center;width:34px;height:34px;border-radius:9px;background:#24241e;color:#f9edd9;font:bold 22px Georgia}.nav>a:not(.brand),summary{font-size:.9rem;font-weight:640}.button,button{display:inline-flex;align-items:center;justify-content:center;padding:10px 16px;border:1px solid transparent;border-radius:8px;background:#282820;color:white;font-weight:650;cursor:pointer;min-height:44px}.outline{background:transparent;border-color:var(--line);color:inherit}
details{position:relative}summary{cursor:pointer;white-space:nowrap}.languages{position:absolute;z-index:2;right:0;top:24px;display:grid;min-width:140px;padding:8px;background:white;border:1px solid var(--line);border-radius:8px}.languages a{padding:6px 8px}.languages [aria-current]{font-weight:bold}
.hero{margin:38px auto 0;display:grid;grid-template-columns:1.35fr 1fr;border:1px solid #dbd8ca;border-radius:23px;overflow:hidden;background:#f0ede2}.lead{padding:clamp(27px,6vw,79px)}h1,h2{font-family:Georgia,serif;line-height:.98;letter-spacing:-.047em;margin:0;font-weight:500}h1{font-size:clamp(3rem,6.6vw,6.2rem)}h2{font-size:clamp(2.25rem,4.2vw,3.8rem)}p{margin:19px 0;color:#57564b}.search{margin-top:28px;display:flex;gap:7px;padding:5px;background:#fff;border:1px solid #d8d4c8;border-radius:10px;max-width:455px}.search input{min-width:0;width:100%;border:0;padding:0 10px;background:transparent;color:inherit}.search button{background:#aa411f}.lead>.catalog{display:inline-block;margin-top:20px;font-weight:650;text-decoration:underline;text-underline-offset:4px}
.feature{padding:24px;display:flex;justify-content:center;align-items:center;background:#e8e4d6}.feature article{width:min(100%,390px);overflow:hidden;border-radius:14px;background:#fff;border:1px solid #dad5c7}.feature img{width:100%;height:235px;display:block;object-fit:contain;background:#f3f1ec}.feature .info{padding:16px 18px}.feature small{color:var(--orange);font-size:.83rem;font-weight:700}.line{display:flex;align-items:baseline;justify-content:space-between;gap:10px}.feature h3{margin:3px 0 10px;font-size:1.42rem}.price{white-space:nowrap;font-weight:730;color:#84371e}.links{display:flex;flex-wrap:wrap;gap:8px}.links a{font-size:.83rem}
section{margin:52px 0}.chips{display:flex;flex-wrap:wrap;gap:8px;margin-top:20px}.chips a{padding:8px 13px;background:#fff;border:1px solid var(--line);border-radius:8px;font-size:.91rem;font-weight:550}.head{display:flex;align-items:end;justify-content:space-between;gap:12px;margin-bottom:21px}.head>a{color:var(--orange);font-size:.93rem;font-weight:690;white-space:nowrap}.grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px}.card{display:block;border:1px solid var(--line);border-radius:12px;overflow:hidden;background:white}.card img{display:block;width:100%;aspect-ratio:1.25;object-fit:contain;background:#efede8}.card .info{padding:13px}.card h3{font-size:.98rem;margin:0;overflow-wrap:anywhere}.card small{display:block;margin-top:5px;color:#59584e}footer{border-top:1px solid var(--line);padding:22px 0;color:#59584e;font-size:.9rem}.status{padding:24px}.status a{text-decoration:underline}
@media(max-width:800px){.wrap{width:calc(100% - 32px)}.nav{gap:14px;height:64px}.nav .jump{display:none}.hero{margin-top:20px;grid-template-columns:1fr}.lead{padding:30px 23px}.feature{padding:18px}.grid{grid-template-columns:repeat(2,minmax(0,1fr))}.head{align-items:start}.head a{white-space:normal;text-align:right}.brand{font-size:1.08rem}.nav .button{padding:7px 10px}}

:root{background:#f2f5fa;color:#172232;--line:#dce4ef;--orange:#305bb0}
header,footer{background:#fff}.brand{letter-spacing:-.045em}.mark,.button,button{background:#203e72;color:#fff}.outline{background:#fff;color:#203e72;border-color:var(--line)}
.hero{background:#162c55;border:0;border-radius:18px;grid-template-columns:1.12fr 1fr;min-height:390px}.lead{padding:clamp(26px,5.2vw,72px);color:#fff}
h1,h2{font-family:system-ui,sans-serif;font-weight:800;line-height:1.02;letter-spacing:-.062em}
h1{font-size:clamp(2.9rem,6.2vw,5.85rem)}h2{font-size:clamp(2rem,3.5vw,3.1rem)}
.lead p{color:#cfdef5;max-width:34ch}.lead .catalog{color:#ddf994}.search{background:white;border:0;color:#172232}
.search button{background:#def58f;color:#192942}.feature{background:#203e72;padding:26px}.feature .status{color:#fff}.feature .status p{color:inherit}
.feature article{border:0;border-radius:11px}.feature img,.card img{background:#ecf0f6}.feature small,.price{color:#305bb0}
.chips a{border-radius:24px;padding:8px 15px}.chips a:hover{background:#e7edff}.card:hover{border-color:#6f91c9}
@media(max-width:800px){.hero{grid-template-columns:1fr}.feature{padding:17px}.lead{padding:30px 23px}.feature img{height:190px}}
@media(max-width:390px){.nav{gap:8px}.brand{gap:5px;font-size:.92rem}.mark{width:29px;height:29px}.nav .button{font-size:.8rem}}


.brand img{width:145px;height:auto;display:block}.language{margin-left:auto}.languages{grid-template-columns:repeat(2,minmax(115px,1fr));max-height:min(55vh,420px);overflow:auto;top:calc(100% + 10px);box-shadow:0 12px 25px #17223222}
.page-nav{display:flex;gap:23px;overflow-x:auto;padding-block:0 12px;font-size:.9rem;scrollbar-width:thin}.page-nav a{flex:none}.page-nav [aria-current]{color:#305bb0;font-weight:750;text-decoration:underline;text-underline-offset:4px}
.lead-only{grid-template-columns:1fr;min-height:0}.inner{margin:34px auto 45px}.inner h1{font-size:clamp(2.3rem,5vw,4rem);line-height:1.07}.inner .search{border:1px solid var(--line);margin:0 0 19px}.inner .search button{background:#203e72;color:#fff}
.category-page{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}.category-page a{border-radius:10px;min-height:52px;display:flex;align-items:center}
.editorial-home{display:grid;grid-template-columns:1fr 1fr;gap:22px}.editorial-home h2{font-size:clamp(1.4rem,2.5vw,2.1rem)}.editorial-list{display:grid;gap:8px}
.editorial-list>a,.editorial-list>details{border:1px solid var(--line);border-radius:10px;padding:12px 15px;background:white}.editorial-list>a{display:grid;gap:2px}.editorial-list a span{font-size:.9rem;color:#48566c}.editorial-list details p{margin:8px 0 5px}.editorial-list details summary{white-space:normal;min-height:24px}.editorial-list details:target{border-color:#305bb0}
.article{max-width:760px}.article section{margin:22px 0}.article h2{font-size:clamp(1.25rem,2vw,1.55rem);letter-spacing:-.025em;line-height:1.2}.article p{margin:8px 0 14px}.article h1{margin:10px 0 12px}.source-link{color:#27529e;text-decoration:underline;text-underline-offset:3px}.sources{display:flex;flex-wrap:wrap;gap:10px 16px;font-size:.875rem}
@media(max-width:800px){.page-nav{gap:16px;padding-bottom:10px}.language{margin-left:0}.brand img{width:117px}.inner{margin:22px auto 26px}.hero{min-height:0}.lead h1{font-size:clamp(2.5rem,10vw,3.8rem)}.search button{max-width:45%;padding:7px 10px}.editorial-home{grid-template-columns:1fr;gap:21px}.head{margin-bottom:12px}.head>a{font-size:.82rem}.category-page{grid-template-columns:repeat(2,minmax(0,1fr))}.card .info{padding:8px 10px}.card img{aspect-ratio:1.45}.inner .grid{gap:9px}section{margin:26px 0}.feature img{height:145px}.feature .info{padding:10px 12px}footer{padding:13px 0}}

`;

const siteOrigin = 'https://kakobuyfindsbase.shop';
const routes = ['', 'spreadsheet/', 'categories/', 'faq/', 'guides/'];
const contentLocale = lang => lang === 'zh' ? 'zh' : 'en';
const local = (lang, path = '') => '/' + (lang === 'en' ? '' : lang + '/') + path;

function linkToSource(key) {
  const [name, href] = editorialSources[key];
  return '<a class="source-link" href="' + esc(href) + '">' + esc(name) + '</a>';
}

function faqCards(lang, limit, answers = false) {
  const contentLang = contentLocale(lang);
  const index = contentLang === 'zh' ? 3 : 1;
  return '<div class="editorial-list" lang="' + contentLang + '">' + faqs.slice(0, limit).map(faq =>
    answers
      ? `<details id="${faq[0]}"><summary>${esc(faq[index])}</summary><p>${esc(faq[index + 1])}</p>${linkToSource(faq[5])}</details>`
      : `<a href="${local(lang, 'faq/')}#${faq[0]}">${esc(faq[index])}</a>`
  ).join('') + '</div>';
}

function guideCards(lang, limit) {
  const contentLang = contentLocale(lang);
  return '<div class="editorial-list" lang="' + contentLang + '">' + guides.slice(0, limit).map(guide => {
    const [title, intro] = guide[contentLang];
    return `<a href="${local(lang, 'guides/' + guide.slug + '/')}"><strong>${esc(title)}</strong><span>${esc(intro)}</span></a>`;
  }).join('') + '</div>';
}

function render(url, lang, path, products, categories, purchase) {
  const words = localeRows[lang];
  const [, home, catalog, category, faq, guideLabel, signup, language, , intro, search, submit, , browse, , , latestFaq, latestGuide] = words;
  const fallback = text[lang] || text.en;
  const title = lang === 'zh' ? 'Kakobuy 选品表' : 'Kakobuy Spreadsheet';
  const contentLang = contentLocale(lang);
  const guide = guides.find(entry => path === 'guides/' + entry.slug + '/');
  const details = words[12] || fallback[10];
  const head = (heading, link, label, level = 'h2') =>
    `<div class="head"><${level}>${esc(heading)}</${level}>${link ? `<a href="${esc(link)}">${esc(label)}</a>` : ''}</div>`;
  const item = products.find(product => product.url === featuredPath);
  const itemHref = product => esc(source + product.url);
  const image = (product, eager = false) => `<img src="${esc(source + product.image)}" alt="${esc(product.name)}" loading="${eager ? 'eager' : 'lazy'}" referrerpolicy="no-referrer">`;
  const price = product => {
    const currency = product.offers.priceCurrency;
    return esc(/^[A-Z]{3}$/.test(currency) ? currency + ' ' + product.offers.price : product.offers.price);
  };
  const searchForm = `<form class="search" action="${source}/search.html" method="get"><input type="hidden" name="channelid" value="2"><input type="search" name="keywords" aria-label="${esc(search)}" placeholder="${esc(search)}" required><button>${esc(submit)}</button></form>`;
  const categoryEntries = categories.map(([, href, name]) => {
    const labels = categoryLabels[lang] || categoryLabels.en;
    const label = labels[categoryOrder.indexOf(href.toLowerCase())] || name;
    return `<a href="${esc(source + href)}">${esc(label)}</a>`;
  }).join('');
  const items = count => products.slice(0, count).map(product =>
    `<a class="card" href="${itemHref(product)}">${image(product)}<div class="info"><h3>${esc(product.name)}</h3><small>${price(product)}</small></div></a>`
  ).join('');
  const showItems = count => products.length ? `<div class="grid">${items(count)}</div>`
    : `<p role="status">${esc(fallback[15])} <a class="source-link" href="${source}/AllProducts/">${esc(browse || fallback[16])}</a></p>`;
  const allProducts = source + '/AllProducts/';
  let pageTitle = title;
  let pageDescription = intro;
  let main;
  if (!path) {
    const featured = item ? `<article><a href="${itemHref(item)}">${image(item, true)}</a><div class="info">
      <small>${esc(words[14] || fallback[9])}</small><div class="line"><h3>${esc(item.name)}</h3><span class="price">${price(item)}</span></div>
      <div class="links"><a class="button outline" href="${itemHref(item)}">${esc(details)}</a>
      ${purchase ? `<a class="button" href="${esc(purchase)}" rel="sponsored">${esc(fallback[11])}</a>` : ''}</div></div></article>` : '';
    main = `<div class="hero${featured ? '' : ' lead-only'}"><div class="lead"><h1>${esc(title)}</h1><p>${esc(intro)}</p>${searchForm}<a class="catalog" href="${local(lang, 'spreadsheet/')}">${esc(catalog)}</a></div>
      ${featured ? '<div class="feature">' + featured + '</div>' : ''}</div>
      ${categoryEntries ? `<section>${head(category, local(lang, 'categories/'), category)}<div class="chips">${categoryEntries}</div></section>` : ''}
      <section>${head(catalog, allProducts, browse || fallback[14])}${showItems(4)}</section>
      <section class="editorial-home"><div>${head(latestFaq || faq, local(lang, 'faq/'), faq)}${faqCards(lang, 3)}</div>
      <div>${head(latestGuide || guideLabel, local(lang, 'guides/'), guideLabel)}${guideCards(lang, 3)}</div></section>`;
  } else if (path === 'spreadsheet/') {
    pageTitle = catalog;
    main = `<section class="inner">${head(catalog, allProducts, browse || fallback[14], 'h1')}${searchForm}${showItems(10)}</section>`;
  } else if (path === 'categories/') {
    pageTitle = category;
    main = `<section class="inner">${head(category, allProducts, browse || fallback[14], 'h1')}${categoryEntries ? '<div class="chips category-page">' + categoryEntries + '</div>' : showItems(0)}</section>`;
  } else if (path === 'faq/') {
    pageTitle = faq;
    main = `<section class="inner article">${head(faq, '', '', 'h1')}${faqCards(lang, faqs.length, true)}</section>`;
  } else if (path === 'guides/') {
    pageTitle = guideLabel;
    main = `<section class="inner article">${head(guideLabel, '', '', 'h1')}${guideCards(lang, guides.length)}</section>`;
  } else if (guide) {
    const [heading, description, ...sections] = guide[contentLang];
    pageTitle = heading;
    pageDescription = description;
    main = `<article class="inner article" lang="${contentLang}"><a class="source-link" href="${local(lang, 'guides/')}">${esc(guideLabel)}</a>
      <h1>${esc(heading)}</h1><p>${esc(description)}</p>${sections.map(([subheading, paragraph]) =>
        `<section><h2>${esc(subheading)}</h2><p>${esc(paragraph)}</p></section>`).join('')}
      <div class="sources">${guide.sources.map(linkToSource).join('')}</div></article>`;
  } else {
    return new Response('Not found', {status:404});
  }
  const nav = [home, catalog, category, faq, guideLabel].map((label, index) =>
    `<a href="${local(lang, routes[index])}"${path === routes[index] ? ' aria-current="page"' : ''}>${esc(label)}</a>`
  ).join('');
  const languages = Object.entries(localeRows).map(([code, row]) =>
    `<a href="${local(code, path)}${esc(url.hash)}" lang="${code}"${code === lang ? ' aria-current="page"' : ''}>${esc(row[0])}</a>`
  ).join('');
  const alternates = Object.keys(localeRows).map(code =>
    `<link rel="alternate" hreflang="${code === 'zh' ? 'zh-Hans' : code}" href="${esc(new URL(local(code, path), siteOrigin))}">`
  ).join('');
  return new Response(`<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="canonical" href="${esc(new URL(local(lang, path), siteOrigin))}"><meta name="description" content="${esc(pageDescription)}"><title>${esc(pageTitle)} | Kakobuy Catalogue</title>
  <link rel="icon" href="/favicon.ico"><link rel="alternate" hreflang="x-default" href="${esc(new URL(local('en', path), siteOrigin))}">${alternates}<style>${css}</style>
  ${url.origin === siteOrigin ? `<script async src="https://www.googletagmanager.com/gtag/js?id=G-C89Z99V3LG"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-C89Z99V3LG');
  </script>` : ''}
</head>
  <body><header><nav class="wrap nav"><a class="brand" href="${local(lang)}"><img src="/kakobuy-logo.png" width="642" height="162" alt="Kakobuy"></a>
  <details class="language"><summary aria-label="${esc(language)}">${esc(words[0])}</summary><div class="languages">${languages}</div></details>
  <a class="button" href="https://www.kakobuy.com/register">${esc(signup)}</a></nav><nav class="wrap page-nav">${nav}</nav></header>
  <main class="wrap">${main}</main><footer><div class="wrap"><a href="${source}/">CNFansSP</a></div></footer>
  <script>const id=location.hash.slice(1);const question=document.getElementById(id);if(question?.matches('details'))question.open=true;</script></body></html>`, {
    headers: {'Content-Type':'text/html; charset=utf-8', ...(url.origin === siteOrigin ? {} : {'X-Robots-Tag':'noindex'}), 'Cache-Control': products.length ? 'public, max-age=60' : 'no-store'}
  });
}

const categoryOrder = ['/shoes/', '/hoodies-sweaters/', '/t-shirts/', '/jackets/', '/pants-shorts/', '/headwear/', '/accessories/', '/short-sets/', '/electronics/', '/other-stuff/', '/jersey/'];

function asset(encoded, type) {
  return new Response(Uint8Array.from(atob(encoded), letter => letter.charCodeAt(0)), {
    headers: {'Content-Type': type, 'Cache-Control': 'public, max-age=86400'}
  });
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === '/robots.txt') {
      const body = url.origin === siteOrigin
        ? 'User-agent: *\nAllow: /\nSitemap: ' + siteOrigin + '/sitemap.xml\n'
        : 'User-agent: *\nDisallow: /\n';
      return new Response(body, {headers: {'Content-Type': 'text/plain; charset=utf-8'}});
    }
    if (url.pathname === '/sitemap.xml') {
      const paths = [...routes, ...guides.map(guide => 'guides/' + guide.slug + '/')];
      const entries = Object.keys(localeRows).flatMap(locale => paths.map(path =>
        '<url><loc>' + siteOrigin + local(locale, path) + '</loc></url>'
      ));
      return new Response('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + entries.join('') + '</urlset>', {
        headers: {'Content-Type': 'application/xml; charset=utf-8'}
      });
    }
    if (url.pathname === '/favicon.ico') return asset(favicon, 'image/x-icon');
    if (url.pathname === '/kakobuy-logo.png') return asset(logo, 'image/png');
    const parts = url.pathname.split('/').filter(Boolean);
    const lang = Object.hasOwn(localeRows, parts[0]) ? parts.shift() : 'en';
    const path = parts.length ? parts.join('/') + '/' : '';
    if (url.pathname !== local(lang, path)) return Response.redirect(new URL(local(lang, path), url), 302);

    let products = [];
    let categories = [];
    let purchase = null;
    if (['', 'spreadsheet/', 'categories/'].includes(path)) {
      const [home, catalog, detail] = await Promise.allSettled([
        upstream('/'), upstream('/AllProducts/'), !path ? upstream(featuredPath) : Promise.resolve(null)
      ]);
      const homepage = home.status === 'fulfilled' ? readCatalog(home.value) : {products: [], categories: []};
      const listing = catalog.status === 'fulfilled' ? readCatalog(catalog.value) : {products: [], categories: []};
      products = listing.products.length ? listing.products : homepage.products;
      categories = listing.categories.length ? listing.categories : homepage.categories;
      if (detail.status === 'fulfilled' && detail.value) purchase = readPurchase(detail.value);
    }
    return render(url, lang, path, products, categories, purchase);
  }
};
