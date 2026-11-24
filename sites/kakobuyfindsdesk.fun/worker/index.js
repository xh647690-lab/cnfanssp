const origin = 'https://www.cnfanssp.com';
const production = 'https://kakobuyfindsdesk.fun';
const phrases = {
  en: ['English','Spreadsheet','Categories','Create an account','Find your next favorite.','Browse the CNFansSP spreadsheet by name or category.','Search product names','Search','Browse categories','Latest listings','All products','Results for','No products found.','Previous','Next','Product ID','Buy with CNFans','Original seller listing','View on CNFansSP','Unable to load the catalog right now. Please try again.','Back to products','Listings and photos from CNFansSP','Listed price','Browse the spreadsheet'],
  zh: ['简体中文','商品目录','分类','注册账号','找到你喜欢的商品','按名称搜索，或按分类浏览 CNFansSP 商品目录。','搜索商品名称','搜索','浏览分类','最新商品','全部商品','搜索结果','未找到商品。','上一页','下一页','商品 ID','通过 CNFans 代购','卖家原始链接','在 CNFansSP 查看','暂时无法加载商品，请重试。','返回商品目录','商品与图片来自 CNFansSP','源站标价','浏览商品目录'],
  es: ['Español','Catálogo','Categorías','Crear una cuenta','Encuentra tu próximo favorito.','Explora el catálogo de CNFansSP por nombre o categoría.','Buscar por nombre','Buscar','Explorar categorías','Últimos productos','Todos los productos','Resultados de','No se encontraron productos.','Anterior','Siguiente','ID del producto','Comprar con CNFans','Anuncio del vendedor','Ver en CNFansSP','No se pudo cargar el catálogo. Inténtalo de nuevo.','Volver al catálogo','Productos y fotos de CNFansSP','Precio indicado','Explorar el catálogo'],
  fr: ['Français','Catalogue','Catégories','Créer un compte','Trouvez votre prochain favori.','Explorez le catalogue CNFansSP par nom ou par catégorie.','Rechercher par nom','Rechercher','Explorer les catégories','Derniers produits','Tous les produits','Résultats pour','Aucun produit trouvé.','Précédent','Suivant','ID du produit','Acheter via CNFans','Annonce du vendeur','Voir sur CNFansSP','Le catalogue est indisponible. Réessayez.','Retour au catalogue','Produits et photos de CNFansSP','Prix affiché','Explorer le catalogue'],
  de: ['Deutsch','Katalog','Kategorien','Konto erstellen','Finde deinen nächsten Favoriten.','Durchsuche den CNFansSP-Katalog nach Name oder Kategorie.','Nach Produktnamen suchen','Suchen','Kategorien entdecken','Neueste Produkte','Alle Produkte','Ergebnisse für','Keine Produkte gefunden.','Zurück','Weiter','Produkt-ID','Über CNFans kaufen','Originalangebot','Auf CNFansSP ansehen','Der Katalog konnte nicht geladen werden. Bitte erneut versuchen.','Zurück zum Katalog','Produkte und Fotos von CNFansSP','Angegebener Preis','Katalog entdecken'],
};
const categoryNames = {
  zh:['鞋靴','卫衣与毛衣','T 恤','夹克','长裤与短裤','帽饰','配饰','短款套装','电子产品','其他','球衣'],
  es:['Calzado','Sudaderas','Camisetas','Chaquetas','Pantalones','Gorras','Accesorios','Conjuntos','Electrónica','Otros','Camisetas deportivas'],
  fr:['Chaussures','Sweats','T-shirts','Vestes','Pantalons','Chapeaux','Accessoires','Ensembles','Électronique','Autres','Maillots'],
  de:['Schuhe','Sweatshirts','T-Shirts','Jacken','Hosen','Kopfbedeckung','Accessoires','Sets','Elektronik','Sonstiges','Trikots'],
};
const categoryKeys = ['shoes','hoodies-sweaters','t-shirts','jackets','pants-shorts','headwear','accessories','short-sets','electronics','other-stuff','jersey'];

