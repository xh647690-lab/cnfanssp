import { languages } from '../lib/languages.mjs';
import { guides } from '../lib/editorial.mjs';

export function GET() {
  const paths = ['', 'spreadsheet', 'categories', 'faq', 'guides', ...guides.map(({ slug }) => 'guides/' + slug)];
  const entries = Object.keys(languages).flatMap((lang) => paths.map((path) => {
    const route = [lang === 'en' ? '' : lang, path].filter(Boolean).join('/');
    return '<url><loc>https://lit-buy.food/' + (route ? route + '/' : '') + '</loc></url>';
  }));
  return new Response('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + entries.join('') + '</urlset>', {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
