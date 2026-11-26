import { languages, languagePath } from '../lib/languages.js';
import { articles } from '../lib/editorial.js';

export function GET({ site }) {
  const pages = ['', 'spreadsheet/', 'categories/', 'faq/', 'guides/',
    ...articles.map(article => 'guides/' + article.slug + '/')];
  const paths = [...pages, ...Object.keys(languages).filter(code => code !== 'en')
    .flatMap(code => ['', 'spreadsheet/', 'categories/'].map(page => languagePath(code) + page))];
  const urls = paths.map(page => '<url><loc>' + new URL(page, site).href + '</loc></url>').join('');
  return new Response('<?xml version="1.0" encoding="UTF-8"?>' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + urls + '</urlset>', {
      headers: { 'Content-Type': 'application/xml; charset=utf-8' },
    });
}
