const production = 'https://lit-buy.store';
const origin = 'https://www.cnfanssp.com';
function sourceURL(path) {
  if (!path) return '';
  try {
    const url = new URL(path, origin);
    return url.protocol === 'https:' && ['cnfanssp.com','www.cnfanssp.com'].includes(url.hostname) ? url.href : '';
  } catch {
    return '';
  }
}
export function parseCatalog(html) {
  const categories = [...html.matchAll(/<a href="([^"]+)" class="category-item[^"]*">[\s\S]*?<h3>(.*?)<\/h3>[\s\S]*?<\/a>/g)]
    .map(([, path, title]) => ({url:sourceURL(path), title:clean(title)})).filter(item => item.url && item.title);
  const products = html.split(/<div class="product-card[^"]*">/).slice(1).map(card => ({
    url:sourceURL(card.match(/href="([^"]+)" class="product-image"/)?.[1]),
    image:sourceURL(card.match(/data-src="([^"]+)"/)?.[1]),
    title:clean(card.match(/<h3>([\s\S]*?)<\/h3>/)?.[1]),
    price:clean(card.match(/class="product-price">([^<]+)/)?.[1]),
  })).filter(item => item.url && item.title);
  return {categories, products};
}

const translations = {
  en: ['English', 'Catalog', 'Categories', 'Register on LitBuy', 'Find products from the CNFansSP catalog and open the original listing before you order.', 'Search by name or product ID', 'Search', 'Latest products', 'View all', 'View details', 'The main catalog is temporarily unavailable.', 'LitBuy purchase', 'Language'],
  zh: ['简体中文', '商品目录', '商品分类', '注册 LitBuy', '浏览 CNFansSP 主站商品，前往主站核对详情后再下单。', '搜索商品名称或商品 ID', '搜索', '最新商品', '查看全部', '查看详情', '主站目录暂时无法加载。', '前往 LitBuy 购买', '语言'],
  de: ['Deutsch', 'Katalog', 'Kategorien', 'Bei LitBuy registrieren', 'Entdecke Produkte aus dem CNFansSP-Katalog und prüfe das Originalangebot vor der Bestellung.', 'Produktname oder Produkt-ID', 'Suchen', 'Neue Produkte', 'Alle ansehen', 'Details ansehen', 'Der Hauptkatalog ist vorübergehend nicht verfügbar.', 'Bei LitBuy kaufen', 'Sprache'],
  es: ['Español', 'Catálogo', 'Categorías', 'Registrarse en LitBuy', 'Explora el catálogo de CNFansSP y consulta el anuncio original antes de hacer tu pedido.', 'Nombre o ID del producto', 'Buscar', 'Últimos productos', 'Ver todos', 'Ver los detalles', 'El catálogo principal no está disponible temporalmente.', 'Comprar en LitBuy', 'Idioma'],
  fr: ['Français', 'Catalogue', 'Catégories', 'Créer un compte LitBuy', 'Parcourez le catalogue CNFansSP et consultez la fiche originale avant de commander.', 'Nom ou identifiant du produit', 'Rechercher', 'Nouveaux produits', 'Tout voir', 'Voir la fiche', 'Le catalogue principal est temporairement indisponible.', 'Acheter sur LitBuy', 'Langue'],
};