function escape(value = '') {
  return String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
}
function decode(value = '') {
  return value.replace(/&(#x[0-9a-f]+|#\d+|amp|quot|apos|lt|gt|nbsp);/gi, (match,key) => {
    if (key[0] !== '#') return {amp:'&',quot:'"',apos:"'",lt:'<',gt:'>',nbsp:' '}[key.toLowerCase()] ?? match;
    const number = key[1].toLowerCase() === 'x' ? parseInt(key.slice(2),16) : Number(key.slice(1));
    return number <= 0x10ffff ? String.fromCodePoint(number) : match;
  }).trim();
}
function urlOf(value, allowedHosts) {
  try {
    const url = new URL(decode(value), origin);
    if (url.protocol === 'https:' && allowedHosts.includes(url.hostname) && !url.username && !url.password) return url.href;
  } catch {}
  return '';
}
const sourceHosts = ['www.cnfanssp.com','cnfanssp.com'];
const sellerHosts = ['weidian.com','www.weidian.com','item.taobao.com','detail.tmall.com','detail.1688.com','shop.weidian.com'];
const sourceUrl = value => urlOf(value, sourceHosts);
const capture = (html, pattern) => decode(html.match(pattern)?.[1]);
const imageUrls = html => [...new Set([...html.matchAll(/\bdata-src="([^"]+)"/g)].map(match => sourceUrl(match[1])).filter(Boolean))];

function catalog(html) {
  const items = [];
  for (const [ , block] of html.matchAll(/<div class="product-card\b[^"]*"[^>]*>([\s\S]*?)(?=<div class="product-card\b|<div class="pagination")/g)) {
    const path = capture(block, /<a href="([^"]+\.html)" class="product-image"/);
    const title = capture(block, /<h3 class="product-name">([^<]+)</);
    const price = capture(block, /<div class="product-price">([^<]+)</);
    const image = imageUrls(block)[0];
    if (title && validProduct(path)) items.push({path,title,price,image});
  }
  const categories = [...html.matchAll(/<button class="filter-btn[^"]*" onclick="window.location.href='\/([\w-]+)\/'">\s*<span class="btn-text">([^<]+)/g)]
    .filter(match => !/^allproducts$/i.test(match[1])).map(match => [match[1],decode(match[2])]);
  return {items,categories};
}

function validProduct(path) {
  return /^\/[a-z0-9-]+\/\d+\.html$/i.test(path);
}
function product(html) {
  const details = html.split('class="related-products')[0];
  const gallery = details.split('<div class="product-gallery">')[1]?.split('<div class="product-info">')[0] ?? '';
  const seller = [...details.matchAll(/<a\s+href="([^"]+)"[^>]*class="action-btn\b/g)].map(match => urlOf(match[1], sellerHosts)).find(Boolean);
  return {
    title:capture(details, /<h1 class="product-title">([^<]+)</),
    id:capture(details, /<div class="product-id">\s*ID\s*:\s*([^<]+)</i),
    price:capture(details, /<div class="product-price">([^<]+)</),
    images:imageUrls(gallery), seller,
    agent:urlOf(capture(html, /href="(https:\/\/cnfans\.com\/product\/\?[^"]+)"/i), ['cnfans.com']),
  };
}

async function source(path) {
  const response = await fetch(new URL(path, origin), {redirect:'manual',signal:AbortSignal.timeout(9000)});
  if (!response.ok || !response.headers.get('content-type')?.includes('text/html')) throw new Error('Source unavailable: HTTP ' + response.status);
  return response.text();
}

