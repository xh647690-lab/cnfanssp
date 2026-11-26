import { faqs, faqSources, guides } from './content.mjs'

const logo = 'https://media.usfans.com/webresource/v1/brand/6ebaf586041d4ff8ad34d66a35d3dc88.webp'
const favicon = 'https://usfans.com/favicon.png'

export const pageSizes = { faq: 8, guides: 5 }
export const languages = { en:'English', zh:'简体中文', es:'Español', de:'Deutsch' }

const contentLabels = {
  en: {faq:'FAQ', guides:'Guides', all:'View all', sources:'Sources', language:'Language', original:'', independent:'Independent catalogue for shopping with USFans.'},
  zh: {faq:'常见问题', guides:'购物指南', all:'查看全部', sources:'参考来源', language:'语言', original:'问答和指南正文目前为英文。', independent:'面向 USFans 用户的独立商品目录。'},
  es: {faq:'Preguntas frecuentes', guides:'Guías', all:'Ver todo', sources:'Fuentes', language:'Idioma', original:'Las preguntas y las guías se publican en inglés.', independent:'Catálogo independiente para comprar con USFans.'},
  de: {faq:'Häufige Fragen', guides:'Ratgeber', all:'Alle ansehen', sources:'Quellen', language:'Sprache', original:'Die Fragen und Ratgeber sind auf Englisch verfügbar.', independent:'Unabhängiger Katalog für Einkäufe über USFans.'}
}

export function pageURL(language, path = '') {
  return (language === 'en' ? '/' : '/' + language + '/') + (path ? path + '/' : '')
}

const en = {
  catalogue:'Catalogue', categories:'Categories', register:'Join USFans', title:'USFans Spreadsheet', deck:'Browse the CNFansSP catalogue and open supported listings in USFans.', search:'Search the catalogue', submit:'Search', browse:'Browse products', latest:'Latest from CNFansSP', view:'Open on CNFansSP', buy:'Open in USFans', all:'All products', unavailable:'The catalogue could not be loaded. Open CNFansSP to browse the source.', empty:'No matching products on this page. Try another search or browse the full catalogue.', labels:['Shoes','Hoodies','T-shirts','Jackets','Pants & shorts','Jerseys'], sample:'Featured listing'
}
const translations = {
  en,
  zh:{catalogue:'商品目录',categories:'商品分类',register:'注册 USFans',title:'USFans 商品目录',deck:'浏览 CNFansSP 主站商品，并在 USFans 打开支持的商品链接。',search:'搜索商品目录',submit:'搜索',browse:'浏览商品',latest:'主站最新商品',view:'打开主站详情',buy:'在 USFans 打开',all:'全部商品',unavailable:'暂时无法读取商品，可前往 CNFansSP 浏览。',empty:'本页没有匹配的商品，可换个关键词或打开完整目录。',labels:['鞋类','卫衣','T 恤','夹克','裤装','球衣'],sample:'精选商品'},
  es:{catalogue:'Catálogo',categories:'Categorías',register:'Registrarse en USFans',title:'Catálogo USFans',deck:'Explora los productos de CNFansSP y abre los enlaces compatibles en USFans.',search:'Buscar en el catálogo',submit:'Buscar',browse:'Ver productos',latest:'Novedades de CNFansSP',view:'Ver en CNFansSP',buy:'Abrir en USFans',all:'Todos los productos',unavailable:'No se pudo cargar el catálogo. Consulta CNFansSP.',empty:'No hay coincidencias en esta página. Prueba otra búsqueda o consulta el catálogo completo.',labels:['Calzado','Sudaderas','Camisetas','Chaquetas','Pantalones','Camisetas deportivas'],sample:'Producto destacado'},
  de:{catalogue:'Katalog',categories:'Kategorien',register:'Bei USFans registrieren',title:'USFans-Katalog',deck:'Entdecke Produkte aus CNFansSP und öffne unterstützte Angebote bei USFans.',search:'Katalog durchsuchen',submit:'Suchen',browse:'Produkte ansehen',latest:'Neu bei CNFansSP',view:'Bei CNFansSP ansehen',buy:'Bei USFans öffnen',all:'Alle Produkte',unavailable:'Der Katalog konnte nicht geladen werden. Öffne CNFansSP.',empty:'Keine Treffer auf dieser Seite. Suche erneut oder öffne den vollständigen Katalog.',labels:['Schuhe','Kapuzenpullover','T-Shirts','Jacken','Hosen','Trikots'],sample:'Ausgewähltes Produkt'}
}
const main = 'https://www.cnfanssp.com'
const paths = ['/shoes/','/hoodies-sweaters/','/t-shirts/','/jackets/','/pants-shorts/','/Jersey/']
export const escape = (value = '') => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))

