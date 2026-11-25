const official = 'https://hipobuy.com';
const fees = official + '/notice/1740653781924810754';
const customs = official + '/notice/1740663384020455425';
const contact = official + '/notice/1901839623362531329';
const claims = official + '/notice/1906603612122468353';
const catalog = 'https://www.cnfanssp.com/AllProducts/';
const qc = 'https://hipofinds.net/qc-and-shipping/';
const parcel = 'https://hippoobuy.net/costs-and-parcels/';

const faq = [
  ['first-order','How do I place my first Hipobuy order?','Open a seller link in Hipobuy, match the variant to the original listing, and review the item and domestic delivery charges before paying. Review warehouse photos before arranging international shipping.',official],
  ['shipping-estimate','How do I estimate Hipobuy shipping costs?','Compare available lines for your destination using the best packed weight and size estimates you have. Recheck the quote once the warehouse has measured the parcel.',fees],
  ['qc-photos','How do I check Hipobuy QC photos?','Compare the photos with your chosen color, size label and quantity. Check seams, closures and other visible details. Ask for a specific close-up when the standard angles leave an important detail unclear.',qc],
  ['what-is','What is Hipobuy?','Hipobuy is a shopping agent. It purchases from sellers on your behalf, receives items in its China warehouse and helps forward a parcel to you.',official],
  ['spreadsheet','What is a Hipobuy spreadsheet?','It is a catalog of product leads. Use it to find a seller listing, then check the current variant, price and availability before ordering.',catalog],
  ['register','Where do I register for Hipobuy?','Use the registration page on hipobuy.com. Check the domain before entering account details.',official + '/register'],
  ['find-product','How do I find a product on this site?','Use the search box to open matching results on CNFansSP, or select a category to browse the corresponding main-site listing.',catalog],
  ['seller-link','How do I open a Weidian product in Hipobuy?','Use the catalog purchase button when available. If it takes you back to the source details, copy the original seller link and paste it into Hipobuy’s product search.',official],
  ['item-id','Which ID identifies the Jersey-60 listing?','The CNFansSP detail page is 6667.html. The Weidian seller listing uses item ID 7632511460. Use the seller ID or full seller URL when checking the match.',catalog + '6667.html'],
  ['unavailable','What if the product link does not load?','Check whether the seller page still opens and whether the chosen variant is in stock. Paste the original link into Hipobuy or ask support to confirm availability.',contact],
  ['price','What does the catalog price cover?','Treat the catalog price as a product reference. Confirm the live variant price and any separate domestic delivery charge in Hipobuy before ordering.',fees],
  ['fees','What goes into a Hipobuy total?','Budget for the item, seller-to-warehouse delivery, international freight, and any route-specific declaration costs or optional services shown at checkout.',fees],
  ['size','How do I choose a size?','Measure a similar garment that fits you and compare the same dimensions with the seller’s chart. Confirm whether chest is given as a flat width or full circumference.',catalog],
  ['warehouse','What happens when my item reaches the warehouse?','Hipobuy checks the received item and provides inspection results. Review them before adding the item to an outbound parcel.',official],
  ['extra-photo','When is an extra QC photo useful?','Request a specific angle or measurement if the existing pictures cannot confirm a detail that matters, such as a shoe size label, zipper or garment width.',qc],
  ['consolidation','Can I combine items from different sellers?','Hipobuy allows warehouse items to be combined into parcels. Compare route limits and packed quotes before deciding how to group the items.',official],
  ['dimensional-weight','Why can a light parcel cost more to ship?','Some lines bill by package volume when the dimensional weight exceeds the scale weight. Compare each line’s divisor, rounding rules and size limits.',parcel],
  ['packaging','Should I keep the original boxes?','Keep protective packaging where it matters. If boxes are optional, compare the packed dimensions and quote with and without them before submitting.',parcel],
  ['tracking','Where should I check parcel tracking?','Start with the parcel record in Hipobuy. If scans stay unchanged beyond the route’s stated timeframe, send your parcel ID and recent tracking history to support.',contact],
  ['customs','What should I check about customs charges?','Review the destination’s rules and the selected route terms. Use accurate contents and values. Check whether any taxes are collected separately.',customs],
  ['returns','What if warehouse photos show a problem?','Keep the item in the warehouse while you check the order’s return or exchange options. Send the order ID, your selected variant and photos to support promptly.',contact],
  ['damage','What if my parcel arrives damaged?','Photograph the package, shipping label and affected contents. Keep the packing material and contact Hipobuy promptly to check the applicable claim terms.',claims],
  ['support','How do I contact Hipobuy support?','Use Hipobuy’s official contact page. Include the order or parcel ID and a short description of the issue so support can identify the record.',contact]
];

