import {editorial} from './guides.js';

const productionOrigin = 'https://kakobuycatalog.shop';
const source = 'https://www.cnfanssp.com';
const featuredPath = '/AllProducts/6667.html';
const text = {
  en: ['Catalog','Categories','Sign up','Kakobuy\\nSpreadsheet','Browse products from CNFansSP and open listings in Kakobuy.','Search products','Search','Browse catalog','Featured listing','View details','Buy on Kakobuy','Browse by category','Recently added','All products','The catalog is temporarily unavailable.','Open CNFansSP'],
  zh: ['商品目录','分类','注册','Kakobuy\\n选品表','浏览 CNFansSP 商品，在 Kakobuy 打开购买链接。','搜索商品','搜索','浏览商品','精选商品','查看详情','在 Kakobuy 购买','按分类浏览','最新上架','全部商品','暂时无法加载商品目录。','打开 CNFansSP'],
  es: ['Catálogo','Categorías','Registrarse','Catálogo de\\nKakobuy','Explora productos de CNFansSP y abre las fichas en Kakobuy.','Buscar productos','Buscar','Explorar catálogo','Producto destacado','Ver detalles','Comprar en Kakobuy','Explorar por categoría','Añadidos recientemente','Todos los productos','El catálogo no está disponible temporalmente.','Abrir CNFansSP'],
  fr: ['Catalogue','Catégories','Inscription','Catalogue\\nKakobuy','Parcourez les produits de CNFansSP et ouvrez les fiches dans Kakobuy.','Rechercher des produits','Rechercher','Voir le catalogue','Produit en vedette','Voir la fiche','Acheter sur Kakobuy','Parcourir par catégorie','Ajouts récents','Tous les produits','Le catalogue est temporairement indisponible.','Ouvrir CNFansSP']
};
const extraLocales = {
  de: ['Katalog','Kategorien','Registrieren','Kakobuy\\nProduktliste','Entdecke Produkte von CNFansSP und öffne Angebote bei Kakobuy.','Produkte suchen','Suchen','Katalog durchsuchen','Ausgewähltes Angebot','Details ansehen','Bei Kakobuy kaufen','Nach Kategorie stöbern','Neu hinzugefügt','Alle Produkte','Der Katalog ist vorübergehend nicht verfügbar.','CNFansSP öffnen'],
  pt: ['Catálogo','Categorias','Registar','Catálogo\\nKakobuy','Explore produtos da CNFansSP e abra os anúncios na Kakobuy.','Pesquisar produtos','Pesquisar','Explorar catálogo','Produto em destaque','Ver detalhes','Comprar na Kakobuy','Explorar por categoria','Adicionados recentemente','Todos os produtos','O catálogo está temporariamente indisponível.','Abrir CNFansSP'],
  it: ['Catalogo','Categorie','Registrati','Catalogo\\nKakobuy','Esplora i prodotti di CNFansSP e apri le inserzioni su Kakobuy.','Cerca prodotti','Cerca','Sfoglia il catalogo','Prodotto in evidenza','Vedi dettagli','Acquista su Kakobuy','Esplora per categoria','Aggiunti di recente','Tutti i prodotti','Il catalogo è temporaneamente indisponibile.','Apri CNFansSP'],
  nl: ['Catalogus','Categorieën','Registreren','Kakobuy\\nProductlijst','Bekijk producten van CNFansSP en open de aanbiedingen bij Kakobuy.','Producten zoeken','Zoeken','Catalogus bekijken','Uitgelicht product','Bekijk details','Koop op Kakobuy','Bekijk per categorie','Recent toegevoegd','Alle producten','De catalogus is tijdelijk niet beschikbaar.','Open CNFansSP'],
  pl: ['Katalog','Kategorie','Zarejestruj się','Katalog\\nKakobuy','Przeglądaj produkty z CNFansSP i otwieraj oferty w Kakobuy.','Szukaj produktów','Szukaj','Przeglądaj katalog','Wyróżniona oferta','Zobacz szczegóły','Kup w Kakobuy','Przeglądaj według kategorii','Ostatnio dodane','Wszystkie produkty','Katalog jest chwilowo niedostępny.','Otwórz CNFansSP']
};
Object.assign(text, extraLocales);

