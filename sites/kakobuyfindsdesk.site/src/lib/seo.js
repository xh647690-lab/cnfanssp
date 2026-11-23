import { articles } from './editorial.js';
import { languages } from './languages.js';

export const origin = 'https://kakobuyfindsdesk.site';
export const isProduction = process.env.CF_PAGES === '1' && process.env.CF_PAGES_BRANCH === 'main';
export const homePaths = Object.fromEntries(
  Object.keys(languages).map((code) => [code, code === 'en' ? '/' : `/${code}/`]),
);
export const canonicalUrl = (path) => new URL(path, origin).href;
export const sitemapPaths = [
  ...Object.values(homePaths),
  '/finds/', '/categories/', '/about/', '/faq/', '/guides/',
  ...articles.map(({ slug }) => `/guides/${slug}/`),
];
