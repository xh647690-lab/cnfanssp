const source = 'https://www.cnfanssp.com';
const signup = 'https://usfans.com/register';
const escape = value => String(value ?? '').replace(/[&<>"']/g, char => ({
  '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;',
})[char]);

function sourceURL(value) {
  if (!value) return '';
  const url = new URL(value, source);
  return url.origin === source ? url.href : '';
}

async function readCatalog(path) {
  const response = await fetch(source + path, {signal: AbortSignal.timeout(8000)});
  if (!response.ok) throw new Error('Source unavailable');
  const products = [];
  const categories = [];
  const parsed = new HTMLRewriter()
    .on('.category-item', {element(node) {
      categories.push({url: sourceURL(node.getAttribute('href')), name: ''});
    }})
    .on('.category-item h3', {text(chunk) {
      if (categories.length) categories.at(-1).name += chunk.text;
    }})
    .on('.product-card', {element() { products.push({price: ''}); }})
    .on('.product-card .product-image', {element(node) {
      products.at(-1).url = sourceURL(node.getAttribute('href'));
    }})
    .on('.product-card .product-image img', {element(node) {
      const product = products.at(-1);
      product.name = node.getAttribute('alt');
      product.image = sourceURL(node.getAttribute('data-src') || node.getAttribute('src'));
    }})
    .on('.product-card .product-price', {text(chunk) {
      products.at(-1).price += chunk.text;
    }})
    .transform(response);
  await parsed.text();
  return {
    products: products.filter(item => item.name && item.url).slice(0, 12),
    categories: categories.filter(item => item.name.trim() && item.url),
  };
}

const route = (lang, page = '') => (lang === 'en' ? '/' : '/' + lang + '/') + (page ? page + '/' : '');
const categoryLinks = categories => categories.map(item =>
  '<a href="' + escape(item.url) + '">' + escape(item.name.trim()) + '</a>').join('');

const productCards = (items, details) => items.map(item =>
  '<a class="card" href="' + escape(item.url) + '">' +
  (item.image ? '<img loading="lazy" src="' + escape(item.image) + '" alt="">' : '') +
  '<div><h3>' + escape(item.name) + '</h3><p>' + escape(item.price.trim()) + '</p><span>' +
  escape(details) + '</span></div></a>').join('');

const logo = 'https://media.usfans.com/webresource/v1/brand/6ebaf586041d4ff8ad34d66a35d3dc88.webp';
const favicon = 'https://usfans.com/favicon.ico';
const site = 'https://usfanssheetguide.space';
const questions = faqGroups.flatMap(([, group]) => group);
const navigation = ['', 'spreadsheet', 'categories', 'faq', 'articles'];
const articlesByPage = new Map(articles.map(article => ['articles/' + article[0], article]));

