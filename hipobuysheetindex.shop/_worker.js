const guides = [
['spreadsheet','HipoBuy Spreadsheet: From a Catalog Find to a Seller Listing','Use CNFansSP categories or product search to open a detail page. Keep the seller URL alongside the item title, color and size you intend to order.','Open the seller listing and compare it with what HipoBuy loads. If the photos or variant labels differ, clarify the exact option before payment. Keep the link and your selection together so you can match the warehouse photos to the order later.', 'https://hipobuy.tips/hipobuy-spreadsheet'],
['product-links','How to Open Weidian, Taobao and 1688 Links in HipoBuy','Copy the full seller URL from the listing and paste it into HipoBuy’s search. A numeric item ID alone leaves the marketplace unknown.','Compare the listing title, selected variant and checkout price. If the item fails to load, reopen the seller URL and check whether it still resolves. For a live listing that fails to parse, review HipoBuy’s Custom Order form and enter the item details only after you can confirm them.', 'https://hiipobuy.com/product-links.html'],
['first-order','How to Use HipoBuy for Your First Order','Open a verified listing, select a size, color and quantity, and review the item and domestic delivery charges before submitting. Keep the order number for later checks.','Wait for warehouse intake. Match the warehouse photos to your selected variant and resolve discrepancies while the item is still stored. Then select eligible warehouse items and review the international shipping quote before paying.', 'https://hipofinds.com/guide/'],
['qc-photos','HipoBuy QC Photos: What to Check Before Shipping','Compare the warehouse photographs with the size label, color and quantity on the order. Look at angles that show seams, labels and any damage you can see.','If the standard photos omit a critical measurement or label, ask support about additional inspection options. Save the order number and identify the precise discrepancy if you request a return or exchange. Resolve the issue before adding the item to a parcel.', 'https://hipospreadsheet.org/buying-checks/'],
['rehearsal-parcel','HipoBuy Rehearsal Parcel: When to Request It','Once your items are in the warehouse, select the ones that should ship together. A rehearsal can show how your chosen packing options affect the finished dimensions and weight.','Compare the completed rehearsal with the planned address, route and packaging choices. If you change which items ship or how they are packed, request a fresh quote for the new configuration. Review the final shipping charge before confirming payment.', 'https://hipobuyspreadsheet.com/news/how-to-submit-rehearsal-parcel/'],
['shipping-cost','How to Estimate HipoBuy Shipping Costs','Start with destination and packed dimensions. Compare each line’s quoted charge, eligibility, weight calculation and coverage using the same parcel assumptions.','Record the item charge and any domestic delivery separately from international shipping and optional services. Compare a fresh quote after packing. An estimate made from the item weight alone can miss packaging weight or size-based charges.', 'https://hippoobuy.net/costs-and-parcels/'],
['warehouse','HipoBuy Warehouse and Parcel Consolidation','Wait for each order you plan to combine to appear in your warehouse. Review the QC status and any storage dates displayed next to those items.','Compare a single parcel with splitting the items if a route has size or contents restrictions. Confirm packing choices, keep the order numbers and check the parcel summary before paying for dispatch.', 'https://hipospreadsheet.org/buying-checks/'],
['tracking','HipoBuy Parcel Tracking: Order vs. Shipment','Use the order record to check the seller purchase and warehouse arrival. Once the outbound parcel is dispatched, use its parcel record and tracking number for the international shipment.','If tracking stalls, compare the last event with the route information and any carrier updates. Contact HipoBuy through your account with the parcel ID and last scan if you need it investigated.', 'https://hipobuy.com/'],
['returns','HipoBuy Returns and Refunds Before Dispatch','Check the product and order terms as soon as the QC photos arrive. Gather the order number, your chosen variant and any photos showing the issue.','Ask support whether the seller accepts a return or exchange for that order and check the deadline and costs before approving the request. Keep the item out of an outbound parcel while support reviews the case.', 'https://hipospreadsheet.org/buying-checks/'],
['coupons','HipoBuy Coupons: How to Compare the Final Total','Open your account’s offer page and check the expiry date, eligible charges and minimum spend. Look for whether the offer applies to shipping or merchandise.','Compare the same parcel quote with and without the coupon. Review the final checkout total before paying and keep a dated copy of the quote if you are comparing multiple routes.', 'https://hipospreadsheets.com/blog/what-people-mean/']
];
const faq = [
['What is a HipoBuy spreadsheet?','A directory for finding seller listings. Use it to shortlist items before opening the seller listing or agent order page.'],
['How do I search the catalog?','Enter a product name in the search box to open matching results on CNFansSP.'],
['Where do product photos come from?','The catalog displays images from CNFansSP. Warehouse QC photos are associated with your HipoBuy order.'],
['What is HipoBuy?','HipoBuy is a shopping agent that can purchase from Chinese sellers and forward parcels internationally.'],
['Where do I sign up?','Use the HipoBuy registration link in the navigation.'],
['Do I need an invitation code?','HipoBuy offers an optional invitation field. Check current offer terms in your account.'],
['Can I order from a Weidian link?','Paste the full listing URL into HipoBuy and verify the loaded product and variant before submitting.'],
['Can I use a Taobao link?','Paste the full Taobao listing URL and check that the price and selected variant match.'],
['Can I use a 1688 link?','Check the loaded listing and any seller minimum quantity before ordering.'],
['Is a product ID enough?','Keep the full original seller link to identify the marketplace and its listing.'],
['What if a link fails to load?','Check the original listing and review the Custom Order option for a live link HipoBuy cannot parse.'],
['What does QC mean?','Quality control is the warehouse inspection stage. Review the available photos before submitting a parcel.'],
['What should I check in warehouse photos?','Compare color, label, quantity and any requested measurements with your order.'],
['Can I combine warehouse orders?','Select eligible stored items when preparing the outbound parcel.'],
['What is a rehearsal parcel?','A packing preview that helps you assess parcel dimensions and weight before international dispatch.'],
['When should I request a rehearsal?','After the relevant items are stored and you know how you want them packed.'],
['How do I estimate shipping?','Compare current destination-specific quotes using packed weight, dimensions and line restrictions.'],
['Why did my shipping estimate change?','Packing, dimensions, route and optional services can change the final quoted charge.'],
['Where do I track a shipped parcel?','Open the shipment in your HipoBuy account and use its carrier tracking number.'],
['Can I request a return?','Ask HipoBuy support about the specific order’s seller terms, deadline and applicable charges.'],
['Where can I find my coupons?','Review the offers in your HipoBuy account, including expiry and whether they apply to shipping or item charges.'],
['Where can I get order help?','Contact HipoBuy support through your account and include the relevant order or parcel number.']
];

