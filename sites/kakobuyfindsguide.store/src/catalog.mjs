const source = 'https://www.cnfanssp.com';
const categories = /^(?:AllProducts|shoes|hoodies-sweaters|t-shirts|jackets|pants-shorts|headwear|accessories|short-sets|electronics|other-stuff|jersey)$/;
const detailPath = /^\/[a-z0-9-]+\/\d{1,10}\.html$/i;
const entities = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ' };

function decode(value = '') {
  return value.replace(/&(#x[\da-f]+|#\d+|\w+);/gi, (entity, key) => {
    if (key[0] !== '#') return entities[key] ?? entity;
    const code = key[1].toLowerCase() === 'x' ? parseInt(key.slice(2), 16) : Number(key.slice(1));
    return code > 0 && code <= 0x10ffff ? String.fromCodePoint(code) : entity;
  });
}

function readText(value) {
  return decode((value ?? '').replace(/<[^>]*>/g, '')).trim();
}

function classText(html, name) {
  const field = html.match(new RegExp('<([a-z0-9]+)\\b[^>]*class=["\'][^"\']*\\b' + name + '\\b[^"\']*["\'][^>]*>([\\s\\S]*?)<\\/\\1>', 'i'));
  return readText(field?.[2]);
}

function urlFrom(value) {
  if (!value) return null;
  try {
    const url = new URL(decode(value), source);
    return url.protocol === 'https:' && !url.username && !url.password ? url : null;
  } catch {
    return null;
  }
}

function originLink(value) {
  const url = urlFrom(value);
  return url?.origin === source ? url : null;
}

function images(html) {
  return [...new Set([...html.matchAll(/\bdata-src=["']([^"']+)["']/g)]
    .map(match => originLink(match[1])?.href).filter(Boolean))];
}

export function parseCatalog(html) {
  if (!html.includes('product-grid')) throw new Error('Catalog markup unavailable');
  const items = html.split(/<div\s+class=["']product-card\b[^>]*>/i).slice(1).flatMap(card => {
    const end = card.indexOf('class="pagination"');
    if (end >= 0) card = card.slice(0, end);
    const path = originLink(card.match(/<a\b[^>]*href=["']([^"']+)["']/i)?.[1])?.pathname;
    const name = classText(card, 'product-name');
    if (!name || !detailPath.test(path ?? '')) return [];
    return [{ path, name, price: classText(card, 'product-price'), image: images(card)[0] ?? null }];
  });

  const filters = [...html.matchAll(/<button\b[^>]*class="filter-btn[^"]*"[^>]*onclick="window\.location\.href='\/([^/'"]+)\/'"[^>]*>[\s\S]*?<span[^>]*>([\s\S]*?)<\/span>/gi)]
    .filter(match => categories.test(match[1]))
    .map(match => ({ key: match[1], label: readText(match[2]) }));

  const pagination = html.match(/<div\s+class=["']pagination["'][^>]*>([\s\S]*?)<\/div>/i)?.[1] ?? '';
  const nextHref = pagination.match(/<a\s+href=["']([^"']+)["'][^>]*>\s*(?:下一页|Next)\s*<\/a>/i)?.[1];
  const nextUrl = originLink(nextHref);
  const nextPath = nextUrl?.pathname.match(/^\/([^/]+)\/list_(\d{1,6})_(\d{1,5})\/$/);
  const next = nextPath && categories.test(nextPath[1]) ? nextPath[2] + '_' + nextPath[3]
    : nextUrl?.pathname === '/search.html' ? nextUrl.searchParams.get('page') : null;
  return { items, categories: filters, next };
}

export function parseDetail(html, path) {
  const gallery = html.split('class="product-gallery"')[1]?.split('<h1')[0] ?? '';
  const product = html.split('class="product-title"')[1]?.split('class="actions-row"')[0] ?? '';
  const name = readText(product.split('</h1>')[0]?.replace(/^[^>]*>/, ''));
  if (!name) return null;
  const id = classText(product, 'product-id').match(/\d+/)?.[0] ?? null;
  const links = [...product.matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>/gi)]
    .map(link => urlFrom(link[1]))
    .filter(link => link && /(^|\.)(weidian\.com|taobao\.com|tmall\.com|1688\.com)$/.test(link.hostname));
  const category = [...html.matchAll(/<a href='\/([^/']+)\/'>[^<]*<\/a>/g)]
    .find(link => categories.test(link[1]) && link[1] !== 'AllProducts')?.[1] ?? null;
  return { path, name, id, category, price: classText(product, 'product-price'),
    images: images(gallery), purchase: links[0]?.href ?? null, source: new URL(path, source).href };
}

async function getHtml(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 12000);
  try {
    const response = await fetch(url.href, {
      headers: { Accept: 'text/html' },
      redirect: 'manual',
      signal: controller.signal
    });
    if (!response.ok) throw new Error('Upstream HTTP ' + response.status);
    return await response.text();
  } finally {
    clearTimeout(timer);
  }
}

export async function getCatalog(params) {
  const q = (params.get('q') ?? '').trim().slice(0, 100);
  const cat = params.get('category') ?? 'AllProducts';
  const page = params.get('page') ?? '';
  if (!categories.test(cat)) return null;
  if (q && page && !/^\d{1,5}$/.test(page)) return null;
  if (!q && page && !/^\d{1,6}_\d{1,5}$/.test(page)) return null;
  if (q === '7632511460' && !page) {
    const item = await getDetail('/AllProducts/6667.html');
    if (item?.id === q) {
      return { items: [{ path: item.path, name: item.name, price: item.price, image: item.images[0] ?? null }],
        categories: [], next: null };
    }
  }
  const url = new URL(q ? '/search.html' : '/' + cat + '/' + (page ? 'list_' + page + '/' : ''), source);
  if (q) {
    url.searchParams.set('channelid', '2');
    url.searchParams.set('keywords', q);
    if (page) url.searchParams.set('page', page);
  }
  return parseCatalog(await getHtml(url));
}

export async function getDetail(path) {
  if (!detailPath.test(path ?? '')) return null;
  return parseDetail(await getHtml(new URL(path, source)), path);
}
