import { languages } from '../copy.mjs'
import { route } from '../navigation.mjs'
import { articles } from '../editorial.mjs'
export function GET({ site }) {
  const pages = ['', 'catalog', 'categories', 'faq', 'articles', ...articles.map(({slug}) => 'articles/' + slug)]
  const entries = Object.keys(languages).flatMap(lang => pages.map(page => '<url><loc>' + new URL(route(lang, page), site).href + '</loc></url>'))
  return new Response('<?xml version="1.0" encoding="UTF-8"?>' + '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + entries.join('') + '</urlset>', { headers: { 'Content-Type': 'application/xml' } })
}
