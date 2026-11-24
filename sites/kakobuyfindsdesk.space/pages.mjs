import { articles, faqs, articleInLocale } from './editorial.mjs';
import { languageOrder, languageName, languageTag, localizedPath, localizedText, localizedCategory } from './locales.mjs';

export const sourceOrigin = 'https://www.cnfanssp.com';
const favicon = sourceOrigin + '/favicon.ico';
const appleIcon = sourceOrigin + '/public/upload/system/2018/05/24/8c675d3dae162ebc1936f3ab43d58960.png';
const navigation = [['home','/'], ['catalog','/spreadsheet/'], ['categories','/categories/'], ['faq','/faq/'], ['guides','/articles/']];
const xmlEscapes = { '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' };
const esc = value => String(value ?? '').replace(/[&<>"']/g, char => xmlEscapes[char]);
const secureLink = (label, url, css = '') => '<a class="' + esc(css) + '" href="' + esc(url) + '">' + esc(label) + '</a>';
const brand = base => '<a href="' + base + '" class="brand" aria-label="CnbuySheet"><span>Cnbuy</span><span>Sheet</span></a>';

export function getRoute(pathname) {
  const components = pathname.split('/').filter(Boolean);
  const locale = languageOrder.includes(components[0]) ? components.shift() : 'en';
  const path = '/' + (components.length ? components.join('/') + '/' : '');
  const section = navigation.find(([,navPath]) => path === navPath)?.[0];
  if (section) return { locale, path, section };
  if (components.length === 2 && components[0] === 'articles') {
    const article = articles.find(item => item.slug === components[1]);
    if (article) return { locale, path, section: 'article', article };
  }
  return null;
}

function searchForm(t) {
  return '<form class="search" role="search" action="/search/" method="get">' +
    '<span class="magnifier" aria-hidden="true"></span><input type="search" name="q" required maxlength="100" placeholder="' +
    esc(t.placeholder) + '" aria-label="' + esc(t.placeholder) + '"><button class="button search-button">' + esc(t.search) + '</button></form>';
}

function top(t, locale, path) {
  const root = localizedPath(locale);
  const nav = navigation.map(([label, href]) => '<a href="' + localizedPath(locale,href) + '"' +
    (path === href || (label === 'guides' && path.startsWith('/articles/')) ? ' aria-current="page"' : '') +
    '>' + esc(t[label]) + '</a>').join('');
  const options = languageOrder.map(option => '<option value="' + localizedPath(option,path) + '" lang="' +
    languageTag(option) + '"' + (option === locale ? ' selected' : '') + '>' +
    esc(languageName(option)) + ' · ' + option.toUpperCase() + '</option>').join('');
  return '<header class="header"><div class="container header-inner">' + brand(root) +
    '<nav aria-label="' + esc(t.home) + '">' + nav + '</nav><div class="header-actions">' +
    '<label class="language"><span aria-hidden="true">◎</span><select id="language" aria-label="' + esc(t.language) +
    '">' + options + '</select></label>' +
    secureLink(t.signup, sourceOrigin + '/reg', 'button signup') + '</div></div></header>';
}

function foot(t, locale) {
  return '<footer><div class="container footer-inner">' + brand(localizedPath(locale)) + '<span>' +
    esc(t.footer) + '</span>' + secureLink(t.visit, sourceOrigin + '/') + '</div></footer>';
}

function pageHeading(title, summary = '') {
  return '<header class="page-heading"><h1>' + esc(title) + '</h1>' + (summary ? '<p>' + esc(summary) + '</p>' : '') + '</header>';
}

function catalogGrid(t, locale, isHome) {
  const title = isHome ? t.latest : t.catalog;
  const sort = isHome ? '' : '<label class="sort-label"><span>' + esc(t.sort) +
    '</span><select id="sort" aria-label="' + esc(t.sort) + '"><option value="recent">' + esc(t.newest) +
    '</option><option value="low">' + esc(t.low) + '</option><option value="high">' + esc(t.high) + '</option></select></label>';
  const cta = isHome ? secureLink(t.viewAll, localizedPath(locale,'/spreadsheet/'),'button secondary') : sort;
  const titleTag = isHome ? 'h2' : 'h1';
  return '<section class="spreadsheet" aria-labelledby="catalog-title"><div class="catalog-header"><div><' +
    titleTag + ' id="catalog-title" tabindex="-1">' + esc(title) + '</' + titleTag + '><p id="results" role="status"></p></div>' + cta +
    '</div><div class="grid" id="grid" aria-busy="true" data-view="' + (isHome ? 'home' : 'catalog') +
    '" data-text="' + esc(JSON.stringify(t)) + '"><p class="status">' + esc(t.loading) + '</p></div>' +
    (isHome ? '' : '<div class="pagination" id="pagination"></div>') +
    '<noscript>' + secureLink(t.browse, sourceOrigin + '/AllProducts/', 'button secondary') + '</noscript></section>';
}

function card(label, url, summary = '') {
  return '<a class="reading-card" href="' + esc(url) + '"><strong>' + esc(label) + '</strong>' +
    (summary ? '<span>' + esc(summary) + '</span>' : '') + '</a>';
}

function readingStrip(title, url, cards, label, lang) {
  return '<section class="reading-strip"><div class="reading-head"><h2>' + esc(title) + '</h2>' +
    secureLink(label, url) + '</div><div class="reading-grid" lang="' + lang + '">' + cards.join('') + '</div></section>';
}

const guidePath = (locale, article) => localizedPath(locale, '/articles/' + article.slug + '/');
const getFAQ = (faq, locale) => locale === 'zh' ? faq.zh : faq.en;

function homeContent(t, locale) {
  const faqPath = localizedPath(locale,'/faq/');
  const articlesPath = localizedPath(locale,'/articles/');
  const title = t.heading.split('|').map(esc).join('<br>');
  return '<section class="hero" aria-labelledby="hero-title"><div class="hero-copy"><h1 id="hero-title">' + title +
    '</h1><p' + (['en','zh','de','es','fr'].includes(locale) ? '' : ' lang="en"') + '>' + esc(t.intro) +
    '</p>' + searchForm(t) + '</div><div class="hero-media" id="hero-media" aria-hidden="true"></div></section>' +
    '<div class="catalog-shortcuts">' + secureLink(t.browse, localizedPath(locale,'/spreadsheet/'), 'button signup') +
    secureLink(t.browseCategories, localizedPath(locale,'/categories/'),'button secondary') + '</div>' +
    catalogGrid(t,locale,true) + '<div class="reading-home">' +
    readingStrip(t.faq,faqPath,faqs.slice(0,3).map(faq => card(getFAQ(faq,locale)[0],faqPath + '#' + faq.id)),t.viewAll,locale === 'zh' ? 'zh-Hans' : 'en') +
    readingStrip(t.guides,articlesPath,articles.slice(0,3).map(guide => card(articleInLocale(guide,locale).title, guidePath(locale,guide))),t.viewAll,locale === 'zh' ? 'zh-Hans' : 'en') + '</div>';
}

function categoriesPage(t, locale, categories) {
  const categoriesHtml = (categories ?? []).map(item => secureLink(localizedCategory(locale,item.key,item.label),
    new URL('/' + encodeURIComponent(item.key) + '/',sourceOrigin).href,'category-tile')).join('');
  return pageHeading(t.categories) + '<div class="category-grid">' + categoriesHtml + '</div>' +
    (categoriesHtml ? '' : '<p class="status">' + esc(t.error) + '</p>' +
      secureLink(t.browse, sourceOrigin + '/AllProducts/', 'button secondary'));
}

function faqPage(t, locale) {
  return pageHeading(t.faq) + '<div class="faq-list" lang="' + (locale === 'zh' ? 'zh-Hans' : 'en') + '">' +
    faqs.map(faq => {
      const [question, answer] = getFAQ(faq,locale);
      return '<details name="faq" id="' + faq.id + '"><summary>' + esc(question) + '</summary><div class="faq-answer"><p>' +
        esc(answer) + '</p>' + secureLink(articleInLocale(articles[faq.guide],locale).title,guidePath(locale,articles[faq.guide])) + '</div></details>';
    }).join('') + '</div>';
}

function articlesPage(t, locale) {
  return pageHeading(t.guides) + '<div class="article-index" lang="' + editorLanguage(locale) + '">' + articles.map(guide => {
    const translated = articleInLocale(guide,locale);
    return card(translated.title,guidePath(locale,guide),translated.summary);
  }).join('') + '</div>';
}

const editorLanguage = locale => locale === 'zh' ? 'zh-Hans' : 'en';

function articlePage(t, locale, guide) {
  const list = guide.references.map(([label, href]) => '<li>' + secureLink(label,href) + '</li>').join('');
  const sections = guide.sections.map(([title, paragraph]) =>
    '<section><h2>' + esc(title) + '</h2><p>' + esc(paragraph) + '</p></section>').join('');
  return '<div class="article-wrap">' + secureLink(t.guides,localizedPath(locale,'/articles/'),'text-back') +
    '<article lang="' + editorLanguage(locale) + '">' + pageHeading(guide.title,guide.summary) + sections +
    '<h2>' + esc(t.sources) + '</h2><ul class="source-list">' + list + '</ul></article></div>';
}

export function renderPage(origin, route, categories) {
  const { locale, path, section } = route;
  const article = route.article ? articleInLocale(route.article,locale) : null;
  const t = localizedText(locale);
  const title = (article?.title ?? (section === 'home' ? 'CNFansSP ' + (locale === 'en' ? 'Shopping Spreadsheet' : t.catalog) : t[section])) + (section === 'home' ? '' : ' | CNFansSP');
  const description = article?.summary ?? (section === 'faq'
    ? (locale === 'zh' ? '24 个有关 CNFansSP 商品搜索、购买链接、注册和验货的常见问题。' : '24 answers about CNFansSP search, product links, registration, and shopping-agent orders.')
    : t.intro);
  const editorial = ['faq','guides','article'].includes(section);
  const canonicalLocale = editorial && locale !== 'zh' ? 'en' : locale;
  const canonical = origin + localizedPath(canonicalLocale,path);
  const variants = editorial ? ['en','zh'] : languageOrder;
  const alternate = variants.length ? [...variants,'x-default'].map(option => '<link rel="alternate" hreflang="' +
    languageTag(option) + '" href="' + esc(origin + localizedPath(option === 'x-default' ? 'en' : option,path)) + '">').join('') : '';
  const articleTags = article ? '<meta property="og:type" content="article">' +
    article.intent.split(', ').map(term => '<meta property="article:tag" content="' + esc(term) + '">').join('') : '';
  const content = {
    home: () => homeContent(t,locale),
    catalog: () => '<div class="catalog-search">' + searchForm(t) + '</div>' + catalogGrid(t,locale,false),
    categories: () => categoriesPage(t,locale,categories),
    faq: () => faqPage(t,locale),
    guides: () => articlesPage(t,locale),
    article: () => articlePage(t,locale,article)
  }[section]();
  return '<!doctype html><html lang="' + languageTag(locale) + '"><head><meta charset="utf-8">' +
    '<meta name="viewport" content="width=device-width, initial-scale=1"><title>' + esc(title) + '</title>' +
    '<meta name="description" content="' + esc(description) + '"><meta property="og:title" content="' + esc(title) +
    '"><meta property="og:description" content="' + esc(description) + '"><meta property="og:url" content="' + esc(canonical) + '">' +
    articleTags + '<link rel="canonical" href="' + esc(canonical) + '">' + alternate +
    '<link rel="icon" type="image/x-icon" href="' + favicon + '"><link rel="apple-touch-icon" href="' + appleIcon + '">' +
    '<link rel="stylesheet" href="/catalog.css"><script type="module" src="/catalog.js"></script></head><body>' +
    top(t,locale,path) + '<main class="container page-' + section + '">' + content + '</main>' + foot(t,locale) + '</body></html>';
}