const articles = [
  ['hipobuy-spreadsheet-guide','Hipobuy Spreadsheet Guide: From CNFansSP to Your First Order','Use the catalog, confirm the seller link and place your first agent order.',[
    ['Find a listing on CNFansSP','Start with a category such as shoes or jerseys, or search for the exact catalog title. Open the CNFansSP detail page and follow the original seller link. Keep the seller URL handy so you can compare the original photos and variant options with the Hipobuy product page.'],
    ['Check the order before paying','Choose the color, size and quantity deliberately. Compare the selected variant’s price with the seller page and check whether domestic delivery appears as a separate charge. A CNFansSP row is a starting point and the product page is where you confirm whether your option is still available.'],
    ['Review before forwarding','Wait for the warehouse inspection and compare the photos with your order. Once you are satisfied, choose the items to pack and compare the available international lines. Save the order and parcel IDs separately, since a single parcel can include several orders.']
  ],[[catalog,'CNFansSP catalog'],[official,'Hipobuy shopping guide']]],
  ['hipobuy-shipping-calculator','Hipobuy Shipping Calculator: How to Compare Parcel Quotes','Compare quotes using one destination, one parcel and the same packed dimensions.',[
    ['Prepare comparable inputs','Write down the destination, estimated packed weight and the outer length, width and height. Use a single set of inputs across your route comparison. A parcel with the same items but a larger outer box can produce a different estimate.'],
    ['Record the full quote','Note the quoted freight, the chargeable weight and any visible extras. Open the line’s terms to check its weight steps, size ceilings and accepted items. A route that looks inexpensive at a lower weight can change rank when the actual parcel crosses another billing increment.'],
    ['Recheck after packing','Once the warehouse has measured the parcel, run the comparison again with its packed dimensions. Compare the final payment screen with your estimate and check whether a difference comes from packaging, the route or optional services before confirming.']
  ],[[fees,'Hipobuy Service & Fees'],[parcel,'Competitor parcel cost guide']]],
  ['hipobuy-qc-photos','Hipobuy QC Photos: What to Check Before You Ship','Check identity, measurements and condition while the item is still at the warehouse.',[
    ['Match the received item to your order','Open the order record beside the warehouse photos. Start with the color, visible labels and quantity. For a pair of shoes, compare both shoes in the same view. For clothing, look at the label, visible seams and the area most likely to affect whether you keep the item.'],
    ['Request a photo for a specific decision','If a photo cannot settle a question, ask for the missing view directly. For example, request the garment laid flat with a tape across the chest or a close-up of a zipper. Compare the result against the seller’s stated measurement method and allow for ordinary measuring differences.'],
    ['Record issues before parcel submission','Keep the warehouse photos and selected variant together. If the received item appears incorrect, ask about your order’s resolution options while it is still stored. Treat photos attached to other orders as reference images and use your own QC photos when deciding whether to ship.']
  ],[[official,'Hipobuy warehouse overview'],[qc,'Competitor QC inspection guide']]],
  ['hipobuy-fees','Hipobuy Fees: What to Include in Your Order Budget','Track seller-to-warehouse delivery and international freight as separate charges.',[
    ['Build the item subtotal','Record the chosen option’s price, quantity and domestic freight. Compare those numbers against the order screen before you pay. Domestic shipping covers the trip from the seller to the warehouse. For orders from several sellers, inspect each order’s delivery amount before you total the basket.'],
    ['Build the parcel subtotal','At parcel submission, check the line quote, any declaration charge shown and the extra services you have selected. Review destination taxes separately and keep the quoted amount and currency together. This avoids mixing a catalog price in CNY with a freight quote displayed in another currency.'],
    ['Audit the difference','Save the item receipt and the parcel breakdown. If the total differs from your estimate, compare the charged weight, the selected options and the currency used at payment. Use the current order and parcel screens to resolve the difference.']
  ],[[fees,'Hipobuy Service & Fees'],[customs,'Hipobuy Customs and Taxation']]],
  ['hipobuy-weidian-links','How to Open Weidian Links in Hipobuy','Use the original seller URL and confirm both IDs describe the same listing.',[
    ['Start at the product detail page','Open the item on CNFansSP and follow its Weidian Link. The number in a CNFansSP page URL identifies a catalog page. In this catalog, Jersey-60 sits at 6667.html and the linked Weidian listing uses item ID 7632511460.'],
    ['Check the destination page','Open the Hipobuy purchase button or paste the original URL into Hipobuy. Before adding anything to the cart, compare the main image, option labels and price with the seller’s page. Some listings contain several styles with similar pictures, so check the active option.'],
    ['Handle unavailable links','If a seller link fails, reopen the original listing and try copying the complete URL. A product can be removed or limited by the agent. Contact support with the original link and any error you saw if you cannot confirm it is still available.']
  ],[[catalog + '6667.html','CNFansSP Jersey-60 detail page'],[official,'Hipobuy shopping guide']]],
  ['hipobuy-warehouse-consolidation','Hipobuy Warehouse Guide: Consolidate or Split a Parcel?','Compare parcel plans using the same items and the rules of your available routes.',[
    ['List the items that are ready','Use the warehouse list to group items by whether they have arrived, passed your own photo review or still need seller follow-up. Leave unresolved items out of the parcel plan until you know how you want to handle them. Check the storage date shown for items you are holding.'],
    ['Compare two realistic parcels','Write down a combined packing plan and a split plan. Compare the total cost of both, using the available lines, size limits and packaging for each. A combined parcel can reduce duplicated packaging, while a split can keep a bulky item separate from fragile goods.'],
    ['Confirm each parcel before paying','Check that each item is selected once, confirm the address and save the parcel IDs. Record which orders went into each parcel so you know which tracking record to open if items arrive on different days.']
  ],[[official,'Hipobuy warehouse and transport overview'],[parcel,'Competitor parcel planning guide']]],
  ['hipobuy-volumetric-weight','Hipobuy Volumetric Weight: Why Box Size Matters','Work through a sample quote and check the rule that applies to your line.',[
    ['Compare weight and box dimensions','Some lines derive a dimensional weight from the outer length, width and height. For illustration, a 40 × 30 × 25 cm box divided by 6,000 gives 5 kg. If it weighs 3 kg on a scale, a line using the higher value would start at 5 kg before its own rounding rules.'],
    ['Check the actual divisor','Read the route terms for its unit conventions, divisor, rounding and size limits. Ask for packed dimensions when you only have product measurements. If a line uses actual weight, confirm whether it still places a size limit on the parcel.'],
    ['Compare packaging choices','Ask what packaging can be reduced without risking damage, then compare the packed measurements and the quoted totals. Keep boxes or padding when they protect an item you value and evaluate the cost with that protection included.']
  ],[[fees,'Hipobuy Service & Fees'],[qc,'Competitor dimensional weight guide']]],
  ['hipobuy-size-chart','Hipobuy Size Charts: Compare Seller Measurements','Choose a size from comparable measurements and verify key dimensions in QC.',[
    ['Measure a garment you already wear','Lay it flat and note chest width, length and sleeve length in centimetres. For trousers, include waist, inseam and rise. Record how you measured each point so you can match the seller’s diagram. Measure a similar garment with the fit you want from the new purchase.'],
    ['Read the seller’s chart for your variant','Check whether the chart reports garment measurements or body measurements. A flat chest width and a full circumference are different values, even when both say chest. Account for the stretch of the material and leave the room you prefer for layering.'],
    ['Confirm a close decision at the warehouse','If you are between two sizes, decide which measurement would change your choice. Request that specific measurement in a QC photo if needed and compare it with the chart and your reference garment before shipping.']
  ],[[catalog,'CNFansSP product listings'],[qc,'Competitor QC guide']]],
  ['hipobuy-returns-refunds','Hipobuy Returns and Refunds: What to Do After QC','Preserve the order evidence and check eligibility before international dispatch.',[
    ['Document the issue clearly','Save the order ID, the selected size or color, and any warehouse photo that shows the issue. Describe the difference in one sentence. For example, say which size you paid for and which size appears on the photographed label.'],
    ['Check the current order options','Review the available after-sales actions and the current Returns and Refunds policy linked from Hipobuy. Seller terms, customization and order status can affect eligibility. Ask about the return cost or replacement timeline before choosing the option you want.'],
    ['Track the resolution','Keep the support reply and check the status of the affected item separately from your other orders. If you are waiting for an exchange, review the new warehouse photos before adding the replacement to a parcel.']
  ],[[official,'Hipobuy Returns and Refunds in the official help menu'],[contact,'Hipobuy customer service']]],
  ['hipobuy-tracking-support','Hipobuy Parcel Tracking: What to Send Customer Support','Use the parcel record to document tracking delays, damage or missing contents.',[
    ['Find the parcel record','Open the Hipobuy parcel entry and copy its tracking number and parcel ID. Record the last scan, including its date, and compare it with the route’s stated transit range. Handoffs can create gaps between scans, so keep the timeline when you contact support.'],
    ['Preserve delivery evidence','If a parcel arrives damaged, photograph the exterior, label, packing material and damaged contents. If an item is missing, compare the list of items in that parcel with what arrived and note whether any other parcels from the same order are still in transit.'],
    ['Ask about the relevant claim route','Send the parcel ID and evidence through official support and check the conditions and deadline that apply to your route. Keep the support case number and packaging until the issue is resolved.']
  ],[[contact,'Hipobuy customer service'],[claims,'Hipobuy insurance and compensation']]]
];