const styles = `
*{box-sizing:border-box}body{margin:0;background:#f6f7f3;color:#202820;font:16px/1.55 system-ui,sans-serif}a{color:inherit;text-decoration:none}a:hover{text-decoration:underline}a:focus-visible,button:focus-visible,input:focus-visible,summary:focus-visible{outline:3px solid #2b865f;outline-offset:3px}.wrap{width:min(1180px,calc(100% - 40px));margin:auto}header{background:#fff;border-bottom:1px solid #e0e5dc}.top{display:flex;align-items:center;gap:26px;min-height:72px}.brand{font-weight:850;letter-spacing:-.045em;font-size:23px}.brand b{color:#27674a}nav{display:flex;gap:20px;margin-left:auto;font-size:15px;font-weight:650}.register{border:1px solid #b6ccbf;padding:7px 11px;border-radius:8px;font-weight:700;font-size:14px}.locale{position:relative;font-size:14px}.locale summary{cursor:pointer;white-space:nowrap}.locale ul{position:absolute;z-index:2;right:0;margin-top:8px;background:white;border:1px solid #dce5dc;border-radius:10px;list-style:none;padding:4px;min-width:132px;box-shadow:0 8px 24px #15281d22}.locale li a{display:block;padding:6px 10px}.locale [aria-current]{font-weight:800;color:#27674a}
.hero{margin-top:28px;padding:clamp(24px,6vw,66px);border-radius:22px;background:linear-gradient(115deg,#122d23,#214634 67%,#315c40);color:#fff}.hero h1{line-height:1;font-size:clamp(37px,7vw,77px);letter-spacing:-.065em;margin:0 0 16px}.hero p{color:#dfebe1;margin:0 0 23px;max-width:580px}.search{display:flex;max-width:580px;border-radius:10px;background:#fff;padding:5px;gap:6px}.search input[type=search]{flex:1;width:0;padding:10px;border:0;color:#202820;background:#fff;font:inherit}.search button{padding:10px 18px;border:0;border-radius:7px;background:#d5ee9b;color:#173321;font:inherit;font-weight:800;cursor:pointer}
section{margin:34px 0}.heading{display:flex;align-items:baseline;justify-content:space-between;gap:10px;margin-bottom:15px}h2{margin:0;font-size:clamp(23px,4vw,34px);letter-spacing:-.04em}.heading a,.details,.purchase{color:#236146;font-weight:750;font-size:14px}.chips{display:flex;flex-wrap:wrap;gap:9px}.chips a{border:1px solid #dce5dc;background:#fff;border-radius:999px;padding:7px 14px;font-size:14px}.cards{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px}.card{overflow:hidden;background:#fff;border:1px solid #dce5dc;border-radius:13px}.card img{width:100%;aspect-ratio:1.28;display:block;object-fit:contain;background:#eef1ea}.info{display:grid;padding:12px;gap:4px}.info strong{overflow-wrap:anywhere}.price{color:#526451;font-size:14px}.purchase{display:block;margin:0 12px 12px}.notice{border:1px solid #dce5dc;border-radius:10px;padding:16px;background:white}.notice a{text-decoration:underline}footer{border-top:1px solid #dce5dc;padding:16px 0 22px;color:#526451;font-size:14px}
@media(max-width:740px){.top{flex-wrap:wrap;gap:10px 16px;padding-block:12px}nav{order:2;width:100%;margin:0}.register{margin-left:auto}.cards{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media(max-width:460px){.wrap{width:calc(100% - 26px)}.hero{margin-top:13px;border-radius:14px}section{margin:24px 0}.search button{padding-inline:10px}.cards{gap:9px}.brand{font-size:19px}}
`;

const catalogLink = origin + '/AllProducts/';
const samplePath = '/AllProducts/6667.html';
const sampleId = '7632511460';
const buyLink = 'https://litbuy.com/product/2/' + sampleId;