const css = `
:root{color-scheme:light;--ink:#211b2a;--plum:#2e2042;--violet:#4d3570;--purple:#ece5f8;--lime:#d9f79a;--muted:#625a6b;--paper:#f9f7fb;--line:#e7e0ed}
*{box-sizing:border-box}body{margin:0;background:var(--paper);color:var(--ink);font:16px/1.5 system-ui,sans-serif}a{color:inherit;text-decoration:none}button,input{font:inherit}:focus-visible{outline:3px solid #8761b8;outline-offset:3px}.wrap{width:min(1280px,calc(100% - 72px));margin:auto}
header{background:#fff;border-bottom:1px solid var(--line)}.top{min-height:73px;display:flex;align-items:center;gap:28px;justify-content:space-between}.brand{font-weight:850;font-size:23px;letter-spacing:-.075em;white-space:nowrap}.brand span{color:#714aa5}.nav,.tools{display:flex;gap:24px;align-items:center}.nav{flex:1}.nav a,.tools a,.tools summary{font-weight:650;font-size:14px}.tools{gap:14px}.signup,.button{display:inline-flex;align-items:center;justify-content:center;min-height:43px;border:1px solid transparent;border-radius:10px;padding:0 15px;background:var(--plum);color:white;font-weight:700;cursor:pointer}.language{position:relative}.language summary{cursor:pointer;list-style:none;padding:10px 6px;white-space:nowrap}.language summary::after{content:'⌄';margin-left:7px}.language div{position:absolute;right:0;top:100%;z-index:2;background:white;border:1px solid var(--line);border-radius:12px;min-width:135px;padding:5px;box-shadow:0 10px 24px #211b2a20}.language a{display:block;padding:7px 9px;border-radius:6px}.language a[aria-current],.language a:hover{background:var(--purple)}
.hero{margin-top:28px;border-radius:22px;overflow:hidden;background:radial-gradient(ellipse at 96% 8%,#56397b 0%,transparent 58%),var(--plum);color:white;padding:clamp(27px,5vw,64px);display:grid;grid-template-columns:minmax(0,1fr) minmax(240px,.55fr);gap:30px;align-items:center}.hero h1{font-size:clamp(38px,6vw,80px);line-height:.99;letter-spacing:-.07em;margin:0;max-width:780px}.hero p{margin:21px 0 0;color:#eee4f5;max-width:46ch}.hero form,.filter-search{display:flex;gap:7px;align-items:center}.hero form{background:white;border-radius:12px;padding:6px}.hero input,.filter-search input{width:100%;min-width:0;border:0;color:var(--ink);padding:10px 11px;border-radius:7px;background:white}.hero .button,.button.buy{background:var(--lime);color:#222e1a}.hero .search-area{align-self:center}.section{margin:33px 0 0;scroll-margin-top:20px}.heading{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:15px}.heading h1,.heading h2{margin:0;font-size:clamp(24px,3.4vw,39px);letter-spacing:-.05em;line-height:1.1}.heading a,.back{text-decoration:underline;text-underline-offset:4px;font-weight:650;color:var(--violet)}
.categories{display:flex;gap:8px;flex-wrap:wrap}.pill{padding:8px 13px;background:white;border:1px solid var(--line);border-radius:100px;font-weight:650;font-size:14px}.pill:hover,.pill[aria-current]{background:var(--purple);border-color:#ba9ed9;color:var(--plum)}
.grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px}.card{background:white;border:1px solid var(--line);border-radius:15px;overflow:hidden;min-width:0;display:block;transition:box-shadow .2s,transform .2s}.card:hover{transform:translateY(-2px);box-shadow:0 8px 25px #321b4814}.card img,.card .blank{width:100%;aspect-ratio:1.24;display:block;object-fit:contain;background:#f0edf2}.card-text{padding:13px 14px 15px;display:grid;gap:5px}.card h3{font-size:15px;margin:0;overflow-wrap:anywhere}.price{font-weight:800;color:#4a2f72}.pages{display:flex;justify-content:center;gap:12px;margin-top:28px}.secondary{background:white;border-color:var(--line);color:var(--plum)}.filter-search{margin-bottom:15px}.filter-search input{border:1px solid var(--line);max-width:390px}
.detail{margin-top:26px;display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,.9fr);gap:clamp(22px,5vw,70px);align-items:start}.gallery{display:grid;gap:10px}.gallery img{width:100%;max-height:680px;display:block;object-fit:contain;background:#f0edf2;border-radius:16px}.info{background:white;border:1px solid var(--line);border-radius:18px;padding:clamp(18px,4vw,35px)}.info h1{margin:0 0 8px;font-size:clamp(29px,5vw,58px);line-height:1.02;letter-spacing:-.055em;overflow-wrap:anywhere}.info .price{font-size:27px}.muted,.empty,footer{color:var(--muted)}.actions{display:flex;gap:9px;flex-wrap:wrap;margin-top:22px}.info .source{display:inline-block;margin-top:20px;text-decoration:underline;text-underline-offset:4px}.empty{background:white;padding:25px;border:1px solid var(--line);border-radius:12px}footer{margin-top:52px;border-top:1px solid var(--line);padding:20px 0;font-size:14px}footer a{text-decoration:underline;text-underline-offset:4px}
@media(max-width:850px){.wrap{width:calc(100% - 38px)}.grid{grid-template-columns:repeat(3,minmax(0,1fr))}.hero{grid-template-columns:1fr}.hero form{max-width:480px}}@media(max-width:570px){.wrap{width:calc(100% - 26px)}.nav{display:none}.top{gap:8px;min-height:61px}.tools{gap:6px}.signup{min-height:36px;padding:0 8px}.hero{margin-top:15px;gap:18px}.grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:9px}.card-text{padding:8px 10px 12px}.detail{grid-template-columns:1fr}.heading a{font-size:14px}.section{margin-top:24px}.categories{gap:5px}.pill{padding:6px 9px}}
`;