const production = 'https://hipobuycatalog.shop';
const source = 'https://www.cnfanssp.com';
const hipobuy = 'https://hipobuy.com';
const logo = 'https://app.hipobuy.com/logo.png';
const favicon = hipobuy + '/static/favicon/32x32.png';
const languages = {en:'English', 'zh-CN':'简体中文', es:'Español'};
const navigation = {
  en:['Home','Spreadsheet','Categories','FAQ','Guides','Source','Open catalog','Help and buying guides'],
  'zh-CN':['首页','商品表','分类','常见问题','购买指南','来源','打开主站商品表','常见问题和购买指南'],
  es:['Inicio','Catálogo','Categorías','Preguntas','Guías','Fuente','Abrir catálogo original','Preguntas y guías de compra']
};
const local = (lang, path = '/') => (lang === 'en' ? '' : '/' + lang) + path;
const faqPageSize = 6;
const guidePageSize = 5;

const translations = {
  en: ['Finds', 'Join Hipobuy', 'Browse China finds.', 'Explore the CNFansSP catalog and open your finds in Hipobuy.', 'Search products', 'Search', 'Latest products', 'View all', 'Details', 'Buy on Hipobuy', 'Catalog temporarily unavailable.', 'Browse the source catalog', 'Categories'],
  'zh-CN': ['选品', '注册 Hipobuy', '发现中国好物。', '浏览 CNFansSP 商品目录，通过 Hipobuy 打开商品。', '搜索商品', '搜索', '最新商品', '查看全部', '查看详情', '去 Hipobuy 购买', '商品暂时无法加载。', '浏览主站商品', '商品分类'],
  es: ['Hallazgos', 'Regístrate en Hipobuy', 'Descubre productos de China.', 'Explora el catálogo de CNFansSP y abre tus hallazgos en Hipobuy.', 'Buscar productos', 'Buscar', 'Últimos productos', 'Ver todo', 'Detalles', 'Comprar en Hipobuy', 'Catálogo temporalmente no disponible.', 'Explorar catálogo original', 'Categorías']
};