const sourceLinks = {
  official: ['LitBuy Help Center', 'https://litbuy.com/help'],
  search: ['LitBuy product search', 'https://litbuy.com/goods'],
  catalog: ['CNFansSP product catalog', 'https://www.cnfanssp.com/AllProducts/'],
  example: ['CNFansSP Jersey-60 listing', 'https://www.cnfanssp.com/AllProducts/6667.html'],
  links: ['LitBuy Sheet Links · Product link formats', 'https://litbuysheetlinks.com/litbuy-links'],
  converter: ['LitBuy Tools · Link converter', 'https://litbuy.tools/en/link-converter/'],
  taobao: ['LitBuy Tools · Taobao ordering guide', 'https://litbuy.tools/en/how-to-order-from-taobao/'],
};
const articles = [
  ['litbuy-spreadsheet', 'How to use a LitBuy spreadsheet', 'Build a shortlist from search results and verify each seller listing before ordering.', ['catalog','example','search'], [
    ['Search with a detail you can verify', 'Start with a product type plus a distinguishing detail, such as “zip hoodie”. If you already have a marketplace ID, search by that number first. This spreadsheet sends the query to CNFansSP so you can open the product record and see its source.'],
    ['Save the seller and the exact option', 'Keep the original listing URL with the selected size, color and seller. A title such as “black jersey” can describe many listings. For example, Jersey-60 in CNFansSP has the marketplace ID 7632511460 and a separate directory page number, 6667. Keep each number with its own link.'],
    ['Recheck the order total', 'Open the original seller URL in LitBuy. Compare the title, selected option and current price with your shortlist. Review seller delivery and the eventual international quote separately so a low listing price does not hide the cost of getting the parcel to your door.']]],
  ['litbuy-link-converter', 'LitBuy link converter and product IDs', 'Read the marketplace and item number from a URL, then check that LitBuy opens the same listing.', ['links','converter','search'], [
    ['Identify the marketplace first', 'A Taobao item usually carries its number in id, a Weidian item in itemID, and a 1688 offer in the path before .html. Keep the marketplace with the number. The same digits alone do not tell LitBuy where to look.'],
    ['Let LitBuy resolve the original URL', 'Paste the complete seller URL into LitBuy product search. If you generate direct links, check the resulting page against the original listing. The numeric product route uses marketplace codes, including 0 for 1688, 1 for Taobao and 2 for Weidian.'],
    ['Recover a broken spreadsheet row', 'Return to the directory detail page and follow its source link. If the seller page still opens, paste that URL into LitBuy. If the seller removed the listing, start a fresh search and repeat the variant and seller checks on any replacement.']]],
  ['litbuy-weidian', 'How to order a Weidian item on LitBuy', 'Verify the Weidian item ID, seller and selected variant before checkout.', ['example','links','search'], [
    ['Start from the original listing', 'Open the source URL on the CNFansSP detail page. Jersey-60 uses a Weidian itemID of 7632511460. Compare the listing photos and seller before copying the link, especially when several rows show the same design.'],
    ['Check available options in LitBuy', 'Paste the Weidian link into LitBuy search. Match the option text to the seller page, including size, color and any edition label. If the option is ambiguous, ask for clarification before you pay.'],
    ['Keep a record for QC', 'Save the seller URL, chosen option and order number. When warehouse photos are available, use this record to compare details such as a jersey number, sleeve trim and the label. Raise any discrepancy while the order is still at the warehouse.']]],
  ['litbuy-taobao-1688', 'Buying from Taobao and 1688 through LitBuy', 'Compare variant pricing, quantities and seller delivery before placing the order.', ['taobao','converter','official'], [
    ['Copy the listing address', 'Open the seller listing and copy its product URL. Paste it into LitBuy search and check that the item title and shop match. Keep the original URL so you can reopen the seller’s size chart and option descriptions.'],
    ['Check the terms for your chosen quantity', 'On Taobao, selecting a different size or color can change the item price. On 1688, look for a minimum order and quantity-based price tiers. Check whether the price is per unit or per pack and verify the quantity shown at checkout.'],
    ['Compare on the same basis', 'For two sellers, compare the total for the quantity you actually need, plus domestic delivery if shown. Keep notes on size charts and package contents. A cheaper unit price has little value if reaching the minimum means buying extras you will not use.']]],
  ['litbuy-qc-photos', 'How to review LitBuy QC photos', 'Check identifying details and request a targeted photo when the evidence is unclear.', ['official','taobao'], [
    ['Review the order first', 'Open the original listing and write down the variant, size and quantity. Check warehouse photos for each of these details. For clothes, look for the size tag and compare the design on the front and back. For a pair of shoes, compare both shoes and the labels.'],
    ['Use a specific measurement request', 'A close-up of the tag or a ruler laid across the garment is easier to act on than “take more photos”. Ask for the measurement that affects fit, such as width across the chest with the garment laid flat. Review any fee shown for extra service.'],
    ['Handle a mismatch while the item is stored', 'Save the order number, seller selection and photo showing the issue. Use the order’s support route before submitting the parcel. Warehouse photos document visible details. They cannot establish material composition, authenticity or durability on their own.']]],
  ['litbuy-shipping-calculator', 'How to use the LitBuy shipping calculator', 'Estimate costs with consistent package inputs and compare the final warehouse quote.', ['official'], [
    ['Estimate the packed parcel', 'Use the destination and an estimate of packed weight. If a route asks for dimensions, enter the outer parcel measurements. A light, bulky parcel can price differently from a compact parcel of the same weight when a route uses volumetric weight.'],
    ['Compare routes with the same inputs', 'Run each estimate with the same weight, dimensions and destination. Check restrictions, tracking and coverage alongside the price. Record domestic delivery, merchandise and international shipping as separate costs.'],
    ['Recheck after packing', 'Use the warehouse’s measured weight and dimensions to confirm the quote before payment. If removing packaging is an option, check how it affects protection and price for your chosen line. Use the route’s displayed terms for the final decision.']]],
  ['litbuy-warehouse-storage', 'LitBuy warehouse storage and consolidation', 'Plan arrivals, inspections and parcel submission around each item’s storage deadline.', ['official'], [
    ['Check the deadline on each order', 'Record when each item enters the warehouse and check the date shown in the account. Items ordered together may arrive separately. Review the current storage policy and any charges before waiting for another seller.'],
    ['Group items that can ship together', 'Confirm that your intended route accepts the entire parcel. Check the restrictions for batteries or other special goods on the chosen line. If a waiting item might delay everything, compare sending the ready items now with paying for a second parcel later.'],
    ['Review packaging and the final quote', 'Decide which boxes you need to keep. A retail box may protect the item but can increase parcel volume. After packing, confirm the item list, destination, dimensions and shipping cost before submitting the parcel.']]],
  ['litbuy-returns', 'How to handle a LitBuy return or cancellation', 'Check the order status and prepare the details support needs to review the request.', ['official'], [
    ['Identify the order stage', 'Open the order and check whether it is awaiting purchase, with the seller, stored at the warehouse or already shipped. The timing determines which options are available. Check the current cancellation or return rules for that order.'],
    ['Document the difference', 'Include the seller URL, order number and the exact option you ordered. If the item differs, attach focused QC photos and explain what needs to change. Request the outcome you want, such as a replacement in the correct size or a return.'],
    ['Confirm fees and the next step', 'Ask which seller conditions, deadlines and return delivery costs apply. Check the response before authorizing a paid action. If the parcel has already shipped internationally, use the relevant after-sales route and retain the tracking details.']]],
  ['litbuy-size-guide', 'How to check sizes before ordering on LitBuy', 'Use seller measurements and QC evidence to reduce sizing mistakes.', ['taobao','official'], [
    ['Choose a garment you already wear', 'Lay it flat and measure the dimensions that affect fit, such as chest width and body length. For bottoms, compare waist and inseam. For shoes, compare the seller’s stated foot-length guidance and the size tag.'],
    ['Compare the same kind of measurement', 'A flat chest width differs from a full chest circumference. Confirm units and how the chart was measured before comparing it with your own record. The same size label can mean different dimensions across sellers.'],
    ['Record the chosen variant', 'Keep a copy of the chart and the selected size and color. At the warehouse, check the label against the order. If a size is borderline, request a focused measurement before shipping when that option is available.']]],
  ['litbuy-tracking', 'How to track a LitBuy parcel', 'Distinguish the seller’s domestic shipment from the international parcel and follow the right tracking number.', ['official'], [
    ['Find the shipment you are tracking', 'The seller first sends the item to the warehouse. Once you submit a packed parcel, it has its own international shipment details. Look at the item order for the first leg and the parcel record for the second.'],
    ['Check the latest recorded event', 'Use LitBuy’s tracking view and the carrier information shown for your route. Note the date and wording of the last scan. If the site lists a separate last-mile number, use that number for local delivery updates.'],
    ['Contact support with the parcel record', 'If the parcel is beyond the route’s stated timeframe or shows an exception, share the parcel number, tracking number and last known event. If goods arrive damaged or missing, retain the packaging and labels while you check the after-sales instructions.']]],
];

