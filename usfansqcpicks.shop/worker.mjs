import { pages } from './pages.mjs';

const production = 'https://usfansqcpicks.shop';
const origin = 'https://www.cnfanssp.com';
const examplePath = '/AllProducts/6667.html';
const exampleId = '7632511460';
const escape = value => String(value ?? '').replace(/[&<>"']/g, c => (
  {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]
));

function sourceUrl(value) {
  if (!value) return '';
  try {
    const url = new URL(value, origin);
    return url.protocol === 'https:' && ['www.cnfanssp.com','cnfanssp.com'].includes(url.hostname)
      && !url.username && !url.password && !url.port ? url.href : '';
  } catch {
    return '';
  }
}

async function catalog() {
  const response = await fetch(origin + '/', {signal: AbortSignal.timeout(8000)});
  if (!response.ok) throw new Error('Source catalog returned ' + response.status);
  const categories = [], products = [];
  let category, product;
  await new HTMLRewriter()
    .on('#categories a.category-item', {element(e) {
      category = {url:sourceUrl(e.getAttribute('href')), name:''};
      categories.push(category);
    }})
    .on('#categories a.category-item h3', {text(t) {category.name += t.text;}})
    .on('#featured-products .product-card', {element() {
      product = {name:'', price:''};
      products.push(product);
    }})
    .on('#featured-products .product-image', {element(e) {product.url = sourceUrl(e.getAttribute('href'));}})
    .on('#featured-products .product-image img', {element(e) {product.image = sourceUrl(e.getAttribute('data-src'));}})
    .on('#featured-products .product-title h3', {text(t) {product.name += t.text;}})
    .on('#featured-products .product-price', {text(t) {product.price += t.text;}})
    .transform(response).arrayBuffer();
  return {
    categories: categories.filter(item => item.url && item.name.trim()),
    products: products.filter(item => item.url && item.name.trim())
  };
}

function card(item, detail, buy) {
  const {url, image, name, price} = item;
  const purchase = new URL(url).pathname === examplePath
    ? `<a class="buy" href="https://www.usfans.com/product/3/${exampleId}">${escape(buy)}</a>` : '';
  return `<article class="product">
    ${image ? `<a href="${escape(url)}" aria-label="${escape(name)}"><img src="${escape(image)}" loading="lazy" alt="" referrerpolicy="no-referrer"></a>` : ''}
    <div><h3><a href="${escape(url)}">${escape(name.trim())}</a></h3>
    ${price.trim() ? `<p>${escape(price.trim())}</p>` : ''}
    <a href="${escape(url)}">${escape(detail)}</a>
    ${purchase ? '<br>' + purchase : ''}</div>
  </article>`;
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const live = url.origin === production;
    const {pathname} = url;
    if (pathname === '/robots.txt') {
      const rules = live ? 'User-agent: *\nAllow: /\nSitemap: ' + production + '/sitemap.xml\n' : 'User-agent: *\nDisallow: /\n';
      return new Response(rules, {headers:{'content-type':'text/plain; charset=utf-8'}});
    }
    if (pathname === '/sitemap.xml') {
      const paths = Object.keys(pages).filter(path => !/^\/(?:de|es|fr|zh)\/(?:faq|guides)\//.test(path));
      const entries = paths.map(path => '<url><loc>' + production + path + '</loc></url>').join('');
      return new Response('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + entries + '</urlset>', {
        headers:{'content-type':'application/xml; charset=utf-8'}
      });
    }
    const path = pathname.endsWith('/') ? pathname : pathname + '/';
    if (!Object.hasOwn(pages, path)) return new Response('Page not found', {status:404});
    if (live && path !== pathname) return Response.redirect(production + path + url.search, 308);

    const headers = new Headers({'content-type':'text/html; charset=utf-8'});
    if (!live) headers.set('x-robots-tag','noindex, follow');
    if (request.method === 'HEAD') return new Response(null, {headers});
    const canonical = path.replace(/^\/(?:de|es|fr|zh)\/(?=(?:faq|guides)\/)/, '/');
    const measurement = live ? 'G-VG61TFMY5D' : '';
    const tag = /^G-[A-Z0-9]{6,20}$/.test(measurement)
      ? `<script async src="https://www.googletagmanager.com/gtag/js?id=${measurement}"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${measurement}');</script>` : '';
    const metadata = live ? `<link rel="canonical" href="${production+canonical}">${tag}` : '';
    const html = pages[path].replace('</head>', () => metadata + '</head>');
    const page = new Response(html, {headers});
    if (!/^(?:\/(?:de|es|fr|zh))?\/(?:$|categories\/$|spreadsheet\/)/.test(path)) return page;
    let data;
    try {
      data = await catalog();
    } catch (error) {
      console.error(String(error));
      return page;
    }
    return new HTMLRewriter()
      .on('#categories', {element(e) {
        if (data.categories.length) e.setInnerContent(data.categories.map(
          item => `<a href="${escape(item.url)}">${escape(item.name.trim())}</a>`
        ).join(''), {html:true});
      }})
      .on('#products', {element(e) {
        if (!data.products.length) return;
        const limit = Number(e.getAttribute('data-limit'));
        const offset = Number(e.getAttribute('data-offset'));
        const detail = e.getAttribute('data-detail'), buy = e.getAttribute('data-buy');
        e.setInnerContent(data.products.slice(offset,offset+limit).map(item => card(item,detail,buy)).join(''), {html:true});
      }})
      .transform(page);
  }
};
