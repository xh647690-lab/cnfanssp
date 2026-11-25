const production = 'https://hipobuylookbook.store';
const origin = 'https://cnfanssp.com';
const languages = {
  en: ['English','Finds','Categories','Search products on CNFansSP','Search','Discover your next find','Browse the latest products and open their original listings on CNFansSP.','Latest finds','View all products','View details','The catalog is temporarily unavailable.','Open CNFansSP','Language','Main site','Shopping agents'],
  zh: ['简体中文','商品','分类','在 CNFansSP 搜索商品','搜索','发现下一件好物','浏览最新商品，前往 CNFansSP 查看原始详情。','最新商品','查看全部商品','查看详情','主站商品暂时无法加载。','前往 CNFansSP','语言','主站','购物平台'],
  es: ['Español','Productos','Categorías','Buscar productos en CNFansSP','Buscar','Descubre tu próximo hallazgo','Explora las novedades y abre sus fichas originales en CNFansSP.','Últimos productos','Ver todos los productos','Ver detalles','El catálogo no está disponible temporalmente.','Abrir CNFansSP','Idioma','Sitio principal','Agentes de compra'],
  fr: ['Français','Produits','Catégories','Rechercher sur CNFansSP','Rechercher','Trouvez votre prochain coup de cœur','Parcourez les nouveautés et consultez les fiches originales sur CNFansSP.','Derniers produits','Voir tous les produits','Voir les détails','Le catalogue est temporairement indisponible.','Ouvrir CNFansSP','Langue','Site principal','Agents d’achat'],
  de: ['Deutsch','Produkte','Kategorien','Produkte auf CNFansSP suchen','Suchen','Entdecke deinen nächsten Fund','Entdecke neue Produkte und öffne die Originalangebote auf CNFansSP.','Neueste Produkte','Alle Produkte anzeigen','Details ansehen','Der Katalog ist vorübergehend nicht verfügbar.','CNFansSP öffnen','Sprache','Hauptseite','Einkaufsagenten'],
};
const labels = {
  shoes:['鞋履','Calzado','Chaussures','Schuhe'],
  'hoodies-sweaters':['卫衣与毛衣','Sudaderas y suéteres','Sweats et pulls','Hoodies und Pullover'],
  't-shirts':['T 恤','Camisetas','T-shirts','T-Shirts'],
  jackets:['夹克','Chaquetas','Vestes','Jacken'],
  'pants-shorts':['长裤与短裤','Pantalones y shorts','Pantalons et shorts','Hosen und Shorts'],
  headwear:['帽饰','Gorras y sombreros','Chapeaux et casquettes','Kopfbedeckungen'],
  accessories:['配饰','Accesorios','Accessoires','Accessoires'],
  jersey:['球衣','Camisetas deportivas','Maillots','Trikots'],
  electronics:['电子产品','Electrónica','Électronique','Elektronik'],
  'other-stuff':['其他','Otros','Autres','Sonstiges'],
};
const escape = value => String(value ?? '').replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
const clean = value => value?.replace(/<[^>]*>/g,'').replace(/&(amp|quot|apos|lt|gt|nbsp|#39);/g, (_, entity) => ({amp:'&',quot:'"',apos:"'",lt:'<',gt:'>',nbsp:' ','#39':"'"}[entity])).trim() ?? '';
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
const styles = `
:root{color-scheme:light;--ink:#15294c;--blue:#1747cc;--muted:#50627e;--line:#dde5f0;--paper:#f6f8fc}
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:var(--paper);color:var(--ink);font:16px/1.5 system-ui,sans-serif}a{color:inherit;text-decoration:none}a:hover{color:var(--blue)}.wrap{width:min(1160px,calc(100% - 48px));margin:auto}header{background:#fff;border-bottom:1px solid var(--line)}.top{min-height:72px;display:flex;align-items:center;gap:26px}.brand{font-size:22px;font-weight:850;letter-spacing:-.05em;white-space:nowrap}.brand span{color:var(--blue)}nav{display:flex;gap:24px;margin-left:auto;font-size:14px;font-weight:650}select{font:inherit;font-size:14px;color:var(--ink);border:1px solid var(--line);background:#fff;border-radius:8px;padding:8px}
.hero{margin-top:28px;border-radius:24px;padding:54px 52px;background:linear-gradient(120deg,#102450,#2047a5 76%,#285bea);color:white}.hero h1{max-width:790px;font-size:clamp(38px,6vw,68px);letter-spacing:-.065em;line-height:1.03;margin:0 0 16px}.hero p{margin:0 0 24px;color:#e0e8ff}.search{max-width:570px;display:flex;padding:5px;gap:6px;background:white;border-radius:11px}.search input{width:100%;min-width:0;padding:10px 12px;border:0;color:var(--ink);font:inherit;background:transparent}.search button{border:0;border-radius:8px;background:var(--blue);color:white;padding:10px 19px;font:inherit;font-weight:700;cursor:pointer}
section{margin:30px 0 38px;scroll-margin-top:18px}.heading{display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-bottom:15px}.heading h2{font-size:27px;letter-spacing:-.04em;margin:0}.heading a{font-size:14px;color:var(--blue);font-weight:700}.chips{display:flex;flex-wrap:wrap;gap:9px}.chips a{border:1px solid var(--line);background:white;border-radius:8px;padding:8px 12px;font-size:14px;font-weight:650}.chips a:hover{border-color:var(--blue)}
.grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:14px}.card{display:flex;flex-direction:column;border:1px solid var(--line);border-radius:13px;overflow:hidden;background:white}.card img,.photo{width:100%;aspect-ratio:1.16;object-fit:contain;background:#edf1f6;display:block}.info{display:flex;flex:1;flex-direction:column;padding:12px;gap:5px}.info strong{font-size:15px;overflow-wrap:anywhere}.price{color:var(--muted);font-size:14px}.details{margin-top:auto;padding-top:6px;color:var(--blue);font-size:14px;font-weight:700}.error{padding:18px;background:white;border:1px solid var(--line);border-radius:12px}.error a{color:var(--blue)}footer{border-top:1px solid var(--line);padding:20px 0;color:var(--muted);font-size:14px}.bottom{display:flex;justify-content:space-between;gap:15px}a:focus-visible,button:focus-visible,input:focus-visible,select:focus-visible{outline:2px solid #7194ff;outline-offset:2px}
@media(max-width:850px){.grid{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(max-width:580px){.wrap{width:calc(100% - 28px)}.top{min-height:58px;gap:12px;justify-content:space-between}nav{display:none}.hero{margin-top:14px;padding:28px 18px;border-radius:16px}.hero h1{font-size:40px}.hero p{font-size:15px;margin-bottom:17px}.search button{padding-inline:11px}.search input{font-size:16px;padding-inline:6px}.grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.heading h2{font-size:22px}.heading a{text-align:right}section{margin:22px 0 27px}}
`;
const officialLogo = 'data:image/png;base64,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';
const references = {
  official:['HipoBuy','https://hipobuy.com/'],
  shortlist:['Hipofinds buying guide','https://hipofinds.com/'],
  glossary:['Hipofinds help desk','https://hipofinds.com/help/'],
  ordering:['Hipofinds order walkthrough','https://hipofinds.org/before-you-order/'],
  quotes:['Hipofinds shipping and QC guide','https://hipofinds.org/shipping-and-qc/'],
  competitor:['Repsheet HipoBuy directory','https://repsheet.net/spreadsheet/hipobuy'],
  options:['Hiipobuy product-link guide','https://hiipobuy.com/product-links.html'],
};
const guides = [
  ['hipobuy-spreadsheet','How to use a HipoBuy spreadsheet','Find an item, verify its seller listing and take the right link to HipoBuy.',['competitor','official'],[
    ['Start with a product name','Use search for a distinctive name, or open a category and compare a few listings. With generic terms such as “jersey,” narrow your shortlist by checking the style and available sizes on the detail page. On this site, both paths open the live CNFansSP catalog.'],
    ['Confirm the marketplace listing','Open the seller link in the product details. Save the marketplace and item ID along with your chosen size and color. If a reseller link and original listing have different IDs, verify which seller and product your order will use.'],
    ['Open the listing in HipoBuy','Paste the original seller URL into HipoBuy, then check that the loaded title and options match. Treat the price in a directory as a reference and review the amount HipoBuy displays for your exact variant before paying.']]],
  ['hipobuy-shipping-calculator','HipoBuy shipping calculator and cost estimates','What to enter, why the quote changes, and how to compare shipping lines.',['quotes','official'],[
    ['Estimate the packed parcel','Enter the destination and your best estimate of the packed weight. If the estimator accepts dimensions, use outer parcel dimensions. For bulky shoes and jackets, packaging choices can change which lines are eligible and how much they cost.'],
    ['Compare comparable quotes','Use the same weight, dimensions and destination across lines. Check transit ranges, goods restrictions, tracking and coverage alongside price. Keep product cost and domestic seller shipping on a separate line in your budget.'],
    ['Check the packed total','Warehouse packing can change chargeable weight or route availability. Before shipping, compare the final quote against your estimate and read any adjustment, coverage and destination-charge terms displayed for the line.']]],
  ['hipobuy-qc-photos','How to review HipoBuy QC photos','Use warehouse photos to check your actual item before requesting shipping.',['glossary','quotes'],[
    ['Compare the photos to your order','Start with color, size tag, quantity and the selected variant. For a jersey, compare the front and back design, and look for the name or number you requested. For shoes, check both sides of the pair and the size labels.'],
    ['Request a specific view','If the angle hides a detail, ask for a close-up or a photo with a ruler in view. Give the warehouse a precise reference, such as the inside tag or the width from armpit to armpit. Review the fee shown before requesting extra photos.'],
    ['Record problems before packing','Save the order number, photos and seller listing. Use the item support flow while the item is in storage if there is a discrepancy. A photo can show visible differences, but it cannot establish authenticity or predict durability.']]],
  ['how-to-buy-on-hipobuy','How to place your first HipoBuy order','Follow the process from seller link through payment, QC and international shipping.',['shortlist','ordering'],[
    ['Order the exact variant','Create an account on HipoBuy, paste the seller URL, then select size, color and quantity. Read the listing and confirm seller shipping and the order total. Keep the product URL and your order ID handy.'],
    ['Review warehouse intake','Follow the order from buyer purchase to domestic dispatch and warehouse receipt. Open the photos once inspection is available, and resolve stock substitutions, measurements or defects before adding the item to a parcel.'],
    ['Submit a parcel','Select eligible warehouse items, enter the delivery address, and compare the routes offered for your destination. Review the packing and payment summary. After dispatch, use the parcel tracking number to follow international delivery.']]],
  ['hipobuy-weidian-link','How to open a Weidian link in HipoBuy','Transfer the exact item ID and check the product when it loads.',['options','official'],[
    ['Find the original URL','Open the source listing from the product detail page and look for itemID in the Weidian URL. For example, CNFansSP’s Jersey-60 detail links to Weidian item 7632511460. Keep the complete link when pasting it.'],
    ['Check the agent result','Search the full Weidian URL in HipoBuy. When an item loads, confirm the listing, seller options and cost before selecting a variant. Links shared by an agent may contain tracking parameters that are unnecessary when you have the original seller link.'],
    ['Handle a listing that will not load','Reopen the original URL to see whether it is still reachable and whether your option is in stock. If the seller page works but the importer fails, review HipoBuy’s Custom Order option with the original link and exact variant.']]],
  ['hipobuy-custom-order','HipoBuy Custom Order and Forwarding Order explained','Choose the workflow that matches who buys the item and what you already have.',['options','ordering'],[
    ['Use the normal link first','When HipoBuy imports the seller listing and displays the correct variants, order from that page. Save the original seller link for later comparison if stock or options change.'],
    ['Use Custom Order for manual details','If the seller page is reachable but the importer cannot load it, provide the link, variant, quantity and any seller instructions in the manual order form. Keep a screenshot of the variant, especially when labels and pictures are easy to confuse.'],
    ['Use Forwarding Order for your own purchase','If you paid the seller directly, follow HipoBuy’s forwarding process. Confirm warehouse-address instructions first and register the domestic tracking number against the incoming package. The seller payment and delivery to the warehouse are your responsibility in that workflow.']]],
  ['hipobuy-parcel-tracking','HipoBuy tracking from seller dispatch to delivery','Identify the correct tracking number for each leg of your order.',['ordering','official'],[
    ['Follow domestic delivery separately','The seller’s tracking number covers shipment to the warehouse. A domestic delivery scan can precede warehouse intake and inspection. Check the order timeline before trying to track an international shipment.'],
    ['Find the parcel record','After submitting and paying for an international parcel, open its parcel record for the carrier and tracking number. Initial updates may appear only after the carrier receives and scans the parcel.'],
    ['Contact support with evidence','For missing updates or a delivery dispute, save the last scan, carrier name and parcel number. If there is a local carrier handoff, check whether a second tracking number is listed. Use the parcel support route for transit issues.']]],
  ['hipobuy-warehouse-storage','Managing HipoBuy warehouse storage and parcel consolidation','Track stored items and decide what to ship together.',['glossary','ordering'],[
    ['Track dates per item','Check the warehoused date and the storage deadline displayed with each order. Items bought on the same day can arrive separately. Resolve QC and return requests before those deadlines, even if another item is still in domestic transit.'],
    ['Compare one parcel with two','Select the items you intend to ship, then compare the available lines and total cost. Splitting can make sense when one item restricts the eligible shipping routes; combining can make sense when the lines and item limits still fit.'],
    ['Review packing choices','Removing optional packaging may reduce volume, but consider protection and whether you want to retain the original box. Review the packed measurements and any updated freight before completing the parcel payment.']]],
  ['hipobuy-returns-and-refunds','HipoBuy returns, exchanges and refunds','What to collect and where to check eligibility before shipping.',['glossary','ordering'],[
    ['Check the item’s current terms','Open the warehouse order as soon as you see an issue. Return eligibility depends on the seller, product and timing. Customized items and some sale items can have tighter terms. Use the return window shown on your own order.'],
    ['Submit clear evidence','Include the selected size or color, what arrived, the order ID and the clearest photo. If you ask for an exchange, state the replacement option. Check any domestic return freight or service charge before accepting the quoted refund amount.'],
    ['Keep item and parcel issues separate','A warehouse item can still be assessed for a seller return. Once it has shipped internationally, damaged or missing delivery may follow a parcel claim process. Keep the packing summary and tracking updates for that case.']]],
  ['hipobuy-volumetric-weight','Actual vs. volumetric weight on HipoBuy','See how a light, bulky parcel can have a higher chargeable weight.',['quotes','official'],[
    ['Use outer dimensions','Volumetric weight reflects space in transit. An illustrative parcel measuring 40 × 30 × 20 cm has 24,000 cubic centimeters. With a divisor of 6,000 it calculates to 4 kg. If the scale reads 2.6 kg and the line bills the higher figure, the chargeable figure starts at 4 kg before rounding.'],
    ['Look up the line’s rules','Check the divisor, rounding increments and any restrictions shown by the selected line. Two lines can assign different chargeable weights to the same parcel. Compare total prices rather than comparing per-kilogram rates in isolation.'],
    ['Compare packing options','Check whether removing an outer box or repacking reduces the quote without exposing fragile items. Once packed, use the final dimensions and weight shown in the parcel record.']]],
];
const questions = [
 ['What is a HipoBuy spreadsheet?','A product directory that helps you discover listings. The agent order starts on HipoBuy after you verify the original seller link.','competitor',0],
 ['How do I search for an item?','Enter a product name in the search box. It opens CNFansSP’s matching results. Use the category list if you want to browse by product type.','competitor',0],
 ['Where are the product listings and images from?','This site reads catalog titles, prices and image links directly from CNFansSP. Click a card to see its current listing.','',0],
 ['How do I open a Weidian item in HipoBuy?','Copy the seller’s full URL and paste it into HipoBuy search. Check that the result matches the original item ID and selected variant.','options',4],
 ['Can I use Taobao and 1688 links too?','Those marketplaces are commonly supported. Paste the original link and confirm that HipoBuy loads the correct listing and options.','options',4],
 ['What if HipoBuy cannot load my link?','Check whether the seller page still opens. If it does, review Custom Order and supply the exact variant and original URL.','options',5],
 ['What is Forwarding Order?','It is the workflow for an item you bought yourself and are sending to the HipoBuy warehouse. Follow the address and inbound tracking instructions in HipoBuy.','options',5],
 ['Where do I register?','Open the HipoBuy registration page and use the fields shown there. If you have a code, check its terms before entering it.','official',3],
 ['Is the catalog price the full order cost?','Use it as a reference. Check the item total and seller shipping at checkout, then review international shipping separately when submitting your parcel.','ordering',1],
 ['When can I see QC photos?','Check the item order after warehouse inspection. The photos appear in the warehouse or order details when available.','glossary',2],
 ['Can I ask for a measurement photo?','Check whether extra photos are available on the item. Specify the angle, garment edge or measurement you need and review the displayed charge.','glossary',2],
 ['Can QC photos prove authenticity?','Use photos to check visible details and order variants. Obtain separate verification if authenticity is important to your purchase.','quotes',2],
 ['What happens if my item has the wrong size?','Save the photos and your order details, then request support while the item is still in the warehouse. Verify the seller’s return or exchange conditions.','glossary',8],
 ['How long can HipoBuy store items?','Check the storage deadline shown for each warehouse item, including any extension options. Track deadlines separately for items that arrived on different days.','glossary',7],
 ['Can I ship several items together?','Select eligible stored items in the same parcel request and review route restrictions, packed size and total price.','ordering',7],
 ['Why did my final shipping charge change?','Packing may change the parcel’s dimensions and weight. Compare the original estimate with the packed details and the route’s billing rules.','quotes',1],
 ['What is volumetric weight?','It estimates how much parcel space a shipment uses. The calculation uses the outer length, width and height divided by the divisor for your route.','quotes',9],
 ['How do I choose a shipping line?','Start with routes offered for your destination and goods. Compare total price, tracking, delivery estimates and coverage terms.','quotes',1],
 ['Where is my international tracking number?','After parcel dispatch, open the parcel record for the carrier and number. The original seller tracking number covers the domestic warehouse leg.','ordering',6],
 ['Why is tracking stuck after dispatch?','Compare the time of the last scan with the carrier’s tracking page. If the delay persists, send parcel support the tracking number and latest event.','ordering',6],
 ['Can I return an item already shipped abroad?','Check parcel support and the order’s current terms. The warehouse seller-return workflow and international parcel claims have separate requirements.','ordering',8],
 ['How should I compare a coupon with a shipping quote?','Check which line, destination or minimum spend qualifies. Compare the final payable amount using the same packing and delivery options.','official',1],
 ['Can I change the language here?','Use the header selector. Navigation and category labels switch languages, while product listings and guides show their original wording.','',0],
 ['Where should I check parcel coverage?','Read the coverage offered with the selected shipping line and save its exclusions, evidence requirements and deadlines before dispatch.','quotes',6],
];

const ui = {
  en:['Home','FAQ','Guides','All questions','All guides','Previous','Next','Sources','Guides and answers are available in English.'],
  zh:['首页','常见问题','购物指南','全部问题','全部指南','上一页','下一页','来源','指南和问答提供英文内容。'],
  es:['Inicio','Preguntas','Guías','Todas las preguntas','Todas las guías','Anterior','Siguiente','Fuentes','Las guías y respuestas están disponibles en inglés.'],
  fr:['Accueil','FAQ','Guides','Toutes les questions','Tous les guides','Précédent','Suivant','Sources','Les guides et les réponses sont en anglais.'],
  de:['Startseite','FAQ','Ratgeber','Alle Fragen','Alle Ratgeber','Zurück','Weiter','Quellen','Ratgeber und Antworten sind auf Englisch verfügbar.'],
};
const extraStyles = `
.brand{display:flex;align-items:center;gap:9px}.brand img{width:120px;height:auto}.brand span{font-size:15px}
.language{position:relative;margin-left:auto}.language summary{list-style:none;cursor:pointer;border:1px solid var(--line);padding:7px 10px;border-radius:8px;white-space:nowrap;font-size:14px}.language summary::-webkit-details-marker{display:none}
.language ul{position:absolute;right:0;top:100%;z-index:5;min-width:145px;list-style:none;padding:5px;margin:6px 0;background:white;border:1px solid var(--line);border-radius:9px;box-shadow:0 6px 24px #15294c22}.language a{display:block;padding:7px 9px;border-radius:5px}.language a[aria-current],nav a[aria-current]{color:var(--blue);font-weight:800}
.page{padding-top:26px;padding-bottom:24px}.page h1{font-size:clamp(31px,5vw,48px);line-height:1.08;letter-spacing:-.045em;margin:0 0 14px}.page .intro{color:var(--muted);margin:0 0 18px}.editorial{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}.story{display:block;padding:14px 16px;border:1px solid var(--line);border-radius:10px;background:white}.story strong{display:block}.story p{margin:5px 0 0;color:var(--muted);font-size:14px}.qa{display:grid;gap:7px}.qa details{background:white;border:1px solid var(--line);border-radius:9px;padding:10px 12px}.qa summary{cursor:pointer;font-weight:650}.qa p{margin:8px 0}.qa a,.article a,.pagination a,.page-links a{color:var(--blue);text-decoration:underline;text-underline-offset:3px}.pagination{display:flex;flex-wrap:wrap;gap:12px;align-items:center;margin:15px 0 28px}.article{max-width:710px;padding-bottom:24px}.article h2{font-size:22px;margin:18px 0 5px}.article p{margin:0 0 12px}.article .refs{font-size:14px}.page-links{display:flex;flex-wrap:wrap;gap:12px;margin:16px 0}.categories-page .chips{display:grid;grid-template-columns:repeat(3,minmax(0,1fr))}.categories-page .chips a{padding:15px}.page form{border:1px solid var(--line);margin-bottom:16px}
@media(max-width:700px){header nav{display:flex;order:3;width:100%;margin:0;gap:0;justify-content:space-between;overflow:auto;white-space:nowrap}header nav a{padding:7px 6px}.top{flex-wrap:wrap;gap:4px 12px;padding:8px 0 3px}.brand img{width:106px}.editorial{grid-template-columns:1fr}.page{padding-top:19px}.categories-page .chips{grid-template-columns:repeat(2,minmax(0,1fr))}.categories-page .chips a{padding:12px}.page h1{margin-bottom:11px}}
`;
const localPath = (language, route = '/') => (language === 'en' ? '' : '/' + language) + route;
const routeLink = (language, route, title) => `<a href="${localPath(language,route)}">${title}</a>`;
const linkSource = key => key ? `<a href="${references[key][1]}">${references[key][0]}</a>` : '';
const storyLink = (language, [slug,title,description]) => `<a class="story" lang="en" href="${localPath(language,'/guides/'+slug+'/')}"><strong>${title}</strong><p>${description}</p></a>`;
function render(language, route, catalog, requestedPage, guide, indexable, measurementId) {
  const [name,finds,categories,searchHint,search,title,intro,latest,all,details,error,open,languageLabel,main,agents] = languages[language];
  const [home,faq,guidesTitle,allQuestions,allGuides,prev,next,sources,englishNote] = ui[language];
  const path = value => localPath(language,value);
  const categoryIndex = ['zh','es','fr','de'].indexOf(language);
  const categoryLinks = catalog.categories.map(item => {
    const key = new URL(item.url).pathname.replaceAll('/','').toLowerCase();
    return `<a href="${escape(item.url)}">${escape(labels[key]?.[categoryIndex] ?? item.title)}</a>`;
  }).join('');
  const cards = catalog.products.slice(0,route === '/' ? 6 : 10).map(item => `<a class="card" href="${escape(item.url)}">
    ${item.image ? `<img src="${escape(item.image)}" alt="" loading="lazy" decoding="async">` : ''}
    <div class="info"><strong>${escape(item.title)}</strong>${item.price ? `<span class="price">¥${escape(item.price)}</span>` : ''}<span class="details">${details}</span></div></a>`).join('');
  const nav = [['/',home],['/finds/',finds],['/categories/',categories],['/faq/',faq],['/guides/',guidesTitle],['/agents/',agents]];
  const navLinks = nav.map(([link,label]) => `<a href="${path(link)}"${link === route || (guide && link === '/guides/') ? ' aria-current="page"' : ''}>${label}</a>`).join('');
  const options = ['en','de','es','fr','zh'].map(code => `<li><a lang="${code}" href="${localPath(code,route)}${requestedPage > 1 ? '?page='+requestedPage : ''}"${code===language?' aria-current="true"':''}>${languages[code][0]}</a></li>`).join('');
  const searchForm = `<form class="search" action="${origin}/index.php" method="get"><input type="hidden" name="m" value="home"><input type="hidden" name="c" value="Search"><input type="hidden" name="a" value="lists"><input aria-label="${searchHint}" name="keywords" type="search" required placeholder="${searchHint}"><button>${search}</button></form>`;
  const categoriesBlock = `<div class="chips">${categoryLinks || `<a href="${origin}/AllProducts/">${all}</a>`}</div>`;
  const productsBlock = cards ? `<div class="grid">${cards}</div>` : `<div class="error">${error} <a href="${origin}/">${open}</a></div>`;
  const heading = (text, link, label) => `<div class="heading"><h2>${text}</h2><a href="${link}">${label}</a></div>`;
  const note = language === 'en' ? '' : `<p class="intro">${englishNote}</p>`;
  const pagination = (total, size) => {
    const last = Math.ceil(total / size);
    const page = Math.min(requestedPage,last);
    const href = i => path(route)+(i===1?'':'?page='+i);
    const numbered = Array.from({length:last},(_,i)=>i+1).map(i=>i===page?`<strong aria-current="page">${i}</strong>`:`<a href="${href(i)}">${i}</a>`).join('');
    return `<nav class="pagination" aria-label="${escape(pageTitle)}">${page>1?`<a href="${href(page-1)}">${prev}</a>`:''}${numbered}${page<last?`<a href="${href(page+1)}">${next}</a>`:''}</nav>`;
  };
  const questionId = index => 'question-'+(index+1);
  const faqPage = index => path('/faq/') + (index<8 ? '' : '?page='+(Math.floor(index/8)+1)) + '#'+questionId(index);
  const pageTitle = guide?.[1] ?? nav.find(([link])=>link===route)?.[1] ?? home;
  let body;
  if (route === '/') {
    body = `<div class="hero"><h1>${title}</h1><p>${intro}</p>${searchForm}</div>
    <section>${heading(categories,path('/categories/'),categories)}${categoriesBlock}</section>
    <section>${heading(latest,path('/finds/'),all)}${productsBlock}</section>
    <section>${heading(faq,path('/faq/'),allQuestions)}<div class="editorial">${questions.slice(0,3).map(([question],index)=>`<a class="story" lang="en" href="${faqPage(index)}"><strong>${question}</strong></a>`).join('')}</div></section>
    <section>${heading(guidesTitle,path('/guides/'),allGuides)}<div class="editorial">${guides.slice(0,3).map(item=>storyLink(language,item)).join('')}</div></section>`;
  } else if (route === '/categories/') {
    body = `<div class="page categories-page"><h1>${categories}</h1>${searchForm}${categoriesBlock}</div>`;
  } else if (route === '/finds/') {
    body = `<div class="page"><h1>${finds}</h1>${searchForm}${productsBlock}<p class="page-links"><a href="${origin}/AllProducts/">${all}</a></p></div>`;
  } else if (route === '/faq/') {
    const offset = (Math.min(requestedPage,3)-1)*8;
    body = `<div class="page"><h1>${faq}</h1>${note}<div class="qa" lang="en">${questions.slice(offset,offset+8).map(([question,answer,source,article],index)=>`<details id="${questionId(index+offset)}" name="faq"><summary>${question}</summary><p>${answer}</p><p>${storyReference(language,article)}${source ? ' · '+linkSource(source) : ''}</p></details>`).join('')}</div>${pagination(questions.length,8)}</div>`;
  } else if (route === '/guides/') {
    const offset = (Math.min(requestedPage,2)-1)*5;
    body = `<div class="page"><h1>${guidesTitle}</h1>${note}<div class="editorial">${guides.slice(offset,offset+5).map(item=>storyLink(language,item)).join('')}</div>${pagination(guides.length,5)}</div>`;
  } else if (guide) {
    const [,heading,description,refs,sections] = guide;
    body = `<article class="page article" lang="en"><h1>${heading}</h1><p class="intro">${description}</p>${sections.map(([title,copy])=>`<h2>${title}</h2><p>${copy}</p>`).join('')}<p class="refs">Sources · ${refs.map(linkSource).join(' · ')}</p><div class="page-links">${routeLink(language,'/guides/',allGuides)}${routeLink(language,'/faq/',faq)}</div></article>`;
  } else {
    body = `<div class="page"><h1>${agents}</h1><div class="editorial"><a class="story" href="https://hipobuy.com/register">HipoBuy · Sign up</a><a class="story" href="https://hipobuy.com/">HipoBuy</a><a class="story" href="${origin}/Agents/">CNFansSP · ${agents}</a></div></div>`;
  }
  const description = guide?.[2] ?? intro;
  const canonical = production + path(route) + (requestedPage > 1 && ['/faq/','/guides/'].includes(route) ? '?page='+requestedPage : '');
  const analytics = indexable && /^G-[A-Z0-9]+$/.test(measurementId ?? '') ? `<script async src="https://www.googletagmanager.com/gtag/js?id=${measurementId}"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${measurementId}');</script>` : '';
  return `<!doctype html><html lang="${language}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">${indexable ? `<link rel="canonical" href="${canonical}">` : '<meta name="robots" content="noindex,nofollow">'}${analytics}<meta name="description" content="${escape(description)}"><link rel="icon" type="image/png" href="https://hipobuy.com/favicon.png"><title>${escape(route === '/' ? 'HipoBuy Spreadsheet · Finds & Shopping Guides' : pageTitle + ' · HipoBuy Finds')}</title><style>${styles}${extraStyles}</style></head><body>
  <header><div class="wrap top"><a class="brand" href="${path('/')}"><img src="${officialLogo}" alt="HipoBuy"><span>Finds</span></a><nav aria-label="${escape(home)}">${navLinks}</nav><details class="language"><summary aria-label="${languageLabel}: ${name}">${name}</summary><ul>${options}</ul></details></div></header>
  <main class="wrap">${body}</main><footer><div class="wrap bottom"><span>HipoBuy Finds</span><a href="${origin}/">${main} · CNFansSP</a></div></footer>
  <script>const menu=document.querySelector('.language');document.addEventListener('click',event=>{if(menu.open&&!menu.contains(event.target))menu.open=false});document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menu.open){menu.open=false;menu.querySelector('summary').focus()}});function openAnswer(){const fragment=location.hash.slice(1);if(/^question-\\d+$/.test(fragment)){const answer=document.getElementById(fragment);if(answer)answer.open=true}}openAnswer();addEventListener('hashchange',openAnswer);</script></body></html>`;
}
function storyReference(language, index) {
  const [slug,title] = guides[index];
  return routeLink(language,'/guides/'+slug+'/',title);
}

export default {
  async fetch(request, env = {}) {
    const headers = {'content-type':'text/html; charset=utf-8'};
    const indexable = new URL(request.url).origin === production;
    if (!indexable) headers['x-robots-tag'] = 'noindex, nofollow';
    const url = new URL(request.url);
    if (url.pathname === '/robots.txt') {
      return new Response(indexable ? 'User-agent: *\nAllow: /\nSitemap: '+production+'/sitemap.xml\n' : 'User-agent: *\nDisallow: /\n', {headers:{'content-type':'text/plain; charset=utf-8'}});
    }
    if (url.pathname === '/sitemap.xml') {
      const routes = ['/', '/finds/', '/categories/', '/faq/', '/faq/?page=2', '/faq/?page=3', '/guides/', '/guides/?page=2', '/agents/', ...guides.map(([slug])=>'/guides/'+slug+'/')];
      const locations = Object.keys(languages).flatMap(language=>routes.map(route=>production+localPath(language,route)));
      return new Response('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+locations.map(location=>'<url><loc>'+escape(location)+'</loc></url>').join('')+'</urlset>',{headers:{'content-type':'application/xml; charset=utf-8'}});
    }
    const segments = url.pathname.split('/').filter(Boolean);
    const pathLocale = Object.hasOwn(languages,segments[0]) ? segments.shift() : '';
    const selected = url.searchParams.get('lang');
    const language = pathLocale || (Object.hasOwn(languages,selected) ? selected : 'en');
    const route = segments.length ? '/'+segments.join('/')+'/' : '/';
    const guide = segments[0] === 'guides' && segments.length === 2 && guides.find(item=>item[0]===segments[1]);
    if (!guide && !['/','/finds/','/categories/','/faq/','/guides/','/agents/'].includes(route)) return new Response('Not found',{status:404});
    const parsedPage = Number(url.searchParams.get('page'));
    const page = Number.isSafeInteger(parsedPage) && parsedPage > 1 ? parsedPage : 1;
    let catalog = {categories:[],products:[]};
    if (['/','/finds/','/categories/'].includes(route)) {
      try {
        const upstream = await fetch(origin+'/',{signal:AbortSignal.timeout(8000)});
        if (upstream.ok) catalog = parseCatalog(await upstream.text());
      } catch (error) {
        console.error('CNFansSP catalog request failed:',error.message);
      }
    }
    return new Response(render(language,route,catalog,page,guide,indexable,env.GA_MEASUREMENT_ID),{headers});
  },
};