const faq = [
  ['spreadsheet','What is a LitBuy spreadsheet?','It is a directory of product links. Use it to shortlist items, then check the seller listing and your selected option in LitBuy.','catalog'],
  ['search','Where do spreadsheet searches go?','The search box passes your query to CNFansSP. Product names work for general search, and the sample ID 7632511460 opens its matched main-site detail page.','catalog'],
  ['product-id','What is item 7632511460?','The CNFansSP record identifies it as the Weidian listing Jersey-60. Its CNFansSP detail URL uses the separate directory number 6667.','example'],
  ['categories','Where do the category and product links go?','Both open their corresponding pages on CNFansSP, where you can review the live directory record and its source.','catalog'],
  ['registration','Where do I register for LitBuy?','Use the registration button at the top of this site to open litbuy.com/register.','official'],
  ['marketplaces','Which marketplace links can I use?','LitBuy handles product links from marketplaces including Taobao, Weidian and 1688. Paste the original seller URL into its search box.','search'],
  ['convert','How do I convert a seller link to LitBuy?','Copy the original marketplace URL and paste it into LitBuy search. Compare the opened product and variants with the seller page.','converter'],
  ['dead-link','What should I do with a dead product link?','Check the original seller URL. If it still opens, try it in LitBuy search. If the seller removed the listing, verify any replacement from scratch.','links'],
  ['item-price','Why can the checkout price differ?','The selected size, color or quantity can change the seller price. Compare the exact option and any domestic shipping shown before payment.','taobao'],
  ['minimum-quantity','How do I check a 1688 minimum order?','Read the selected offer’s minimum quantity and price tiers. Confirm whether the displayed price is per item or per pack.','converter'],
  ['size-chart','How do I choose a size?','Use the seller chart for the exact variant and compare it with a garment that fits. Match the units and measurement method.','taobao'],
  ['qc','What are QC photos?','They show an item at the warehouse. Use them to check visible details such as the label, color, quantity and condition.','official'],
  ['extra-photo','Can I ask for an extra photo?','Check the order’s available warehouse services. Name the angle, label or measurement you need and review any fee displayed.','official'],
  ['domestic-shipping','What is domestic shipping?','It is the seller-to-warehouse leg in China. Check its cost separately from shipping the packed parcel to your destination.','official'],
  ['shipping-estimate','How do I estimate international shipping?','Use LitBuy’s freight estimator with your destination and packed parcel data. Compare the estimate with the quote after packing.','official'],
  ['volumetric','Why do parcel dimensions matter?','Some routes price bulky parcels by volumetric weight. Enter the outer dimensions when the calculator requests them.','official'],
  ['storage','How long can items stay in the warehouse?','Check the current storage policy and the deadline shown for each item. Confirm any fees before extending storage.','official'],
  ['consolidation','Can several orders go in one parcel?','Review the stored item list when submitting a parcel and check that the chosen shipping route accepts all items.','official'],
  ['restrictions','How do I check shipping restrictions?','Review LitBuy’s prohibited-items guidance and the chosen route’s restrictions before purchasing or grouping items.','official'],
  ['cancel','How do I cancel before shipment?','Open the order and check which cancellation options its current status allows. Consult the current rules and provide the order number to support when needed.','official'],
  ['return','What if the warehouse received the wrong item?','Keep the seller link, option and QC photos. Submit an order issue while the item is stored and check the seller’s return terms.','official'],
  ['tracking','Where do I track a parcel?','Use the parcel record for international tracking. If it shows another number for local delivery, use that number with the appropriate carrier.','official'],
  ['damaged','What if the parcel arrives damaged?','Keep packaging, labels and photos, then check LitBuy’s after-sales instructions and submit the parcel details within the displayed timeframe.','official'],
  ['language','Does changing language translate the seller listing?','The navigation and home interface switch languages. Product names and linked listings still come from CNFansSP and its seller sources.','catalog'],
];