const categoryNames = {
  '/shoes/':['鞋类','Calzado'], '/hoodies-sweaters/':['连帽衫／毛衣','Sudaderas'],
  '/t-shirts/':['T 恤','Camisetas'], '/jackets/':['夹克','Chaquetas'],
  '/pants-shorts/':['裤装','Pantalones'], '/headwear/':['帽类','Gorras'],
  '/accessories/':['配饰','Accesorios'], '/jersey/':['球衣','Camisetas deportivas'],
  '/electronics/':['电子产品','Electrónica'], '/other-stuff/':['其他','Otros']
};

const escape = value => String(value).replace(/[&<>"']/g, char =>
  ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'})[char]);

async function upstream(path) {
  const response = await fetch(source + path, {signal: AbortSignal.timeout(8500)});
  if (!response.ok) throw new Error('Catalog source unavailable');
  return response.text();
}

function sourceUrl(path) {
  const url = new URL(path, source);
  return url.origin === source ? url.href : null;
}

function parseCatalog(html) {
  const categories = Array.from(html.matchAll(/<a href="([^"]+)" class="category-item[^"]*">[\s\S]*?<h3>([^<]+)<\/h3>/g), ([, path, name]) => ({url:sourceUrl(path), name}));
  const products = html.split(/<div class="product-card\b/).slice(1, 13).flatMap(card => {
    const href = card.match(/href="(\/AllProducts\/(\d+)\.html)"/);
    const image = card.match(/data-src="([^"]+)"/);
    const name = card.match(/<h3>([^<]+)<\/h3>/);
    const price = card.match(/class="product-price">\s*([\d.]+)\s*</);
    if (!href || !image || !name || !price) return [];
    const imageUrl = sourceUrl(image[1]);
    if (!imageUrl) return [];
    return [{id:href[2], url:sourceUrl(href[1]), image:imageUrl, name:name[1], price:price[1]}];
  });
  return {categories, products};
}

