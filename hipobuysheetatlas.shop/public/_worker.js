export const official = 'https://hipobuy.com/';
const fees = official + 'notice/1740653781924810754';
const shipping = official + 'notice/1740663384020455425';

export const articles = [
['hipobuy-spreadsheet-search','How to use a HipoBuy spreadsheet','Find a listing, verify the variant and keep a shortlist.',[
'Start with the category or search box. Use a category plus one distinguishing term, such as jersey plus a team name. If results are sparse, remove one term at a time. Save the source URL and the date you checked it.',
'Open the product detail and compare the listing title, seller and selected size or color. A spreadsheet card is a lead. The live listing and agent order screen determine which options are actually available.',
'Keep two candidates with comparable measurements. Record the item price, domestic delivery and any open questions. Reopen your preferred listing before placing the order, then use the saved variant details to review the warehouse photos.'
],'https://hipo-buy.com/how-to-use-hipobuy-spreadsheet/'],
['hipobuy-qc-photos','HipoBuy QC photos: what to check','Match the item first, then inspect visible details.',[
'Open the warehouse photo set for the exact order line. Compare the product, color, label and size with your saved order details before examining the finish.',
'For shoes, compare both sides and look at sole edges and shape. For clothing, inspect seams, closures, artwork placement and any tape measurements. Ask for a clear photo of the specific area if a crop or shadow hides it.',
'Write down the discrepancy before approving the parcel. A photo can show a visible mark or label mismatch. Fit, durability and material claims often require other evidence.'
],'https://hipobuy.org/spreadsheet-guide/'],
['hipobuy-shipping-cost','HipoBuy shipping cost: compare delivered totals','Estimate goods, domestic delivery and international freight.',[
'Keep product price and seller-to-warehouse delivery in separate columns. HipoBuy describes both as components of item cost. A spreadsheet price gives you a starting point for comparison.',
'For each available route, record destination, packed weight and dimensions, quoted price, optional services and currency. Check applicable taxes and fees separately using the route terms and the destination authority.',
'Compare quotes for the same parcel and date. If you change the box or split a parcel, request updated estimates. Compare the combined shipment cost with two complete quotes before choosing.'
],fees],
['hipobuy-tracking','HipoBuy tracking: read order and parcel updates','Identify which stage you are waiting for.',[
'Use the order view for seller-to-warehouse progress and the parcel view for international delivery. Save the parcel number and the carrier tracking number as separate identifiers.',
'When the label appears, check whether the carrier has posted an acceptance scan. Save the last event and timestamp. The route estimate gives context for deciding when to ask for help.',
'Send support the parcel identifier, last scan, date and a concise description of the gap. Keep the conversation with the shipment record, especially if the parcel changes carriers.'
],'https://spreadsheets-hipobuy.com/articles/'],
['hipobuy-volumetric-weight','HipoBuy parcel weight and dimensions','Check which measurements a route uses to quote freight.',[
'Record the parcel’s packed weight and all three outside dimensions. A thick jacket or shoe box can occupy substantial space even when the items are light.',
'If a route uses volumetric weight, use its stated units and divisor. For example, a hypothetical route with a divisor of 6000 gives 4 kg for a 40 × 30 × 20 cm carton. Read the route’s rounding and billing rules before comparing.',
'Only change packaging after considering product protection. Compare the updated quote and dimensions with the original parcel so you can see whether the change saves enough to justify it.'
],shipping],
['hipobuy-product-link','HipoBuy product link troubleshooting','Check the live source when a product ID fails to load.',[
'Save the original marketplace URL if it appears on the product detail page. Open the source and compare its item ID and marketplace with the agent link.',
'If the source still shows the intended product, paste its complete URL into HipoBuy and compare the result. If the item redirects or the variant disappears, ask the seller or choose a verified alternative.',
'Check any replacement against the original measurements and photos. A different seller or variant can change the product and the delivered total even if the headline is similar.'
],'https://spreadsheets-hipobuy.com/articles/'],
['hipobuy-clothing-size','HipoBuy clothing sizing and measurements','Use a garment you own as the reference.',[
'Measure a similar garment laid flat and record the measuring method. For a top, start with chest width, length and sleeve. For trousers, include waist, inseam and rise.',
'Check whether the seller chart shows flat width or circumference and compare in the same units. Ask for clarification when the chart uses an unexplained measurement or a range.',
'At warehouse QC, check the label and request a tape photo if the fit depends on a particular dimension. Keep both the seller chart and the photo when contacting support about a mismatch.'
],'https://spreadsheets-hipobuy.com/articles/'],
['hipobuy-jersey-guide','HipoBuy jerseys: versions, sizing and print QC','Compare the version and customization before ordering.',[
'Confirm the seller’s version, selected season or design, size and nameset option. Ask whether the listing photo shows the same configuration you plan to order.',
'Compare chest width and length with a jersey that fits you. If adding a name or number, double-check spelling and ask about the seller’s terms before paying.',
'Use photos of the front, back and close-up artwork to compare the selected option. Ask for another angle if folds conceal the print or stitching.'
],'https://spreadsheets-hipobuy.com/articles/'],
['hipobuy-warehouse-return','HipoBuy warehouse returns and refunds','Document the mismatch while the item is at the warehouse.',[
'Check the order page and applicable seller or platform terms as soon as you spot a discrepancy. Keep the order ID, listing, variant and clear pictures together.',
'Ask support which return or exchange options apply and whether shipping or other charges affect the refund. Record deadlines and the next action shown for the order.',
'When a return is approved, save the confirmation and follow the order until the refund closes. Review the posted total against the refund terms and query any unexplained difference.'
],official],
['hipobuy-parcel-consolidation','HipoBuy parcel consolidation checklist','Choose what to combine before requesting a shipping quote.',[
'List the warehouse items you want to ship and review each item’s condition and route eligibility. Check packaging needs for fragile goods and availability for your destination.',
'Compare one packed parcel with a split option using the same route inputs. Consider dimensions, protection, route restrictions and delivery timing alongside the combined price.',
'Before submitting, check the address, selected items, service options and applicable declarations. Save the parcel identifier so you can match later tracking events to the correct shipment.'
],shipping]
];

