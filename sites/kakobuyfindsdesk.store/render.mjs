const navPaths = ['', 'spreadsheet/', 'categories/', 'faq/', 'guides/'];
const datePublished = '2026-11-24';
const english = localeRows.en;
const localizedEditorial = ['en', 'zh'];

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
  })[char]);
}

function localePath(language, path = '') {
  return '/' + (language === 'en' ? '' : language + '/') + path;
}

function languageLayout(language) {
  const row = localeRows[language];
  return row.length === english.length ? row : [...row, ...extraLabels[language]];
}

function searchForm(words) {
  return `<form class="search" action="${origin}/search.html" method="get" role="search">
    <input type="hidden" name="channelid" value="2">
    <input type="search" name="keywords" maxlength="100" required aria-label="${escapeHtml(words[11])}" placeholder="${escapeHtml(words[10])}">
    <button type="submit">${escapeHtml(words[11])}</button>
  </form>`;
}

function sourceLink(path, label, css = '') {
  return `<a class="${css}" href="${origin}${path}">${escapeHtml(label)}</a>`;
}

function categoriesList(language, compact) {
  const names = categoryLabels[language] || categoryLabels.en;
  return `<ul class="category-list${compact ? ' compact' : ''}">${categories.map((category, index) =>
    `<li>${sourceLink('/' + category + '/', names[index])}</li>`).join('')}</ul>`;
}

function sourceCitation(key) {
  const [label, url] = editorialSources[key];
  return `<a href="${escapeHtml(url)}">${escapeHtml(label)}</a>`;
}

function guideCards(language, entries, compact = false) {
  const contentLanguage = language === 'zh' ? 'zh' : 'en';
  return `<ul class="editorial-cards${compact ? ' compact' : ''}" lang="${contentLanguage}">${entries.map(guide => {
    const [title, summary] = guide[contentLanguage];
    return `<li><a href="${localePath(language, 'guides/' + guide.slug + '/')}"><strong>${escapeHtml(title)}</strong>${compact ? '' : `<span>${escapeHtml(summary)}</span>`}</a></li>`;
  }).join('')}</ul>`;
}

function faqCards(language) {
  const contentLanguage = language === 'zh' ? 'zh' : 'en';
  return `<ul class="editorial-cards compact" lang="${contentLanguage}">${faqs.slice(0, 3).map(faq =>
    `<li><a href="${localePath(language, 'faq/')}#${faq[0]}"><strong>${escapeHtml(faq[contentLanguage === 'zh' ? 3 : 1])}</strong></a></li>`).join('')}</ul>`;
}

function searchAndCatalogue(language, words, home) {
  return `<section class="${home ? 'hero' : 'page-head'}">
    <div class="wrap ${home ? 'hero-layout' : ''}">
      <div><h1>${escapeHtml(words[home ? 8 : 2])}</h1><p class="lede">${escapeHtml(words[9])}</p>${searchForm(words)}</div>
      ${home ? `<article class="featured" hidden><a class="featured-image"><img alt=""></a><div class="featured-meta"><div><small>${escapeHtml(words[14])}</small><b id="featured-title"></b></div><a class="buy" href="/buy/7632511460">${escapeHtml(words[15])}</a></div></article>` : ''}
    </div>
  </section>
  <section class="wrap section">
    ${home ? `<div class="section-head"><h2>${escapeHtml(words[3])}</h2><a href="${localePath(language, 'categories/')}">${escapeHtml(words[3])}</a></div>${categoriesList(language, true)}<div class="section-head divider"><h2>${escapeHtml(words[2])}</h2>${sourceLink(catalogue, words[13])}</div>` : ''}
    <div class="grid" id="items" data-limit="${home ? 4 : 8}" aria-busy="true"></div>
    <p id="catalogue-status" role="status"></p>
    ${home ? '' : `<p class="catalogue-more">${sourceLink(catalogue, words[13], 'register')}</p>`}
  </section>${home ? `<section class="wrap section home-editorial">
    <div><div class="section-head"><h2>${escapeHtml(words[16])}</h2><a href="${localePath(language, 'faq/')}">${escapeHtml(words[4])}</a></div>${faqCards(language)}</div>
    <div><div class="section-head"><h2>${escapeHtml(words[17])}</h2><a href="${localePath(language, 'guides/')}">${escapeHtml(words[5])}</a></div>${guideCards(language, guides.slice(0, 3), true)}</div>
  </section>` : ''}`;
}

function faqPage(language, words) {
  const index = language === 'zh' ? 3 : 1;
  return `<section class="wrap reading section"><h1>${escapeHtml(words[4])}</h1>${englishNotice(language)}
    <div class="faq-list" lang="${index === 3 ? 'zh' : 'en'}">${faqs.map(faq => `<details id="${faq[0]}">
      <summary>${escapeHtml(faq[index])}</summary><div><p>${escapeHtml(faq[index + 1])}</p>${sourceCitation(faq[5])}</div>
    </details>`).join('')}</div>
  </section>`;
}

function englishNotice(language) {
  return localizedEditorial.includes(language)
    ? '' : '<p class="language-note" lang="en">Editorial content is available in English and Simplified Chinese.</p>';
}

function guidesPage(language, words) {
  return `<section class="wrap reading section"><h1>${escapeHtml(words[5])}</h1>${englishNotice(language)}
    ${guideCards(language, guides)}
  </section>`;
}

