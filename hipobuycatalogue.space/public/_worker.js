import {logo} from './brand.js'
import {faqs, guides, sources} from './editorial.js'

const origin = 'https://www.cnfanssp.com'
const catalog = origin + '/AllProducts/'
const production = 'https://hipobuycatalogue.space'
const routes = ['', 'catalog/', 'faq/', 'faq/?page=2', 'faq/?page=3', 'faq/?page=4', 'guides/', 'guides/?page=2',
  ...guides.map(guide => 'guides/' + guide[0] + '/'),
  ...['es/', 'zh/'].flatMap(locale => [locale, locale + 'catalog/']),
]
const sitemap = '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' +
  routes.map(path => '<url><loc>' + production + '/' + path + '</loc></url>').join('') + '</urlset>'

const categories = [
  ['All', '全部', 'Todo', '/AllProducts/'],
  ['Shoes', '鞋履', 'Calzado', '/shoes/'],
  ['Hoodies & sweaters', '卫衣与针织', 'Sudaderas', '/hoodies-sweaters/'],
  ['T-shirts', 'T 恤', 'Camisetas', '/t-shirts/'],
  ['Jackets', '外套', 'Chaquetas', '/jackets/'],
  ['Pants & shorts', '裤装', 'Pantalones', '/pants-shorts/'],
  ['Accessories', '配饰', 'Accesorios', '/accessories/'],
  ['Headwear', '帽饰', 'Gorras', '/headwear/'],
  ['Electronics', '电子产品', 'Electrónica', '/electronics/'],
  ['Other', '其他', 'Otros', '/other-stuff/'],
  ['Jerseys', '球衣', 'Equipaciones', '/Jersey/'],
]

const escape = value => String(value ?? '').replace(/[&<>"']/g, char => ({
  '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
})[char])
const plain = value => value.replace(/<[^>]*>/g, '').replaceAll('&amp;', '&').trim()
const itemPath = /\/AllProducts\/\d+\.html/i
const attrs = (html, name) => html.match(new RegExp('\\b' + name + '\\s*=\\s*["\']([^"\']+)["\']', 'i'))?.[1]
function imageIn(html) {
  const tag = html.match(/<img\b[^>]*>/i)?.[0]
  if (!tag) return ''
  const src = attrs(tag, 'data-src') || attrs(tag, 'data-original') || attrs(tag, 'src')
  if (!src) return ''
  try {
    const url = new URL(src, origin)
    return url.protocol === 'https:' && ['cnfanssp.com', 'www.cnfanssp.com'].includes(url.hostname) ? url.href : ''
  } catch { return '' }
}

async function loadPage(path) {
  const response = await fetch(origin + path, {signal: AbortSignal.timeout(6500), cf:{cacheTtl:120}})
  if (!response.ok) throw new Error('Catalog unavailable')
  return response.text()
}

