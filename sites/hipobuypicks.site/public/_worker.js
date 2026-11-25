import { articles, faqs, faqSources } from './editorial.js';
const production = 'https://hipobuypicks.site';
const origin = 'https://www.cnfanssp.com';
const copy = {
 en:['English','Find your next item','Browse the HipoBuy spreadsheet using live listings from CNFANSSP.','Search products','Search','Browse categories','Latest products','All products','Agents','Catalog unavailable. Open CNFANSSP to browse.'],
 de:['Deutsch','Entdecke dein nächstes Produkt','Durchsuche die HipoBuy-Übersicht mit aktuellen Angeboten von CNFANSSP.','Produkte suchen','Suche','Kategorien','Neueste Produkte','Alle Produkte','Einkaufsagenten','Katalog derzeit nicht verfügbar.'],
 es:['Español','Encuentra tu próximo producto','Explora la lista de HipoBuy con productos actualizados de CNFANSSP.','Buscar productos','Buscar','Categorías','Últimos productos','Todos los productos','Agentes','Catálogo no disponible.'],
 fr:['Français','Trouvez votre prochain article','Explorez le catalogue HipoBuy à partir des annonces de CNFANSSP.','Rechercher un produit','Rechercher','Catégories','Derniers produits','Tous les produits','Agents','Catalogue indisponible.'],
 zh:['简体中文','发现下一件好物','浏览 HipoBuy 商品清单，实时读取 CNFANSSP 的商品。','搜索商品','搜索','浏览分类','最新商品','全部商品','代购平台','暂时无法加载目录，请前往主站浏览。']
};
const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function sourceUrl(value) {
 if (!value) return '';
 const url = new URL(value, origin);
 return url.protocol === 'https:' && ['www.cnfanssp.com','cnfanssp.com'].includes(url.hostname) ? url.href : '';
}
async function catalog() {
 const response = await fetch(origin + '/', {signal:AbortSignal.timeout(10000)});
 if (!response.ok) throw Error('Catalog request failed');
 const categories = [], products = [];
 let category, product;
 const recordText = (object, key, chunk) => { object[key] = (object[key] || '') + chunk.text; };
 await new HTMLRewriter()
 .on('#categories a.category-item',{element(e){category = {url:sourceUrl(e.getAttribute('href'))};categories.push(category)}})
 .on('#categories a.category-item h3',{text(t){recordText(category,'name',t)}})
 .on('#featured-products .product-card',{element(){product = {};products.push(product)}})
 .on('#featured-products .product-image',{element(e){product.url=sourceUrl(e.getAttribute('href'))}})
 .on('#featured-products .product-image img',{element(e){product.image=sourceUrl(e.getAttribute('data-src') || e.getAttribute('src'))}})
 .on('#featured-products .product-title h3',{text(t){recordText(product,'name',t)}})
 .on('#featured-products .product-price',{text(t){recordText(product,'price',t)}})
 .transform(response).text();
 return {categories,products};
}
const labels = {
 en:['Home','Spreadsheet','Guides','Read all guides','Read all FAQs','Previous','Next'],
 de:['Startseite','Produktübersicht','Ratgeber','Alle Ratgeber','Alle FAQ','Zurück','Weiter'],
 es:['Inicio','Catálogo','Guías','Ver todas las guías','Ver todas las preguntas','Anterior','Siguiente'],
 fr:['Accueil','Catalogue','Guides','Tous les guides','Toutes les questions','Précédent','Suivant'],
 zh:['首页','商品清单','购物指南','查看全部指南','查看全部问答','上一页','下一页']
};
const css = `
*{box-sizing:border-box}body{margin:0;background:#f7f8f4;color:#152820;font:16px system-ui,sans-serif}a{color:inherit;text-decoration:none}a:hover{text-decoration:underline}header{background:#fff;border-bottom:1px solid #dde6de}.wrap{width:min(1120px,calc(100% - 36px));margin:auto}header .wrap{display:flex;align-items:center;justify-content:space-between;gap:20px;min-height:76px;flex-wrap:wrap}.brand{font-weight:850;font-size:1.3rem}.brand span{color:#43734f}nav{display:flex;align-items:center;gap:20px;font-size:.9rem;flex-wrap:wrap}select,input,button{font:inherit}select{padding:8px;border:1px solid #cad9ce;border-radius:8px;background:white}.hero{background:#163e30;color:white;border-radius:24px;padding:clamp(28px,6vw,76px);margin-top:30px;background-image:radial-gradient(ellipse at 100% 15%,#327554,transparent 60%)}h1{font-size:clamp(2.75rem,7vw,5.8rem);line-height:1;letter-spacing:-.065em;margin:14px 0;max-width:850px}.hero p{max-width:580px;color:#d7eddd;margin-bottom:24px}.eyebrow{font-size:.82rem;font-weight:750;letter-spacing:.12em;color:#b7e4bd}form{display:flex;max-width:590px;gap:8px}input{flex:1;min-width:0;padding:14px;border:0;border-radius:9px}button{padding:12px 20px;background:#caed96;border:0;border-radius:9px;color:#142b20;font-weight:750;cursor:pointer}section{margin-top:38px}h2{font-size:1.65rem;letter-spacing:-.035em}.chips{display:flex;gap:9px;flex-wrap:wrap}.chip,.card{background:white;border:1px solid #dfe7de;border-radius:12px}.chip{padding:10px 14px}.heading{display:flex;align-items:center;justify-content:space-between;gap:14px}.grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px}.card{overflow:hidden;display:block}.card img{width:100%;aspect-ratio:1.22;object-fit:contain;background:#eef2eb;display:block}.card div{padding:13px;display:grid;gap:4px}.card span,footer{color:#426252}footer{margin-top:42px;padding:24px 0;border-top:1px solid #dfe7de}@media(max-width:650px){header .wrap{padding:12px 0;gap:10px}nav{gap:10px}.grid{grid-template-columns:repeat(2,minmax(0,1fr))}.hero{margin-top:16px}}
`;
const extraCss = `
.brand img{display:block;width:115px;height:auto}.editorial{max-width:760px;margin:30px auto}.editorial h1{font-size:clamp(2rem,6vw,3.9rem);letter-spacing:-.05em}.editorial h2{font-size:1.28rem;margin:24px 0 6px}.editorial p{line-height:1.55;margin:8px 0}.tiles{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}.tile,details{display:block;padding:14px;background:white;border:1px solid #dfe7de;border-radius:10px}.tile p{margin:6px 0 0;color:#415b50}details{margin:8px 0}summary{cursor:pointer;font-weight:650}.pager{display:flex;align-items:center;justify-content:center;gap:15px;margin:20px 0}.source{font-size:.9rem}.source a{text-decoration:underline}.hero h1{max-width:950px}@media(max-width:650px){.tiles{grid-template-columns:1fr}.editorial{margin-top:22px}header .wrap{display:block}header nav{margin-top:12px}.card img{aspect-ratio:1.45}section{margin-top:26px}}
`;
const faqItem = ([question, answer]) => `<details><summary>${escape(question)}</summary><p>${escape(answer)}</p></details>`;
export default {async fetch(request){
 const url = new URL(request.url);
 const routes = ['', 'spreadsheet/', 'categories/', 'faq/', 'guides/', ...articles.map(([id]) => 'guides/'+id+'/')];
 if (url.pathname === '/robots.txt') return new Response('User-agent: *\nAllow: /\nSitemap: '+production+'/sitemap.xml\n', {headers:{'content-type':'text/plain'}});
 if (url.pathname === '/sitemap.xml') return new Response('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+routes.map(path=>'<url><loc>'+production+'/'+path+'</loc></url>').join('')+'</urlset>', {headers:{'content-type':'application/xml; charset=utf-8'}});
 const parts = url.pathname.split('/').filter(Boolean);
 const lang = Object.hasOwn(copy,parts[0]) ? parts.shift() : 'en';
 const [page = '', slug] = parts;
 const article = page === 'guides' && slug ? articles.find(item=>item[0]===slug) : null;
 if (!['','spreadsheet','categories','faq','guides'].includes(page) || parts.length > 2 || (slug && !article)) return new Response('Not found',{status:404});
 const base = lang === 'en' ? '/' : '/'+lang+'/';
 const route = target=>base+(target ? target+'/' : '');
 const [language,title,intro,placeholder,search,categoryTitle,latest,all,agents,error] = copy[lang];
 const [home,spreadsheet,guideTitle,allGuides,allFaq,previous,next] = labels[lang];
 const isCatalog = ['', 'spreadsheet', 'categories'].includes(page);
 const listing = isCatalog ? await catalog().catch(() => ({categories:[],products:[]})) : {categories:[],products:[]};
 const chips = listing.categories.filter(c=>c.url && c.name).map(c=>`<a class="chip" href="${escape(c.url)}">${escape(c.name.trim())}</a>`).join('');
 const items = listing.products.filter(p=>p.url && p.name);
 const paginator = (count,size) => {
   const max = Math.max(1,Math.ceil(count/size));
   const current = Math.min(max,Math.max(1,parseInt(url.searchParams.get('page'),10)||1));
   const link = (number,label)=>`<a class="chip" href="?page=${number}">${label}</a>`;
   return {start:(current-1)*size,html:max>1?`<nav class="pager" aria-label="Pagination">${current>1?link(current-1,previous):''}<span>${current} / ${max}</span>${current<max?link(current+1,next):''}</nav>`:''};
 };
 const productPage = paginator(items.length,8);
 const start = page==='spreadsheet' ? productPage.start : 0;
 const cards = items.slice(start,start+8).map(p=>`<a class="card" href="${escape(p.url)}">${p.image ? `<img loading="lazy" src="${escape(p.image)}" alt="">` : ''}<div><strong>${escape(p.name.trim())}</strong><span>${escape(p.price ? '$ '+p.price.trim() : '')}</span></div></a>`).join('');
 const suffix = parts.length ? parts.join('/')+'/' : '';
 const options = Object.entries(copy).map(([key,[name]])=>`<option value="/${key==='en'?'':key+'/'}${suffix}${escape(url.search)}"${key===lang?' selected':''}>${name}</option>`).join('');
 const browseLink = `<a href="${origin}/AllProducts/">${all}</a>`;
 const categoryBlock = `<section><h2>${categoryTitle}</h2><div class="chips">${chips || browseLink}</div></section>`;
 const productBlock = `<section><div class="heading"><h2>${latest}</h2>${browseLink}</div><div class="grid">${cards}</div>${cards?'':`<p>${error}</p>`}</section>`;
 const searchBox = `<form action="https://cnfanssp.com/search.html"><input type="search" maxlength="200" required name="keywords" aria-label="${placeholder}" placeholder="${placeholder}"><input type="hidden" name="channelid" value="2"><button>${search}</button></form>`;
 const guideTiles = list=>`<div class="tiles" lang="en">${list.map(([id,name,, ,sections])=>`<a class="tile" href="${route('guides/'+id)}"><strong>${escape(name)}</strong><p>${escape(sections[0][0])}</p></a>`).join('')}</div>`;
 const recentFaq = faqs.slice(-3).reverse().map(([question])=>`<a class="tile" href="${route('faq')}?page=3#faq-${faqs.findIndex(row=>row[0]===question)+1}"><strong>${escape(question)}</strong></a>`).join('');
 const faqPage = paginator(faqs.length,8);
 const citation = (link,title)=>`<a href="${escape(link)}">${escape(title)}</a>`;
 let head = 'HipoBuy Spreadsheet', description=intro;
 let body;
 if (page==='faq') {
   head='HipoBuy FAQ';
   description='Answers about HipoBuy shopping links, warehouse QC, fees, shipping and returns.';
   body=`<article class="editorial" lang="en"><h1>${head}</h1>${faqs.slice(faqPage.start,faqPage.start+8).map((row,i)=>`<div id="faq-${faqPage.start+i+1}">${faqItem(row)}</div>`).join('')}${faqPage.html}<p class="source">${faqSources.map(([link,title])=>citation(link,title)).join(' · ')}</p></article><script>const target=document.getElementById(location.hash.slice(1));if(target){target.querySelector('details').open=true;target.scrollIntoView()}</script>`;
 } else if (article) {
   const [,name,,source,sections]=article;
   head=name;
   description=sections[0][1];
   body=`<article class="editorial" lang="en"><a href="${route('guides')}">${allGuides}</a><h1>${escape(name)}</h1>${sections.map(([heading,paragraph])=>`<h2>${escape(heading)}</h2><p>${escape(paragraph)}</p>`).join('')}<p class="source">Source: ${citation(source,new URL(source).hostname)}</p></article>`;
 } else if (page==='guides') {
   head='HipoBuy '+guideTitle;
   const guidePage=paginator(articles.length,5);
   body=`<div class="editorial"><h1>${head}</h1>${guideTiles(articles.slice(guidePage.start,guidePage.start+5))}${guidePage.html}</div>`;
 } else if (page==='categories') {
   head=categoryTitle;
   body=`<div class="editorial"><h1>${head}</h1><div class="chips">${chips || browseLink}</div></div>`;
 } else if (page==='spreadsheet') {
   head='HipoBuy '+spreadsheet;
   body=`<div class="hero"><h1>${head}</h1>${searchBox}</div>${productBlock}${productPage.html}`;
 } else {
   body=`<div class="hero"><div class="eyebrow">HIPOBUY SPREADSHEET</div><h1>${title}</h1><p>${intro}</p>${searchBox}</div>${categoryBlock}${productBlock}<section><div class="heading"><h2>FAQ</h2><a href="${route('faq')}">${allFaq}</a></div><div class="tiles" lang="en">${recentFaq}</div></section><section><div class="heading"><h2>${guideTitle}</h2><a href="${route('guides')}">${allGuides}</a></div>${guideTiles(articles.slice(0,3))}</section>`;
 }
 return new Response(`<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">${url.origin===production && lang==='en'? `<link rel="canonical" href="${escape(production+url.pathname+url.search)}">` : '<meta name="robots" content="noindex">'}<script async src="https://www.googletagmanager.com/gtag/js?id=G-C89Z99V3LG"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-C89Z99V3LG');</script><meta name="description" content="${escape(description)}"><link rel="icon" href="https://hipobuy.com/static/favicon/32x32.png"><title>${escape(head)}</title><style>${css}${extraCss}</style></head><body><header><div class="wrap"><a class="brand" href="${base}"><img src="https://app.hipobuy.com/logo.png" alt="HipoBuy"></a><nav><a href="${base}">${home}</a><a href="${route('spreadsheet')}">${spreadsheet}</a><a href="${route('categories')}">${categoryTitle}</a><a href="${origin}/Agents/">${agents}</a><a href="${route('faq')}">FAQ</a><a href="${route('guides')}">${guideTitle}</a><select aria-label="${language}" onchange="location.assign(this.value)">${options}</select></nav></div></header><main class="wrap">${body}<footer><a href="https://cnfanssp.com/">CNFANSSP.COM</a></footer></main></body></html>`,{headers:{'content-type':'text/html; charset=utf-8'}});
}};