const brandCss = '.brand{display:inline-flex;padding:0;background:none;border:0}.brand img{display:block;width:112px;max-width:100%;height:auto}@media(max-width:650px){.brand img{width:92px}}';
const compactCss = `
.brand{background:#0a192f;color:#fff;font-family:Arial,sans-serif;border-radius:9px;padding:4px 10px;font-size:1.6rem;font-weight:700;letter-spacing:normal}.brand span{color:#25d366}
.top{gap:17px}.nav{gap:16px}.language div{width:min(325px,calc(100vw - 30px));max-height:min(430px,70vh);overflow:auto;display:grid;grid-template-columns:1fr 1fr}.language a{display:flex;justify-content:space-between;gap:5px}.language small{font-size:11px;color:var(--muted);align-self:center}.nav a[aria-current]{text-decoration:underline;text-underline-offset:5px}
.hero h1{font-size:clamp(34px,5.4vw,73px)}.hero p:empty{display:none}.catalog-heading{margin-top:32px}.catalog-actions{display:flex;flex-wrap:wrap;align-items:center;gap:12px;margin-bottom:18px}.catalog-actions .filter-search{margin:0}.source-action{color:var(--violet);font-weight:700;text-decoration:underline;text-underline-offset:4px;font-size:14px}.category-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}.category-tile,.editor-card{display:block;border:1px solid var(--line);border-radius:12px;background:white;padding:15px;font-weight:700;overflow-wrap:anywhere}.category-tile:hover,.editor-card:hover{border-color:#b492ce;background:#fdfbff}.stories{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}.editor-card h2,.editor-card h3{margin:0;font-size:17px;line-height:1.25}.editor-card p{margin:8px 0 0;color:var(--muted);font-size:14px;font-weight:400}.questions{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px}.faq-group{border:1px solid var(--line);border-radius:13px;background:white;padding:14px}.faq-group h2{font-size:18px;margin:0 0 6px}.faq-item{border-top:1px solid var(--line);scroll-margin:12px}.faq-item summary{cursor:pointer;padding:9px 0;font-size:15px;font-weight:650}.faq-item p{margin:0 0 4px}.faq-item a,.reading a{text-decoration:underline;text-underline-offset:3px;color:var(--violet)}.faq-item a{display:inline-block;margin-bottom:9px;font-weight:650}.edition{font-size:14px;color:var(--muted);margin:0 0 13px}.reading{max-width:760px;margin:26px auto 0}.reading h1{font-size:clamp(27px,4.7vw,53px);line-height:1.06;letter-spacing:-.045em;margin:12px 0}.reading .intro{font-size:18px;color:var(--muted)}.reading h2{font-size:21px;line-height:1.16;margin:23px 0 6px}.reading p{margin:0 0 8px}.reading ul{margin:4px 0 0;padding-left:21px}.reading li{margin:3px 0}.editor-section .heading h2{font-size:clamp(21px,3vw,31px)}
@media(max-width:870px){.nav{gap:11px}.top{gap:11px}.brand{font-size:1.4rem}.category-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media(max-width:650px){.top{display:grid;grid-template-columns:1fr auto;gap:0;min-height:0;padding-top:8px}.brand{justify-self:start}.tools{justify-self:end}.top .nav{grid-column:1/-1;grid-row:2;display:flex;overflow-x:auto;white-space:nowrap;gap:18px;min-height:38px;scrollbar-width:thin}.language div{right:-24px}.hero{padding:20px;gap:12px}.hero p{margin-top:12px;font-size:15px}.hero h1{font-size:36px}.section{margin-top:20px}.heading{margin-bottom:9px}.home-items .card:nth-child(n+5){display:none}.stories,.questions{grid-template-columns:1fr;gap:7px}.editor-card,.category-tile{padding:10px 12px}.editor-card h2,.editor-card h3{font-size:15px}.home-stories .editor-card p,.guide-index .editor-card p{display:none}.faq-group{padding:9px 11px}.faq-group h2{font-size:16px}.faq-item summary{padding:7px 0;font-size:14px}.reading{margin-top:17px}.reading h2{font-size:19px;margin-top:16px}.reading .intro{font-size:16px}.reading p{font-size:15px}.gallery img{max-height:460px}.gallery img:nth-child(n+4){display:none}footer{margin-top:25px;padding:14px 0}}
@media(max-width:360px){.top .nav{gap:12px}.language div{right:-50px}.signup{font-size:12px!important}.brand{font-size:1.12rem}}
`;