export const faq = [
['How do I search the spreadsheet?','Enter a product name or category. The search opens the corresponding results on cnfanssp.'],
['Where do product photos come from?','The cards load photos directly from cnfanssp. Open the source listing to inspect its current details.'],
['How do I check current availability?','Open the detail page and confirm the exact seller variant on the live listing or agent order screen.'],
['How do I open item 7632511460?','Use the HipoBuy item link on the homepage and verify the displayed listing before ordering.'],
['What does a product ID identify?','It identifies a marketplace listing in its own channel. Keep the marketplace and ID together.'],
['How do I create a HipoBuy account?','Use the official sign-up link and follow the prompts on HipoBuy.'],
['What if a product link has expired?','Look for the original marketplace URL and check whether that listing and its intended version are still live.'],
['How do I choose a clothing size?','Compare the seller’s measurements and measurement method with a similar garment you already own.'],
['How do I compare shoe sizes?','Check the seller’s chart for the specific model and compare its stated length measurement with a suitable reference.'],
['Can I verify jersey customization?','Check the version, spelling, number and available seller terms before ordering.'],
['What are QC photos?','They are warehouse photos used to review the item that arrived against your order details.'],
['What should I check first in QC?','Match item, size and color to the order line before examining construction or visible marks.'],
['Can I ask for a clearer QC photo?','Check the order options or contact HipoBuy support with the order ID and the specific photo angle you need.'],
['What does the listed price cover?','Use the price as an item reference. Check domestic delivery and the other charges shown for your order separately.'],
['How do I estimate international shipping?','Compare available routes for your destination using the packed weight and dimensions.'],
['What is volumetric weight?','It is a size-based weight used by some routes. Use the route’s own formula, units and rounding rules.'],
['Can warehouse items ship together?','HipoBuy offers consolidated parcels. Check destination eligibility, item restrictions and packaging needs first.'],
['Should I remove shoe boxes?','Compare both packed quotes and consider whether the shoe needs the original box for protection.'],
['Where do I find parcel tracking?','Open the parcel record on HipoBuy and use its tracking number with the listed carrier.'],
['Why does tracking only show a label?','Check for a later carrier acceptance scan. Save the last timestamp if you need to contact support.'],
['How do I request a warehouse return?','Check the order’s return options and contact HipoBuy promptly with the order ID and photos.'],
['Where can I confirm customs requirements?','Check the shipping route terms and the official customs authority for the delivery country.'],
['How do I report an item problem?','Keep the order or parcel number, the listing and photos of the issue, then use HipoBuy’s after-sales support.'],
['What does the language switch translate?','It changes site controls and navigation. Product data retains its original wording from cnfanssp.']
];

