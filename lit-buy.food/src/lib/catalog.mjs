import { load } from 'cheerio';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

export const origin = 'https://www.cnfanssp.com';
export const register = 'https://litbuy.com/register';
const read = promisify(execFile);

async function page(path) {
  const { stdout } = await read('curl', [
    '--fail', '--silent', '--show-error', '--location', '--max-time', '22',
    new URL(path, origin).href,
  ], { maxBuffer: 2_000_000 });
  return load(stdout);
}

function sourceUrl(path) {
  if (!path) return;
  const url = new URL(path, origin);
  if (url.origin === origin) return url.href;
}

function cards($) {
  return $('.product-card[data-id]').toArray().map((element) => {
    const card = $(element);
    return {
      url: sourceUrl(card.find('a.product-image').attr('href')),
      image: sourceUrl(card.find('img').attr('data-src')),
      title: card.find('.product-name').text().trim(),
      price: card.find('.product-price').first().text().trim(),
    };
  }).filter(({url, image, title}) => url && image && title);
}

async function loadCatalog() {
  const [$, detail] = await Promise.all([page('/AllProducts/'), page('/AllProducts/6667.html')]);
  const categories = $('.filter-btn[onclick]').toArray().flatMap((element) => {
    const button = $(element);
    const path = button.attr('onclick').match(/href='(\/[^']+)'/)?.[1];
    const url = sourceUrl(path);
    const title = button.find('.btn-text').text().trim();
    return url && title && path.toLowerCase() !== '/allproducts/' ? [{ url, title }] : [];
  });
  const recent = cards($);
  const featured = recent.find(({url}) => url.endsWith('/6667.html'));
  const original = new URL(detail('.weidian-btn').first().attr('href'));
  const id = original.searchParams.get('itemID');
  if (!featured || categories.length < 4 || original.hostname !== 'weidian.com' || id !== '7632511460') {
    throw new Error('The CNFansSP catalogue or featured item could not be verified.');
  }
  const purchase = new URL('https://litbuy.com/products/details');
  purchase.search = new URLSearchParams({ channel: 'WEIDIAN', id }).toString();
  const mixed = await Promise.allSettled(categories.slice(0, 6).map(({url}) => page(url)));
  const selections = mixed.flatMap((result) => result.status === 'fulfilled' ? cards(result.value).slice(0, 1) : []);
  const products = [...new Map([...selections, ...recent].map((product) => [product.url, product])).values()].slice(0, 8);
  return { categories, products, featured: { ...featured, id, purchase: purchase.href } };
}

let catalog;
export function getCatalog() {
  return catalog ??= loadCatalog();
}