function render(lang, page, data, topic, production, measurementId) {
  const [language, home, catalog, categories, faq, guides, join, languageLabel, search, placeholder, details, latest] = locales[lang];
  const [, , , , , , register, headline, intro, , all, , unavailable, about, disclaimer, credit] = languages[lang] ?? languages.en;
  const article = articlesByPage.get(page);
  const title = article?.[1] ?? ({faq, articles:guides, spreadsheet:catalog, categories, about}[page] || 'USFans Spreadsheet');
  const faqPage = route(lang, 'faq');
  const articlesPage = route(lang, 'articles');
  const guideLink = ([slug, name, summary]) => '<a class="editorial-card" href="' + articlesPage + slug + '/"><strong>' +
    escape(name) + '</strong><span>' + escape(summary) + '</span></a>';
  const faqLink = ([id, name]) => '<a class="editorial-card" href="' + faqPage + '?topic=' + id + '#' + id + '">' + escape(name) + '</a>';
  const section = (label, href, cards) => '<section class="contents"><div class="heading"><h2><a href="' + href + '">' +
    label + '</a></h2></div><div class="editorial-grid" lang="en">' + cards + '</div></section>';
  const homeEditorial = section(faq, faqPage, questions.slice(-3).reverse().map(faqLink).join('')) +
    section(guides, articlesPage, articles.slice(-3).reverse().map(guideLink).join(''));
  const faqBody = faqGroups.map(([group, items]) => '<details class="faq-group"' +
    (items.some(([id]) => id === topic) ? ' open' : '') + '><summary>' + escape(group) + '</summary>' +
    items.map(([id, question, answer]) => '<details class="faq-question" id="' + id + '"' +
      (id === topic ? ' open' : '') + '><summary>' + escape(question) + '</summary><p>' + escape(answer) + '</p></details>').join('') + '</details>').join('');
  const articleBody = article ? '<p class="intro">' + escape(article[2]) + '</p>' + article[4].map(([subtitle, body]) =>
    '<section><h2>' + escape(subtitle) + '</h2><p>' + escape(body) + '</p></section>').join('') +
    '<p><a href="' + article[3] + '">Source and further reading</a></p>' : '';
  const nav = navigation.map((key,index) => '<a href="' + route(lang,key) + '"' +
    (page === key || (key === 'articles' && article) ? ' aria-current="page"' : '') + '>' +
    [home,catalog,categories,faq,guides][index] + '</a>').join('');
  const localeOptions = Object.entries(locales).map(([key,[name]]) =>
    '<a lang="' + key + '" hreflang="' + key + '" href="' + route(key,page) +
    (topic ? '?topic=' + encodeURIComponent(topic) + '#' + encodeURIComponent(topic) : '') + '"' +
    (key === lang ? ' aria-current="true"' : '') + '><span>' + name + '</span><small>' + key.toUpperCase() + '</small></a>').join('');
  const form = '<form role="search" action="' + source + '/search.html"><input name="channelid" type="hidden" value="2"><input name="keywords" type="search" required aria-label="' + placeholder + '" placeholder="' + placeholder + '"><button>' + search + '</button></form>';
  const categoryList = '<div class="categories">' + categoryLinks(data.categories) + '</div>';
  const productGrid = data.products.length ? '<div class="grid">' + productCards(data.products, details) + '</div>'
    : '<p role="status">' + unavailable + '</p>';
  const hero = '<section class="hero"><h1>USFans Spreadsheet</h1><p class="eyebrow">' + headline + '</p><p>' + intro + '</p>' + form + '</section>';
  const list = '<section class="contents"><div class="heading"><h2>' + latest + '</h2><a href="' +
    source + '/AllProducts/">' + all + '</a></div>' + productGrid + '</section>';
  const fallback = '<p><a href="' + source + '/AllProducts/">' + all + '</a></p>';
  const content = {
    '': hero + (data.categories.length ? '<section class="contents"><h2>' + categories + '</h2>' + categoryList + '</section>' : '') + list + homeEditorial,
    spreadsheet: '<section class="contents"><h1>' + catalog + '</h1>' + form + '</section>' + list,
    categories: '<section class="contents"><h1>' + categories + '</h1>' + (data.categories.length ? categoryList : fallback) + '</section>',
    faq: '<section class="contents editorial"><h1>' + faq + '</h1><div lang="en">' + faqBody + '<p><a href="' + officialHelp + '">USFans Help Center</a></p></div></section>',
    articles: '<section class="contents editorial"><h1>' + guides + '</h1><div class="editorial-grid guide-index" lang="en">' + [...articles].reverse().map(guideLink).join('') + '</div></section>',
    about: '<section class="contents"><h1>' + about + '</h1><p>' + disclaimer + '</p><p><a href="' + signup + '">' + register + '</a></p></section>',
  }[page] ?? '<article class="contents editorial" lang="en"><a href="' + articlesPage + '">All USFans guides</a><h1>' + escape(title) + '</h1>' + articleBody + '</article>';
  const description = article?.[2] ?? (page === 'faq' || page === 'articles' ? 'USFans ordering, warehouse QC and international shipping guides.' : intro);
  const alternates = production && !topic ? '<link rel="canonical" href="' + site + route(lang,page) + '">' +
    (page === 'faq' || page.startsWith('articles') ? '' : Object.keys(locales).map(key =>
      '<link rel="alternate" hreflang="' + key + '" href="' + site + route(key,page) + '">').join('')) : '';
  const robots = production && !topic && (lang === 'en' || !page.startsWith('articles') && page !== 'faq') ? '' : '<meta name="robots" content="noindex">';
  const analytics = production && /^G-[A-Z0-9]+$/.test(measurementId ?? '') ?
    '<script async src="https://www.googletagmanager.com/gtag/js?id=' + measurementId + '"></script>' +
    '<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag("js",new Date());gtag("config","' + measurementId + '");</script>' : '';
  return '<!doctype html><html lang="' + lang + '"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">' + robots + analytics + '<meta name="description" content="' + escape(description) + '"><title>' + escape(title) + (page ? ' | USFans Spreadsheet' : '') + '</title><link rel="icon" href="' + favicon + '"><link rel="stylesheet" href="/site.css">' + alternates + '</head><body>' +
    '<header><div class="top wrap"><a class="brand" aria-label="USFans Spreadsheet" href="' + route(lang) + '"><img src="' + logo + '" alt="USFans" width="120"></a>' +
    '<nav>' + nav + '</nav><div class="actions"><details><summary aria-label="' + languageLabel + '"><span>' + language + '</span> <small>' + lang.toUpperCase() + '</small></summary><div class="languages">' + localeOptions +
    '</div></details><a class="register" href="' + signup + '">' + (languages[lang] ? register : join + ' USFans') + '</a></div></div></header><main class="wrap">' + content +
    '</main><footer class="wrap"><a href="' + source + '/">' + credit + '</a><p>' + disclaimer + '</p></footer></body></html>';
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const production = url.hostname === new URL(site).hostname;
    if (url.pathname === '/robots.txt') {
      const body = production ? 'User-agent: *\nAllow: /\nSitemap: ' + site + '/sitemap.xml\n' : 'User-agent: *\nDisallow: /\n';
      return new Response(body, {headers:{'Content-Type':'text/plain; charset=utf-8'}});
    }
    if (url.pathname === '/sitemap.xml') {
      if (!production) return new Response('Not found', { status: 404 });
      const paths = [...navigation, ...articlesByPage.keys()].map(page => route('en', page));
      const xml = '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' +
        paths.map(path => '<url><loc>' + site + path + '</loc></url>').join('') + '</urlset>';
      return new Response(xml, {headers:{'Content-Type':'application/xml; charset=utf-8'}});
    }
    if (url.pathname === '/site.css') {
      return new Response(styles, {headers:{'Content-Type':'text/css; charset=utf-8'}});
    }
    const segments = url.pathname.split('/').filter(Boolean);
    const lang = Object.hasOwn(locales, segments[0]) ? segments.shift() : 'en';
    const page = segments.join('/');
    if (!navigation.includes(page) && page !== 'about' && !articlesByPage.has(page)) {
      return new Response('Page not found', {status: 404});
    }
    let data = {categories:[], products:[]};
    if (['', 'spreadsheet', 'categories'].includes(page)) {
      try {
        data = await readCatalog(page === 'spreadsheet' ? '/AllProducts/' : '/');
      } catch (error) {
        console.warn('CNFansSP catalog:', error.message);
      }
    }
    const topic = url.searchParams.get('topic');
    return new Response(render(lang,page,data,topic,production,env?.GA4_MEASUREMENT_ID ?? 'G-MCVF9K3F6H'), {headers:{
      'Content-Type':'text/html; charset=utf-8',
      ...(!production && {'X-Robots-Tag':'noindex'}),
    }});
  },
};
