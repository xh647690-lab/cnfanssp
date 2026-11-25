const routes = ['spreadsheet/', 'categories/', 'faq/', 'guides/'];
const categorySlugs = ['shoes','hoodies-sweaters','t-shirts','jackets','pants-shorts','headwear','accessories',null,'electronics','other-stuff','Jersey'];
const statusText = {
  zh: ['正在加载主站商品…','暂时无法加载商品，请打开主站目录。','FAQ 和指南正文目前提供英文版。'],
  en: ['Loading products…','The catalogue is unavailable. Open the source catalogue to browse.','Guides and FAQ answers are available in English.']
};
const buyText = {en:'Buy on HipoBuy',zh:'前往 HipoBuy 购买',de:'Bei HipoBuy kaufen',es:'Comprar en HipoBuy',fr:'Acheter sur HipoBuy',it:'Acquista su HipoBuy',pl:'Kup w HipoBuy',pt:'Comprar na HipoBuy',ro:'Cumpără pe HipoBuy',sv:'Köp på HipoBuy',nl:'Koop op HipoBuy',da:'Køb på HipoBuy',fi:'Osta HipoBuysta',el:'Αγορά στο HipoBuy',cs:'Koupit na HipoBuy',hu:'Vásárlás a HipoBuyon',bg:'Купи в HipoBuy',sk:'Kúpiť na HipoBuy',hr:'Kupi na HipoBuyu',sl:'Kupi na HipoBuyu',lt:'Pirkti per HipoBuy',lv:'Pirkt HipoBuy',et:'Osta HipoBuyst',ga:'Ceannaigh ar HipoBuy',mt:'Ixtri fuq HipoBuy'};

function localePath(locale, route = '') {
  return '/' + (locale === 'en' ? '' : locale + '/') + route;
}

function categoryList(locale) {
  return `<ul class="categories">${categorySlugs.map((slug, i) => slug
    ? `<li><a href="${origin}/${slug}/">${categoryLabels[locale][i]}</a></li>` : '').join('')}</ul>`;
}

function sourceLink(key) {
  const [label, url] = sources[key];
  return `<a href="${url}">${label}</a>`;
}

function searchForm(words) {
  return `<form class="search" action="${origin}/search.html" method="get" role="search">
    <input type="hidden" name="channelid" value="2">
    <input name="keywords" type="search" placeholder="${words[10]}" aria-label="${words[10]}" maxlength="100" required>
    <button type="submit">${words[11]}</button>
  </form>`;
}

function recent(locale, words) {
  return `<div class="recent">
    <section aria-label="${words[16]}"><div class="section-head"><h2>${words[16]}</h2><a href="${localePath(locale,'faq/')}">${words[4]}</a></div>
      <ul class="editorial-cards" lang="en">${faqs.slice(0,3).map(([id,title]) => `<li><a href="${localePath(locale,'faq/')}#${id}">${title}</a></li>`).join('')}</ul>
    </section>
    <section aria-label="${words[17]}"><div class="section-head"><h2>${words[17]}</h2><a href="${localePath(locale,'guides/')}">${words[5]}</a></div>
      <ul class="editorial-cards" lang="en">${articles.slice(0,3).map(([id,title]) => `<li><a href="${localePath(locale,'guides/' + id + '/')}">${title}</a></li>`).join('')}</ul>
    </section>
  </div>`;
}

function catalogueSection(words, locale, limit) {
  const [loading] = statusText[locale] || statusText.en;
  return `<section id="catalogue"><div class="section-head"><h2>${words[2]}</h2><a href="${origin}/AllProducts/">${words[13]}</a></div>
    <p id="status" role="status">${loading}</p><div id="grid" class="grid" data-limit="${limit}" aria-busy="true"></div>
  </section>`;
}

function homePage(locale, words) {
  return `<section class="hero"><div class="hero-copy"><h1>HipoBuy Finds</h1><p>${words[9]}</p>${searchForm(words)}
    <a class="hero-jump" href="${localePath(locale,'categories/')}">${words[3]}</a></div>
    <article class="feature" data-url="${origin + detailPath}"><a href="${origin + detailPath}" aria-label="${words[12]}" class="feature-photo"><img hidden alt=""></a><div class="feature-caption"><div><span>${words[14]}</span><strong id="feature-name">7632511460</strong></div><a class="primary" href="${buy}">${buyText[locale]}</a></div></article>
  </section>
  <section id="categories"><div class="section-head"><h2>${words[3]}</h2></div>${categoryList(locale)}</section>
  ${catalogueSection(words,locale,8)}${recent(locale,words)}`;
}

function faqPage(words) {
  return `<section class="reading"><h1>HipoBuy ${words[4]}</h1><div lang="en" class="faq-list">
    ${faqs.map(([id, question, answer, source]) => `<details name="faq" id="${id}"><summary>${question}</summary><p>${answer}</p><p class="reference">${sourceLink(source)}</p></details>`).join('')}
  </div></section>`;
}

function guideIndex(locale, words) {
  return `<section class="reading"><h1>HipoBuy ${words[5]}</h1><ul lang="en" class="guide-list">
    ${articles.map(([id,title,description]) => `<li><a href="${localePath(locale,'guides/' + id + '/')}"><strong>${title}</strong><span>${description}</span></a></li>`).join('')}
  </ul></section>`;
}