function sourceAction(url,label) {
  return '<a class="source-action" href="' + escape(url) + '">' + escape(label) + '</a>';
}

function layout(url, path, lang, title, body, status = 200, description = '') {
  const t = interfaceText(lang);
  const [home,sheet,categories,guides,register,language] = navigationLabels[lang];
  const parameters = new URLSearchParams(url.search);
  parameters.delete('lang');
  const languages = Object.entries(languageList).map(([key,[label,code]]) =>
    `<a href="${escape(localizedPath(path,key,parameters))}" lang="${key === 'zh' ? 'zh-Hans' : key}"${key === lang ? ' aria-current="true"' : ''}>${label}<small>${code}</small></a>`
  ).join('');
  const nav = [['/',home],['/catalog',sheet],['/categories',categories],['/faq','FAQ'],['/guides',guides]].map(([target,label]) => {
    const active = target === '/' ? path === target : path.startsWith(target);
    return `<a href="${localizedPath(target,lang)}"${active ? ' aria-current="page"' : ''}>${label}</a>`;
  }).join('');
  const isProduction = url.hostname === new URL(production).hostname;
  const canonicalLang = path === '/faq' || path.startsWith('/guides') ? 'en' : lang;
  const canonical = production + localizedPath(path,canonicalLang);
  const pageMeta = status === 200 && isProduction
    ? `<link rel="canonical" href="${canonical}">`
    : '<meta name="robots" content="noindex,nofollow">';
  const metadata = description ? `<meta name="description" content="${escape(description)}">` : '';
  const currentLanguage = languageList[lang];
  return new Response(`<!doctype html><html lang="${lang === 'zh' ? 'zh-Hans' : lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">${pageMeta}<link rel="icon" href="https://kakobuy.com/favicon.ico" type="image/x-icon"><title>${escape(title)} · CNFansSP</title>${metadata}<style>${css}${compactCss}${brandCss}</style>${isProduction && status === 200 ? "<script async src=\"https://www.googletagmanager.com/gtag/js?id=G-C89Z99V3LG\"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-C89Z99V3LG');</script>" : ''}</head><body><header><div class="top wrap"><a class="brand" href="${localizedPath('/',lang)}"><img src="https://nstatic.kakobuy.com/banner/202602/22/1080564df2b8f006455d32460b53b7d9.png" width="642" height="162" alt="KakoBuy"></a><nav class="nav">${nav}</nav><div class="tools"><details class="language"><summary aria-label="${language}: ${currentLanguage[0]}">${currentLanguage[1]}</summary><div>${languages}</div></details><a class="signup" href="${origin}/reg">${register}</a></div></div></header><main class="wrap">${body}</main><footer><div class="wrap"><a href="${origin}/">${t[21]}</a></div></footer></body></html>`,{status,headers:{
    'content-type':'text/html; charset=utf-8',
    'content-security-policy':"default-src 'none'; img-src https://www.cnfanssp.com https://cnfanssp.com https://nstatic.kakobuy.com https://kakobuy.com https://*.google-analytics.com https://*.googletagmanager.com; script-src 'self' https://www.googletagmanager.com 'sha256-Q/NjapcqvyC5xUJD33ym2NZoXeoAec+6ukyjpCQHRx0='; connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com; style-src 'unsafe-inline'; form-action https://www.cnfanssp.com; base-uri 'none'; frame-ancestors 'none'",
    'referrer-policy':'strict-origin-when-cross-origin',
  }});
}

