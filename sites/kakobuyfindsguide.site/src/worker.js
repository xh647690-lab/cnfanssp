const origin = 'https://www.cnfanssp.com'
const siteOrigin = 'https://kakobuyfindsguide.site'
const featuredPath = '/AllProducts/6667.html'
const categories = [
  ['all', '/AllProducts/', 'All products', '全部商品', 'Todos'],
  ['shoes', '/shoes/', 'Shoes', '鞋履', 'Calzado'],
  ['hoodies', '/hoodies-sweaters/', 'Sweatshirts', '卫衣', 'Sudaderas'],
  ['shirts', '/t-shirts/', 'T-shirts', 'T 恤', 'Camisetas'],
  ['jackets', '/jackets/', 'Jackets', '外套', 'Chaquetas'],
  ['pants', '/pants-shorts/', 'Pants & shorts', '裤装', 'Pantalones'],
  ['headwear', '/headwear/', 'Headwear', '帽饰', 'Gorras'],
  ['accessories', '/accessories/', 'Accessories', '配饰', 'Accesorios'],
  ['sets', '/short-sets/', 'Short sets', '套装', 'Conjuntos'],
  ['electronics', '/electronics/', 'Electronics', '电子产品', 'Electrónica'],
  ['other', '/other-stuff/', 'Other items', '其他商品', 'Otros'],
  ['jersey', '/jersey/', 'Jerseys', '球衣', 'Camisetas deportivas']
]

const searchIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.2"/><path d="m15 15 5 5"/></svg>'
const escape = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char])
const clean = value => String(value ?? '').replace(/<[^>]+>/g,'').replace(/&(?:amp|quot|apos|lt|gt|nbsp|#\d+|#x[0-9a-f]+);/gi, entity => {
  const token = entity.slice(1,-1).toLowerCase()
  if (token.startsWith('#')) {
    const point = token[1] === 'x' ? parseInt(token.slice(2),16) : Number(token.slice(1))
    return point > 0 && point <= 0x10ffff ? String.fromCodePoint(point) : ''
  }
  return {amp:'&',quot:'"',apos:"'",lt:'<',gt:'>',nbsp:' '}[token]
}).trim()
const attr = (tag, name) => clean(tag?.match(new RegExp('(?:^|\\s)' + name + '=["\']([^"\']*)["\']','i'))?.[1])
const field = (html, className) => clean(html.match(new RegExp('<(?:h1|h3|div|span)\\b[^>]*class=["\'][^"\']*\\b' + className + '\\b[^"\']*["\'][^>]*>([\\s\\S]*?)<\\/(?:h1|h3|div|span)>','i'))?.[1])

function sourceUrl(value) {
  const url = new URL(value, origin)
  return url.protocol === 'https:' && url.origin === origin ? url.href : ''
}