const source = 'https://www.cnfanssp.com';
const buy = 'https://hipobuy.com/goods/details?channel=WEIDIAN&id=7632511460';

export async function catalog() {
  const response = await fetch(source + '/', { signal: AbortSignal.timeout(9000) });
  if (!response.ok) throw new Error('Catalog unavailable');
  const products = [];
  const categories = [];
  let product;
  let category;
  const absolute = (path) => {
    const url = new URL(path || '/', source);
    return url.origin === source ? url.href : null;
  };
  const collect = (item, key, chunk) => {
    if (item) item[key] = (item[key] || '') + chunk.text;
  };
  const parsed = new HTMLRewriter()
    .on('.category-item', { element(element) {
      category = { url: absolute(element.getAttribute('href')) };
      categories.push(category);
    } })
    .on('.category-item h3', { text(chunk) { collect(category, 'name', chunk); } })
    .on('.product-card', { element() { product = {}; products.push(product); } })
    .on('.product-card .product-image', { element(element) {
      product.url = absolute(element.getAttribute('href'));
    } })
    .on('.product-card .product-image img', { element(element) {
      product.name = element.getAttribute('alt');
      product.image = absolute(element.getAttribute('data-src'));
    } })
    .on('.product-card .product-price', { text(chunk) { collect(product, 'price', chunk); } })
    .transform(response);
  await parsed.text();
  const items = products.filter(item => item.name && item.image && item.url).slice(0, 12);
  if (!items.length) throw new Error('Products unavailable');
  return { categories: categories.filter(item => item.name && item.url), products: items };
}

