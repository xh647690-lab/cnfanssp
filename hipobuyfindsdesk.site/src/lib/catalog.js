export const origin = 'https://www.cnfanssp.com';
export const catalogUrl = origin + '/AllProducts/';

function mainSiteUrl(path) {
  const url = new URL(path, origin);
  if (url.origin !== origin) throw new Error('Unexpected catalog URL origin');
  return url.href;
}

const response = await fetch(catalogUrl, { signal: AbortSignal.timeout(20000) });
if (!response.ok) throw new Error('CNFansSP returned HTTP ' + response.status);
const html = await response.text();
const lists = Array.from(html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g),
  match => JSON.parse(match[1]));
const catalog = lists.find(entry => entry['@type'] === 'ItemList');
if (!catalog?.itemListElement?.length) throw new Error('CNFansSP returned no catalog data');

export const products = catalog.itemListElement.slice(0, 8).map(({ url, item }) => ({
  name: item.name,
  url: mainSiteUrl(url),
  image: mainSiteUrl(item.image),
}));