function imageUrl(html) {
  const image = html.match(/<img\b[^>]*(?:data-src|src)=["']\/uploads\/[^>]+>/i)?.[0]
  const value = attr(image, 'data-src') || attr(image, 'src')
  return value ? sourceUrl(value) : ''
}

function productPath(value) {
  const url = new URL(value, origin)
  return url.origin === origin && /^\/[\w-]+\/\d+\.html$/i.test(url.pathname) ? url.pathname : ''
}

function readCards(html) {
  const starts = [...html.matchAll(/<div\b[^>]*class=["'][^"']*\bproduct-card\b[^"']*["'][^>]*>/gi)]
  const products = new Map()
  for (const [index, start] of starts.entries()) {
    const section = html.slice(start.index, starts[index + 1]?.index)
    const link = section.match(/<a\b[^>]*class=["'][^"']*\bproduct-image\b[^"']*["'][^>]*>/i)?.[0]
    const path = productPath(attr(link, 'href'))
    const name = field(section, 'product-name')
    if (path && name) products.set(path, { path, name, image: imageUrl(section), price: field(section, 'product-price') })
  }
  return [...products.values()]
}

async function upstream(path) {
  const url = sourceUrl(path)
  if (!url) throw new Error('Unexpected source address')
  try {
    const response = await fetch(url, { redirect: 'manual', headers: { Accept: 'text/html' } })
    if (!response.ok) throw new Error('Source HTTP ' + response.status)
    return await response.text()
  } catch (error) {
    console.error('CNFansSP upstream request failed:', error.message)
    throw error
  }
}

async function list(path) {
  return readCards(await upstream(path))
}

function getPageLink(lang, path, params) {
  return escape(withLocale(lang,path) + (params?.size ? '?' + params.toString() : ''))
}

function languageMenu(lang, t, path, params) {
  const options = Object.entries(locales).map(([code,[name]]) =>
    '<a lang="' + code + '" hreflang="' + code + '" href="' + getPageLink(code,path,params) + '"' +
    (lang === code ? ' aria-current="true"' : '') + '><span>' + escape(name) + '</span><span class="language-code">' + code.toUpperCase() + '</span></a>'
  ).join('')
  return '<details class="language"><summary aria-label="' + escape(t.language) + '"><span>' + escape(t.name) + '</span><span class="short-language">' + lang.toUpperCase() + '</span></summary><nav class="language-options" aria-label="' + escape(t.language) + '">' + options + '</nav></details>'
}

function shouldIndex(lang, path, status) {
  return status === 200 && (!(path === '/faq' || path.startsWith('/guides')) || editorialLanguage(lang) === lang)
}

function shell(lang, t, page, url, robots) {
  const links = [['/','home'],['/catalog','catalog'],['/categories','categories'],['/faq','faq'],['/guides','guides']]
  const nav = links.map(([path,key]) => {
    const active = page.path === path || (key === 'guides' && page.path.startsWith('/guides/'))
    return '<a href="' + withLocale(lang,path) + '"' + (active ? ' aria-current="page"' : '') + '>' + escape(t[key]) + '</a>'
  }).join('')
  const canonical = getPageLink(lang,page.path)
  const isEditorial = page.path.startsWith('/guides') || page.path === '/faq'
  const alternatives = Object.keys(isEditorial ? interfaceText : locales)
    .map(code => '<link rel="alternate" hreflang="' + code + '" href="' + escape(siteOrigin + withLocale(code,page.path)) + '">').join('')
  return '<!doctype html><html lang="' + lang + '"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">' +
    '<meta name="robots" content="' + robots + '"><meta name="description" content="' + escape(page.description ?? t.intro) + '">' +
    '<title>' + escape(page.title) + ' · CNFansSP</title><link rel="canonical" href="' + siteOrigin + canonical + '">' +
    '<link rel="icon" type="image/x-icon" href="' + origin + '/favicon.ico"><link rel="apple-touch-icon" href="' + origin + '/public/upload/system/2018/05/24/8c675d3dae162ebc1936f3ab43d58960.png">' +
    alternatives + '<link rel="alternate" hreflang="x-default" href="' + escape(siteOrigin + page.path) + '"><link rel="stylesheet" href="/site.css"></head><body>' +
    '<header class="top"><div class="wrap"><a class="brand" aria-label="CnbuySheet – ' + escape(t.home) + '" href="' + withLocale(lang) + '">Cnbuy<span>Sheet</span></a>' +
    '<nav class="nav" aria-label="' + escape(t.menu) + '">' + nav + '</nav><div class="actions">' +
    languageMenu(lang,t,page.path,url.searchParams) + '<a class="button top-register" href="' + origin + '/reg">' + escape(t.register) + '</a></div></div></header>' +
    '<main class="wrap">' + page.body + '</main><footer class="footer"><div class="wrap"><p>CNFansSP</p><a href="' + origin + '/">' + escape(t.credit) + '</a></div></footer></body></html>'
}

function searchForm(t) {
  return '<form class="search" action="' + origin + '/search.html" method="get" role="search">' + searchIcon +
    '<input type="search" name="keywords" aria-label="' + escape(t.search) + '" placeholder="' + escape(t.placeholder) + '" maxlength="80" required>' +
    '<input type="hidden" name="channelid" value="2"><button class="button" type="submit">' + escape(t.search) + '</button></form>'
}

function categoryLabel(category, lang) {
  return category[{zh:3,es:4}[lang] ?? 2]
}

function chips(lang) {
  return '<nav class="chips" aria-label="' + escape(siteText(lang).categories) + '">' + categories.map(item =>
    '<a class="chip" href="' + origin + item[1] + '">' + escape(categoryLabel(item,lang)) + '</a>').join('') + '</nav>'
}

function imageTag(item, options = '') {
  return item.image ? '<img src="' + escape(item.image) + '" alt="' + escape(item.name) + '" ' + options + '>' : ''
}

function cards(items, t) {
  return '<div class="grid">' + items.map((item, index) => '<article class="card"><a href="' + origin + escape(item.path) +
    '"><div class="card-image">' + imageTag(item, index < 4 ? 'decoding="async"' : 'loading="lazy" decoding="async"') +
    '</div><div class="card-copy"><h3>' + escape(item.name) + '</h3><div class="card-meta"><span>' +
    (item.price ? escape(t.price + ' ' + item.price) : '') + '</span><span class="card-open">' + escape(t.details) + '</span></div></div></a></article>').join('') + '</div>'
}

function notice(t) {
  return '<div class="notice"><p>' + escape(t.error) + '</p><a class="button light" href="' + origin + '/AllProducts/">' + escape(t.open) + '</a></div>'
}

function sources(keys, t) {
  return '<aside class="sources"><h2>' + escape(t.source) + '</h2><ul>' + keys.map(key => {
    const [name,href] = references[key]
    return '<li><a href="' + escape(href) + '">' + escape(name) + '</a></li>'
  }).join('') + '</ul></aside>'
}

function homeEditorial(lang, t) {
  const articleLang = editorialLanguage(lang)
  const tiles = guides.slice(0,3).map(guide => '<li><a href="' + withLocale(lang,'/guides/' + guide.slug) + '">' +
    escape(guide[articleLang][0]) + '</a></li>').join('')
  const excerpts = questions.slice(0,3).map((_,idx) => '<li><a href="' + withLocale(lang,'/faq') + '#question-' + (idx+1) + '">' +
    escape(questionContent(idx,lang)[0]) + '</a></li>').join('')
  return '<section class="editorial-home"><section class="editorial-teasers"><h2><a href="' + withLocale(lang,'/faq') + '">' + escape(t.faq) +
    '</a></h2><ul lang="' + articleLang + '">' + excerpts + '</ul></section><section class="editorial-teasers"><h2><a href="' +
    withLocale(lang,'/guides') + '">' + escape(t.guides) + '</a></h2><ul lang="' + articleLang + '">' + tiles + '</ul></section></section>'
}

function home(lang, t, latest, art) {
  const photos = art.filter(item => item?.image).map(item =>
    '<a class="photo" href="' + origin + escape(item.path) + '">' + imageTag(item,'decoding="async"') + '</a>').join('')
  const hero = '<section class="hero"><div class="hero-copy"><h1>CNFansSP<span>' + escape(t.catalog) +
    '</span></h1><p lang="' + editorialLanguage(lang) + '" class="description">' + escape(t.intro) + '</p>' + searchForm(t) +
    '</div><div class="art">' + photos + '</div></section>'
  const headings = '<section><div class="section-head"><h2>' + escape(t.categories) + '</h2><a class="button light" href="' +
    withLocale(lang,'/categories') + '">' + escape(t.categories) + '</a></div>' + chips(lang) + '</section>'
  const listings = '<section class="home-products"><div class="section-head"><h2>' + escape(t.latest) + '</h2><a class="button light" href="' +
    withLocale(lang,'/catalog') + '">' + escape(t.catalog) + '</a></div>' +
    (latest.length ? cards(latest.slice(0,8),t) : notice(t)) + '</section>'
  return hero + headings + listings + homeEditorial(lang,t)
}

function categoriesPage(lang,t) {
  return '<section class="page-heading"><h1>' + escape(t.categories) + '</h1></section><div class="category-grid">' +
    categories.map(item => '<a class="category-tile" href="' + origin + item[1] + '"><strong>' + escape(categoryLabel(item,lang)) +
      '</strong><span>' + escape(t.main) + '</span></a>').join('') + '</div>'
}

function catalogPage(lang,t,items,rawPage) {
  const last = Math.max(1,Math.ceil(items.length/8))
  const page = Math.min(last,Math.max(1,Number.parseInt(rawPage,10) || 1))
  const pager = (n,label) => '<a class="button light" href="' + withLocale(lang,'/catalog') + '?page=' + n + '">' + escape(label) + '</a>'
  const pagination = items.length ? '<nav class="pagination" aria-label="' + escape(t.catalog) + '">' + (page > 1 ? pager(page-1,t.previous) : '') +
    '<span>' + page + ' / ' + last + '</span>' + (page < last ? pager(page+1,t.next) : '') + '</nav>' : ''
  return '<div class="page-heading"><h1>' + escape(t.catalog) + '</h1>' + searchForm(t) + '</div>' + chips(lang) +
    (items.length ? cards(items.slice((page-1)*8,page*8),t) + pagination : notice(t)) +
    '<a class="button light catalog-source" href="' + origin + '/AllProducts/">' + escape(t.all) + '</a>'
}

function faqPage(lang,t,rawTopic) {
  const group = Math.max(0,Math.min(3,Number.parseInt(rawTopic,10) || 0))
  const articleLang = editorialLanguage(lang)
  const path = withLocale(lang,'/faq')
  const groupLinks = t.faqGroup.map((name,index) => '<a class="chip" href="' + path + (index ? '?topic=' + index : '') + '"' +
    (index === group ? ' aria-current="true"' : '') + '>' + escape(name) + '</a>').join('')
  const entries = questions.slice(group*6,group*6+6).map((_,index) => {
    const id = group*6+index
    const [question,answer] = questionContent(id,lang)
    return '<details id="question-' + (id+1) + '"><summary>' + escape(question) + '</summary><p>' + escape(answer) + '</p></details>'
  }).join('')
  const groupSources = [['directory','search'],['jersey','weidian','sourceLinks'],['shipping','qc'],['registration','service']]
  return '<section class="page-heading"><h1>' + escape(t.faq) + '</h1></section><div class="editorial-page faq-page" lang="' +
    articleLang + '"><nav class="chips" aria-label="' + escape(t.faq) + '">' + groupLinks + '</nav><div class="faq-entries">' +
    entries + '</div>' + sources(groupSources[group],t) + '</div><script>const target=document.getElementById(location.hash.slice(1));if(target?.tagName==="DETAILS")target.open=true</script>'
}

function guidesPage(lang,t) {
  const articleLang = editorialLanguage(lang)
  return '<section class="page-heading"><h1>' + escape(t.guides) + '</h1></section><div class="editorial-page guide-grid" lang="' +
    articleLang + '">' + guides.map(guide => {
      const [title,intro] = guide[articleLang]
      return '<article class="editorial-card"><a href="' + withLocale(lang,'/guides/' + guide.slug) + '"><h2>' +
        escape(title) + '</h2><p>' + escape(intro) + '</p></a></article>'
    }).join('') + '</div>'
}

function guidePage(lang,t,guide) {
  const articleLang = editorialLanguage(lang)
  const [title,intro,steps] = guide[articleLang]
  const date = new Intl.DateTimeFormat(lang,{dateStyle:'medium',timeZone:'UTC'}).format(new Date(published))
  const body = '<article class="article editorial-page" lang="' + articleLang + '"><a class="go-back" href="' + withLocale(lang,'/guides') +
    '">' + escape(t.back) + '</a><div class="page-heading"><h1>' + escape(title) + '</h1><p>' + escape(intro) +
    '</p><time datetime="' + published + '">' + escape(date) + '</time></div>' +
    steps.map(([heading,paragraph]) => '<section><h2>' + escape(heading) + '</h2><p>' + escape(paragraph) + '</p></section>').join('') +
    sources(guide.sources,t) + '</article>'
  return {title,description:intro,body}
}

const pages = new Set(['/','/catalog','/categories','/faq','/guides'])
function sitemap() {
  const publicUrls = Object.keys(locales).flatMap(lang => ['/', '/catalog', '/categories'].map(path => withLocale(lang, path)))
  for (const lang of Object.keys(interfaceText)) {
    publicUrls.push(withLocale(lang, '/faq'), withLocale(lang, '/guides'))
    for (const guide of guides) publicUrls.push(withLocale(lang, '/guides/' + guide.slug))
  }
  return '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' +
    publicUrls.map(path => '<url><loc>' + escape(siteOrigin + path) + '</loc></url>').join('') + '</urlset>'
}

const redirect = location => new Response(null,{status:302,headers:{Location:location}})

export default {
  async fetch(request) {
    const url = new URL(request.url)
    if (url.pathname === '/site.css') return new Response(styles,{headers:{'Content-Type':'text/css; charset=utf-8','Cache-Control':'public, max-age=300'}})
    if (url.pathname === '/favicon.ico') return redirect(origin + '/favicon.ico')
    if (url.pathname === '/robots.txt') return new Response('User-agent: *\nAllow: /\nSitemap: ' + siteOrigin + '/sitemap.xml\n', {headers:{'Content-Type':'text/plain; charset=utf-8'}})
    if (url.pathname === '/sitemap.xml') return new Response(sitemap(),{headers:{'Content-Type':'application/xml; charset=utf-8'}})

    const {lang,path} = parseLocale(url)
    const oldLanguage = url.searchParams.get('lang')
    if (path === '/product') {
      let itemPath = ''
      try { itemPath = productPath(url.searchParams.get('source') ?? featuredPath) } catch {}
      return itemPath ? redirect(origin + itemPath) : new Response('Not found',{status:404})
    }
    if (path === '/catalog') {
      const query = url.searchParams.get('q')?.trim().slice(0,80)
      if (query) return redirect(origin + '/search.html?' + new URLSearchParams({keywords:query,channelid:'2'}))
      const category = categories.find(item => item[0] === url.searchParams.get('category'))
      if (category) return redirect(origin + category[1])
    }
    if (oldLanguage && Object.hasOwn(locales,oldLanguage)) {
      url.searchParams.delete('lang')
      return redirect(withLocale(oldLanguage,path) + url.search)
    }

    const guide = path.startsWith('/guides/') ? guides.find(entry => path === '/guides/' + entry.slug) : null
    if (!pages.has(path) && !guide) return new Response('Not found',{status:404})
    const t = siteText(lang)
    let status = 200
    let page
    if (path === '/') {
      const sources = await Promise.allSettled([list('/AllProducts/'),list('/shoes/'),list('/accessories/')])
      const latest = sources[0].value ?? []
      const feature = latest.find(item=>item.path === featuredPath) ?? latest[0]
      const art = [sources[1].value?.[0] ?? latest[1],feature,sources[2].value?.[0] ?? latest[2]]
      page = {title:'CNFansSP ' + t.catalog,body:home(lang,t,latest,art)}
      if (!latest.length) status = 502
    } else if (path === '/catalog') {
      let items = []
      try { items = await list('/AllProducts/') } catch { status = 502 }
      if (!items.length) status = 502
      page = {title:t.catalog,body:catalogPage(lang,t,items,url.searchParams.get('page'))}
    } else if (path === '/categories') {
      page = {title:t.categories,body:categoriesPage(lang,t)}
    } else if (path === '/faq') {
      page = {title:t.faq,body:faqPage(lang,t,url.searchParams.get('topic'))}
    } else if (path === '/guides') {
      page = {title:t.guides,body:guidesPage(lang,t)}
    } else {
      page = guidePage(lang,t,guide)
    }
    const robots = shouldIndex(lang,path,status) ? 'index, follow' : 'noindex, follow'
    return new Response(shell(lang,t,{...page,path},url,robots),{status,headers:{
      'Content-Type':'text/html; charset=utf-8','X-Robots-Tag':robots,'X-Content-Type-Options':'nosniff',
      'Referrer-Policy':'strict-origin-when-cross-origin','Cache-Control':status === 200 ? 'public, max-age=60' : 'no-store'
    }})
  }
}
