import { pages } from './pages.js'
import { locales, localePath } from './locales.js'

const main = 'https://www.cnfanssp.com'
const allowedOrigins = new Set([main, 'https://cnfanssp.com'])
const detailPath = /^\/AllProducts\/(\d+)\.html$/i
const categories = ['shoes','hoodies-sweaters','t-shirts','jackets','pants-shorts','headwear','accessories','short-sets','electronics','other-stuff','jersey']
const entities = { '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }
const escape = value => String(value ?? '').replace(/[&<>"']/g, character => entities[character])
const origin = 'https://usfanspicks.shop'
const languageRoots = Object.keys(locales).map(localePath)

function indexable(path) {
  return languageRoots.includes(path) || !languageRoots.some(root => root !== '/' && path.startsWith(root))
}

function pageResponse(html, path, host, env) {
  const production = host === new URL(origin).host
  const canonical = indexable(path) ? path : path.replace(/^\/[^/]+/, '')
  const analytics = env.GA4_MEASUREMENT_ID
  const googleTag = production && /^G-[A-Z0-9]+$/.test(analytics ?? '')
    ? `<script async src="https://www.googletagmanager.com/gtag/js?id=${analytics}"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${analytics}');</script>` : ''
  const tags = `<link rel="canonical" href="${origin + canonical}">${googleTag}`
  const headers = { 'Content-Type':'text/html; charset=utf-8' }
  if (!production) headers['X-Robots-Tag'] = 'noindex, nofollow'
  return new Response(html.replace('</head>', () => tags + '</head>'), { headers })
}

async function mainPage(path) {
  const response = await fetch(new URL(path, main), {
    signal: AbortSignal.timeout(6500),
    headers: { Accept:'text/html' },
  })
  if (!response.ok || (response.url && !allowedOrigins.has(new URL(response.url).origin))) {
    throw new Error('Main catalog unavailable')
  }
  return response.text()
}

function mainUrl(value, pattern) {
  if (typeof value !== 'string' || !value) return null
  const url = new URL(value, main)
  return allowedOrigins.has(url.origin) && pattern.test(url.pathname) ? url.href : null
}

export function readCatalog(html) {
  const products = []
  for (const match of html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    let data
    try { data = JSON.parse(match[1]) } catch { continue }
    if (data['@type'] !== 'ItemList' || !Array.isArray(data.itemListElement)) continue
    for (const row of data.itemListElement) {
      const item = row.item
      if (item?.['@type'] !== 'Product' || typeof item.name !== 'string') continue
      const href = mainUrl(row.url ?? item.url ?? item.offers?.url, detailPath)
      const image = mainUrl(item.image, /^\/uploads\//i)
      if (!href || !image) continue
      const id = new URL(href).pathname.match(detailPath)[1]
      products.push({ id, href, image, name:item.name, price:item.offers?.price, currency:item.offers?.priceCurrency })
      if (products.length === 8) break
    }
    if (products.length) break
  }
  const available = new Set([...html.matchAll(/location\.href\s*=\s*'\/([a-z-]+)\/'/gi)].map(match => match[1].toLowerCase()))
  return { products, categories: categories.filter(category => available.has(category)) }
}

function card(product, lang, copy, index) {
  const number = Number(product.price)
  const price = product.price != null && product.price !== '' && Number.isFinite(number) && /^[A-Z]{3}$/.test(product.currency)
    ? new Intl.NumberFormat(lang, { style:'currency', currency:product.currency }).format(number) : ''
  return `<article class="card"><a class="picture" href="${escape(product.href)}"><img src="${escape(product.image)}" alt="${escape(product.name)}" loading="${index < 4 ? 'eager' : 'lazy'}" decoding="async"></a><div class="card-body"><h3>${escape(product.name)}</h3>${price ? `<p class="price">${escape(price)}</p>` : ''}<div class="card-actions"><a href="${escape(product.href)}">${escape(copy.details)}</a><a href="/buy/${product.id}">${escape(copy.buy)}</a></div></div></article>`
}

function marketplaceItem(html) {
  for (const match of html.matchAll(/href=["'](https?:\/\/[^"'\s]+)["']/gi)) {
    let url
    try { url = new URL(match[1].replaceAll('&amp;', '&')) } catch { continue }
    const host = url.hostname
    if (/(^|\.)weidian\.com$/.test(host) && url.pathname === '/item.html') {
      const id = url.searchParams.get('itemID')
      if (/^\d+$/.test(id ?? '')) return { channel:3, id }
    }
    if (/(^|\.)(taobao|tmall)\.com$/.test(host) && url.pathname === '/item.htm') {
      const id = url.searchParams.get('id')
      if (/^\d+$/.test(id ?? '')) return { channel:2, id }
    }
    const offer = url.pathname.match(/^\/offer\/(\d+)\.html$/)
    if (/(^|\.)1688\.com$/.test(host) && offer) return { channel:1, id:offer[1] }
  }
  return null
}

export default {
  async fetch(request, env = {}) {
    const { pathname:path, host } = new URL(request.url)
    if (path === '/robots.txt') {
      return new Response('User-agent: *\nAllow: /\nSitemap: ' + origin + '/sitemap.xml\n', { headers:{ 'Content-Type':'text/plain; charset=utf-8' } })
    }
    if (path === '/sitemap.xml') {
      const urls = Object.keys(pages).filter(indexable).sort().map(url => '<url><loc>' + origin + url + '</loc></url>').join('')
      return new Response('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + urls + '</urlset>', { headers:{ 'Content-Type':'application/xml; charset=utf-8' } })
    }
    const buy = path.match(/^\/buy\/(\d+)\/?$/)
    if (buy) {
      const detail = '/AllProducts/' + buy[1] + '.html'
      try {
        const item = marketplaceItem(await mainPage(detail))
        if (item) return Response.redirect('https://www.usfans.com/product/' + item.channel + '/' + item.id, 302)
      } catch {}
      return Response.redirect(main + detail, 302)
    }

    const normalized = path.endsWith('/') ? path : path + '/'
    if (!Object.hasOwn(pages, normalized)) return new Response('Not found', { status:404 })
    const lang = Object.keys(locales).find(code => localePath(code) === normalized)
    if (!lang) return pageResponse(pages[normalized], normalized, host, env)

    const copy = locales[lang]
    let catalog = { products:[], categories:[] }
    try { catalog = readCatalog(await mainPage('/AllProducts/')) } catch { /* Show the main-site link during an outage. */ }
    const cards = catalog.products.map((product, index) => card(product, lang, copy, index)).join('')
    const links = catalog.categories.map(category => `<a href="${main}/${category}/">${escape(copy.labels[categories.indexOf(category)])}</a>`).join('')
    const fallback = `<p class="error"><a href="${main}/AllProducts/">${escape(copy.unavailable)}</a></p>`
    const html = pages[normalized]
      .replace('<!-- live-categories -->', () => links || `<a href="${main}/AllProducts/">${escape(copy.browse)}</a>`)
      .replace('<!-- live-products -->', () => cards || fallback)
    return pageResponse(html, normalized, host, env)
  }
}
