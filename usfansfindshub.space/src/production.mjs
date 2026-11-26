import worker from './worker.mjs'
import { languages, pageURL, pageSizes } from './ui.mjs'
import { faqs, guides } from './content.mjs'

const domain = 'https://usfansfindshub.space'
const paths = ['', 'catalogue','categories','faq','guides', ...guides.map(g => 'guides/' + g.slug)]
for (const [name,total] of [['faq',faqs.length],['guides',guides.length]]) {
  for (let number = 2; number <= Math.ceil(total/pageSizes[name]); number++) paths.push(name+'/page/'+number)
}

export default {
  async fetch(request, env = {}) {
    const url = new URL(request.url)
    const canonicalHost = url.origin === domain
    if (url.pathname === '/robots.txt') {
      const body = canonicalHost ? 'User-agent: *\nAllow: /\nSitemap: '+domain+'/sitemap.xml\n' : 'User-agent: *\nDisallow: /\n'
      return new Response(body,{headers:{'Content-Type':'text/plain; charset=utf-8'}})
    }
    if (url.pathname === '/sitemap.xml') {
      const entries = Object.keys(languages).flatMap(lang => paths.map(path => '<url><loc>'+domain+pageURL(lang,path)+'</loc></url>'))
      return new Response('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+entries.join('')+'</urlset>', {
        headers:{'Content-Type':'application/xml; charset=utf-8'}
      })
    }
    const response = await worker.fetch(request)
    if (!canonicalHost || !response.ok) return response
    const headers = new Headers(response.headers)
    headers.delete('X-Robots-Tag')
    const segments = url.pathname.split('/').filter(Boolean)
    const language = Object.hasOwn(languages, segments[0]) ? segments.shift() : 'en'
    const route = segments.join('/')
    const alternates = Object.keys(languages).map(lang =>
      '<link rel="alternate" hreflang="'+lang+'" href="'+domain+pageURL(lang,route)+'">').join('')
    const canonical = '<link rel="canonical" href="'+domain+pageURL(language,route)+'">'
    const id = /^G-[A-Z0-9]+$/.test(env.GA4_MEASUREMENT_ID ?? '') ? env.GA4_MEASUREMENT_ID : null
    const analytics = id ? '<script async src="https://www.googletagmanager.com/gtag/js?id='+id+'"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag("js",new Date());gtag("config","'+id+'");</script>' : ''
    return new HTMLRewriter()
      .on('meta[name=robots]',{element(el){el.remove()}})
      .on('head',{element(el){el.append(canonical+alternates+analytics,{html:true})}})
      .transform(new Response(response.body,{status:response.status,headers}))
  }
}
