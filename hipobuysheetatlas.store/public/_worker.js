import { officialLogo, officialFavicon } from './logo.js';
import { sources, guides, faq } from './editorial.js';

const production = 'https://hipobuysheetatlas.store';
const productionHost = new URL(production).hostname;

const main = 'https://www.cnfanssp.com';
const agent = 'https://hipobuy.com';
const translations = {
  en: ['Browse catalog','Join HipoBuy','Find your next','favorite find.','Browse the CNFansSP catalog and open your finds on the original site.','Search the catalog','Search','All products','Latest finds','View details','Try item 7632511460','Open on HipoBuy','The catalog is temporarily unavailable. Open CNFansSP to browse.','Catalog source'],
  zh: ['浏览目录','注册 HipoBuy','发现下一件','心仪好物。','浏览 CNFansSP 商品目录，在主站查看商品详情。','搜索商品目录','搜索','全部商品','最新商品','查看详情','试查商品 7632511460','在 HipoBuy 打开','目录暂时无法加载，可前往 CNFansSP 浏览。','商品来源'],
  es: ['Ver catálogo','Registro en HipoBuy','Encuentra tu próxima','compra favorita.','Explora el catálogo de CNFansSP y abre cada producto en su sitio de origen.','Buscar en el catálogo','Buscar','Todos los productos','Últimos hallazgos','Ver detalles','Consultar artículo 7632511460','Abrir en HipoBuy','El catálogo no está disponible en este momento. Visita CNFansSP.','Origen del catálogo']
};
const categoryLabels = {
  zh: ['鞋履','连帽衫与毛衣','T 恤','夹克','裤装','帽饰','配饰','球衣','电子产品','其他'],
  es: ['Calzado','Sudaderas y suéteres','Camisetas','Chaquetas','Pantalones','Gorras','Accesorios','Camisetas deportivas','Electrónica','Otros']
};
const categoryPaths = ['shoes','hoodies-sweaters','t-shirts','jackets','pants-shorts','headwear','accessories','jersey','electronics','other-stuff'];
const escape = value => String(value ?? '').replace(/[&<>"']/g, match => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[match]);

function original(value) {
  if (!value) return '';
  const url = new URL(value, main);
  return url.origin === main ? url.href : '';
}

async function readCatalog() {
  const response = await fetch(main + '/', {signal: AbortSignal.timeout(7000)});
  if (!response.ok) throw new Error('Catalog unavailable');
  const products = new Map();
  const categories = [];
  let product;
  let category;
  const parser = new HTMLRewriter()
    .on('.category-grid .category-item', {element(element) {
      category = {url: original(element.getAttribute('href')), name: ''};
      if (category.url) categories.push(category);
    }})
    .on('.category-grid .category-item h3', {text(chunk) {
      if (category) category.name += chunk.text;
    }})
    .on('#featured-products .product-image', {element(element) {
      const url = original(element.getAttribute('href'));
      product = {url, name: '', image: ''};
      if (url) products.set(url, product);
    }})
    .on('#featured-products .product-image img', {element(element) {
      product.name = element.getAttribute('alt');
      product.image = original(element.getAttribute('data-src') || element.getAttribute('src'));
    }});
  await parser.transform(response).arrayBuffer();
  return {categories, products: [...products.values()].filter(item => item.name && item.image).slice(0, 8)};
}

const css = `
*{box-sizing:border-box}body{margin:0;background:#fbfaf8;color:#251741;font:16px/1.5 system-ui,sans-serif}a{color:inherit;text-decoration:none}a:hover{text-decoration:underline}a:focus-visible,button:focus-visible,input:focus-visible,select:focus-visible{outline:3px solid #9b6dff;outline-offset:3px}.wrap{width:min(1240px,calc(100% - 64px));margin:auto}header{border-bottom:1px solid #eae4ef;background:#fff}.bar{display:flex;align-items:center;justify-content:space-between;gap:20px;min-height:76px}.brand{font-size:22px;font-weight:900;letter-spacing:-.06em;white-space:nowrap}.brand b{background:#6436de;color:white;border-radius:12px;padding:5px 9px;margin-right:8px}.nav{display:flex;align-items:center;gap:20px;font-size:14px;font-weight:650}.button,button{display:inline-flex;justify-content:center;align-items:center;border:0;border-radius:10px;padding:11px 16px;font:inherit;font-weight:750;background:#6739de;color:white;cursor:pointer}.nav select{font:inherit;color:inherit;background:#f6f2fb;border:1px solid #e5ddef;border-radius:9px;padding:8px}.hero{margin-top:28px;background:#271646;color:#fff;border-radius:26px;display:grid;grid-template-columns:1.4fr 1fr;overflow:hidden;min-height:375px}.pitch{padding:clamp(25px,5vw,64px);align-self:center}.pitch h1{font-size:clamp(39px,5.7vw,76px);line-height:.97;letter-spacing:-.07em;margin:0 0 20px}.pitch h1 span{color:#dcc0ff}.pitch p{color:#e4d8f6;margin:0 0 23px}.search{display:flex;gap:6px;background:white;border-radius:13px;padding:6px;max-width:510px}.search input{min-width:0;flex:1;border:0;background:transparent;padding:10px;color:#251741;font:inherit}.hero-art{position:relative;isolation:isolate;display:grid;place-items:center;background:#6a3fe3;padding:25px;overflow:hidden}.hero-art:before,.hero-art:after{content:'';position:absolute;border:1px solid #ae93fd;border-radius:50%;width:460px;aspect-ratio:1;z-index:-1}.hero-art:after{width:340px}.hero-art a{width:min(100%,285px);padding:9px;background:#f8f2ff;border-radius:20px;box-shadow:0 16px 40px #30146a66;transform:rotate(5deg);color:#251741;font-weight:800}.hero-art img{display:block;width:100%;height:245px;object-fit:contain;background:#fff;border-radius:13px}.hero-art span{display:block;padding:7px 5px 1px}.categories{display:flex;flex-wrap:wrap;gap:8px;margin:24px 0 31px}.categories a{border:1px solid #e5ddef;padding:7px 13px;border-radius:20px;background:#fff;font-size:14px;font-weight:650}.categories a:first-child{background:#ede4ff;color:#4a23ad}.section-head{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:14px}.section-head h2{margin:0;font-size:32px;letter-spacing:-.05em}.section-head a{color:#5428c4;font-weight:750}.grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px}.card{overflow:hidden;border:1px solid #eae4ef;border-radius:16px;background:#fff;display:block}.card img{display:block;width:100%;aspect-ratio:1.18;object-fit:contain;border-bottom:1px solid #f1edf4}.card div{padding:12px 15px}.card strong,.card span{display:block}.card span{color:#5730bf;font-size:14px;margin-top:4px}.test{margin:32px 0 0;background:#efe8ff;border-radius:16px;padding:16px;display:flex;justify-content:space-between;align-items:center;gap:12px;font-weight:750}footer{margin:26px 0;padding:18px 0;border-top:1px solid #eae4ef;color:#625673;font-size:14px}@media(max-width:850px){.grid{grid-template-columns:repeat(3,minmax(0,1fr))}.wrap{width:calc(100% - 36px)}}@media(max-width:620px){.wrap{width:calc(100% - 28px)}.nav{gap:8px}.nav>a:first-child{display:none}.nav .button{padding:8px}.brand{font-size:18px}.bar{min-height:64px;gap:8px}.hero{grid-template-columns:1fr;margin-top:15px;min-height:0}.hero-art{display:none}.pitch{padding:25px 20px}.grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.section-head h2{font-size:26px}.test{align-items:flex-start;flex-direction:column}}
`;

Object.assign(translations, {
  de: ['Katalog','HipoBuy-Konto','Entdecke deinen','nächsten Fund.','Entdecke den CNFansSP-Katalog und öffne die Originaleinträge.','Katalog durchsuchen','Suchen','Alle Produkte','Neu im Katalog','Details ansehen','Artikel 7632511460 prüfen','Auf HipoBuy öffnen','Der Katalog ist vorübergehend nicht verfügbar.','Katalogquelle'],
  fr: ['Catalogue','Inscription HipoBuy','Trouvez votre','prochaine découverte.','Explorez le catalogue CNFansSP et ouvrez les fiches sur le site d’origine.','Rechercher dans le catalogue','Rechercher','Tous les produits','Dernières nouveautés','Voir les détails','Vérifier l’article 7632511460','Ouvrir sur HipoBuy','Le catalogue est temporairement indisponible.','Source du catalogue'],
  it: ['Catalogo','Registrati su HipoBuy','Scopri il tuo','prossimo acquisto.','Esplora il catalogo CNFansSP e apri le schede sul sito originale.','Cerca nel catalogo','Cerca','Tutti i prodotti','Ultimi arrivi','Vedi dettagli','Verifica articolo 7632511460','Apri su HipoBuy','Il catalogo è temporaneamente non disponibile.','Fonte del catalogo'],
  pl: ['Katalog','Rejestracja HipoBuy','Odkryj swój','kolejny produkt.','Przeglądaj katalog CNFansSP i otwieraj oferty na stronie źródłowej.','Szukaj w katalogu','Szukaj','Wszystkie produkty','Najnowsze produkty','Zobacz szczegóły','Sprawdź produkt 7632511460','Otwórz w HipoBuy','Katalog jest chwilowo niedostępny.','Źródło katalogu'],
  pt: ['Catálogo','Registo HipoBuy','Descubra a sua','próxima compra.','Explore o catálogo CNFansSP e abra os artigos no site original.','Pesquisar no catálogo','Pesquisar','Todos os produtos','Novidades','Ver detalhes','Consultar artigo 7632511460','Abrir na HipoBuy','O catálogo está temporariamente indisponível.','Fonte do catálogo']
});
const languages = {en:'English',de:'Deutsch',es:'Español',fr:'Français',it:'Italiano',pl:'Polski',pt:'Português',zh:'简体中文'};
const navigation = {
  en:['Home','Categories','Guides','View all','Sources','Editorial guides are in English.','Language'],
  zh:['首页','分类','购物指南','查看全部','参考来源','FAQ 和指南正文目前提供英文版。','语言'],
  es:['Inicio','Categorías','Guías','Ver todo','Fuentes','Las guías y preguntas frecuentes están en inglés.','Idioma'],
  de:['Startseite','Kategorien','Ratgeber','Alle ansehen','Quellen','Ratgeber und FAQ sind auf Englisch.','Sprache'],
  fr:['Accueil','Catégories','Guides','Tout voir','Sources','Les guides et la FAQ sont en anglais.','Langue'],
  it:['Home','Categorie','Guide','Vedi tutto','Fonti','Le guide e le FAQ sono in inglese.','Lingua'],
  pl:['Strona główna','Kategorie','Poradniki','Zobacz wszystkie','Źródła','Poradniki i FAQ są w języku angielskim.','Język'],
  pt:['Início','Categorias','Guias','Ver tudo','Fontes','Os guias e as perguntas frequentes estão em inglês.','Idioma']
};
Object.assign(categoryLabels, {
  de:['Schuhe','Kapuzenpullover und Pullover','T-Shirts','Jacken','Hosen und Shorts','Kopfbedeckungen','Accessoires','Trikots','Elektronik','Sonstiges'],
  fr:['Chaussures','Sweats et pulls','T-shirts','Vestes','Pantalons et shorts','Couvre-chefs','Accessoires','Maillots','Électronique','Autres'],
  it:['Scarpe','Felpe e maglioni','T-shirt','Giacche','Pantaloni e shorts','Cappelli','Accessori','Maglie sportive','Elettronica','Altro'],
  pl:['Buty','Bluzy i swetry','T-shirty','Kurtki','Spodnie i szorty','Nakrycia głowy','Akcesoria','Koszulki sportowe','Elektronika','Inne'],
  pt:['Calçado','Sweatshirts e camisolas','T-shirts','Casacos','Calças e calções','Chapéus','Acessórios','Camisolas desportivas','Eletrónica','Outros']
});
const extraCss = `
.brand{display:flex;align-items:center;gap:9px;letter-spacing:normal;font-size:15px}.brand img{width:125px;height:auto;display:block;background:#271646;border-radius:8px;padding:5px 8px;box-sizing:content-box}.brand span{border-left:1px solid #e5ddef;padding-left:9px}.nav{gap:14px;flex-wrap:wrap}.nav a[aria-current=page]{color:#5428c4;text-decoration:underline;text-underline-offset:5px}.langs{position:relative}.langs summary{cursor:pointer;border:1px solid #e5ddef;border-radius:10px;padding:7px 10px;white-space:nowrap}.langs ul{position:absolute;z-index:4;right:0;top:calc(100% + 3px);width:178px;margin:0;padding:5px;list-style:none;background:#fff;border:1px solid #e5ddef;border-radius:12px;box-shadow:0 10px 30px #25174124}.langs a{display:flex;justify-content:space-between;padding:6px;border-radius:6px}.langs a:hover,.langs a[aria-current=true]{background:#efe8ff}.langs small{color:#695483}.page{max-width:850px;margin:32px auto}.page h1{font-size:clamp(30px,5vw,54px);line-height:1.08;letter-spacing:-.045em;margin:12px 0 18px}.page h2{font-size:22px;margin:23px 0 5px}.article p{margin:0 0 11px}.article .lead{color:#625673}.source-list{display:flex;gap:8px 18px;flex-wrap:wrap;padding:0;list-style:none}.source-list a,.back,.faq-list p a{color:#5428c4;text-decoration:underline}.editorial{margin-top:32px}.resource-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:11px}.resource-grid a,.guide-list a,.faq-list details{background:#fff;border:1px solid #eae4ef;border-radius:12px;padding:11px 14px;display:block}.resource-grid a strong,.guide-list a strong{display:block}.guide-list,.faq-list{display:grid;gap:7px}.faq-list summary{cursor:pointer;font-weight:650}.faq-list p{margin:7px 0 0}.pagination{display:flex;gap:8px;margin:18px 0}.pagination a{border:1px solid #e5ddef;border-radius:8px;padding:5px 11px}.pagination a[aria-current=page]{background:#efe8ff}.exclusive{max-width:760px}.catalog-header .search{border:1px solid #e5ddef}.editorial-note{color:#625673;font-size:14px}.category-list{display:grid;grid-template-columns:1fr 1fr;gap:8px}.category-list a{padding:10px 12px;border:1px solid #e5ddef;border-radius:10px;background:white}
@media(max-width:830px){.bar{display:block;padding:12px 0}.nav{margin-top:10px;gap:7px 13px}.brand img{width:110px}.langs ul{right:auto;left:0}.nav>a:first-child{display:inline}.nav .button{padding:7px 10px}}
@media(max-width:620px){.page{margin:21px auto}.page h1{margin:7px 0 12px}.page h2{font-size:20px;margin-top:16px}.resource-grid{grid-template-columns:1fr}.resource-grid a,.faq-list details,.guide-list a{padding:8px 11px}.editorial{margin-top:24px}.editorial .section-head{margin-bottom:8px}.home .card:nth-child(n+5){display:none}.article{font-size:16px}.article .source-list{gap:5px 12px}.catalog-header{margin-bottom:10px}}
`;

function pageLink(path, lang) {
  return lang === 'en' ? path : '/' + lang + path;
}

function pageSection(title, content, className = '') {
  return `<section class="page ${className}"><h1>${escape(title)}</h1>${content}</section>`;
}

export default {
  async fetch(request, env = {}) {
    const url = new URL(request.url);
    if (url.hostname === 'www.' + productionHost) {
      return Response.redirect(production + url.pathname + url.search, 301);
    }
    const brandImages = {
      '/hipobuy-logo.png': officialLogo,
      '/favicon.png': officialFavicon
    };
    if (Object.hasOwn(brandImages, url.pathname)) {
      const encoded = brandImages[url.pathname].split(',')[1];
      return new Response(Uint8Array.from(atob(encoded), character => character.charCodeAt(0)), {
        headers: {'Content-Type':'image/png', 'Cache-Control':'public, max-age=86400'}
      });
    }
    const isProduction = url.hostname === productionHost;
    if (url.pathname === '/robots.txt') {
      const rules = isProduction ? 'User-agent: *\nAllow: /\nSitemap: ' + production + '/sitemap.xml\n' : 'User-agent: *\nDisallow: /\n';
      return new Response(rules, {headers: {'Content-Type':'text/plain; charset=utf-8'}});
    }
    if (url.pathname === '/sitemap.xml') {
      const entries = [
        ...Object.keys(languages).flatMap(code => ['/','/catalog/','/categories/'].map(path => pageLink(path,code))),
        '/faq/', '/faq/?page=2', '/faq/?page=3', '/guides/',
        ...guides.map(([slug]) => '/guides/' + slug + '/')
      ];
      const xml = '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' +
        entries.map(path => '<url><loc>' + escape(production + path) + '</loc></url>').join('') + '</urlset>';
      return new Response(xml, {headers: {'Content-Type':'application/xml; charset=utf-8'}});
    }
    const segments = url.pathname.split('/').filter(Boolean);
    const lang = Object.hasOwn(languages, segments[0]) ? segments.shift() :
      Object.hasOwn(languages, url.searchParams.get('lang')) ? url.searchParams.get('lang') : 'en';
    const path = segments.length ? '/' + segments.join('/') + '/' : '/';
    const t = translations[lang];
    const n = navigation[lang];
    const link = path => pageLink(path, lang);
    const guideLink = slug => link('/guides/' + slug + '/');
    const all = main + '/AllProducts/';
    const heading = (title, path) => `<div class="section-head"><h2>${title}</h2><a href="${link(path)}">${n[3]}</a></div>`;
    const card = (title, href, detail = '') => `<a href="${href}"><strong>${escape(title)}</strong>${detail ? '<span>' + escape(detail) + '</span>' : ''}</a>`;
    const search = `<form class="search" action="${main}/search.html" method="get"><input type="hidden" name="channelid" value="2"><input type="search" name="keywords" aria-label="${t[5]}" placeholder="${t[5]}" required><button>${t[6]}</button></form>`;
    const editorialNote = lang === 'en' ? '' : `<p class="editorial-note">${n[5]}</p>`;
    let body, title = 'HipoBuy Spreadsheet', description = t[4], status = 200;

    if (['/','/catalog/','/categories/'].includes(path)) {
      const {products, categories} = await readCatalog().catch(() => ({products: [], categories: []}));
      const image = (item, attrs = '') => `<img src="${escape(item.image)}" alt="${escape(item.name)}" ${attrs}>`;
      const categoryLinks = categories.map(({url, name}) => {
        const slug = new URL(url).pathname.split('/')[1].toLowerCase();
        return `<a href="${escape(url)}">${escape(categoryLabels[lang]?.[categoryPaths.indexOf(slug)] || name.trim())}</a>`;
      }).join('');
      const productLinks = products.map(item => `<a class="card" href="${escape(item.url)}">${image(item, 'loading="lazy"')}<div><strong>${escape(item.name)}</strong><span>${t[9]}</span></div></a>`).join('');
      const empty = `<p><a href="${all}">${t[12]} CNFansSP</a></p>`;
      const grid = productLinks ? `<div class="grid">${productLinks}</div>` : empty;
      if (path === '/') {
        const featured = products[0];
        body = `<section class="hero"><div class="pitch"><h1>${t[2]}<br><span>${t[3]}</span></h1><p>${t[4]}</p>${search}</div><div class="hero-art">${featured ? `<a href="${escape(featured.url)}">${image(featured)}<span>${escape(featured.name)}</span></a>` : ''}</div></section>
<nav class="categories" aria-label="${n[1]}"><a href="${all}">${t[7]}</a>${categoryLinks}</nav>
<section>${heading(t[8],'/catalog/')}${grid}</section>
<div class="test"><span>${t[10]}</span><a class="button" href="${agent}/product/weidian/7632511460">${t[11]}</a></div>
<section class="editorial">${heading('FAQ','/faq/')}<div class="resource-grid" lang="en">${faq.slice(0,3).map(([q],i)=>card(q,link('/faq/')+'#question-'+(i+1))).join('')}</div></section>
<section class="editorial">${heading(n[2],'/guides/')}<div class="resource-grid" lang="en">${guides.slice(0,3).map(([slug,name,desc])=>card(name,guideLink(slug),desc)).join('')}</div></section>`;
      } else if (path === '/catalog/') {
        title = t[0];
        body = `<div class="page catalog-header"><h1>${title}</h1>${search}</div><nav class="categories" aria-label="${n[1]}"><a href="${all}">${t[7]}</a>${categoryLinks}</nav>${grid}`;
      } else {
        title = n[1];
        body = pageSection(title, categoryLinks ? `<div class="category-list">${categoryLinks}</div>` : empty);
      }
    } else if (path === '/faq/') {
      title = 'HipoBuy FAQ';
      description = 'Answers to 24 HipoBuy questions about seller links, warehouse QC, shipping estimates, returns and tracking.';
      const size = 8;
      const total = Math.ceil(faq.length / size);
      const requested = Number(url.searchParams.get('page'));
      const page = Number.isInteger(requested) ? Math.max(1, Math.min(total, requested)) : 1;
      const start = (page-1)*size;
      const questions = faq.slice(start,start+size).map(([q,a,slug],i) => `<details name="faq" id="question-${start+i+1}"><summary>${escape(q)}</summary><p>${escape(a)} <a href="${guideLink(slug)}">Related guide</a></p></details>`).join('');
      const pages = Array.from({length:total},(_,i)=>`<a href="${link(path)}?page=${i+1}" ${page===i+1?'aria-current="page"':''}>${i+1}</a>`).join('');
      body = pageSection(title, `${editorialNote}<div class="faq-list" lang="en">${questions}</div><nav class="pagination" aria-label="FAQ pages">${pages}</nav><script>const q=document.getElementById(location.hash.slice(1));if(q instanceof HTMLDetailsElement)q.open=true;</script>`, 'exclusive');
    } else if (path === '/guides/') {
      title = n[2];
      description = 'Ten HipoBuy guides covering product links, first orders, QC photos, shipping and more.';
      body = pageSection(title, `${editorialNote}<div class="guide-list" lang="en">${guides.map(([slug,name])=>card(name,guideLink(slug))).join('')}</div>`, 'exclusive');
    } else {
      const article = segments.length === 2 && segments[0] === 'guides' && guides.find(([slug]) => slug === segments[1]);
      if (article) {
        const [,name,desc,sections,references] = article;
        title = name;
        description = desc;
        const paragraphs = sections.map(([head,copy])=>`<h2>${escape(head)}</h2><p>${escape(copy)}</p>`).join('');
        const citations = references.map(key=>`<li><a href="${sources[key][1]}">${escape(sources[key][0])}</a></li>`).join('');
        body = `<article class="page article" lang="en"><a class="back" href="${link('/guides/')}">${n[2]}</a><h1>${escape(title)}</h1><p class="lead">${escape(desc)}</p>${paragraphs}<h2>Sources</h2><ul class="source-list">${citations}</ul></article>`;
      } else {
        title = 'Page not found';
        body = pageSection(title, `<a href="${link('/')}">${n[0]}</a>`);
        status = 404;
      }
    }

    const menu = [['/',n[0]],['/catalog/',t[0]],['/categories/',n[1]],['/faq/','FAQ'],['/guides/',n[2]]].map(([href,label])=>
      `<a href="${link(href)}" ${path===href?'aria-current="page"':''}>${label}</a>`).join('');
    const languageLinks = Object.entries(languages).map(([code,label]) =>
      `<li><a href="${pageLink(path,code)}${path==='/faq/' && /^[1-3]$/.test(url.searchParams.get('page')) ? '?page='+url.searchParams.get('page') : ''}" lang="${code}" hreflang="${code}" ${code===lang?'aria-current="true"':''}><span>${label}</span><small>${code.toUpperCase()}</small></a></li>`).join('');
    const indexable = isProduction && status === 200;
    const canonicalLang = /^\/(faq|guides)\//.test(path) ? 'en' : lang;
    const pageQuery = path === '/faq/' && /^[23]$/.test(url.searchParams.get('page')) ? '?page=' + url.searchParams.get('page') : '';
    const canonical = escape(production + pageLink(path, canonicalLang) + pageQuery);
    const measure = env.GA4_MEASUREMENT_ID;
    const analytics = indexable && /^G-[A-Z0-9]{6,20}$/.test(measure || '') ?
      `<script async src="https://www.googletagmanager.com/gtag/js?id=${measure}"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config', '${measure}');</script>` : '';
    const verification = [['google-site-verification',env.GSC_VERIFICATION],['msvalidate.01',env.BING_VERIFICATION]]
      .filter(([,code]) => isProduction && code)
      .map(([name,code]) => `<meta name="${name}" content="${escape(code)}">`).join('');
    return new Response(`<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">${indexable ? `<link rel="canonical" href="${canonical}">` : '<meta name="robots" content="noindex">'}${verification}${analytics}<meta name="description" content="${escape(description)}"><link rel="icon" type="image/png" sizes="32x32" href="/favicon.png"><title>${escape(title)}${title==='HipoBuy Spreadsheet'?'':' | HipoBuy Finds'}</title><style>${css}${extraCss}</style></head><body>
<header><div class="wrap bar"><a class="brand" href="${link('/')}"><img src="/hipobuy-logo.png" alt="HipoBuy" width="125" height="29"><span>Finds</span></a><nav class="nav">${menu}<details class="langs"><summary aria-label="${n[6]}: ${languages[lang]}">${languages[lang]}</summary><ul>${languageLinks}</ul></details><a class="button" href="${agent}/register">${t[1]}</a></nav></div></header>
<main class="wrap ${path==='/'?'home':''}">${body}<footer>${t[13]} · <a href="${main}">CNFansSP</a></footer></main></body></html>`,
      {status,headers:{'Content-Type':'text/html; charset=utf-8',...(!indexable ? {'X-Robots-Tag':'noindex'} : {})}});
  }
};