function searchForm(lang, query = '', className = '') {
  const t = interfaceText(lang);
  return `<form class="${className}" action="${origin}/search.html" method="get"><input type="hidden" name="channelid" value="2"><input type="search" name="keywords" value="${escape(query)}" placeholder="${t[6]}" aria-label="${t[6]}" maxlength="100" required><button class="button">${t[7]}</button></form>`;
}

function categoryLinks(data,lang,tile = false) {
  const mode = tile ? 'category-tile' : 'pill';
  return data.categories.map(([key,label]) => {
    const translated = categoryNames[lang]?.[categoryKeys.indexOf(key)] ?? label;
    return `<a class="${mode}" href="${origin}/${key}/">${escape(translated)}</a>`;
  }).join('');
}

function guideCard(guide,lang,heading) {
  return `<a lang="en" class="editor-card" href="${localizedPath('/guides/' + guide.slug,lang)}"><${heading}>${escape(guide.title)}</${heading}><p>${escape(guide.summary)}</p></a>`;
}

function homeEditorial(lang) {
  const nav = navigationLabels[lang];
  const questions = faqGroups[0][1].slice(0,3).map(([question],index) =>
    `<a lang="en" class="editor-card" href="${localizedPath('/faq',lang,{question:'1-' + (index+1)})}#question-1-${index+1}"><h3>${escape(question)}</h3></a>`).join('');
  const guides = guideTopics.slice(0,3).map(guide => guideCard(guide,lang,'h3')).join('');
  const section = (title,href,cards) => `<section class="section editor-section home-stories"><div class="heading"><h2>${title}</h2><a href="${localizedPath(href,lang)}">${nav[8]}</a></div><div class="stories">${cards}</div></section>`;
  return section(nav[6],'/faq',questions) + section(nav[7],'/guides',guides);
}

function listingPage(url,path,lang,data,query = '',category = '') {
  const t = interfaceText(lang);
  const nav = navigationLabels[lang];
  const home = path === '/';
  const title = query ? t[11] + ' “' + query + '”' : home ? t[9] : t[10];
  const cards = data.items.slice(0,8).map((item,index) => `<a class="card" href="${escape(sourceUrl(item.path))}">${item.image ? `<img src="${escape(item.image)}" alt="" ${index >= 4 ? 'loading="lazy"' : ''} decoding="async">` : '<div class="blank"></div>'}<div class="card-text"><h3>${escape(item.title)}</h3>${item.price ? `<span class="price" aria-label="${t[22]} ${escape(item.price)}">${escape(item.price)}</span>` : ''}</div></a>`).join('');
  const categories = categoryLinks(data,lang);
  const categoryTabs = categories ? `<section class="section" id="categories"><div class="heading"><h2>${t[8]}</h2><a href="${localizedPath('/categories',lang)}">${nav[8]}</a></div><div class="categories">${categories}</div></section>` : '';
  const hero = home ? `<section class="hero"><div><h1>${t[4]}</h1><p>${t[5]}</p></div><div class="search-area">${searchForm(lang)}</div></section>` : '';
  const heading = home ? 'h2' : 'h1';
  const upstream = query ? origin + '/search.html?' + new URLSearchParams({channelid:'2',keywords:query}) : origin + (category ? '/' + category + '/' : '/AllProducts/');
  const body = `${hero}${home ? categoryTabs : ''}<section class="section"><div class="heading"><${heading}>${escape(title)}</${heading}>${home ? `<a href="${localizedPath('/catalog',lang)}">${t[23]}</a>` : ''}</div>${!home ? `<div class="catalog-actions">${searchForm(lang,query,'filter-search')}${sourceAction(upstream,t[18])}</div>` : ''}${cards ? `<div class="grid ${home ? 'home-items' : ''}">${cards}</div>` : `<p class="empty">${t[12]}</p>`}</section>${home ? homeEditorial(lang) : ''}`;
  return layout(url,path,lang,home ? 'CNFansSP ' + t[1] : title,body,200,t[5]);
}