const extraStyles = `
body{background:#f7f6f3;color:#24231f}header{border-color:#ebe6dc}.top{gap:20px}.brand img{display:block;object-fit:contain}.register{background:#ffc800;border-color:#ffc800;color:#24231f}.hero{background:radial-gradient(ellipse at 90% 0%,#fff1ad,transparent 72%),linear-gradient(105deg,#ffe07a,#ffd144);color:#22211a}.hero p{color:#4d3e0d}.search{border:1px solid #e7d188}.search button{background:#ffc800;color:#211c0a}.details,.purchase,.heading a,.locale [aria-current]{color:#674c00}.card,.chips a,.notice{border-color:#ebe6dc}.card img{background:#f2f0ed}.page{padding:25px 0 34px;min-height:58vh}.page h1,.prose h1{margin:0 0 16px;font-size:clamp(29px,5vw,48px);line-height:1.13;letter-spacing:-.05em}.page section{margin:22px 0}.editor-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}.editor-card{display:grid;gap:4px;background:#fff;border:1px solid #ebe6dc;border-radius:10px;padding:14px}.editor-card strong{line-height:1.28}.editor-card span,.muted{color:#61594d;font-size:14px}.guide-index{grid-template-columns:repeat(2,minmax(0,1fr))}.questions{display:grid;grid-template-columns:1fr 1fr;gap:7px 14px;align-items:start}.questions details{border:1px solid #ebe6dc;background:#fff;border-radius:8px;scroll-margin:12px}.questions summary{cursor:pointer;padding:8px 10px;font-weight:650;font-size:15px;line-height:1.3}.questions details>div{padding:0 10px 8px}.questions p{margin:4px 0}.questions details:has(:target){border-color:#b27e05;background:#fff8dc}.sources{margin:4px 0;padding-left:20px;font-size:14px}.sources a{text-decoration:underline;text-underline-offset:2px}.prose{max-width:720px;padding:25px 0 35px;margin:auto}.prose h1{margin-top:10px}.prose h2{font-size:21px;margin:18px 0 5px;letter-spacing:-.025em;line-height:1.25}.prose p{margin:0 0 8px}.lead{color:#61594d}footer{border-color:#ebe6dc;color:#61594d}
@media(max-width:740px){.top{gap:10px 14px}nav{gap:8px 15px;flex-wrap:wrap;font-size:14px}.editor-grid{grid-template-columns:1fr;gap:6px}.editor-card{padding:9px 11px}.questions{grid-template-columns:1fr;gap:4px}.page{padding:18px 0 24px}.card img{aspect-ratio:1.57}.info{padding:8px}.purchase{margin:0 8px 8px}.page .cards .card img{aspect-ratio:1.75}}
@media(max-width:370px){.register{font-size:12px;padding:5px 7px}.brand img{width:90px;height:auto}.top{gap:8px}.locale{font-size:13px}}
`;