export function render({language = 'en', page = 'home', path = '', number = 1, guide, items = [], failed = false} = {}) {
  const t = translations[language]
  const labels = contentLabels[language]
  const url = (slug = '') => pageURL(language, slug)
  const title = guide?.title ?? ({catalogue:t.catalogue, categories:t.categories, faq:labels.faq, guides:labels.guides}[page] || t.title)
  const description = guide?.summary ?? t.deck
  const sourceList = sources => `<aside class="sources"><h2>${labels.sources}</h2><ul>${sources.map(([name,href])=>`<li><a href="${href}">${escape(name)}</a></li>`).join('')}</ul></aside>`
  const pageSize = pageSizes[page]
  const offset = pageSize ? (number-1) * pageSize : 0
  const pagination = total => `<nav class="pagination">${Array.from({length:Math.ceil(total/pageSize)}, (_,i)=>`<a href="${url(i ? page + '/page/' + (i+1) : page)}" ${i+1===number?'aria-current="page"':''}>${i+1}</a>`).join('')}</nav>`
  const articleLinks = (entries, descriptions = false) => `<div class="content-cards" lang="en">${entries.map(entry=>`<article><h3><a href="${url('guides/'+entry.slug)}">${escape(entry.title)}</a></h3>${descriptions?`<p>${escape(entry.summary)}</p>`:''}</article>`).join('')}</div>`
  const faqAnchors = (entries, first = 0) => entries.map(([question,answer],i)=>`<details class="answer" id="faq-${first+i+1}"><summary>${escape(question)}</summary><p>${escape(answer)}</p></details>`).join('')
  const productCard = item => `<article><a class="photo" href="${escape(item.url)}">${item.image ? `<img src="${escape(item.image)}" alt="${escape(item.title || t.sample)}" loading="lazy" referrerpolicy="no-referrer">` : escape(item.title || t.sample)}</a><div class="item"><h3><a href="${escape(item.url)}">${escape(item.title || t.sample)}</a></h3><a class="details" href="${escape(item.url)}">${t.view}</a>${item.weidianId ? `<a class="purchase" href="https://usfans.com/product/3/${escape(item.weidianId)}">${t.buy}</a>` : ''}</div></article>`
  const search = `<form class="form" action="${main}/search.html"><input type="search" name="keywords" aria-label="${t.search}" placeholder="${t.search}" required><input type="hidden" name="channelid" value="2"><button>${t.submit}</button></form>`
  const chips = `<div class="chips">${paths.map((item,i)=>`<a href="${main+item}">${t.labels[i]}</a>`).join('')}</div>`
  const products = `<section id="catalogue"><div class="heading"><h2>${t.latest}</h2><a href="${main}/AllProducts/">${t.all}</a></div>${failed?`<p class="fallback">${t.unavailable}</p>`:''}<div class="grid">${items.map(productCard).join('')}</div></section>`
  const englishNotice = labels.original ? `<p class="language-note">${labels.original}</p>` : ''
  const home = `<div class="hero"><h1>${t.title}</h1><p>${t.deck}</p>${search}<a class="browse" href="${url('catalogue')}">${t.browse}</a></div>
  <section><div class="heading"><h2>${t.categories}</h2><a href="${url('categories')}">${labels.all}</a></div>${chips}</section>${products}
  <div class="editorial"><section><div class="heading"><h2>${labels.faq}</h2><a href="${url('faq')}">${labels.all}</a></div><div class="content-cards" lang="en">${faqs.slice(0,3).map(([question],i)=>`<article><h3><a href="${url('faq')}#faq-${i+1}">${escape(question)}</a></h3></article>`).join('')}</div></section>
  <section><div class="heading"><h2>${labels.guides}</h2><a href="${url('guides')}">${labels.all}</a></div>${articleLinks(guides.slice(0,3))}</section></div>`
  const header = `<div class="page-head"><h1 ${guide?'lang="en"':''}>${escape(title)}</h1></div>`
  const sections = {
    home,
    catalogue: `${header}${search}${products}`,
    categories: `${header}${chips}<p><a class="details" href="${main}/AllProducts/">${t.all}</a></p>`,
    faq: `${header}${englishNotice}<div class="question-list" lang="en">${faqAnchors(faqs.slice(offset,offset+pageSizes.faq),offset)}</div>${pagination(faqs.length)}${sourceList(faqSources)}`,
    guides: `${header}${englishNotice}${articleLinks(guides.slice(offset,offset+pageSizes.guides),true)}${pagination(guides.length)}`,
    article: guide ? `${header}${englishNotice}<div class="guide" lang="en"><p class="intro">${escape(guide.summary)}</p>${guide.sections.map(([head,body])=>`<section><h2>${escape(head)}</h2><p>${escape(body)}</p></section>`).join('')}</div>${sourceList(guide.sources)}<p><a class="details" href="${url('guides')}">${labels.all} · ${labels.guides}</a></p>` : ''
  }
  return `<!doctype html><html lang="${escape(language)}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex,follow"><title>${escape(title)}${page!=='home'?' | USFans Spreadsheet':''}</title><meta name="description" content="${escape(description)}"><link rel="icon" type="image/png" href="${favicon}"><style>
  *{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:#f6f7fb;color:#161b32;font:16px/1.55 "Inter",system-ui,sans-serif}a{color:inherit;text-decoration:none}a:hover{text-decoration:underline}a:focus-visible,button:focus-visible,input:focus-visible,summary:focus-visible{outline:3px solid #927ffa;outline-offset:3px}.wrap{width:min(1180px,calc(100% - 48px));margin-inline:auto}header{background:#fff;border-bottom:1px solid #e3e6f1}.top{display:flex;gap:24px;align-items:center;min-height:72px}.brand{font-size:24px;font-weight:900;letter-spacing:-1px;margin-right:auto}.brand b{color:#5a3ed4}.nav{display:flex;gap:24px;font-weight:650}.button,button{border:0;background:#6347e8;color:white;padding:11px 18px;border-radius:9px;font:inherit;font-weight:700;cursor:pointer}.lang{position:relative}.lang summary{cursor:pointer;font-weight:700}.lang div{position:absolute;right:0;top:30px;z-index:2;min-width:150px;background:#fff;padding:8px;border:1px solid #e3e6f1;border-radius:10px;box-shadow:0 8px 30px #1b164423}.lang a{display:block;padding:5px 8px}.hero{margin-top:25px;border-radius:22px;background:radial-gradient(ellipse at 95% 0%,#50359d,transparent 52%),#211945;color:white;padding:clamp(30px,6vw,78px);min-height:320px}h1{font-size:clamp(36px,7vw,76px);line-height:1.03;letter-spacing:-.055em;margin:0}p{margin:16px 0;color:#534e6a}.hero p{color:#e1daf7;max-width:550px}.form{display:flex;gap:8px;max-width:580px;margin:25px 0 14px}.form input{flex:1;min-width:0;background:white;border:0;border-radius:9px;font:inherit;padding:12px 14px}.browse{color:#ece7ff;text-decoration:underline}section{margin:32px 0}.heading{display:flex;justify-content:space-between;align-items:baseline;gap:12px}h2{font-size:clamp(21px,4vw,29px);letter-spacing:-.035em;margin:0 0 13px}.chips{display:grid;grid-template-columns:repeat(6,1fr);gap:10px}.chips a{display:grid;place-items:center;text-align:center;border:1px solid #e1e2ef;background:#fff;padding:14px 6px;border-radius:10px;font-weight:650}.grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:15px}article{overflow:hidden;background:white;border:1px solid #e1e2ef;border-radius:14px}.photo{display:grid;place-items:center;aspect-ratio:1.28;background:#ecebf4}.photo img{width:100%;height:100%;object-fit:cover;min-height:0}.item{display:grid;padding:14px;gap:6px}.item h3{margin:0;font-size:17px;overflow-wrap:anywhere}.details,.purchase,.heading a{color:#5036c4;font-weight:650}.fallback{background:white;border:1px solid #e1e2ef;padding:20px;border-radius:14px}.footer{border-top:1px solid #e1e2ef;padding:20px 0 28px;color:#534e6a}
  @media(max-width:720px){.wrap{width:calc(100% - 28px)}.top{gap:13px;flex-wrap:wrap;padding:12px 0}.nav{order:2;width:100%;gap:18px}.hero{padding:28px 20px;margin-top:14px;min-height:auto}.chips{grid-template-columns:repeat(3,1fr)}.grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:9px}.button,button{padding:9px 11px}.item{padding:10px}}
  .brand img{display:block;width:118px;height:39px;object-fit:contain}.nav a[aria-current=page]{color:#5036c4;text-decoration:underline;text-underline-offset:5px}.page-head{padding:36px 0 18px}.page-head h1{font-size:clamp(30px,5vw,52px);line-height:1.12;letter-spacing:-.04em}.editorial{display:grid;grid-template-columns:1fr 1fr;gap:22px}.content-cards{display:grid;gap:10px}.content-cards article{padding:12px 15px}.content-cards h3{font-size:1rem;margin:0}.content-cards p{margin:5px 0 0}.question-list{max-width:850px}.answer{background:#fff;border:1px solid #e1e2ef;border-radius:10px;margin:0 0 8px;padding:10px 12px}.answer summary{cursor:pointer;font-weight:650}.answer p{margin:8px 0 2px}.pagination{display:flex;gap:8px;margin:15px 0}.pagination a{display:grid;min-width:40px;min-height:40px;place-items:center;border-radius:8px;background:#fff;border:1px solid #e1e2ef}.pagination a[aria-current=page]{color:white;background:#5036c4}.guide,.sources{max-width:700px}.guide section{margin:20px 0}.guide h2{margin:0 0 6px}.guide p{margin:0 0 10px}.guide .intro{font-size:1.1rem}.sources{margin:18px 0}.sources h2{font-size:1rem;margin:0}.sources ul{margin:4px 0;padding-left:21px}.sources a,.footer a{text-decoration:underline}.language-note{margin:0 0 14px}.wrap.page{padding-bottom:22px}.page .form input{border:1px solid #e1e2ef}.hero .form input{border:0}
  @media(max-width:720px){.editorial{grid-template-columns:1fr;gap:0}.editorial section{margin:12px 0}.nav{gap:8px 14px;flex-wrap:wrap;font-size:.9rem}.button{font-size:.875rem}.brand img{width:100px;height:33px}.page-head{padding:22px 0 14px}.content-cards article{padding:9px 12px}.photo{aspect-ratio:1.6}.item{gap:2px}.details,.purchase{font-size:.875rem}.guide section{margin:14px 0}.guide h2{font-size:1.16rem}.hero{margin-top:12px}}
  </style></head><body>
  <header><div class="wrap top"><a class="brand" href="${url()}" aria-label="USFans"><img src="${logo}" alt="USFans" width="118" height="39"></a><nav class="nav">${[['catalogue',t.catalogue],['categories',t.categories],['faq',labels.faq],['guides',labels.guides]].map(([slug,label])=>`<a href="${url(slug)}" ${page===slug || (slug==='guides'&&page==='article')?'aria-current="page"':''}>${label}</a>`).join('')}</nav><details class="lang"><summary aria-label="${labels.language}">${escape(language.toUpperCase())}</summary><div>${Object.entries(languages).map(([code,label])=>`<a href="${pageURL(code,path)}" lang="${code}" ${code===language?'aria-current="page"':''}>${label} ${code.toUpperCase()}</a>`).join('')}</div></details><a class="button" href="https://usfans.com/register">${t.register}</a></div></header>
  <main class="wrap page">${sections[page]}</main>
  <footer class="footer"><div class="wrap">${labels.independent} <a href="${main}/">CNFansSP</a></div></footer>
  <script>
  function revealQuestion() {
    const id = location.hash.slice(1);
    if (!/^faq-[0-9]+$/.test(id)) return;
    const question = document.getElementById(id);
    if (question) question.open = true;
  }
  revealQuestion();
  window.addEventListener('hashchange', revealQuestion);
  </script>
  </body></html>`
}
