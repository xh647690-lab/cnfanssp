const main = 'https://www.cnfanssp.com';
export { main };

let catalog;
export function loadCatalog() {
  catalog ??= fetchCatalog();
  return catalog;
}

async function fetchCatalog() {
  const response = await fetch(main, { signal: AbortSignal.timeout(25000) });
  if (!response.ok) throw new Error(`CNFansSP returned HTTP ${response.status}`);
  const html = await response.text();
  const data = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
    .map((match) => JSON.parse(match[1]))
    .find((entry) => entry['@type'] === 'ItemList');
  const products = data.itemListElement.slice(0, 8).map(({ item }) => ({
    name: item.name,
    image: onMain(item.image),
    url: onMain(item.url),
  }));
  const categories = [...html.matchAll(/<a href="([^"]+)" class="category-item glass-card">[\s\S]*?<h3>([^<]+)<\/h3>/g)]
    .map(([, url, label]) => ({ url: onMain(url), label }));
  if (!products.length || !categories.length) throw new Error('CNFansSP catalog data is missing');
  return { products, categories };
}

function onMain(path) {
  const url = new URL(path, main);
  if (url.origin !== main && url.origin !== 'https://cnfanssp.com') {
    throw new Error('Unexpected catalog origin');
  }
  return url.href;
}
