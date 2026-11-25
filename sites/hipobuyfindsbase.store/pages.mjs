import { articles, faq } from './editorial.mjs';

const groups = {
  'getting-started': 'Getting started',
  orders: 'Orders',
  warehouse: 'Warehouse and QC',
  shipping: 'Shipping and after-sales'
};
const safe = value => String(value).replace(/[&<>"']/g, character => ({
  '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
})[character]);

function refs(sources) {
  return `<ul class="references">${sources.map(([label,url]) => `<li><a href="${safe(url)}">${safe(label)}</a></li>`).join('')}</ul>`;
}

function pageHead(title, description, key = '') {
  return `<div class="page-intro"><h1 ${key ? `data-copy="${key}"` : ''}>${safe(title)}</h1><p>${safe(description)}</p></div>`;
}

function articleCard([slug,title,description]) {
  return `<a class="editorial-card" href="/guides/${slug}/"><h3>${safe(title)}</h3><p>${safe(description)}</p></a>`;
}

const faqIds = faq.map((_, i) => `question-${i + 1}`);

function homeSection(title, key, path, cards) {
  return `<section class="home-editorial"><div class="section-head"><h2 data-copy="${key}">${title}</h2><a href="${path}" data-copy="viewMore">View all</a></div><div class="editorial-grid" lang="en">${cards.join('')}</div></section>`;
}

function homeEditorial() {
  const questions = faq.slice(0,3).map(([,question,answer],i) =>
    `<a class="editorial-card" href="/faq/#${faqIds[i]}"><h3>${safe(question)}</h3><p>${safe(answer)}</p></a>`);
  return homeSection('Latest FAQ','latestFaq','/faq/',questions) +
    homeSection('Latest guides','latestGuides','/guides/',articles.slice(0,3).map(articleCard));
}

function faqPage() {
  const groupLinks = Object.entries(groups).map(([id,title]) => `<a href="#${id}">${title}</a>`).join('');
  const sections = Object.entries(groups).map(([id,title]) => {
    const rows = faq.flatMap(([group,question,answer,source], i) => group === id
      ? [`<details id="${faqIds[i]}" name="questions"><summary>${safe(question)}</summary><div><p>${safe(answer)}</p>${refs([source])}</div></details>`] : []);
    return `<section id="${id}" class="faq-group"><h2>${title}</h2>${rows.join('')}</section>`;
  }).join('');
  return `<div class="editorial-page" lang="en">${pageHead('HipoBuy FAQ','Answers about finding products, placing an order, QC and shipping.')}<div class="chips group-links">${groupLinks}</div>${sections}</div>`;
}

function guidePage(article) {
  const [,title,description,sections,sources] = article;
  return `<article class="editorial-page guide" lang="en"><a class="back" href="/guides/">All guides</a>${pageHead(title,description)}${sections.map(([heading,body]) =>
    `<section><h2>${safe(heading)}</h2><p>${safe(body)}</p></section>`).join('')}<section><h2>Sources</h2>${refs(sources)}</section></article>`;
}

export function renderPage(path, template, catalogMarkup) {
  let title = 'HipoBuy Finds | Product Catalog';
  let description = 'Browse the live CNFansSP product catalog and read independent HipoBuy buying guides.';
  let body;
  if (path === '/') body = catalogMarkup + homeEditorial();
  else if (path === '/catalog/') body = catalogMarkup;
  else if (path === '/agents/') {
    title = 'Shopping agents | HipoBuy Finds';
    description = 'Open HipoBuy or compare buying agents on CNFansSP.';
    body = `<div class="editorial-page">${pageHead('Shopping agents',description,'agentsTitle')}<div class="editorial-grid"><a class="editorial-card" href="https://hipobuy.com/"><h3>HipoBuy</h3><p data-copy="official">Open the official website</p></a><a class="editorial-card" href="https://www.cnfanssp.com/Agents/"><h3>CNFansSP</h3><p data-copy="agentList">Browse the main site’s agent directory</p></a></div></div>`;
  } else if (path === '/faq/') {
    title = 'HipoBuy FAQ | Orders, QC and Shipping';
    description = '24 answers on using the HipoBuy spreadsheet, submitting product links, reviewing QC and shipping parcels.';
    body = faqPage();
  } else if (path === '/guides/') {
    title = 'HipoBuy Guides | Spreadsheet, QC and Shipping';
    description = 'Ten researched guides to HipoBuy product links, QC photos, sizing, warehouse, shipping, tracking and returns.';
    body = `<div class="editorial-page guide-index" lang="en">${pageHead('HipoBuy guides',description)}<div class="editorial-grid">${articles.map(articleCard).join('')}</div></div>`;
  } else {
    const article = articles.find(([slug]) => path === `/guides/${slug}/`);
    if (!article) return null;
    [,title,description] = article;
    body = guidePage(article);
  }
  return template.replace('{{TITLE}}', () => safe(title)).replace('{{DESCRIPTION}}', () => safe(description)).replace('{{MAIN}}', () => body);
}