async function buy(id) {
  const details = source + '/AllProducts/' + id + '.html';
  try {
    const html = await upstream('/AllProducts/' + id + '.html');
    const item = html.match(/href="https?:\/\/(?:www\.)?weidian\.com\/item\.html\?itemid=(\d+)/i);
    if (item) return Response.redirect(hipobuy + '/product/weidian/' + item[1], 302);
  } catch {
    // Keep the original product page available during an upstream outage.
  }
  return Response.redirect(details, 302);
}

function page(lang, {categories = [], products = []}, path, query, view) {
  const [finds, join, title, intro, placeholder, search, latest, all, details, purchase, error, browse, categoryLabel] = translations[lang];
  const [homeLabel, sheetLabel, categoriesLabel, faqLabel, guideLabel, sourceLabel, openCatalog, helpLabel] = navigation[lang];
  const nav = [['/',homeLabel],['/spreadsheet/',sheetLabel],['/categories/',categoriesLabel],['/faq/',faqLabel],['/guides/',guideLabel]];
  const menu = Object.entries(languages).map(([code,label]) =>
    `<a href="${local(code,path)}${query}" lang="${code}"${code === lang ? ' aria-current="true"' : ''}>${label}</a>`
  ).join('');
  const pages = (base, count, current) => `<nav class="pages" aria-label="Pages">${Array.from({length:count}, (_,i) =>
    `<a href="${local(lang,base)}${i ? '?page='+(i+1) : ''}"${i+1 === current ? ' aria-current="page"' : ''} aria-label="Page ${i+1}">${i+1}</a>`
  ).join('')}</nav>`;
  const faqCards = (items, offset = 0) => items.map(([id,question,answer,link],i) =>
    `<details name="faq" id="${id}"${offset+i === 0 ? ' open' : ''}><summary>${escape(question)}</summary><p>${escape(answer)}</p><a href="${link}">${sourceLabel} ↗</a></details>`
  ).join('');
  const guideCards = items => items.map(([slug,heading,summary]) =>
    `<a class="guide-card" href="${local(lang,'/guides/'+slug+'/')}"><h3>${escape(heading)}</h3><p>${escape(summary)}</p></a>`
  ).join('');
  const searchBox = `<form class="search" action="${source}/search.html" method="get"><input type="hidden" name="channelid" value="2"><input type="search" name="keywords" aria-label="${placeholder}" placeholder="${placeholder}" required><button>${search}</button></form>`;
  const categoryLinks = categories.map(({url,name}) => {
    if (!url) return '';
    const localized = categoryNames[new URL(url).pathname.toLowerCase()]?.[lang === 'es' ? 1 : 0];
    return `<a href="${escape(url)}">${escape(lang === 'en' ? name : localized ?? name)}</a>`;
  }).join('');
  const cards = products.map((product, index) => `<article>
    <a class="photo" href="${product.url}"><img src="${escape(product.image)}" alt="${escape(product.name)}" loading="${index < 4 ? 'eager' : 'lazy'}"></a>
    <div class="cardbody"><div class="row"><h3>${escape(product.name)}</h3><strong>¥${product.price}</strong></div>
    <div class="actions"><a href="${product.url}">${details}</a><a class="buy" href="/buy/${product.id}">${purchase} ↗</a></div></div>
  </article>`).join('');
  const catalogGrid = cards ? `<div class="grid">${cards}</div>` : `<p>${error} <a class="all" href="${source}/AllProducts/">${browse} ↗</a></p>`;
  let body;
  let heading = 'Hipobuy Spreadsheet | Hipobuy Catalog';
  let description = intro;
  if (path === '/faq/') {
    heading = 'Hipobuy FAQ';
    const offset = (view.number - 1)*faqPageSize;
    description = '23 answers about Hipobuy ordering, QC, shipping, returns and more.';
    body = `<section class="content"><h1>${heading}</h1><p class="lead">${description}</p><div class="faq" lang="en">${faqCards(faq.slice(offset,offset+faqPageSize),offset)}</div>${pages(path,Math.ceil(faq.length/faqPageSize),view.number)}</section>`;
  } else if (view.article) {
    const [, articleTitle, summary, sections, refs] = view.article;
    heading = articleTitle;
    description = summary;
    body = `<article class="content reading" lang="en"><a class="back" href="${local(lang,'/guides/')}">← ${guideLabel}</a><h1>${escape(articleTitle)}</h1><p class="lead">${escape(summary)}</p>${sections.map(([section,copy]) => `<section><h2>${escape(section)}</h2><p>${escape(copy)}</p></section>`).join('')}<aside class="refs"><h2>Sources</h2><ul>${refs.map(([url,label])=>`<li><a href="${url}">${escape(label)} ↗</a></li>`).join('')}</ul></aside></article>`;
  } else if (path === '/guides/') {
    heading = 'Hipobuy · ' + guideLabel;
    description = 'Guides to shopping with Hipobuy, including QC photos, fees and parcel shipping.';
    const offset = (view.number-1)*guidePageSize;
    body = `<section class="content"><h1>${escape(heading)}</h1><div class="guide-list" lang="en">${guideCards(articles.slice(offset,offset+guidePageSize))}</div>${pages(path,Math.ceil(articles.length/guidePageSize),view.number)}</section>`;
  } else if (path === '/categories/') {
    heading = categoriesLabel;
    body = `<section class="content"><h1>${heading}</h1><nav class="category-list" aria-label="${categoryLabel}">${categoryLinks || `<a href="${source}/AllProducts/">${openCatalog} ↗</a>`}</nav></section>`;
  } else if (path === '/spreadsheet/') {
    heading = 'Hipobuy · ' + sheetLabel;
    body = `<section class="content sheet"><div class="row"><h1>${escape(heading)}</h1><a class="all" href="${source}/AllProducts/">${openCatalog} ↗</a></div>${searchBox}${catalogGrid}</section>`;
  } else {
    body = `<section class="hero"><h1>${title}</h1><p>${intro}</p>${searchBox}</section>
    <nav class="categories" aria-label="${categoryLabel}"><a href="${source}/AllProducts/">${all}</a>${categoryLinks}</nav>
    <section class="catalog"><div class="row"><h2>${latest}</h2><a class="all" href="${source}/AllProducts/">${all} ↗</a></div>${catalogGrid}</section>
    <div class="home-help" aria-label="${helpLabel}"><section><div class="row"><h2>${faqLabel}</h2><a class="all" href="${local(lang,'/faq/')}">${all} ↗</a></div><div class="faq" lang="en">${faqCards(faq.slice(0,3))}</div></section>
    <section><div class="row"><h2>${guideLabel}</h2><a class="all" href="${local(lang,'/guides/')}">${all} ↗</a></div><div class="guide-list" lang="en">${guideCards(articles.slice(0,3))}</div></section></div>`;
  }
  return `<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">${view.indexable ? `<link rel="canonical" href="${view.canonical}">` : '<meta name="robots" content="noindex">'}<title>${escape(heading)}</title><meta name="description" content="${escape(description)}"><link rel="icon" type="image/png" href="${favicon}">${view.analytics}
  <style>
  *{box-sizing:border-box}body{margin:0;background:#f6f8fc;color:#15213d;font:15px system-ui,sans-serif}a{color:inherit;text-decoration:none}a:focus-visible,button:focus-visible,select:focus-visible,input:focus-visible{outline:3px solid #7692ff;outline-offset:3px}
  header{background:#fff;border-bottom:1px solid #e4e9f3}.shell{width:min(1200px,calc(100% - 64px));margin:auto}.top,.row,.actions{display:flex;align-items:center;justify-content:space-between;gap:12px}.top{min-height:72px}.brand{font-weight:850;font-size:22px;letter-spacing:-.05em;white-space:nowrap}.brand span{color:#445ce5}.tools{display:flex;gap:12px;align-items:center}.tools select{background:white;color:#15213d;border:1px solid #dbe2ef;border-radius:9px;padding:9px;font:inherit}.join,.search button{background:#3951df;color:white;font-weight:750;border:0;border-radius:9px;padding:11px 16px;cursor:pointer}
  .hero{margin-top:30px;padding:56px clamp(24px,6vw,76px);border-radius:24px;background:radial-gradient(ellipse at 92% 2%,#3f54ce,transparent 58%),linear-gradient(115deg,#101b48,#27399a);color:white}.hero h1{max-width:770px;margin:0;font-size:clamp(37px,6vw,73px);font-weight:850;letter-spacing:-.07em;line-height:1.02}.hero p{color:#e0e7ff;font-size:17px;margin:16px 0 28px}.search{display:flex;gap:8px;padding:6px;border-radius:13px;background:white;width:min(100%,530px)}.search input{min-width:0;flex:1;border:0;padding:10px;font:inherit;color:#15213d}.search button{font:inherit;font-weight:750}
  .categories{display:flex;gap:8px;overflow:auto;padding:19px 1px 7px;scrollbar-width:thin}.categories a{flex:none;padding:9px 13px;border:1px solid #dfe6f4;background:white;border-radius:30px;font-weight:650;font-size:13px}.categories a:hover,.actions a:hover{background:#eaf0ff}.catalog{margin:24px 0 46px}.catalog h2{margin:0 0 15px;font-size:28px;letter-spacing:-.045em}.all{color:#3048cd;font-weight:750;margin-bottom:15px}.grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:15px}
  article{background:white;border:1px solid #e1e7f2;border-radius:16px;overflow:hidden}.photo{display:grid;place-items:center;aspect-ratio:1.16;background:#eff2f8}.photo img{display:block;width:100%;height:100%;object-fit:contain;aspect-ratio:1.16}.cardbody{padding:13px}.cardbody h3{margin:0;font-size:16px;overflow-wrap:anywhere}.cardbody strong{color:#243bbb;white-space:nowrap}.actions{margin-top:12px;gap:6px}.actions a{padding:7px;border-radius:7px;font-size:12px;font-weight:700}.actions .buy{color:#263fc1;background:#eff2ff}footer{border-top:1px solid #e0e6f1;padding:20px 0;color:#4e5d7a}
  @media(max-width:850px){.grid{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(max-width:620px){.shell{width:calc(100% - 28px)}.top{min-height:61px}.tools{gap:6px}.tools select,.join{font-size:12px;padding:8px}.brand{font-size:18px}.hero{margin-top:14px;padding:30px 17px;border-radius:16px}.hero p{font-size:15px;margin:12px 0 18px}.grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:9px}.cardbody{padding:8px}.actions{flex-wrap:wrap;justify-content:flex-start;gap:2px;margin-top:5px}.catalog h2{font-size:23px}}
  .brand{display:inline-flex;align-items:center;background:#17234a;border-radius:9px;padding:8px 10px}.brand img{display:block;width:112px;height:auto}.primary{display:flex;gap:17px;align-items:center;white-space:nowrap}.primary a{font-size:14px;font-weight:700;color:#344160}.primary a:hover,.primary [aria-current]{color:#273bc0}.language{position:relative;z-index:2}.language>summary{list-style:none;cursor:pointer;padding:8px 10px;border:1px solid #dbe2ef;border-radius:9px;white-space:nowrap}.language>summary::-webkit-details-marker{display:none}.language>div{position:absolute;right:0;min-width:140px;top:calc(100% + 7px);padding:5px;background:#fff;border:1px solid #dbe2ef;border-radius:10px;box-shadow:0 6px 20px #15213d22}.language a{display:block;padding:8px;border-radius:6px}.language a:hover,.language [aria-current]{background:#eef2ff}
  .content{max-width:800px;margin:30px auto 42px}.content h1{font-size:clamp(28px,6vw,43px);line-height:1.12;letter-spacing:-.04em;margin:0 0 15px}.lead{font-size:17px;color:#516180;margin:0 0 22px}.home-help{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:22px;margin:0 0 35px}.home-help h2{margin:0 0 15px}.faq,.guide-list,.category-list{display:grid;gap:9px}.faq details,.guide-card,.category-list a{background:#fff;border:1px solid #e1e7f2;border-radius:10px;padding:12px 14px}.faq summary{cursor:pointer;font-weight:700}.faq details p{margin:10px 0;line-height:1.46}.faq details a,.refs a,.back{color:#3048cd;font-weight:650}.guide-card:hover,.category-list a:hover{background:#eef2ff}.guide-card h3{font-size:16px;margin:0}.guide-card p{margin:4px 0 0;color:#516180;font-size:14px}.category-list{grid-template-columns:repeat(2,minmax(0,1fr))}.category-list a{font-weight:700}.pages{display:flex;gap:8px;margin:15px 0}.pages a{padding:7px 12px;border-radius:7px;background:#fff;border:1px solid #dbe2ef}.pages [aria-current]{background:#3951df;color:#fff}.reading{padding:24px 29px;line-height:1.58}.reading .back{display:inline-block;margin-bottom:12px}.reading h2{font-size:19px;margin:16px 0 4px}.reading p{margin:0 0 12px}.refs ul{padding-left:20px;margin:5px 0 0}.sheet{max-width:none}.sheet .search{margin-bottom:14px;border:1px solid #dbe2ef}
  @media(max-width:710px){.top{flex-wrap:wrap;gap:0 8px;padding:8px 0 6px}.primary{order:3;flex-basis:100%;overflow:auto;gap:12px;padding-top:9px;scrollbar-width:none}.primary a{font-size:12px;padding:4px 0}.brand img{width:86px}.language>summary{font-size:12px;padding:7px}.home-help{grid-template-columns:1fr;gap:13px}.content{margin:15px auto 21px}.content h1{margin-bottom:10px}.lead{font-size:15px;margin-bottom:13px}.reading{padding:13px 14px;font-size:14px;line-height:1.48}.reading h2{font-size:17px;margin:13px 0 4px}.reading p{margin:0 0 8px}.home-help h2{font-size:20px}.guide-card h3{font-size:15px}}
  </style></head><body><header><div class="shell top"><a class="brand" href="${local(lang)}"><img src="${logo}" alt="Hipobuy" width="112" height="26"></a>
  <nav class="primary" aria-label="Primary navigation">${nav.map(([dest,label])=>`<a href="${local(lang,dest)}"${path===dest || (dest==='/guides/' && view.article) ? ' aria-current="page"' : ''}>${label}</a>`).join('')}</nav>
  <div class="tools"><details class="language"><summary aria-label="Language: ${languages[lang]}">${languages[lang]} ▾</summary><div>${menu}</div></details>
  <a class="join" href="${hipobuy}/register">${join} ↗</a></div></div></header>
  <main class="shell">${body}</main>
  <footer><div class="shell"><a href="${source}">CNFansSP ↗</a></div></footer></body></html>`;
}

export default {
  async fetch(request, env = {}) {
    const verifiedId = /^G-[A-Z0-9]+$/.test(env.GA4_MEASUREMENT_ID ?? '') ? env.GA4_MEASUREMENT_ID : '';
    const analytics = verifiedId ? `<script async src="https://www.googletagmanager.com/gtag/js?id=${verifiedId}"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${verifiedId}');</script>` : '';
    const url = new URL(request.url);
    const primary = url.origin === production;
    if (url.pathname === '/robots.txt') {
      const robots = primary ? 'User-agent: *\nAllow: /\nDisallow: /buy/\nSitemap: '+production+'/sitemap.xml\n' : 'User-agent: *\nDisallow: /\n';
      return new Response(robots, {headers:{'content-type':'text/plain; charset=utf-8'}});
    }
    if (url.pathname === '/sitemap.xml' && primary) {
      const paths = ['/','/spreadsheet/','/categories/','/faq/','/guides/', ...articles.map(([slug])=>'/guides/'+slug+'/')];
      const urls = paths.map(path=>'<url><loc>'+production+path+'</loc></url>').join('');
      return new Response('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+urls+'</urlset>', {headers:{'content-type':'application/xml; charset=utf-8'}});
    }
    const product = url.pathname.match(/^\/buy\/(\d{1,10})$/);
    if (product) return buy(product[1]);
    const prefix = url.pathname.match(/^\/(zh-CN|es)(?=\/|$)/);
    const requested = url.searchParams.get('lang');
    const lang = prefix?.[1] ?? (Object.hasOwn(languages,requested) ? requested : 'en');
    const rawPath = prefix ? url.pathname.slice(prefix[0].length) : url.pathname;
    const path = rawPath.endsWith('/') ? rawPath : rawPath + '/';
    const article = articles.find(([slug]) => path === '/guides/'+slug+'/');
    const listings = ['/', '/spreadsheet/', '/categories/'];
    if (!listings.includes(path) && !['/faq/','/guides/'].includes(path) && !article) {
      return new Response('Not found', {status:404});
    }
    const max = path === '/faq/' ? Math.ceil(faq.length/faqPageSize) : Math.ceil(articles.length/guidePageSize);
    const value = Number(url.searchParams.get('page'));
    const number = Number.isInteger(value) && value >= 1 && value <= max ? value : 1;
    const data = listings.includes(path) ? await upstream('/').then(parseCatalog).catch(() => ({})) : {};
    const canonical = production + local(lang,path) + (number > 1 ? '?page='+number : '');
    const indexable = primary && lang === 'en';
    const headers = {'content-type':'text/html; charset=utf-8'};
    if (!indexable) headers['x-robots-tag'] = 'noindex';
    return new Response(page(lang,data,path,number > 1 ? '?page='+number : '',{
      article,number,canonical,indexable,analytics:primary ? analytics : ''
    }), {headers});
  }
};