const locales = {en:'English',zh:'简体中文',es:'Español',fr:'Français',de:'Deutsch',pt:'Português',it:'Italiano',nl:'Nederlands',pl:'Polski'};
const sectionLabels = {
  en:['FAQ','Guides','All questions','All guides','Menu'],
  zh:['常见问题','购买指南','查看全部问题','查看全部指南','菜单'],
  es:['Preguntas frecuentes','Guías','Todas las preguntas','Todas las guías','Menú'],
  fr:['FAQ','Guides','Toutes les questions','Tous les guides','Menu'],
  de:['FAQ','Ratgeber','Alle Fragen','Alle Ratgeber','Menü'],
  pt:['Perguntas frequentes','Guias','Todas as perguntas','Todos os guias','Menu'],
  it:['Domande frequenti','Guide','Tutte le domande','Tutte le guide','Menu'],
  nl:['Veelgestelde vragen','Gidsen','Alle vragen','Alle gidsen','Menu'],
  pl:['Częste pytania','Poradniki','Wszystkie pytania','Wszystkie poradniki','Menu']
};
const localPath = (lang, path = '') => '/' + (lang === 'en' ? '' : lang + '/') + path;

const categoryNames = {
  de: ['Schuhe','Hoodies und Pullover','T-Shirts','Jacken','Hosen und Shorts','Kopfbedeckungen','Accessoires','Trikots','Elektronik','Sonstiges'],
  pt: ['Sapatos','Camisolas e malhas','T-shirts','Casacos','Calças e calções','Chapéus','Acessórios','Camisolas desportivas','Eletrónica','Outros'],
  it: ['Scarpe','Felpe e maglioni','Magliette','Giacche','Pantaloni e shorts','Cappelli','Accessori','Maglie sportive','Elettronica','Altro'],
  nl: ['Schoenen','Hoodies en truien','T-shirts','Jassen','Broeken en shorts','Hoofddeksels','Accessoires','Sportshirts','Elektronica','Overig'],
  pl: ['Buty','Bluzy i swetry','Koszulki','Kurtki','Spodnie i szorty','Nakrycia głowy','Akcesoria','Koszulki sportowe','Elektronika','Inne'],
  zh: ['鞋子','连帽衫与毛衣','T 恤','外套','长裤与短裤','帽饰','配饰','球衣','电子产品','其他'],
  es: ['Zapatos','Sudaderas y jerséis','Camisetas','Chaquetas','Pantalones','Gorras y sombreros','Accesorios','Camisetas deportivas','Electrónica','Otros'],
  fr: ['Chaussures','Sweats et pulls','T-shirts','Vestes','Pantalons et shorts','Chapeaux','Accessoires','Maillots','Électronique','Autres']
};
const categoryPaths = ['/shoes/','/hoodies-sweaters/','/t-shirts/','/jackets/','/pants-shorts/','/headwear/','/accessories/','/Jersey/','/electronics/','/other-stuff/'];
const esc = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));

