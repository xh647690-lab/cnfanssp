import pages from './pages.mjs';
const origin = 'https://www.cnfanssp.com';
const escape = value => String(value ?? '').replace(/[&<>"']/g, char => ({
  '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
})[char])
const plain = value => value.replace(/<[^>]*>/g, '').replaceAll('&amp;', '&').trim()
const itemPath = /\/AllProducts\/\d+\.html/i
const attrs = (html, name) => html.match(new RegExp('\\b' + name + '\\s*=\\s*["\']([^"\']+)["\']', 'i'))?.[1]
function imageIn(html) {
  const tag = html.match(/<img\b[^>]*>/i)?.[0]
  if (!tag) return ''
  const src = attrs(tag, 'data-src') || attrs(tag, 'data-original') || attrs(tag, 'src')
  if (!src) return ''
  try {
    const url = new URL(src, origin)
    return url.protocol === 'https:' && ['cnfanssp.com', 'www.cnfanssp.com'].includes(url.hostname) ? url.href : ''
  } catch { return '' }
}

async function loadPage(path) {
  const response = await fetch(origin + path, {signal: AbortSignal.timeout(6500), cf:{cacheTtl:120}})
  if (!response.ok) throw new Error('Catalog unavailable')
  return response.text()
}

function readProducts(html) {
  const result = new Map()
  const cards = html.split(/<div\b[^>]*\bclass=["'][^"']*\bproduct-card\b[^"']*["'][^>]*>/gi).slice(1)
  for (const card of cards) {
    const path = card.match(itemPath)?.[0]
    const heading = card.match(/<h[2-5]\b[^>]*>([\s\S]*?)<\/h[2-5]>/i)?.[1]
    const price = card.match(/<[^>]*class=["'][^"']*\bproduct-price\b[^"']*["'][^>]*>([\s\S]*?)<\//i)?.[1]
    if (path && heading && !result.has(path)) {
      result.set(path, {path, name: plain(heading), photo: imageIn(card), price: price ? plain(price) : ''})
    }
  }
  return [...result.values()]
}


export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname.replace(/\/$/, '') || '/';
    if (/^\/(?:de\/|es\/|fr\/|zh\/)?search$/.test(path)) {
      const keywords = (url.searchParams.get('keywords') || '').trim();
      if (!keywords) return Response.redirect(new URL(path.replace(/search$/, 'catalog/'), url), 302);
      if (keywords === '7632511460') return Response.redirect(origin + '/AllProducts/6667.html', 302);
      const search = new URL('/search.html', origin);
      search.search = new URLSearchParams({channelid:'2', keywords});
      return Response.redirect(search.href, 302);
    }
    if (path === '/robots.txt' || path === '/sitemap.xml') return env.ASSETS.fetch(request);
    const page = pages[path];
    if (!page) return new Response('Not found', {status:404});
    let cards = '';
    if (page.includes('<!--CATALOG-->')) try {
      const detail = page.match(/data-detail="([^"]+)"/)?.[1] || 'View details';
      const products = readProducts(await loadPage('/AllProducts/')).slice(0, 12);
      cards = products.map(({path,name,photo,price}) => `<a class="card" href="${origin}${escape(path)}">${photo ? `<img src="${escape(photo)}" alt="" loading="lazy">` : ''}<div><h3>${escape(name)}</h3><p>${escape(price)}</p><span>${detail}</span></div></a>`).join('');
    } catch {}
    return new Response(page.replace('<!--CATALOG-->', () => cards), {headers:{'content-type':'text/html; charset=utf-8','content-security-policy':"default-src 'none'; style-src 'unsafe-inline'; img-src https://cnfanssp.com https://www.cnfanssp.com https://media.usfans.com https://www.usfans.com; form-action 'self' https://www.cnfanssp.com"}});
  }
};