function detailPage(url,route,lang,data,path) {
  const t = interfaceText(lang);
  const pictures = data.images.map((image,index) => `<img src="${escape(image)}" alt="${escape(data.title)}"${index ? ' loading="lazy"' : ''}>`).join('');
  const button = (href,label,style) => href ? `<a class="button ${style}" href="${escape(href)}" target="_blank" rel="noopener noreferrer">${label}</a>` : '';
  const body = `<section class="section"><a class="back" href="${localizedPath('/catalog',lang)}">${t[20]}</a><div class="detail"><div class="gallery">${pictures}</div><div class="info"><h1>${escape(data.title)}</h1>${data.id ? `<div class="muted">${t[15]} · ${escape(data.id)}</div>` : ''}${data.price ? `<p><span class="muted">${t[22]}</span><br><span class="price">${escape(data.price)}</span></p>` : ''}<div class="actions">${button(data.agent,t[16],'buy')}${button(data.seller,t[17],'secondary')}</div><a class="source" href="${escape(sourceUrl(path))}">${t[18]}</a></div></div></section>`;
  return layout(url,route,lang,data.title,body);
}

function englishEdition(lang) {
  return lang === 'en' ? '' : `<p class="edition">${navigationLabels[lang][10]}</p>`;
}

function faqPage(url,path,lang) {
  const groups = faqGroups.map(([group,questions],groupIndex) => `<section class="faq-group"><h2>${escape(group)}</h2>${questions.map(([question,answer,guideIndex],index) => {
    const guide = guideTopics[guideIndex];
    return `<details class="faq-item" id="question-${groupIndex+1}-${index+1}" name="faq"${url.searchParams.get('question') === groupIndex+1 + '-' + (index+1) ? ' open' : ''}><summary>${escape(question)}</summary><p>${escape(answer)}</p><a href="${localizedPath('/guides/' + guide.slug,lang)}">${escape(guide.title)}</a></details>`;
  }).join('')}</section>`).join('');
  return layout(url,path,lang,'KakoBuy FAQ',`<section class="section"><div class="heading"><h1>FAQ</h1></div>${englishEdition(lang)}<div lang="en" class="questions">${groups}</div></section>`,200,'24 answers about KakoBuy listings, marketplace links, warehouse QC, delivery and returns.');
}

function guidesPage(url,path,lang) {
  const label = navigationLabels[lang][3];
  const cards = guideTopics.map(guide => guideCard(guide,lang,'h2')).join('');
  return layout(url,path,lang,label,`<section class="section guide-index"><div class="heading"><h1>${label}</h1></div>${englishEdition(lang)}<div class="stories">${cards}</div></section>`,200,'KakoBuy buying guides covering Weidian links, warehouse QC, shipping costs and returns.');
}

