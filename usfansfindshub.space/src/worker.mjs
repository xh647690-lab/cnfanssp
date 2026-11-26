import { languages, pageSizes, render } from './ui.mjs'
import { faqs, guides } from './content.mjs'

const origin = 'https://www.cnfanssp.com'
const featured = {
  url: origin + '/AllProducts/6667.html',
  image: origin + '/uploads/allimg/20260430/1-26043021142K50.jpg',
  weidianId: '7632511460'
}

function sourceURL(value) {
  if (!value) return null
  try {
    const url = new URL(value, origin)
    return url.origin === origin ? url : null
  } catch {
    return null
  }
}

async function catalogue() {
  const response = await fetch(origin + '/AllProducts/', {
    signal: AbortSignal.timeout(3500),
    headers: { Accept:'text/html', 'User-Agent':'Mozilla/5.0' }
  })
  if (!response.ok) throw new Error('CNFansSP returned ' + response.status)
  const items = []
  let current
  const parser = new HTMLRewriter()
    .on('.product-card', {element(el) {
      current = {title:''}
      if (items.length < 8) items.push(current)
      el.onEndTag(() => { current = undefined })
    }})
    .on('.product-card a.product-image', {element(el) {
      const url = sourceURL(el.getAttribute('href'))
      if (current && url) current.url = url.href
    }})
    .on('.product-card .product-image img', {element(el) {
      const url = sourceURL(el.getAttribute('data-src') || el.getAttribute('src'))
      if (current && url?.pathname.startsWith('/uploads/')) current.image = url.href
      if (current) current.title = el.getAttribute('alt') ?? ''
    }})
  await parser.transform(response).arrayBuffer()
  const valid = items.filter(item => item.url && item.title)
  if (!valid.length) throw new Error('No CNFansSP product cards')
  const sample = valid.find(item => item.url === featured.url)
  if (sample) sample.weidianId = featured.weidianId
  return valid
}

function resolvePage(pathname) {
  const segments = pathname.split('/').filter(Boolean)
  const language = Object.hasOwn(languages, segments[0]) ? segments.shift() : 'en'
  const path = segments.join('/')
  if (!path) return { language, page:'home', path }
  if (['catalogue', 'categories', 'faq', 'guides'].includes(path)) return { language, page:path, path }
  const pagination = path.match(/^(faq|guides)\/page\/([2-9]|[1-9][0-9]+)$/)
  if (pagination) {
    const [,page,value] = pagination
    const number = Number(value)
    const total = page === 'faq' ? faqs.length : guides.length
    if (number <= Math.ceil(total/pageSizes[page])) return { language, page, path, number }
  }
  if (segments.length === 2 && segments[0] === 'guides') {
    const guide = guides.find(entry => entry.slug === segments[1])
    if (guide) return { language, page:'article', path, guide }
  }
  return null
}

export default {
  async fetch(request) {
    const route = resolvePage(new URL(request.url).pathname)
    if (!route) return new Response('Not found', { status:404 })
    let items = [], failed = false
    if (['home', 'catalogue'].includes(route.page)) {
      try {
        items = await catalogue()
      } catch (error) {
        console.error(error.message)
        items = [featured]
        failed = true
      }
    }
    return new Response(render({ ...route, items, failed }), {
      headers:{'Content-Type':'text/html; charset=utf-8','X-Robots-Tag':'noindex, follow','Cache-Control':'no-store'}
    })
  }
}