const ui = {
  en: ['Home','FAQ','Guides','Latest FAQs','Latest guides','All questions','All guides','Back to guides','Sources','English content'],
  zh: ['首页','常见问题','购物指南','最新问答','最新指南','全部问答','全部指南','返回指南','参考来源','正文为英文'],
  de: ['Startseite','FAQ','Ratgeber','Neueste Fragen','Neueste Ratgeber','Alle Fragen','Alle Ratgeber','Zurück zu den Ratgebern','Quellen','Englischer Inhalt'],
  es: ['Inicio','Preguntas frecuentes','Guías','Preguntas recientes','Guías recientes','Todas las preguntas','Todas las guías','Volver a las guías','Fuentes','Contenido en inglés'],
  fr: ['Accueil','FAQ','Guides','Questions récentes','Guides récents','Toutes les questions','Tous les guides','Retour aux guides','Sources','Contenu en anglais'],
};
const routeLink = (lang, path = '') => (lang === 'en' ? '/' : '/' + lang + '/') + path;
const logo = 'https://litbuy.com/static/logo.png';
const favicon = 'https://litbuy.com/favicon-new.ico';
const sources = keys => [...new Set(keys)].map(key => {
  const [title, url] = sourceLinks[key];
  return `<li><a href="${url}">${title}</a></li>`;
}).join('');