export default {
  async fetch(request, env = {}) {
    const path = new URL(request.url).pathname;
    const domain = 'https://hipobuysheetatlas.shop';
    if (path === '/robots.txt') return new Response('User-agent: *\nAllow: /\nSitemap: ' + domain + '/sitemap.xml\n');
    if (path === '/sitemap.xml') {
      const urls = [...routes.keys()].map(route => '<url><loc>' + domain + route + '</loc></url>').join('');
      return new Response('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + urls + '</urlset>', {headers:{'Content-Type':'application/xml; charset=utf-8'}});
    }
    if (path === '/catalog.json') {
      try {
        return Response.json(await catalog(), { headers: { 'Cache-Control': 'no-store' } });
      } catch {
        return Response.json({ error: 'Catalog unavailable' }, { status: 502 });
      }
    }
    const content = routes.get(path.replace(/\/$/, '') || '/');
    if (content === undefined) return new Response('Not found', { status: 404 });
    const html = path === '/' ? page : page.replace(/<main class="wrap">[\s\S]*?<\/main>/, content)
      .replace('<title>HipoBuy Finds · Product Spreadsheet</title>', '<title>' + titles.get(path.replace(/\/$/, '')) + ' · HipoBuy Finds</title>');
    const canonical = '<link rel="canonical" href="' + domain + (path.replace(/\/$/, '') || '/') + '">';
    const measurement = env.GA4_MEASUREMENT_ID || 'G-9M41ER3D1E';
    const analytics = /^G-[A-Z0-9]+$/.test(measurement || '') ? `<script async src="https://www.googletagmanager.com/gtag/js?id=${measurement}"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${measurement}');</script>` : '';
    return new Response(html.replace('</head>', canonical + analytics + '<meta name="msvalidate.01" content="A966D427AFCEEEC4068828D9F541400A"></head>'), { headers: {
      'Content-Type': 'text/html; charset=utf-8',
    } });
  },
};

const articleCard = ([slug, title, intro]) =>
  `<a class="tile" href="/articles/${slug}"><strong>${title}</strong><small>${intro}</small></a>`;
const questions = faq.map(([question, answer], i) =>
  `<details id="faq-${i + 1}"><summary>${question}</summary><p>${answer}</p></details>`);
const homeEditorial = `<section class="home-editorial">
<div class="section"><h2 data-t="faq">FAQ</h2><a href="/faq" data-t="all">View all</a></div>
<div class="tiles">${faq.slice(-3).reverse().map(([title], i) => `<a class="tile" href="/faq#faq-${faq.length - i}">${title}</a>`).join('')}</div>
<div class="section"><h2 data-t="articles">Articles</h2><a href="/articles" data-t="all">View all</a></div>
<div class="tiles">${articles.slice(-3).reverse().map(articleCard).join('')}</div>
</section>`;
const frame = (title, body) => `<main class="wrap"><div class="editorial"><h1>${title}</h1>${body}</div></main>`;
const titles = new Map([['/faq','Frequently asked questions'],['/articles','HipoBuy guides'],['/spreadsheet','Product spreadsheet']]);
const routes = new Map([
  ['/', ''],
  ['/faq',frame(titles.get('/faq'),questions.join('') + `<p><a href="${official}">HipoBuy official help</a></p>`)],
  ['/articles',frame(titles.get('/articles'),`<div class="tiles">${[...articles].reverse().map(articleCard).join('')}</div>`)],
  ['/spreadsheet',frame(titles.get('/spreadsheet'),`
    <form action="${source}/search.html" method="get"><input type="hidden" name="channelid" value="2"><input id="query" name="keywords" type="search" required><button class="green" data-t="search">Search</button></form>
    <nav class="categories" id="categories" aria-label="Product categories"></nav>
    <div class="section"><h2 data-t="latest">Latest finds</h2><a href="${source}/AllProducts/" class="button" data-t="all">View all</a></div>
    <p role="status" id="status"></p><div class="grid" id="products"></div>`)],
]);
for (const [slug,title,intro,paragraphs,reference] of articles) {
  const path = '/articles/' + slug;
  titles.set(path,title);
  routes.set(path,frame(title,`<p><strong>${intro}</strong></p>${paragraphs.map(p => `<p>${p}</p>`).join('')}<p><a href="${reference}">Reference</a> · <a href="/articles">All HipoBuy guides</a></p>`));
}

const page = `<!doctype html>
<html lang="en">
<head>
<link rel="icon" href="https://hipobuy.com/favicon.png">
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>HipoBuy Finds · Product Spreadsheet</title>
<style>
:root{color-scheme:light;--ink:#182321;--green:#d8f769;--deep:#102c24;--paper:#f5f7f2;--line:#dce4db}
*{box-sizing:border-box}
body{margin:0;background:var(--paper);color:var(--ink);font:16px/1.5 Inter,system-ui,sans-serif}
a{color:inherit;text-decoration:none}
a:hover{text-decoration:underline}
.wrap{max-width:1220px;margin:auto;padding:0 28px}
header{background:#fff;border-bottom:1px solid var(--line)}
.bar{min-height:72px;display:flex;gap:22px;align-items:center;justify-content:space-between}
.brand{font-size:22px;font-weight:800;letter-spacing:-.06em;white-space:nowrap}
.brand{display:flex;align-items:center;gap:6px}.brand img{width:100px;height:30px;object-fit:contain}.brand span{color:#42765e}
nav,.actions{display:flex;gap:18px;align-items:center}
.button,button,select{border:1px solid var(--line);border-radius:10px;padding:10px 15px;background:white;color:var(--ink);font:inherit;font-weight:650;cursor:pointer}
.green{background:var(--green);border-color:var(--green)}
.hero{background:var(--deep);color:#fff;padding:54px 48px;border-radius:22px;margin-top:30px}
.hero p{color:#d6e5da;margin:0 0 24px}
h1{font-size:clamp(40px,7vw,78px);line-height:.98;letter-spacing:-.07em;margin:0 0 16px;max-width:740px}
form{display:flex;gap:8px;max-width:590px;background:#fff;padding:6px;border-radius:13px}
input[type=search]{min-width:0;flex:1;border:0;padding:10px 12px;color:var(--ink);font:inherit}
.hero .actions{flex-wrap:wrap;margin-top:18px}
.hero .actions a{font-size:14px;color:#e6f7dd;text-decoration:underline}
.categories{display:flex;gap:8px;flex-wrap:wrap;margin:24px 0 30px}
.chip{background:#fff;border:1px solid var(--line);border-radius:30px;padding:8px 14px;font-size:14px}
.section{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:14px}
h2{font-size:30px;letter-spacing:-.045em;margin:0}
.grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px}
.card{display:block;background:#fff;border:1px solid var(--line);border-radius:16px;overflow:hidden}
.card img{width:100%;aspect-ratio:4/3;object-fit:contain;display:block;background:#eef1ec}
.card div{display:flex;gap:8px;justify-content:space-between;padding:14px;font-weight:650}
.price{color:#32674e;white-space:nowrap}
footer{margin-top:35px;padding:20px 0;border-top:1px solid var(--line);color:#4d6258}
@media(max-width:750px){.wrap{padding:0 16px}.hero{padding:32px 20px;margin-top:18px}.grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.bar nav{display:none}.bar,.actions{gap:8px}.bar .button,select{padding:8px;font-size:14px}.card div{padding:9px;flex-wrap:wrap}.section .button{font-size:14px}}
.site-nav{display:flex;gap:18px;flex-wrap:wrap;padding:0 0 14px}
.editorial{max-width:780px;margin:26px auto}
.editorial h1{font-size:clamp(34px,6vw,52px);line-height:1.06}
.tiles{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;margin:12px 0 22px}
.tile,details{background:white;border:1px solid var(--line);border-radius:10px;padding:10px 13px}
.tile{display:block}.tile small{display:block;margin-top:5px}
details{margin:6px 0}summary{font-weight:650;cursor:pointer}details p{margin:8px 0 0}
.home-editorial{margin-top:30px}
@media(max-width:650px){.tiles{grid-template-columns:1fr}.site-nav{gap:14px;font-size:14px}.editorial{margin:18px auto}.editorial p{margin:10px 0}.editorial .tile{padding:8px 11px}}
</style>
</head>
<body>
<header><div class="wrap bar">
<a class="brand" href="/"><img src="https://app.hipobuy.com/logo.png" alt="HipoBuy"> <span>Finds</span></a>

<div class="actions"><select id="language" aria-label="Language">
<option value="en">English</option><option value="de">Deutsch</option><option value="fr">Français</option><option value="es">Español</option><option value="zh">简体中文</option>
</select><a class="button green" href="https://hipobuy.com/register" data-t="register"></a></div>
</div><nav class="wrap site-nav" aria-label="Site">
<a href="/" data-t="home">Home</a><a href="/spreadsheet" data-t="catalog">Product catalog</a><a href="/faq" data-t="faq">FAQ</a><a href="/articles" data-t="articles">Articles</a>
</nav></header>
<main class="wrap">
<section class="hero">
<h1 data-t="title"></h1>
<p data-t="intro"></p>
<form action="${source}/search.html" method="get">
<input type="hidden" name="channelid" value="2">
<input id="query" name="keywords" type="search" required>
<button class="green" data-t="search"></button>
</form>
<div class="actions"><a href="${buy}" data-t="buy"></a></div>
</section>
<nav aria-label="Product categories" class="categories" id="categories"></nav>
<section>
<div class="section"><h2 data-t="latest"></h2><a href="${source}/AllProducts/" class="button" data-t="all"></a></div>
<p role="status" id="status"></p>
<div class="grid" id="products"></div>
</section>
${homeEditorial}
<footer><a href="${source}/" data-t="source"></a></footer>
</main>
<script>
const words = {
 en:['HipoBuy Spreadsheet','Browse the live cnfanssp product spreadsheet.','Product catalog','Visit cnfanssp','HipoBuy sign-up','Search','Search products','Open item 7632511460 on HipoBuy','Latest finds','View all','Loading products…','The catalog is temporarily unavailable. Open cnfanssp to browse.'],
 de:['Entdecke deinen nächsten Fund.','Durchsuche den aktuellen Produktkatalog von cnfanssp.','Produktkatalog','cnfanssp besuchen','HipoBuy-Konto','Suchen','Produkte suchen','Artikel 7632511460 auf HipoBuy öffnen','Neueste Funde','Alle ansehen','Produkte werden geladen…','Der Katalog ist vorübergehend nicht erreichbar.'],
 fr:['Trouvez votre prochain achat.','Parcourez le catalogue cnfanssp en direct.','Catalogue','Visiter cnfanssp','Inscription HipoBuy','Rechercher','Rechercher des produits','Voir l’article 7632511460 sur HipoBuy','Dernières trouvailles','Tout afficher','Chargement des produits…','Le catalogue est temporairement indisponible.'],
 es:['Encuentra tu próxima compra.','Explora el catálogo actualizado de cnfanssp.','Catálogo','Visitar cnfanssp','Registro en HipoBuy','Buscar','Buscar productos','Ver el artículo 7632511460 en HipoBuy','Últimos hallazgos','Ver todo','Cargando productos…','El catálogo no está disponible temporalmente.'],
 zh:['发现你的下一件好物','浏览 cnfanssp 实时商品目录。','商品目录','访问 cnfanssp','注册 HipoBuy','搜索','搜索商品','在 HipoBuy 查看商品 7632511460','最新商品','查看全部','正在加载商品…','暂时无法加载目录，可前往 cnfanssp 浏览。']
};
const keys = ['title','intro','catalog','source','register','search','query','buy','latest','all','loading','error'];
const language = document.querySelector('#language');
const status = document.querySelector('#status');
let state = 'loading';
let dict;
function localize() {
  const extra = {en:['Home','FAQ','Articles'],de:['Startseite','FAQ','Artikel'],fr:['Accueil','FAQ','Articles'],es:['Inicio','Preguntas frecuentes','Artículos'],zh:['首页','常见问题','文章']};
  document.documentElement.lang = language.value === 'zh' ? 'zh-Hans' : language.value;
  dict = Object.fromEntries(keys.map((key, i) => [key, words[language.value][i]]));
  [dict.home, dict.faq, dict.articles] = extra[language.value];
  for (const link of document.querySelectorAll('a[href^="/"]')) {
    const url = new URL(link.href);
    url.searchParams.set('lang', language.value);
    link.href = url.pathname + url.search + url.hash;
  }
  document.querySelectorAll('[data-t]').forEach(element => element.textContent = dict[element.dataset.t]);
  const query = document.querySelector('#query');
  if (query) query.placeholder = dict.query;
  query?.setAttribute('aria-label', dict.query);
  if (status) {
    status.hidden = !state;
    status.textContent = dict[state] || '';
  }
}
language.value = ['en','de','fr','es','zh'].find(key => key === new URLSearchParams(location.search).get('lang')) ||
  ['en','de','fr','es','zh'].find(key => key === navigator.language.split('-')[0]) || 'en';
language.addEventListener('change', () => {
  const url = new URL(location.href);
  url.searchParams.set('lang', language.value);
  history.replaceState(null, '', url);
  localize();
});
localize();
const target = document.getElementById(location.hash.slice(1));
if (target?.tagName === 'DETAILS') target.open = true;
if (document.querySelector('#products')) fetch('/catalog.json').then(response => {
  if (!response.ok) throw new Error('Catalog unavailable');
  return response.json();
}).then(data => {
  const categories = document.querySelector('#categories');
  const products = document.querySelector('#products');
  for (const item of data.categories) {
    const link = document.createElement('a');
    link.href = item.url;
    link.className = 'chip';
    link.textContent = item.name;
    categories.append(link);
  }
  for (const item of data.products) {
    const card = document.createElement('a');
    card.href = item.url;
    card.className = 'card';
    const image = document.createElement('img');
    image.src = item.image;
    image.alt = '';
    image.loading = 'lazy';
    const info = document.createElement('div');
    const label = document.createElement('span');
    label.textContent = item.name;
    const price = document.createElement('span');
    price.className = 'price';
    price.textContent = item.price ? '¥' + item.price.trim() : '';
    info.append(label, price);
    card.append(image, info);
    products.append(card);
  }
  state = '';
  localize();
}).catch(() => { state = 'error'; localize(); });
</script>
</body></html>`;