const source = 'https://www.cnfanssp.com';
const catalog = source + '/AllProducts/';
const register = 'https://hipobuy.com/register';

function upstreamUrl(value) {
  try {
    if (!value || value.startsWith("#")) return "";
    const url = new URL(value, catalog);
    return url.protocol === 'https:' && ['www.cnfanssp.com', 'cnfanssp.com'].includes(url.hostname) ? url.href : '';
  } catch {
    return '';
  }
}

async function readCatalog() {
  const response = await fetch(catalog, { signal: AbortSignal.timeout(6000) });
  if (!response.ok) throw new Error('Catalog unavailable');
  const products = [];
  const categories = new Map();
  const links = new Map();
  const html = await response.text();
  for (const match of html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)) {
    const href = upstreamUrl(attribute(match[1], 'href'));
    if (!href) continue;
    const label = match[2].replace(/<[^>]*>/g, '').trim();
    if (/^(Shoes|Sweatshirts|T-Shirts|Jackets|Pants\/Shorts|Headwear|Accessories|Short Sets|Electronics|Other Stuff|Jersey)$/i.test(label)) categories.set(label, href);
    const entry = links.get(href) || { href, title: '', image: '' };
    links.set(href, entry);
    if (label && !/^(view details|check the details)$/i.test(label)) entry.title ||= label;
    const image = match[2].match(/<img\b([^>]*)>/i);
    if (image) {
      entry.image ||= upstreamUrl(attribute(image[1], 'data-src') || attribute(image[1], 'src'));
      entry.title ||= attribute(image[1], 'alt');
    }
    if (/view details|check the details/i.test(label)) entry.product = true;
  }
  for (const entry of links.values()) {
    if ((entry.product || (entry.title && entry.image && /-\d+/.test(entry.title))) && entry.title) products.push(entry);
  }
  return { products: products.slice(0, 16), categories: [...categories] };
}

function attribute(tag, name) {
  const match = tag.match(new RegExp('(?:^|\\s)' + name + '=["\\\']([^"\\\']*)["\\\']', 'i'));
  return (match?.[1] || '').replaceAll('&amp;', '&');
}
function escape(value) {
  return String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
}

