import { readFile } from 'node:fs/promises'

const origin = 'https://www.cnfanssp.com'
function sourceURL(path) {
  if (!path) return
  const url = new URL(path, origin)
  if (url.origin === origin) return url.href
}

export async function loadCatalog() {
  const html = process.env.CNFANSSP_PREVIEW_HTML
    ? await readFile(process.env.CNFANSSP_PREVIEW_HTML, 'utf8')
    : await fetch(origin, { signal: AbortSignal.timeout(12000) }).then(response => {
        if (!response.ok) throw new Error(`CNFansSP returned ${response.status}`)
        return response.text()
      })
  const categories = [...html.matchAll(/<a href="([^"]+)" class="category-item[^"]*">[\s\S]*?<h3>(.*?)<\/h3>/g)]
    .map(([, url, name]) => ({ url: sourceURL(url), name })).filter(item => item.url)
  const lists = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
    .map(([, data]) => JSON.parse(data))
  const products = lists.find(list => list['@type'] === 'ItemList')?.itemListElement
    .map(({ item }) => ({
      name: item.name,
      image: sourceURL(item.image),
      url: sourceURL(item.url),
      price: item.offers?.price,
      currency: item.offers?.priceCurrency,
    })).filter(item => item.url) ?? []
  if (!products.length || !categories.length) throw new Error('CNFansSP catalog missing')
  return { categories, products }
}