function render(lang, path, {categories, products}, analytics, isLive) {
  const [, catalog, category, register, intro, placeholder, search, latest, all, detail, unavailable, buy, language] = translations[lang];
  const [home, faqTitle, guidesTitle, recentFaq, recentGuides, allFaq, allGuides, back, sourceTitle, english] = ui[lang];
  const link = subpath => routeLink(lang, subpath);
  const article = path.startsWith('guides/') && articles.find(([slug]) => path === 'guides/' + slug);
  const title = article ? article[1] : ({faq: faqTitle, guides: guidesTitle, catalog, categories: category}[path] ?? 'LitBuy Spreadsheet');
  const description = article ? article[2] : intro;
  const alt = Object.keys(translations).map(code =>
    `<link rel="alternate" hreflang="${code}" href="${routeLink(code, path)}">`).join('');
  const localeLinks = Object.entries(translations).map(([code, [label]]) =>
    `<li><a href="${routeLink(code, path)}" lang="${code}"${code === lang ? ' aria-current="page"' : ''}>${label}</a></li>`).join('');
  const sectionHeading = (label, action, href) =>
    `<div class="heading"><h2>${label}</h2><a href="${href}">${action}</a></div>`;
  const categoryLinks = categories.map(({url,title}) => `<a href="${escape(url)}">${escape(title)}</a>`).join('');
  const cards = products.slice(0, path === 'catalog' ? 12 : 8).map(({url,image,title,price}) => `
    <article class="card"><a href="${escape(url)}">
      ${image ? `<img src="${escape(image)}" alt="" width="320" height="250" loading="lazy">` : ''}
      <div class="info"><strong>${escape(title)}</strong>${price ? `<span class="price">${escape(price)}</span>` : ''}<span class="details">${detail}</span></div>
    </a>${new URL(url).pathname === samplePath ? `<a class="purchase" href="${buyLink}">${buy}</a>` : ''}</article>`).join('');
  const categoryBlock = `<div class="chips">${categoryLinks || `<a href="${origin}/">${category}</a>`}</div>`;
  const catalogBlock = cards ? `<div class="cards">${cards}</div>` : `<p class="notice">${unavailable} <a href="${catalogLink}">CNFansSP</a></p>`;
  const searchForm = `<form class="search" action="/search" method="get" role="search"><input type="search" name="keywords" maxlength="200" required aria-label="${placeholder}" placeholder="${placeholder}"><button type="submit">${search}</button></form>`;
  const articleCards = entries => entries.map(([slug, headline, summary]) =>
    `<a class="editor-card" href="${link('guides/' + slug)}"><strong>${headline}</strong><span>${summary}</span></a>`).join('');
  const englishNotice = lang === 'en' ? '' : `<p class="muted">${english}</p>`;
  let content;
  if (article) {
    const [, headline, summary, refs, sections] = article;
    content = `<article class="prose" lang="en"><a class="details" href="${link('guides')}" lang="${lang}">${back}</a>
    <h1>${headline}</h1><p class="lead">${summary}</p>
    ${sections.map(([subheading, text]) => `<h2>${subheading}</h2><p>${text}</p>`).join('')}
    <h2 lang="${lang}">${sourceTitle}</h2><ul class="sources">${sources(refs)}</ul></article>`;
  } else if (path === 'faq') {
    content = `<div class="page"><h1>${faqTitle}</h1>${englishNotice}<div class="questions" lang="en">
      ${faq.map(([slug, question, answer, ref]) => `<details><summary>${question}</summary><div id="${slug}"><p>${answer}</p><ul class="sources">${sources([ref])}</ul></div></details>`).join('')}
    </div></div>`;
  } else if (path === 'guides') {
    content = `<div class="page"><h1>${guidesTitle}</h1>${englishNotice}<div class="editor-grid guide-index" lang="en">${articleCards(articles)}</div></div>`;
  } else if (path === 'catalog') {
    content = `<div class="page"><h1>${catalog}</h1>${searchForm}<section>${sectionHeading(latest, all, catalogLink)}${catalogBlock}</section></div>`;
  } else if (path === 'categories') {
    content = `<div class="page"><h1>${category}</h1><section>${categoryBlock}</section></div>`;
  } else {
    content = `<div class="hero"><h1>LitBuy Spreadsheet</h1><p>${intro}</p>${searchForm}</div>
    <section>${sectionHeading(category, all, link('categories'))}${categoryBlock}</section>
    <section>${sectionHeading(latest, all, catalogLink)}${catalogBlock}</section>
    <section>${sectionHeading(recentFaq, allFaq, link('faq'))}<div class="editor-grid" lang="en">
      ${faq.slice(0, 3).map(([slug, question]) => `<a class="editor-card" href="${link('faq')}#${slug}"><strong>${question}</strong></a>`).join('')}
    </div></section>
    <section>${sectionHeading(recentGuides, allGuides, link('guides'))}<div class="editor-grid" lang="en">${articleCards(articles.slice(0, 3))}</div></section>`;
  }
  return `<!doctype html>
<html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">${isLive ? `<link rel="canonical" href="${production}${routeLink(lang,path)}">` : '<meta name="robots" content="noindex,nofollow">'}${analytics ? `<script async src="https://www.googletagmanager.com/gtag/js?id=${analytics}"></script><script src="/analytics.js" defer></script>` : ''}<meta name="description" content="${escape(description)}"><title>${escape(title)}${path ? ' | LitBuy Spreadsheet' : ''}</title><link rel="icon" href="${favicon}">${alt}<style>${styles}${extraStyles}</style></head>
<body><header><div class="wrap top"><a class="brand" href="${link('')}" aria-label="LitBuy Spreadsheet"><img src="${logo}" width="112" height="29" alt="LitBuy"></a>
<nav aria-label="${catalog}"><a href="${link('')}">${home}</a><a href="${link('catalog')}">${catalog}</a><a href="${link('categories')}">${category}</a><a href="${link('faq')}">${faqTitle}</a><a href="${link('guides')}">${guidesTitle}</a></nav>
<a class="register" href="https://litbuy.com/register">${register}</a>
<details class="locale"><summary aria-label="${language}">${translations[lang][0]}</summary><ul>${localeLinks}</ul></details></div></header>
<main class="wrap">${content}</main>
<footer><div class="wrap"><a href="${origin}/">CNFansSP</a> <span aria-hidden="true">·</span> <a href="https://litbuy.com/">LitBuy</a></div></footer></body></html>`;
}