async function upstream(path) {
  const result = await fetch(source + path, {signal: AbortSignal.timeout(6500)});
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
    products = (data.itemListElement ?? []).map(entry => entry.item).filter(item =>
      typeof item?.name === 'string' && /^\/AllProducts\/\d+\.html$/.test(item.url) &&
      /^\/uploads\/[\w./-]+$/.test(item.image) && /^\d+(\.\d+)?$/.test(item.offers?.price));
    if (products.length) break;
  }
  const categories = [...html.matchAll(/href="https:\/\/www\.cnfanssp\.com(\/[\w/-]+\/)"\s+class="category-item[^"]*"[^>]*>[\s\S]*?<h3>([^<]+)<\/h3>/gi)];
  return {products, categories};
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
.brand img{display:block;width:128px;height:auto}.header-pages{display:flex;gap:20px}.header-pages a{font-size:.9rem;white-space:nowrap;font-weight:650}.small-menu{display:none}
.editorial{display:grid;grid-template-columns:1fr 1fr;gap:24px}.editorial h2{font-size:clamp(1.85rem,3vw,2.55rem)}.editorial-list{display:grid;gap:7px}.editorial-card,.faq-row{display:block;background:white;border:1px solid var(--line);border-radius:9px;padding:12px 14px}.editorial-card strong{font-size:.95rem}.editorial-card p,.faq-row p{margin:8px 0}.source-link{color:var(--orange);text-decoration:underline;font-size:.9rem}.page{max-width:780px;min-height:65vh;margin:40px auto 56px}.page h1{font-size:clamp(2.6rem,5.2vw,4.9rem);margin-bottom:24px}.page h2{font-size:1.65rem;letter-spacing:-.025em;margin:24px 0 10px}.page p{margin:10px 0 16px}.faq-row summary{white-space:normal;font-size:1rem}.page .grid{grid-template-columns:repeat(3,minmax(0,1fr))}.pagination{margin-top:16px;display:flex;flex-wrap:wrap;gap:8px}.pagination [aria-current]{background:#282820;color:white}.listing-grid{min-height:0}
@media(max-width:850px){.header-pages{display:none}.small-menu{display:block}.brand img{width:91px}.nav{gap:10px}.nav .button{font-size:.78rem}.nav summary{font-size:.81rem}}
@media(max-width:560px){.page{margin:26px auto 35px}.page h1{font-size:2.7rem}.page .grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:9px}.editorial{grid-template-columns:1fr;gap:16px}.editorial-card{padding:8px 10px}.editorial .head{margin-bottom:9px}.editorial .editorial-card p{display:none}.hero .feature img{height:170px}.hero .lead{padding:20px}.hero p{margin:10px 0}.hero h1{font-size:2.85rem}.hero .search{margin-top:13px}.hero .lead>.catalog{margin-top:10px}.hero .feature{padding:12px}.hero .feature .info{padding:9px 12px}.hero .feature h3{font-size:1.15rem}.wrap section{margin:23px 0}.chips{gap:5px;margin-top:10px}.chips a{padding:5px 8px;font-size:.78rem}.home-grid .card:nth-child(n+5){display:none}.home-grid{gap:8px}.card .info{padding:8px}.card img{max-height:130px}}

`;

const pageSizes = {catalog:6, faq:8, guides:5};

function editorialCards(type, lang, entries) {
  return entries.map(entry => {
    const suffix = type === 'faq' ? 'faq/#question-' + entry.id : 'guides/' + entry.slug + '/';
    return `<a lang="en" class="editorial-card" href="${localPath(lang, suffix)}"><strong>${esc(entry.title)}</strong>${entry.summary ? `<p>${esc(entry.summary)}</p>` : ''}</a>`;
  }).join('');
}

function editorialSource([label, url]) {
  return `<a class="source-link" href="${esc(url)}">${esc(label)}</a>`;
}

function paginate(entries, size, pageNumber, label) {
  const pages = Math.ceil(entries.length / size);
  const offset = (pageNumber - 1) * size;
  const navigation = pages > 1 ? `<nav aria-label="${esc(label)}" class="pagination">${Array.from({length:pages}, (_,index) => {
    const number = index + 1;
    return `<a class="button outline" href="?page=${number}" ${pageNumber===number?'aria-current="page"':''}>${number}</a>`;
  }).join('')}</nav>` : '';
  return {entries:entries.slice(offset, offset + size), navigation};
}

function render(lang, page, products, categories, purchase, pageNumber, robots) {
  const [catalog, category, signup, title, intro, search, submit, browse, featured, details, buy, byCategory, recent, all, unavailable, openSource] = text[lang];
  const item = products.find(product => product.url === featuredPath) ?? products[0];
  const href = product => esc(source + product.url);
  const img = (product, eager=false) => `<img src="${esc(source + product.image)}" alt="${esc(product.name)}" loading="${eager ? 'eager' : 'lazy'}" referrerpolicy="no-referrer">`;
  const price = product => '¥' + esc(product.offers.price);
  const registration = new URL('https://www.kakobuy.com/register');
  const code = purchase?.searchParams.get('affcode') ?? 'rf8x8';
  if (code && /^[a-zA-Z0-9]+$/.test(code)) registration.searchParams.set('affcode', code);
  const [faq, guides, allFaq, allGuides, menu] = sectionLabels[lang];
  const links = [['catalog/',catalog], ['categories/',category], ['faq/',faq], ['guides/',guides]]
    .map(([path,label]) => `<a href="${localPath(lang,path)}" ${page===path ? 'aria-current="page"' : ''}>${label}</a>`).join('');
  const searchForm = `<form class="search" action="${source}/search.html" method="get"><input type="hidden" name="channelid" value="2"><input type="search" name="keywords" aria-label="${esc(search)}" placeholder="${esc(search)}" required><button>${submit}</button></form>`;
  const chips = `<div class="chips">${categories.map(([,path,name])=>`<a href="${esc(source+path)}">${esc(categoryNames[lang]?.[categoryPaths.indexOf(path)] ?? name)}</a>`).join('')}</div>`;
  const status = `<div class="status"><p>${unavailable}</p><a href="${source}/AllProducts/">${openSource}</a></div>`;
  const cards = items => items.map(product => `<a class="card" href="${href(product)}">${img(product)}<div class="info"><div class="line"><h3>${esc(product.name)}</h3><span class="price">${price(product)}</span></div><small>${details}</small></div></a>`).join('');
  const featuredCard = item ? `<article><a href="${href(item)}">${img(item,true)}</a><div class="info"><small>${featured}</small><div class="line"><h3><a href="${href(item)}">${esc(item.name)}</a></h3><span class="price">${price(item)}</span></div><div class="links"><a class="button outline" href="${href(item)}">${details}</a>${purchase && item.url===featuredPath ? `<a class="button" href="${esc(purchase)}" rel="sponsored">${buy}</a>` : ''}</div></div></article>` : status;
  let content;
  let description = intro;
  let pageTitle = title.replace('\\n', ' ');
  if (page === '') {
    content = `<div class="hero"><div class="lead"><h1>${esc(title).replace('\\n','<br>')}</h1><p>${intro}</p>${searchForm}<a class="catalog" href="${localPath(lang,'catalog/')}">${browse}</a></div><div class="feature">${featuredCard}</div></div>
    ${categories.length ? `<section><h2>${byCategory}</h2>${chips}</section>` : ''}
    ${products.length ? `<section><div class="head"><h2>${recent}</h2><a href="${localPath(lang,'catalog/')}">${all}</a></div><div class="grid home-grid">${cards(products.slice(0,8))}</div></section>` : ''}
    <section class="editorial">
      <div><div class="head"><h2>${faq}</h2><a href="${localPath(lang,'faq/')}">${allFaq}</a></div><div class="editorial-list">${editorialCards('faq',lang,editorial.faq.slice(0,3))}</div></div>
      <div><div class="head"><h2>${guides}</h2><a href="${localPath(lang,'guides/')}">${allGuides}</a></div><div class="editorial-list">${editorialCards('guides',lang,editorial.guides.slice(0,3))}</div></div>
    </section>`;
  } else if (page === 'catalog/') {
    pageTitle = catalog;
    const {entries:shown, navigation:pagination} = paginate(products,pageSizes.catalog,pageNumber,catalog);
    content = `<div class="page"><h1>${catalog}</h1>${searchForm}<section><div class="head"><h2>${recent}</h2><a href="${source}/AllProducts/">${all}</a></div>${shown.length ? `<div class="grid">${cards(shown)}</div>${pagination}` : status}</section></div>`;
  } else if (page === 'categories/') {
    pageTitle = byCategory;
    content = `<div class="page"><h1>${byCategory}</h1>${searchForm}${categories.length ? chips : status}</div>`;
  } else if (page === 'faq/') {
    pageTitle = faq;
    const {entries, navigation} = paginate(editorial.faq,pageSizes.faq,pageNumber,faq);
    content = `<div class="page"><h1>${faq}</h1><div class="editorial-list" lang="en">${entries.map(entry=>`<details class="faq-row" name="faq" id="question-${entry.id}"><summary>${esc(entry.title)}</summary><p>${esc(entry.body)}</p>${editorialSource(entry.source)}</details>`).join('')}</div>${navigation}</div><script>const reveal=()=>{const row=document.getElementById(location.hash.slice(1));if(row?.tagName==='DETAILS'){row.open=true;return}const old=/^#question-[1-6]$/.test(location.hash);const url=new URL(location.href);if(old&&url.searchParams.get('page')!=='3'){url.searchParams.set('page','3');location.replace(url)}};reveal();addEventListener('hashchange',reveal);</script>`;
  } else if (page === 'guides/') {
    pageTitle = guides;
    const {entries, navigation} = paginate(editorial.guides,pageSizes.guides,pageNumber,guides);
    content = `<div class="page"><h1>${guides}</h1><div class="editorial-list">${editorialCards('guides',lang,entries)}</div>${navigation}</div>`;
  } else {
    const entry = editorial.guides.find(entry => page === 'guides/'+entry.slug+'/');
    if (!entry) return null;
    pageTitle = entry.title;
    description = entry.summary;
    content = `<article class="page" lang="en"><h1>${esc(entry.title)}</h1><p>${esc(entry.summary)}</p>${entry.sections.map(([title,body])=>`<h2>${esc(title)}</h2><p>${esc(body)}</p>`).join('')}<p>${editorialSource(entry.source)}</p></article>`;
  }
  return `<!doctype html><html lang="${lang==='zh'?'zh-Hans':lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="${robots}"><link rel="canonical" href="${productionOrigin + localPath(lang,page) + (pageNumber>1?'?page='+pageNumber:'')}"><meta name="description" content="${esc(description)}"><link rel="icon" href="/favicon.ico"><title>${esc(pageTitle)} | Kakobuy Finds</title><style>${css}</style></head>
<body><header><div class="wrap nav"><a class="brand" href="${localPath(lang)}"><img src="/brand/logo.png" alt="Kakobuy" width="642" height="162"></a><nav class="header-pages" aria-label="${menu}">${links}</nav><details class="small-menu"><summary>${menu}</summary><nav class="languages">${links}</nav></details>
<details><summary>${locales[lang]}</summary><nav class="languages">${Object.entries(locales).map(([key,label]) => `<a href="${localPath(key,page)}${pageNumber>1?'?page='+pageNumber:''}" lang="${key}" ${key===lang?'aria-current="page"':''}>${label}</a>`).join('')}</nav></details><a class="button" href="${esc(registration)}">${signup}</a></div></header>
<main class="wrap">${content}</main><footer><div class="wrap">Kakobuy Finds · <a href="${source}/">CNFansSP</a></div></footer></body></html>`;
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname;
    const robots = url.origin === productionOrigin ? 'index, follow' : 'noindex';
    if (path === '/robots.txt') {
      return new Response(robots === 'noindex' ? 'User-agent: *\nDisallow: /\n' : 'User-agent: *\nAllow: /\nSitemap: ' + productionOrigin + '/sitemap.xml\n', {headers:{'Content-Type':'text/plain; charset=utf-8'}});
    }
    if (path === '/sitemap.xml') {
      const routes = ['', 'catalog/', 'categories/', 'faq/', 'faq/?page=2', 'faq/?page=3', 'guides/', 'guides/?page=2', ...editorial.guides.map(entry => 'guides/' + entry.slug + '/')];
      const entries = Object.keys(locales).flatMap(lang => routes.map(route => '<url><loc>' + esc(productionOrigin + localPath(lang,route)) + '</loc></url>'));
      return new Response('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + entries.join('') + '</urlset>', {headers:{'Content-Type':'application/xml; charset=utf-8','X-Robots-Tag':robots}});
    }
    const asset = {'/brand/logo.png':'logo.png','/favicon.ico':'favicon.ico'}[path];
    if (asset && typeof brandAssets !== 'undefined') {
      const bytes = Uint8Array.from(atob(brandAssets[asset]), letter => letter.charCodeAt(0));
      return new Response(bytes,{headers:{'Content-Type':asset==='logo.png'?'image/png':'image/x-icon','Cache-Control':'public, max-age=86400'}});
    }
    if (!path.endsWith('/')) {
      url.pathname += '/';
      return Response.redirect(url, 308);
    }
    const parts = path.slice(1).split('/');
    const lang = parts[0] !== 'en' && Object.hasOwn(locales,parts[0]) ? parts.shift() : 'en';
    const page = parts.join('/');
    if (!['','catalog/','categories/','faq/','guides/'].includes(page) && !editorial.guides.some(entry=>page==='guides/'+entry.slug+'/')) {
      return new Response('Not found', {status:404});
    }
    const showCatalog = page === '' || page === 'catalog/' || page === 'categories/';
    const [home, detail] = await Promise.allSettled([showCatalog ? upstream('/') : null, page === '' ? upstream(featuredPath) : null]);
    const {products,categories} = home.status==='fulfilled' && home.value ? readCatalog(home.value) : {products:[],categories:[]};
    const purchase = detail.status==='fulfilled' && detail.value ? readPurchase(detail.value) : null;
    const pageKey = page.slice(0,-1);
    const entries = pageKey === 'catalog' ? products : editorial[pageKey];
    const pageCount = Array.isArray(entries) ? Math.max(1, Math.ceil(entries.length / pageSizes[pageKey])) : 1;
    const requested = Math.max(1, Math.floor(Number(url.searchParams.get('page'))) || 1);
    const pageNumber = Math.min(requested, pageCount);
    return new Response(render(lang,page,products,categories,purchase,pageNumber,robots), {headers:{'Content-Type':'text/html; charset=utf-8','X-Robots-Tag':robots,'Cache-Control': !showCatalog || products.length ? 'public, max-age=60' : 'no-store'}});
  }
};
