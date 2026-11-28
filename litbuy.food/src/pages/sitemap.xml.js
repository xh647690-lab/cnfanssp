import { languages, languagePath } from '../lib/languages.mjs';
import { guides } from '../lib/editorial.mjs';

export function GET({ site }) {
  const paths = [
    ...Object.keys(languages).flatMap((language) => {
      const home = languagePath(language);
      return [home, home + 'spreadsheet/', home + 'categories/'];
    }),
    '/faq/', '/guides/',
    ...guides.map(({ slug }) => `/guides/${slug}/`),
  ];
  const urls = paths.map((path) => `<url><loc>${new URL(path, site).href}</loc></url>`);
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`, {
    headers: { 'Content-Type': 'application/xml; charset=UTF-8' },
  });
}