export default {
  async fetch(request, env = {}) {
    const url = new URL(request.url);
    const isLive = url.origin === production;
    const measurementId = env.GA4_MEASUREMENT_ID ?? 'G-5M49CG0FHJ';
    const analytics = isLive && /^G-[A-Z0-9]+$/.test(measurementId) ? measurementId : '';
    if (url.pathname === '/robots.txt') {
      return new Response(isLive
        ? 'User-agent: *\nAllow: /\nDisallow: /search\nSitemap: ' + production + '/sitemap.xml\n'
        : 'User-agent: *\nDisallow: /\n', {headers:{'content-type':'text/plain; charset=utf-8'}});
    }
    if (url.pathname === '/sitemap.xml') {
      const paths = ['', 'catalog', 'categories', 'faq', 'guides', ...articles.map(([slug]) => 'guides/' + slug)];
      const urls = Object.keys(translations).flatMap(lang => paths.map(path => '<url><loc>' + production + routeLink(lang,path) + '</loc></url>'));
      return new Response('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + urls.join('') + '</urlset>',
        {headers:{'content-type':'application/xml; charset=utf-8'}});
    }
    if (url.pathname === '/analytics.js' && analytics) {
      return new Response(`window.dataLayer=window.dataLayer||[];function gtag(){window.dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${analytics}');`,
        {headers:{'content-type':'application/javascript; charset=utf-8','cache-control':'no-store'}});
    }
    if (url.pathname === '/search') {
      const keywords = (url.searchParams.get('keywords') ?? '').trim().slice(0, 200);
      if (keywords === sampleId) return Response.redirect(origin + samplePath);
      if (!keywords) return Response.redirect(catalogLink);
      const search = new URL('/search.html', origin);
      search.search = new URLSearchParams({channelid: '2', keywords});
      return Response.redirect(search.href);
    }
    const segments = url.pathname.split('/').filter(Boolean);
    const lang = Object.hasOwn(translations, segments[0]) ? segments.shift() : 'en';
    const path = segments.join('/');
    const catalogRoutes = ['', 'catalog', 'categories'];
    const guide = segments.length === 2 && segments[0] === 'guides' &&
      articles.some(([slug]) => slug === segments[1]);
    if (!catalogRoutes.includes(path) && !['faq', 'guides'].includes(path) && !guide) {
      return new Response('Not found', {status: 404});
    }
    let catalog = {categories: [], products: []};
    if (catalogRoutes.includes(path)) {
      try {
        const response = await fetch(origin + '/', {signal: AbortSignal.timeout(8000), cf: {cacheTtl: 90}});
        if (response.ok) catalog = parseCatalog(await response.text());
      } catch {
        // Keep the main-site links available during upstream outages.
      }
    }
    return new Response(render(lang, path, catalog, analytics, isLive), {headers: {
      'content-type': 'text/html; charset=utf-8',
      'x-content-type-options': 'nosniff',
      'content-security-policy': "default-src 'none'; style-src 'unsafe-inline'; script-src 'self' https://www.googletagmanager.com; connect-src https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com; img-src https://www.cnfanssp.com https://cnfanssp.com https://litbuy.com https://www.litbuy.com; form-action 'self' https://www.cnfanssp.com; base-uri 'none'",
    }});
  },
};
const escape = value => String(value ?? '').replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
const clean = value => value?.replace(/<[^>]*>/g,'').replace(/&(amp|quot|apos|lt|gt|nbsp|#39);/g, (_, entity) => ({amp:'&',quot:'"',apos:"'",lt:'<',gt:'>',nbsp:' ','#39':"'"}[entity])).trim() ?? '';