const copy = {
  en: ['Find your next pick.', 'Browse the live CNFansSP catalog and open the original product details.', 'Search this catalog', 'Create HipoBuy account', 'Browse categories', 'Latest finds', 'Open full catalog', 'The live catalog is currently unavailable. Browse directly on CNFansSP.', 'No matching products in this view.'],
  zh: ['发现下一件好物', '浏览 CNFansSP 实时目录，前往主站查看原始商品详情。', '搜索当前商品', '注册 HipoBuy', '浏览分类', '最新商品', '打开完整目录', '暂时无法读取实时目录，可直接访问 CNFansSP。', '当前列表中没有匹配商品。'],
  es: ['Encuentra tu próximo hallazgo.', 'Explora el catálogo de CNFansSP y consulta los detalles originales.', 'Buscar en este listado', 'Crear cuenta HipoBuy', 'Ver categorías', 'Últimos hallazgos', 'Abrir catálogo completo', 'El catálogo no está disponible. Visita CNFansSP directamente.', 'No hay coincidencias en esta lista.']
};

const categoryPaths = [['Shoes','/shoes/'],['Hoodies / Sweaters','/hoodies-sweaters/'],['T-Shirts','/t-shirts/'],['Jackets','/jackets/'],['Pants / Shorts','/pants-shorts/'],['Headwear','/headwear/'],['Accessories','/accessories/'],['Jersey','/Jersey/'],['Electronics','/electronics/'],['Other Stuff','/other-stuff/']];
const icon = 'https://hipobuy.com/favicon.png';
const labels = {en:['Search','Categories','Guides','FAQ','Home'],zh:['搜索','分类','文章','常见问题','首页'],es:['Buscar','Categorías','Guías','Preguntas frecuentes','Inicio'],de:['Suchen','Kategorien','Ratgeber','FAQ','Startseite'],fr:['Rechercher','Catégories','Guides','FAQ','Accueil'],it:['Cerca','Categorie','Guide','FAQ','Home'],pt:['Pesquisar','Categorias','Guias','Perguntas frequentes','Início'],pl:['Szukaj','Kategorie','Poradniki','FAQ','Start']};
Object.assign(copy,{
  de:['Finde deinen nächsten Artikel.','Durchsuche den aktuellen CNFansSP-Katalog.','Artikel suchen','HipoBuy-Konto erstellen','Kategorien entdecken','Neue Artikel','Katalog öffnen','Katalog derzeit nicht verfügbar.'],
  fr:['Trouvez votre prochain article.','Parcourez le catalogue CNFansSP en direct.','Chercher un article','Créer un compte HipoBuy','Voir les catégories','Derniers articles','Ouvrir le catalogue','Catalogue temporairement indisponible.'],
  it:['Trova il tuo prossimo articolo.','Esplora il catalogo aggiornato di CNFansSP.','Cerca un prodotto','Crea un account HipoBuy','Sfoglia le categorie','Ultimi articoli','Apri il catalogo','Catalogo temporaneamente non disponibile.'],
  pt:['Encontre o seu próximo artigo.','Explore o catálogo atualizado da CNFansSP.','Pesquisar produtos','Criar conta HipoBuy','Ver categorias','Artigos recentes','Abrir catálogo','Catálogo temporariamente indisponível.'],
  pl:['Znajdź kolejny produkt.','Przeglądaj aktualny katalog CNFansSP.','Szukaj produktów','Załóż konto HipoBuy','Przeglądaj kategorie','Najnowsze produkty','Otwórz katalog','Katalog chwilowo niedostępny.']
});
const languages = {en:'English',de:'Deutsch',es:'Español',fr:'Français',it:'Italiano',pl:'Polski',pt:'Português',zh:'简体中文'};
export default {
  async fetch(request, env = {}) {
    const origin = 'https://hipobuysheetindex.shop';
    const pathname = new URL(request.url).pathname;
    if (pathname === '/robots.txt') return new Response('User-agent: *\nAllow: /\nSitemap: '+origin+'/sitemap.xml\n');
    if (pathname === '/sitemap.xml') {
      const paths = ['/', '/spreadsheet', '/categories', '/faq', '/guides', ...guides.map(([slug]) => '/guides/'+slug)];
      return new Response('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+paths.map(path=>'<url><loc>'+origin+path+'</loc></url>').join('')+'</urlset>', {headers:{'Content-Type':'application/xml; charset=utf-8'}});
    }
    const measurement = /^G-[A-Z0-9]+$/.test(env.GA4_MEASUREMENT_ID || '') ? env.GA4_MEASUREMENT_ID : '';
    const analytics = measurement ? '<script async src="https://www.googletagmanager.com/gtag/js?id='+measurement+'"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag("js",new Date());gtag("config","'+measurement+'");</script>' : '';
    const url = new URL(request.url);
    const lang = Object.hasOwn(copy, url.searchParams.get('lang')) ? url.searchParams.get('lang') : 'en';
    const [title, intro, search, signup, browse, latest, full, unavailable, empty] = copy[lang];
    const route = url.pathname.replace(/\/$/, '') || '/';
    const [searchLabel, categoryLabel, guideLabel, faqLabel, homeLabel] = labels[lang];
    const local = path => path + (lang === 'en' ? '' : '?lang=' + lang);
    const article = guides.find(([slug]) => route === '/guides/' + slug);
    const articleCard = ([slug, heading]) => '<a class="chip" href="'+local('/guides/'+slug)+'">'+escape(heading)+'</a>';
    const faqCard = ([question, answer], i) => '<details name="faq" id="faq-'+(i+1)+'"><summary>'+escape(question)+'</summary><p>'+escape(answer)+'</p></details>';
    const categoryList = categoryPaths.map(([name,path]) => '<a class="chip" href="'+source+path+'">'+name+'</a>').join('');
    const searchForm = '<form class="actions" action="'+source+'/search.html" role="search"><input type="search" name="keywords" aria-label="'+searchLabel+'" placeholder="'+searchLabel+'" required><input type="hidden" name="channelid" value="2"><button class="button">'+searchLabel+'</button></form>';
    const known = ['/', '/categories','/guides','/faq','/spreadsheet','/register'].includes(route) || article;
    const needsProducts = route === '/' || route === '/spreadsheet';
    const data = needsProducts ? await readCatalog().catch(() => ({ products: [], categories: [] })) : {products:[]};
    const cards = data.products.map(({href,title,image}) => '<a class="card" href="'+escape(href)+'">'+(image ? '<img loading="lazy" alt="" src="'+escape(image)+'">' : '')+'<strong>'+escape(title)+'</strong></a>').join('');
    const productList = '<section><div class="row"><h2>'+latest+'</h2><a href="'+catalog+'">'+full+'</a></div><div class="grid">'+cards+'</div>'+(cards?'':'<p class="status">'+unavailable+'</p>')+'</section>';
    const categoryBlock = '<section><h2>'+browse+'</h2><div class="chips">'+categoryList+'</div></section>';
    const home = '<div class="hero"><h1>'+title+'</h1><p>'+intro+'</p>'+searchForm+'</div>'+categoryBlock+productList+'<section><div class="row"><h2>'+faqLabel+'</h2><a href="'+local('/faq')+'">'+faqLabel+'</a></div><div class="editorial" lang="en">'+faq.slice(0,3).map(faqCard).join('')+'</div></section><section><div class="row"><h2>'+guideLabel+'</h2><a href="'+local('/guides')+'">'+guideLabel+'</a></div><div class="editorial" lang="en">'+guides.slice(0,3).map(articleCard).join('')+'</div></section>';
    const pages = {
      '/': home,
      '/categories': '<h1>'+categoryLabel+'</h1><div class="chips">'+categoryList+'</div>',
      '/spreadsheet': '<h1>HipoBuy Spreadsheet</h1>'+searchForm+productList,
      '/faq': '<h1>HipoBuy '+faqLabel+'</h1><div class="editorial" lang="en">'+faq.map(faqCard).join('')+'</div>',
      '/guides': '<h1>HipoBuy '+guideLabel+'</h1><div class="editorial" lang="en">'+guides.map(articleCard).join('')+'</div>',
      '/register': '<h1>'+signup+'</h1><a class="button" href="'+register+'">'+signup+'</a>'
    };
    const body = article ? '<article lang="en"><a href="'+local('/guides')+'">'+guideLabel+'</a><h1>'+escape(article[1])+'</h1><h2>Before you start</h2><p>'+escape(article[2])+'</p><h2>What to check next</h2><p>'+escape(article[3])+'</p><h2>Further reading</h2><ul><li><a href="'+article[4]+'">Reference guide</a></li><li><a href="https://hipobuy.com/">Official HipoBuy website</a></li></ul></article>' : pages[route] || '<h1>Page not found</h1>';
    const pageTitle = article?.[1] || ({'/faq':'HipoBuy FAQ','/guides':'HipoBuy Shopping Guides','/categories':'HipoBuy Spreadsheet Categories','/spreadsheet':'HipoBuy Spreadsheet','/register':signup})[route] || 'HipoBuy Finds';
    return new Response(`<!doctype html>
<html lang="${lang}"><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="canonical" href="${origin + route}">${analytics}<link rel="icon" href="${icon}"><title>${escape(pageTitle)}</title><meta name="description" content="${escape(article?.[2] || intro)}">
<style>
*{box-sizing:border-box}body{margin:0;background:#f5f7f5;color:#132522;font:16px system-ui,sans-serif} a{color:inherit;text-decoration:none}a:hover{text-decoration:underline}header,main,footer{max-width:1180px;margin:auto;padding:0 24px}header{display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:76px}nav,.actions,.chips{display:flex;align-items:center;gap:12px;flex-wrap:wrap}.brand{font-size:23px;font-weight:850;letter-spacing:-.06em}.brand b{color:#16735c}select,input{font:inherit;border:1px solid #baccc5;border-radius:9px;padding:10px;background:white;color:#132522}.hero{position:relative;overflow:hidden;background:#102f29;color:#f4fff7;border-radius:24px;padding:clamp(25px,6vw,74px)}.hero:after{content:'';position:absolute;pointer-events:none;width:390px;height:390px;border:1px solid #80c7a457;border-radius:50%;right:-150px;top:-170px;box-shadow:0 0 0 45px #80c7a421,0 0 0 95px #80c7a416}.hero h1{font-size:clamp(2.5rem,7vw,5.2rem);letter-spacing:-.075em;line-height:1;margin:0;max-width:750px}.hero p{color:#c2dbd1;margin:18px 0 28px;max-width:540px}.button,.chip{display:inline-flex;padding:11px 15px;border-radius:9px;font-weight:700}.button{background:#bdf474;color:#132522}.hero input{flex:1;min-width:180px;max-width:390px}section{margin:32px 0}h2{letter-spacing:-.04em;margin:0 0 13px}.chip,.card,.status{background:white;border:1px solid #d9e3de}.row{display:flex;align-items:baseline;justify-content:space-between;gap:15px}.row a{font-weight:700;color:#14644f}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(155px,1fr));gap:12px}.card,.status{border-radius:12px;overflow:hidden}.card img{width:100%;aspect-ratio:1;object-fit:contain;background:#eef2ee;display:block}.card strong,.status{display:block;padding:15px}[hidden]{display:none!important}footer{padding-bottom:30px;color:#4c655c}footer a{text-decoration:underline}button:focus-visible,a:focus-visible,input:focus-visible,select:focus-visible{outline:3px solid #52ad7f;outline-offset:3px}@media(max-width:510px){header,main,footer{padding-inline:15px}header nav>a{display:none}.hero input{max-width:none}.hero .button{justify-content:center}.grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
header{flex-wrap:wrap;padding-block:10px}.brand img{width:30px;height:30px;object-fit:contain;vertical-align:middle;margin-right:7px}.editorial{display:grid;gap:8px}.editorial details{background:white;border:1px solid #d9e3de;border-radius:8px;padding:10px 13px}.editorial summary{cursor:pointer;font-weight:650}.editorial p{margin:8px 0 0}.button{border:0;cursor:pointer;font:inherit;font-weight:700}article{max-width:720px;line-height:1.65}article a{text-decoration:underline}article h1,main>h1{font-size:clamp(2rem,5vw,3.4rem);line-height:1.1;letter-spacing:-.045em}main{padding-bottom:35px}@media(max-width:510px){header nav>a{display:inline}header nav{gap:8px;font-size:14px}.grid .card:nth-child(n+9){display:none}.hero input{min-width:120px}.editorial summary{line-height:1.25}}
</style><header><a class="brand" href="${local('/')}"><img src="${icon}" alt="">HipoBuy <b>Finds</b></a><nav aria-label="Site"><a href="${local('/')}">${homeLabel}</a><a href="${local('/spreadsheet')}">Spreadsheet</a><a href="${local('/categories')}">${categoryLabel}</a><a href="${local('/faq')}">${faqLabel}</a><a href="${local('/guides')}">${guideLabel}</a><a href="${local('/register')}">${signup}</a><select aria-label="Language" id="lang">${Object.entries(languages).map(([key,label])=>'<option value="'+key+'">'+label+'</option>').join('')}</select></nav></header>
<main>${body}</main>
<footer><a href="${source}/">CNFansSP</a> · <a href="https://hipobuy.com/">HipoBuy</a></footer>
<script>
const language=document.querySelector('#lang'); language.value=document.documentElement.lang;
language.addEventListener('change',()=>{const url=new URL(location.href);url.searchParams.set('lang',language.value);location.href=url;});
</script></html>`, {status:known?200:404,headers:{'Content-Type':'text/html; charset=utf-8'}});
  }
};