function articlePage(article, locale, words) {
  const [,title,description,refs,sections] = article;
  return `<article class="reading article"><a href="${localePath(locale,'guides/')}">${words[5]}</a><div lang="en">
    <h1>${title}</h1><p class="article-intro">${description}</p>
    ${sections.map(([heading, paragraph]) => `<section><h2>${heading}</h2><p>${paragraph}</p></section>`).join('')}
    <h2>Sources</h2><ul class="references">${refs.map(key => `<li>${sourceLink(key)}</li>`).join('')}</ul>
  </div></article>`;
}

function escapeAttr(value) {
  return String(value).replace(/[&"<>]/g, symbol => ({'&':'&amp;','"':'&quot;','<':'&lt;','>':'&gt;'})[symbol]);
}

function render(url, env) {
  const segments = url.pathname.split('/').filter(Boolean);
  const locale = Object.hasOwn(localeRows, segments[0]) ? segments.shift() : 'en';
  const route = segments.length ? segments.join('/') + '/' : '';
  const row = localeRows[locale];
  const words = row.length === 18 ? row : [...row, ...extraLabels[locale]];
  const lang = locale === 'zh' ? 'zh-Hans' : locale;
  const nav = routes.map((path, index) => {
    const active = route === path || (path === 'guides/' && route.startsWith(path));
    return `<a href="${localePath(locale,path)}"${active ? ' aria-current="page"' : ''}>${words[2 + index]}</a>`;
  }).join('');
  let title = 'HipoBuy Spreadsheet | Product Finds and Buying Guides';
  let description = 'Browse the live CNFansSP catalogue, HipoBuy buying guides and frequently asked questions.';
  let body;
  if (!route) body = homePage(locale,words);
  else if (route === 'spreadsheet/') {
    title = 'HipoBuy ' + words[2];
    body = `<section class="reading"><h1>${title}</h1>${searchForm(words)}${catalogueSection(words,locale,12)}</section>`;
  } else if (route === 'categories/') {
    title = 'HipoBuy ' + words[3];
    body = `<section class="reading"><h1>${title}</h1>${searchForm(words)}<div class="category-page">${categoryList(locale)}</div></section>`;
  } else if (route === 'faq/') {
    title = 'HipoBuy ' + words[4];
    body = faqPage(words);
  } else if (route === 'guides/') {
    title = 'HipoBuy ' + words[5];
    body = guideIndex(locale,words);
  } else {
    const article = articles.find(([id]) => route === 'guides/' + id + '/');
    if (!article) return new Response('Not found', {status:404});
    title = article[1];
    description = article[2];
    body = articlePage(article,locale,words);
  }
  const languageOptions = Object.entries(localeRows).map(([code, entry]) =>
    `<option value="${localePath(code,route)}"${code === locale ? ' selected' : ''}>${entry[0]} · ${code.toUpperCase()}</option>`
  ).join('');
  const [,error, englishNotice] = statusText[locale] || statusText.en;
  const notice = locale !== 'en' && (route === 'faq/' || route.startsWith('guides/'))
    ? `<p class="language-note" lang="${locale === 'zh' ? 'zh-Hans' : 'en'}">${englishNotice}</p>` : '';
  const editorial = route === 'faq/' || route.startsWith('guides/');
  const canonicalPath = localePath(editorial ? 'en' : locale,route);
  if (url.pathname !== localePath(locale,route)) {
    return Response.redirect(new URL(localePath(locale,route) + url.search, url), 308);
  }
  const canonical = production + canonicalPath;
  const robots = url.origin === production && (!editorial || locale === 'en') ? 'index, follow' : 'noindex, follow';
  const alternates = editorial ? '' : Object.keys(localeRows).map(code =>
    `<link rel="alternate" hreflang="${code === 'zh' ? 'zh-Hans' : code}" href="${production + localePath(code,route)}">`
  ).join('');
  const ga = url.origin === production && /^G-[A-Z0-9]+$/.test(env.GA4_MEASUREMENT_ID || '')
    ? `<script async src="https://www.googletagmanager.com/gtag/js?id=${env.GA4_MEASUREMENT_ID}"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${env.GA4_MEASUREMENT_ID}');</script>` : '';
  const verification = /^[A-Za-z0-9_-]+$/.test(env.GSC_VERIFICATION || '')
    ? `<meta name="google-site-verification" content="${env.GSC_VERIFICATION}">` : '';
  const bing = /^[A-Fa-f0-9]+$/.test(env.BING_VERIFICATION || '')
    ? `<meta name="msvalidate.01" content="${env.BING_VERIFICATION}">` : '';
  return new Response(`<!doctype html><html lang="${lang}">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="${robots}">${verification}${bing}${ga}<meta name="description" content="${escapeAttr(description)}"><title>${title} | CNFansSP</title><link rel="icon" href="/favicon.png" type="image/png"><link rel="canonical" href="${canonical}">${alternates}<link rel="stylesheet" href="/styles.css"><script src="/client.js" defer></script></head>
<body data-details="${escapeAttr(words[12])}" data-error="${escapeAttr(error)}">
<header><div class="wrap bar"><a class="brand" href="${localePath(locale)}" aria-label="HipoBuy Finds"><img src="/favicon.png" width="34" height="34" alt=""> HipoBuy Finds</a><div class="controls"><label class="sr-only" for="language">${words[7]}</label><select id="language" aria-label="${words[7]}">${languageOptions}</select><a class="primary" href="https://hipobuy.com/register">${words[6]}</a></div><nav aria-label="${words[1]}">${nav}</nav></div></header>
<main class="wrap">${notice}${body}</main>
<footer class="wrap"><a href="${origin}/">CNFansSP</a> · <a href="https://hipobuy.com/">HipoBuy</a></footer></body></html>`,{
    headers:{'content-type':'text/html; charset=utf-8','x-robots-tag':robots}
  });
}