function guidePage(language, words, guide) {
  const contentLanguage = language === 'zh' ? 'zh' : 'en';
  const [title, description, ...sections] = guide[contentLanguage];
  return `<article class="wrap reading article section" lang="${contentLanguage}">
    <a class="back" href="${localePath(language, 'guides/')}">${escapeHtml(words[5])}</a>
    <h1>${escapeHtml(title)}</h1><p class="intro">${escapeHtml(description)}</p>
    <time datetime="${datePublished}">${new Intl.DateTimeFormat(language, {dateStyle:'medium', timeZone:'UTC'}).format(new Date(datePublished))}</time>
    ${englishNotice(language)}
    ${sections.map(([heading, body]) => `<section><h2>${escapeHtml(heading)}</h2><p>${escapeHtml(body)}</p></section>`).join('')}
    <div class="article-sources"><h2>${language === 'zh' ? '参考来源' : 'Sources'}</h2><ul>${guide.sources.map(key => `<li>${sourceCitation(key)}</li>`).join('')}</ul></div>
  </article>`;
}

function render(url) {
  const [, first, ...remaining] = url.pathname.split('/');
  const language = Object.hasOwn(localeRows, first) ? first : 'en';
  const segments = (first === language && Object.hasOwn(localeRows, first) ? remaining : [first, ...remaining]).filter(Boolean);
  const path = segments.length ? segments.join('/') + '/' : '';
  const legacy = url.searchParams.get('lang');
  if (Object.hasOwn(localeRows, legacy ?? '') && legacy !== language) {
    return Response.redirect(new URL(localePath(legacy, path), url), 302);
  }
  if (url.pathname !== localePath(language, path)) {
    return Response.redirect(new URL(localePath(language, path), url), 308);
  }
  const words = languageLayout(language);
  const guide = segments.length === 2 && segments[0] === 'guides' ? guides.find(item => item.slug === segments[1]) : null;
  const editorial = ['faq/', 'guides/'].includes(path) || guide;
  const canonicalLanguage = editorial && !localizedEditorial.includes(language) ? 'en' : language;
  let main;
  let title;
  let description = words[9];
  switch (path) {
    case '': main = searchAndCatalogue(language, words, true); title = words[8]; break;
    case 'spreadsheet/': main = searchAndCatalogue(language, words, false); title = words[2]; break;
    case 'categories/':
      main = `<section class="wrap reading section"><h1>${escapeHtml(words[3])}</h1>${searchForm(words)}${categoriesList(language, false)}</section>`; title = words[3]; break;
    case 'faq/': main = faqPage(language, words); title = words[4]; break;
    case 'guides/': main = guidesPage(language, words); title = words[5]; break;
    default:
      if (!guide) return new Response('Not found', {status:404});
      main = guidePage(language, words, guide);
      [title, description] = guide[language === 'zh' ? 'zh' : 'en'];
  }
  const menu = navPaths.map((page, i) =>
    `<a href="${localePath(language, page)}"${page === path || (page === 'guides/' && guide) ? ' aria-current="page"' : ''}>${escapeHtml(words[i + 1])}</a>`).join('');
  const alternates = editorial ? localizedEditorial : Object.keys(localeRows);
  const metadata = alternates.map(code =>
    `<link rel="alternate" hreflang="${code === 'zh' ? 'zh-Hans' : code}" href="${new URL(localePath(code, path), url).href}">`).join('');
  const options = Object.entries(localeRows).map(([code, row]) =>
    `<option value="${localePath(code, path)}"${code === language ? ' selected' : ''}>${escapeHtml(row[0])}</option>`).join('');
  const structured = guide ? `<script type="application/ld+json">${JSON.stringify({
    '@context':'https://schema.org', '@type':'Article', headline:title, description,
    datePublished, inLanguage:language === 'zh' ? 'zh-Hans' : 'en',
    mainEntityOfPage:new URL(localePath(canonicalLanguage, path), url).href
  }).replaceAll('<', '\\u003c')}</script>` : '';
  const html = `<!doctype html><html lang="${language === 'zh' ? 'zh-Hans' : language}">
  <head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="description" content="${escapeHtml(description)}">
  <title>${escapeHtml(title)} | KakoBuy Finds</title>
  <link rel="icon" href="https://kakobuy.com/favicon.ico" type="image/x-icon">
  <link rel="canonical" href="${new URL(localePath(canonicalLanguage, path), url).href}">${metadata}
  <link rel="alternate" hreflang="x-default" href="${new URL(localePath('en', path), url).href}">${structured}
  <link rel="stylesheet" href="/styles.css"><script src="/client.js" defer></script><script async src="https://www.googletagmanager.com/gtag/js?id=G-C89Z99V3LG"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-C89Z99V3LG');</script></head>
  <body data-product-label="${escapeHtml(words[12])}"><header><div class="wrap nav">
  <a class="logo" href="${localePath(language)}"><img src="https://nstatic.kakobuy.com/banner/202602/22/1080564df2b8f006455d32460b53b7d9.png" width="642" height="162" alt="KakoBuy"></a>
  <nav aria-label="${escapeHtml(words[1])}">${menu}</nav>
  <div class="tools"><select id="language" aria-label="${escapeHtml(words[7])}">${options}</select>${sourceLink('/reg', words[6], 'register')}</div>
  </div></header><main>${main}</main>
  <footer><div class="wrap"><a class="logo" href="${localePath(language)}"><img src="https://nstatic.kakobuy.com/banner/202602/22/1080564df2b8f006455d32460b53b7d9.png" width="642" height="162" alt="KakoBuy"></a>${sourceLink('/', words[13], 'source')}</div></footer>
  </body></html>`;
  return new Response(html, { headers:{ 'content-type':'text/html; charset=utf-8' } });
}