function guidePage(url,path,lang,guide) {
  const nav = navigationLabels[lang];
  const sections = guide.sections.map(([title,body]) => `<section><h2>${escape(title)}</h2><p>${escape(body)}</p></section>`).join('');
  const citations = guide.sources.map(key => {
    const [label,href] = editorialSources[key];
    return `<li><a href="${escape(href)}">${escape(label)}</a></li>`;
  }).join('');
  const body = `<article class="reading"><a class="back" href="${localizedPath('/guides',lang)}">${nav[3]}</a>${englishEdition(lang)}<div lang="en"><h1>${escape(guide.title)}</h1><p class="intro">${escape(guide.summary)}</p>${sections}</div><h2>${nav[9]}</h2><ul lang="en">${citations}</ul></article>`;
  return layout(url,path,lang,guide.title,body,200,guide.summary);
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const prefix = url.pathname.split('/')[1];
    const legacyLang = url.searchParams.get('lang');
    let lang = 'en';
    let route = url.pathname;
    if (prefix && Object.hasOwn(languageList,prefix)) {
      lang = prefix;
      route = route.slice(prefix.length + 1) || '/';
    } else if (legacyLang && Object.hasOwn(languageList,legacyLang)) {
      lang = legacyLang;
    }
    const path = route.length > 1 ? route.replace(/\/$/,'') : route;
    const t = interfaceText(lang);
    const errorPage = (message,status) => layout(url,path,lang,t[1],`<section class="section"><p class="empty">${message}</p><a class="back" href="${localizedPath('/',lang)}">${t[20]}</a></section>`,status);
    const isProduction = url.hostname === new URL(production).hostname;
    if (path === '/robots.txt') {
      const policy = isProduction ? 'Allow: /\nSitemap: ' + production + '/sitemap.xml\n' : 'Disallow: /\n';
      return new Response('User-agent: *\n' + policy, {headers:{'content-type':'text/plain; charset=utf-8'}});
    }
    if (path === '/sitemap.xml' && isProduction) {
      const pages = ['/', '/catalog', '/categories', '/faq', '/guides', ...guideTopics.map(guide => '/guides/' + guide.slug)];
      const entries = pages.map(page => '<url><loc>' + production + page + '</loc></url>').join('');
      return new Response('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + entries + '</urlset>', {headers:{'content-type':'application/xml; charset=utf-8'}});
    }
    if (path === '/favicon.ico') return Response.redirect('https://kakobuy.com/favicon.ico',302);
    if (path === '/faq') return faqPage(url,path,lang);
    if (path === '/guides') return guidesPage(url,path,lang);
    if (path.startsWith('/guides/')) {
      const guide = guideTopics.find(article => article.slug === path.slice('/guides/'.length));
      return guide ? guidePage(url,path,lang,guide) : errorPage(t[12],404);
    }
    try {
      if (path.startsWith('/product/')) {
        const sourcePath = path.slice('/product'.length);
        if (!validProduct(sourcePath)) return errorPage(t[12],404);
        const data = product(await source(sourcePath));
        return data.title ? detailPage(url,path,lang,data,sourcePath) : errorPage(t[12],404);
      }
      if (!['/','/catalog','/categories'].includes(path)) return errorPage(t[12],404);
      const query = url.searchParams.get('q')?.trim().slice(0,100) ?? '';
      const category = url.searchParams.get('category') ?? '';
      if (category && !categoryKeys.includes(category)) return errorPage(t[12],404);
      let sourcePath = '/AllProducts/';
      if (category) sourcePath = '/' + category + '/';
      if (query) sourcePath = '/search.html?' + new URLSearchParams({channelid:'2',keywords:query});
      const html = await source(sourcePath);
      if (!/class="product-grid"/.test(html)) throw new Error('Unexpected source catalog');
      const data = catalog(html);
      if (path === '/categories') {
        const body = `<section class="section"><div class="heading"><h1>${t[2]}</h1></div><div class="category-grid"><a class="category-tile" href="${origin}/AllProducts/">${t[10]}</a>${categoryLinks(data,lang,true)}</div></section>`;
        return layout(url,path,lang,t[2],body);
      }
      return listingPage(url,path,lang,data,query,category);
    } catch (error) {
      console.error('CNFansSP:',error.message);
      return errorPage(t[19],502);
    }
  },
};