function readProducts(html) {
  const result = new Map()
  const cards = html.split(/<div\b[^>]*\bclass=["'][^"']*\bproduct-card\b[^"']*["'][^>]*>/gi).slice(1)
  for (const card of cards) {
    const path = card.match(itemPath)?.[0]
    const heading = card.match(/<h[2-5]\b[^>]*>([\s\S]*?)<\/h[2-5]>/i)?.[1]
    const price = card.match(/<[^>]*class=["'][^"']*\bproduct-price\b[^"']*["'][^>]*>([\s\S]*?)<\//i)?.[1]
    if (path && heading && !result.has(path)) {
      result.set(path, {path, name: plain(heading), photo: imageIn(card), price: price ? plain(price) : ''})
    }
  }
  return [...result.values()]
}

const copy = {
  en: ['Browse', 'Sign up', 'The HipoBuy spreadsheet', 'Find your next pick.', 'Browse the cnfanssp catalog and open listings at the source.', 'Search products', 'Search', 'Catalog', 'View details', 'No matching products.', 'The catalog could not be loaded.', 'Open cnfanssp', 'Buy on HipoBuy', 'Independent catalog companion', 'Latest products'],
  zh: ['浏览商品', '注册', 'HipoBuy 商品目录', '找到你的下一件好物', '浏览 cnfanssp 商品，打开主站查看原始详情。', '搜索商品', '搜索', '商品目录', '查看详情', '没有匹配的商品。', '暂时无法加载商品。', '打开 cnfanssp', '前往 HipoBuy 购买', '独立商品导航', '最新商品'],
  es: ['Explorar', 'Registrarse', 'Catálogo de HipoBuy', 'Encuentra tu próxima compra.', 'Explora cnfanssp y consulta los artículos en su página original.', 'Buscar productos', 'Buscar', 'Catálogo', 'Ver detalles', 'No hay productos que coincidan.', 'No se pudo cargar el catálogo.', 'Abrir cnfanssp', 'Comprar con HipoBuy', 'Directorio independiente', 'Últimos productos']
}

const css = `
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:#f7f8f3;color:#18231d;font:16px system-ui,sans-serif}a{color:inherit;text-decoration:none}button,input,select{font:inherit}a:focus-visible,button:focus-visible,input:focus-visible,select:focus-visible{outline:3px solid #628400;outline-offset:3px}.wrap{width:min(1180px,calc(100% - 42px));margin:auto}header{background:#fff;border-bottom:1px solid #e2e7df}.bar{display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:74px}.brand{display:inline-flex;align-items:center;gap:10px;font-weight:850;letter-spacing:-.05em;font-size:24px}.brand b{width:34px;height:34px;display:grid;place-items:center;background:#d9f76a;border-radius:10px;letter-spacing:0;font-size:20px}.nav{display:flex;align-items:center;gap:17px;font-size:14px}.nav select{border:1px solid #d9e0d6;border-radius:8px;padding:8px;background:#fff;color:inherit}.button,button{display:inline-flex;align-items:center;justify-content:center;border:0;border-radius:8px;background:#d9f76a;color:#192516;padding:11px 16px;font-weight:750;cursor:pointer}.hero{background:#16261e;color:#f7faf5;padding:55px 56px;border-radius:24px;margin:32px 0 24px;position:relative;overflow:hidden}.hero:after{content:'';position:absolute;right:-130px;top:-225px;width:520px;height:520px;border:1px solid #a8c96544;border-radius:50%;box-shadow:0 0 0 50px #a8c96514,0 0 0 100px #a8c9650b;pointer-events:none}.hero>*{position:relative;z-index:1}.eyebrow{color:#daf482;font-weight:700;font-size:14px;letter-spacing:.07em;text-transform:uppercase}h1{font-size:clamp(37px,6.3vw,74px);letter-spacing:-.075em;line-height:1.03;margin:12px 0 16px}.hero p{color:#c5d2c8;margin:0 0 25px}.search{display:flex;max-width:535px;gap:8px;background:#fff;border-radius:11px;padding:6px}.search input{border:0;min-width:0;flex:1;padding:9px 10px;background:transparent;color:#18231d}.filters{display:flex;gap:9px;overflow:auto;padding:3px 3px 11px;white-space:nowrap}.filters a{background:#fff;border:1px solid #dbe2d9;border-radius:999px;font-size:14px;padding:9px 14px}.filters a.active{background:#18271e;color:#fff}.section{display:flex;align-items:center;justify-content:space-between;gap:10px;margin:20px 0 15px}.section h2{font-size:28px;letter-spacing:-.05em;margin:0}.section a,.detail{font-size:14px;font-weight:750;color:#375a32}.grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px}.card{overflow:hidden;background:#fff;border:1px solid #dfe5da;border-radius:15px;display:flex;flex-direction:column}.card> a:first-child{display:block;overflow:hidden}.card img{width:100%;height:100%;aspect-ratio:4/3;display:block;object-fit:contain;background:#f0f2ea;transition:transform .2s}.card:hover img{transform:scale(1.03)}.info{padding:16px}.info h3{margin:0 0 11px;font-size:17px}.price{margin:0 0 10px;font-size:14px;font-weight:700}.detail{display:inline-flex}.buy{display:inline-flex;margin-top:12px;font-size:14px}.message{padding:24px;background:#fff;border:1px solid #dfe5da;border-radius:12px}footer{margin-top:38px;padding:24px 0;border-top:1px solid #dfe5da;font-size:14px;color:#48604d}@media(max-width:800px){.grid{grid-template-columns:repeat(3,minmax(0,1fr))}.hero{padding:39px 30px}}@media(max-width:530px){.wrap{width:calc(100% - 28px)}.bar{min-height:62px}.nav{gap:8px}.nav>a:first-child{display:none}.button,button{padding:9px 11px}.brand{font-size:20px;gap:6px}.brand b{width:27px;height:27px;font-size:16px}.hero{margin-top:17px;padding:26px 19px;border-radius:17px}.grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:9px}.info{padding:12px}.section h2{font-size:23px}}
`

const weidian = 'https://weidian.com/item.html?itemID=7632511460'
const buy = 'https://hipobuy.com/product/weidian/7632511460?source=SEARCH_LIST&keyword=' + encodeURIComponent(weidian)

const languages = {en:'English', zh:'简体中文', es:'Español'}
const editorialLabels = {
  en:['Home','FAQ','Guides','View all','Sources','Shopping guides and answers are available in English.','Page','Catalog categories'],
  zh:['首页','常见问题','选购指南','查看全部','参考来源','指南和问答正文目前提供英文版本。','第','商品分类'],
  es:['Inicio','Preguntas','Guías','Ver todo','Fuentes','Las guías y respuestas están disponibles en inglés.','Página','Categorías'],
}
const favicon = 'https://hipobuy.com/static/favicon/32x32.png'
const editorialCss = `
.brand img{width:133px;height:33px;object-fit:contain}.nav a[aria-current]{text-decoration:underline;text-underline-offset:5px}.nav a{white-space:nowrap}.reading{max-width:780px;margin:32px auto}.reading h1,.page-title{font-size:clamp(30px,5vw,49px);letter-spacing:-.045em;line-height:1.12}.reading h2{font-size:21px;margin:23px 0 7px}.reading p{line-height:1.6;margin:7px 0}.reading ul{padding-left:20px}.reading li{margin:7px 0}.editorial{margin:30px 0}.editorial-list{display:grid;gap:8px;grid-template-columns:repeat(3,minmax(0,1fr))}.editorial-list a,.faq-list details{display:block;border:1px solid #dfe5da;background:#fff;padding:13px 14px;border-radius:11px;font-weight:650}.editorial-list a:hover,.faq-list summary:hover{color:#375a32;text-decoration:underline}.faq-list{display:grid;gap:8px}.faq-list summary{cursor:pointer;line-height:1.35}.faq-list details p{margin:11px 0 0;font-weight:400}.pager{display:flex;gap:9px;margin:18px 0}.pager a{display:grid;place-items:center;min-width:42px;min-height:42px;border-radius:8px;border:1px solid #dfe5da;background:#fff}.pager a[aria-current]{color:#fff;background:#18271e}.reading .editorial-list{grid-template-columns:1fr}.reading .detail{margin:4px 0}.category-directory{display:flex;flex-wrap:wrap;gap:9px}.category-directory a{display:inline-block;padding:10px 14px;background:#fff;border:1px solid #dfe5da;border-radius:9px}
@media(max-width:640px){.bar{display:grid;grid-template-columns:1fr;gap:4px;padding:9px 0 10px}.brand{font-size:20px}.brand img{width:112px;height:28px}.nav{gap:8px;flex-wrap:wrap;justify-content:space-between;font-size:13px}.nav>a:first-child{display:inline}.nav select{padding:7px 3px;max-width:87px}.hero{padding:23px 17px;margin:13px 0 13px}.hero h1{font-size:36px}.hero p{margin-bottom:14px}.editorial{margin:22px 0}.editorial-list{grid-template-columns:1fr}.editorial-list a{padding:10px 12px;font-size:14px}.reading{margin:20px auto}.reading h2{font-size:19px;margin:17px 0 5px}.reading p{font-size:15px;line-height:1.5}.grid .card:nth-child(n+7){display:none}footer{margin-top:24px;padding:15px 0}}
`

const localizedPath = (locale, path = '') => (locale === 'en' ? '/' : '/' + locale + '/') + path
const sourceLink = key => {
  const [label, url] = sources[key]
  return `<a class="detail" href="${url}">${escape(label)}</a>`
}
const guideLink = (guide, locale) => `<a href="${localizedPath(locale,'guides/' + guide[0] + '/')}">${escape(guide[1])}</a>`
const faqLink = (entry, index, locale) =>
  `<a href="${localizedPath(locale,'faq/')}${index >= 6 ? '?page=' + (Math.floor(index / 6) + 1) : ''}#faq-${index + 1}">${escape(entry[0])}</a>`

function pager(locale, path, active, count, label) {
  return `<nav class="pager" aria-label="${label}">${Array.from({length:count}, (_, index) => {
    const page = index + 1
    return `<a href="${localizedPath(locale,path)}${page === 1 ? '' : '?page=' + page}" aria-label="${label} ${page}" ${page === active ? 'aria-current="page"' : ''}>${page}</a>`
  }).join('')}</nav>`
}

function shell({locale, path, title, description, content, page = 1, status = 200, isProduction, measurementId}) {
  const t = copy[locale]
  const labels = editorialLabels[locale]
  const localeHref = key => localizedPath(key,path) + (page > 1 ? '?page=' + page : '')
  const editorial = path.startsWith('faq/') || path.startsWith('guides/')
  const indexable = isProduction && status === 200 && (!editorial || locale === 'en')
  const analytics = measurementId ? `<script async src="https://www.googletagmanager.com/gtag/js?id=${measurementId}"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${measurementId}');</script>` : ''
  const active = target => (target === '' ? path === '' : path.startsWith(target)) ? ' aria-current="page"' : ''
  return new Response(`<!doctype html><html lang="${locale === 'zh' ? 'zh-CN' : locale}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">${indexable ? `<link rel="canonical" href="${production + localeHref(locale)}">` : '<meta name="robots" content="noindex">'}${analytics}<meta name="description" content="${escape(description)}"><title>${escape(title)} · HipoBuy Finds</title><link rel="icon" href="${favicon}" type="image/png">${Object.keys(languages).map(key => `<link rel="alternate" hreflang="${key === 'zh' ? 'zh-CN' : key}" href="${localeHref(key)}">`).join('')}<style>${css}${editorialCss}</style></head><body><header><div class="wrap bar"><a class="brand" href="${localizedPath(locale)}"><img src="${logo}" alt="HipoBuy"></a><nav class="nav"><a href="${localizedPath(locale)}"${active('')}>${labels[0]}</a><a href="${localizedPath(locale,'catalog/')}"${active('catalog/')}>${t[0]}</a><a href="${localizedPath(locale,'faq/')}"${active('faq/')}>${labels[1]}</a><a href="${localizedPath(locale,'guides/')}"${active('guides/')}>${labels[2]}</a><select aria-label="Language" onchange="location.href=this.value">${Object.entries(languages).map(([key, label]) => `<option value="${localeHref(key)}" ${key === locale ? 'selected' : ''}>${label}</option>`).join('')}</select><a class="button" href="https://hipobuy.com/register">${t[1]}</a></nav></div></header><main class="wrap">${content}</main><footer><div class="wrap">HipoBuy Finds · ${t[13]} · <a href="${origin}">cnfanssp.com</a></div></footer></body></html>`, {
    status,
    headers:{'Content-Type':'text/html; charset=utf-8',...(!indexable && {'X-Robots-Tag':'noindex'})}
  })
}

function sections(locale) {
  const labels = editorialLabels[locale]
  return [
    ['faq/', labels[1], faqs.slice(0,3).map((entry, i) => faqLink(entry,i,locale)).join('')],
    ['guides/', labels[2], guides.slice(0,3).map(guide => guideLink(guide,locale)).join('')]
  ].map(([path, label, entries]) => `<section class="editorial"><div class="section"><h2>${label}</h2><a href="${localizedPath(locale,path)}">${labels[3]}</a></div><div class="editorial-list" lang="en">${entries}</div></section>`).join('')
}

const searchForm = t => `<form class="search" action="${origin}/search.html" method="get"><input type="hidden" name="channelid" value="2"><input name="keywords" type="search" aria-label="${t[5]}" placeholder="${t[5]}" required><button>${t[6]}</button></form>`
const categoryLinks = locale => categories.map(row => `<a href="${origin + row[3]}">${row[{en:0,zh:1,es:2}[locale]]}</a>`).join('')

async function home(locale, render) {
  const t = copy[locale]
  let items = []
  try { items = readProducts(await loadPage('/')).slice(0,12) } catch {}
  const cards = items.map(item => {
    const detail = escape(origin + item.path)
    return `<article class="card">${item.photo ? `<a href="${detail}"><img loading="lazy" src="${escape(item.photo)}" alt="${escape(item.name)}"></a>` : ''}<div class="info"><h3><a href="${detail}">${escape(item.name)}</a></h3>${item.price ? `<p class="price">CNY ${escape(item.price)}</p>` : ''}<a class="detail" href="${detail}">${t[8]}</a>${item.path === '/AllProducts/6667.html' ? `<br><a class="button buy" href="${escape(buy)}">${t[12]}</a>` : ''}</div></article>`
  }).join('')
  return render({locale,path:'',title:t[2],description:t[4],content:`<section class="hero"><div class="eyebrow">${t[2]}</div><h1>${t[3]}</h1><p>${t[4]}</p>${searchForm(t)}</section><nav class="filters" aria-label="${t[7]}">${categoryLinks(locale)}</nav><section id="catalog"><div class="section"><h2>${t[14]}</h2><a href="${catalog}">${t[11]}</a></div>${cards ? `<div class="grid">${cards}</div>` : `<p class="message">${t[10]} <a class="detail" href="${catalog}">${t[11]}</a></p>`}</section>${sections(locale)}`})
}

export default {
  async fetch(request, env = {}) {
    const url = new URL(request.url)
    const isProduction = url.origin === production
    if (url.pathname === '/robots.txt') return new Response(
      isProduction ? 'User-agent: *\nAllow: /\nSitemap: ' + production + '/sitemap.xml\n' : 'User-agent: *\nDisallow: /\n',
      {headers:{'Content-Type':'text/plain; charset=utf-8'}}
    )
    if (url.pathname === '/sitemap.xml') return new Response(sitemap,{headers:{'Content-Type':'application/xml; charset=utf-8'}})
    const measurementId = isProduction && /^G-[A-Z0-9]+$/.test(env.GA4_MEASUREMENT_ID ?? '') ? env.GA4_MEASUREMENT_ID : ''
    const render = args => shell({...args,isProduction,measurementId})
    const parts = url.pathname.split('/').filter(Boolean)
    const locale = Object.hasOwn(languages, parts[0]) ? parts.shift() : 'en'
    const path = parts.length ? parts.join('/') + '/' : ''
    const t = copy[locale]
    const labels = editorialLabels[locale]
    const reading = content => `<div class="reading">${content}</div>`
    const languageNote = locale === 'en' ? '' : `<p>${labels[5]}</p>`

    if (url.searchParams.has('q')) {
      const keywords = url.searchParams.get('q').trim().slice(0, 100)
      if (keywords === '7632511460') return Response.redirect(origin + '/AllProducts/6667.html',302)
      if (keywords) return Response.redirect(origin + '/search.html?' + new URLSearchParams({channelid:'2',keywords}),302)
    }
    if (url.searchParams.has('category')) {
      const entry = categories.find(row => row[3] === url.searchParams.get('category'))
      if (entry) return Response.redirect(origin + entry[3],302)
    }
    if (!path && Object.hasOwn(languages,url.searchParams.get('lang'))) {
      return Response.redirect(new URL(localizedPath(url.searchParams.get('lang')),url),302)
    }
    if (!path) return home(locale, render)
    if (path === 'catalog/') {
      return render({locale,path,title:t[7],description:t[4],content:reading(`<h1>${labels[7]}</h1><p>${t[4]}</p>${searchForm(t)}<nav class="category-directory" aria-label="${labels[7]}">${categoryLinks(locale)}</nav>`)})
    }
    if (path === 'faq/' || path === 'guides/') {
      const isFaq = path === 'faq/'
      const list = isFaq ? faqs : guides
      const size = isFaq ? 6 : 5
      const pages = Math.ceil(list.length / size)
      const page = Math.max(1,Math.min(pages, Math.trunc(Number(url.searchParams.get('page'))) || 1))
      const start = (page - 1) * size
      const visible = list.slice(start,start + size).map((entry,i) => isFaq
        ? `<details id="faq-${start + i + 1}"><summary>${escape(entry[0])}</summary><p>${escape(entry[1])}</p><p>${sourceLink(entry[2])}</p></details>`
        : guideLink(entry,locale)).join('')
      const title = isFaq ? labels[1] : labels[2]
      const openFaq = isFaq ? '<script>const item=document.getElementById(location.hash.slice(1));if(item instanceof HTMLDetailsElement)item.open=true;</script>' : ''
      return render({locale,path,page,title,description:isFaq?'Answers about HipoBuy product links, signup, QC, shipping and tracking.':'Practical guides to the HipoBuy spreadsheet, QC, shipping and orders.',
        content:reading(`<h1>${title}</h1>${languageNote}<div class="${isFaq ? 'faq-list':'editorial-list'}" lang="en">${visible}</div>${pager(locale,path,page,pages,labels[6])}${openFaq}`)})
    }
    const guide = parts[0] === 'guides' && parts.length === 2 && guides.find(entry => entry[0] === parts[1])
    if (guide) {
      const [, title, description, references, article] = guide
      return render({locale,path,title,description,content:reading(`<article lang="en"><h1>${escape(title)}</h1><p>${escape(description)}</p>${article.map(([heading,body]) => `<section><h2>${escape(heading)}</h2><p>${escape(body)}</p></section>`).join('')}</article><h2>${labels[4]}</h2><ul>${references.map(key => `<li>${sourceLink(key)}</li>`).join('')}</ul><a class="detail" href="${localizedPath(locale,'guides/')}" >${labels[2]}</a>`)})
    }
    return render({locale,path:'',title:'404',description:'',status:404,content:reading(`<h1>404</h1><a class="detail" href="${localizedPath(locale)}">${labels[0]}</a>`)})
  }
}
