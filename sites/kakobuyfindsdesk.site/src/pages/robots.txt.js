import { canonicalUrl, isProduction } from '../lib/seo.js';

export function GET() {
  const sitemap = isProduction ? `\nSitemap: ${canonicalUrl('/sitemap.xml')}\n` : '';
  return new Response(`User-agent: *\nDisallow:\n${sitemap}`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
