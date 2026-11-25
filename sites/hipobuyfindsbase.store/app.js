const copy = {
  en: ['Browse finds','Agents','live catalog','Browse shoes, clothing, and accessories from the CNFansSP catalog.','Search','Categories','Latest finds','View all products','Search CNFansSP products','Loading catalog…','Catalog unavailable. Browse directly on CNFansSP.','Language'],
  zh: ['浏览商品','代购平台','实时目录','浏览 CNFansSP 目录中的鞋履、服装和配饰。','搜索','商品分类','最新商品','查看全部商品','搜索 CNFansSP 商品','正在加载商品目录…','目录暂时无法加载，可前往 CNFansSP 浏览。','语言'],
  es: ['Explorar productos','Agentes','catálogo en vivo','Explora calzado, ropa y accesorios del catálogo de CNFansSP.','Buscar','Categorías','Novedades','Ver todos los productos','Buscar productos en CNFansSP','Cargando catálogo…','Catálogo no disponible. Visita CNFansSP.','Idioma'],
  fr: ['Voir les produits','Agents','catalogue en direct','Découvrez les chaussures, vêtements et accessoires du catalogue CNFansSP.','Rechercher','Catégories','Nouveautés','Voir tous les produits','Rechercher sur CNFansSP','Chargement du catalogue…','Catalogue indisponible. Consultez CNFansSP.','Langue'],
  de: ['Produkte entdecken','Agenten','Live-Katalog','Entdecke Schuhe, Kleidung und Zubehör aus dem CNFansSP-Katalog.','Suchen','Kategorien','Neueste Produkte','Alle Produkte ansehen','CNFansSP-Produkte suchen','Katalog wird geladen…','Katalog nicht verfügbar. Besuche CNFansSP.','Sprache'],
  it: ['Sfoglia prodotti','Agenti','catalogo in tempo reale','Sfoglia calzature, abbigliamento e accessori dal catalogo CNFansSP.','Cerca','Categorie','Ultimi prodotti','Visualizza tutti i prodotti','Cerca prodotti su CNFansSP','Caricamento del catalogo…','Catalogo non disponibile. Visita CNFansSP.','Lingua'],
  pt: ['Explorar produtos','Agentes','catálogo ao vivo','Explore calçado, roupa e acessórios no catálogo da CNFansSP.','Pesquisar','Categorias','Novidades','Ver todos os produtos','Pesquisar produtos na CNFansSP','A carregar catálogo…','Catálogo indisponível. Visite a CNFansSP.','Idioma'],
  pl: ['Przeglądaj produkty','Pośrednicy','aktualny katalog','Przeglądaj obuwie, odzież i akcesoria z katalogu CNFansSP.','Szukaj','Kategorie','Najnowsze produkty','Zobacz wszystkie produkty','Szukaj produktów w CNFansSP','Ładowanie katalogu…','Katalog niedostępny. Przejdź do CNFansSP.','Język']
};
const keys = ['browse','agents','catalog','intro','search','categories','latest','all','placeholder','loading','unavailable','language'];
const editorialKeys = ['faq','guides','latestFaq','latestGuides','viewMore','independent','agentsTitle','official','agentList'];
const editorialLabels = {
  en: ['FAQ','Guides','Latest FAQ','Latest guides','View all','Independent HipoBuy guide','Shopping agents','Open the official website','Browse the main site’s agent directory'],
  zh: ['常见问题','购物指南','最新常见问题','最新购物指南','查看全部','独立 HipoBuy 指南','代购平台','访问官网','查看主站代购平台目录'],
  es: ['Preguntas','Guías','Últimas preguntas','Últimas guías','Ver todo','Guía independiente de HipoBuy','Agentes de compra','Abrir el sitio oficial','Ver el directorio de agentes'],
  fr: ['FAQ','Guides','Dernières questions','Derniers guides','Tout afficher','Guide HipoBuy indépendant','Agents d’achat','Ouvrir le site officiel','Consulter le répertoire des agents'],
  de: ['FAQ','Ratgeber','Neueste Fragen','Neueste Ratgeber','Alle anzeigen','Unabhängiger HipoBuy-Ratgeber','Einkaufsagenten','Offizielle Website öffnen','Agentenverzeichnis ansehen'],
  it: ['FAQ','Guide','Ultime domande','Ultime guide','Mostra tutto','Guida indipendente a HipoBuy','Agenti di acquisto','Apri il sito ufficiale','Sfoglia la directory degli agenti'],
  pt: ['Perguntas','Guias','Perguntas recentes','Guias recentes','Ver tudo','Guia independente da HipoBuy','Agentes de compras','Abrir o site oficial','Ver o diretório de agentes'],
  pl: ['Pytania','Poradniki','Najnowsze pytania','Najnowsze poradniki','Zobacz wszystkie','Niezależny poradnik HipoBuy','Pośrednicy zakupowi','Otwórz oficjalną stronę','Przeglądaj katalog pośredników']
};
const categoryKeys = ['shoes','hoodies-sweaters','t-shirts','jackets','pants-shorts','headwear','accessories','short-sets','electronics','other-stuff','jersey'];
const translations = {
  zh: ['鞋履','卫衣 / 毛衣','T 恤','夹克','长裤 / 短裤','帽饰','配饰','短装套装','电子产品','其他','球衣'],
  es: ['Calzado','Sudaderas','Camisetas','Chaquetas','Pantalones','Gorras y sombreros','Accesorios','Conjuntos cortos','Electrónica','Otros','Camisetas deportivas'],
  fr: ['Chaussures','Sweats','T-shirts','Vestes','Pantalons / shorts','Casquettes et chapeaux','Accessoires','Ensembles courts','Électronique','Autres','Maillots'],
  de: ['Schuhe','Sweatshirts','T-Shirts','Jacken','Hosen / Shorts','Kopfbedeckungen','Accessoires','Kurze Sets','Elektronik','Sonstiges','Trikots'],
  it: ['Calzature','Felpe','Magliette','Giacche','Pantaloni / pantaloncini','Cappelli','Accessori','Completi corti','Elettronica','Altro','Maglie sportive'],
  pt: ['Calçado','Camisolas','T-shirts','Casacos','Calças / calções','Chapéus','Acessórios','Conjuntos curtos','Eletrónica','Outros','Camisolas desportivas'],
  pl: ['Obuwie','Bluzy','Koszulki','Kurtki','Spodnie / szorty','Nakrycia głowy','Akcesoria','Krótkie zestawy','Elektronika','Inne','Koszulki sportowe']
};
const picker = document.querySelector('#language');
const status = document.querySelector('#status');
const categories = document.querySelector('#categories');
const grid = document.querySelector('#grid');
const input = document.querySelector('#keywords');
let data;
let state = 'loading';

function updateLanguage() {
  const language = picker.value;
  document.documentElement.lang = language === 'zh' ? 'zh-Hans' : language;
  const labels = Object.fromEntries([...keys, ...editorialKeys].map((key, i) =>
    [key, [...copy[language], ...editorialLabels[language]][i]]
  ));
  for (const el of document.querySelectorAll('[data-copy]')) el.textContent = labels[el.dataset.copy];
  picker.setAttribute('aria-label', labels.language);
  if (!input) return;
  input.placeholder = labels.placeholder;
  input.setAttribute('aria-label', labels.placeholder);
  status.hidden = state === 'ready';
  status.textContent = labels[state] || '';
  categories.replaceChildren(...(data?.categories || []).map(category => {
    const link = document.createElement('a');
    link.href = category.url;
    link.textContent = translations[language]?.[categoryKeys.indexOf(category.key)] || category.title.trim();
    return link;
  }));
}

function renderProduct(item) {
  const card = document.createElement('a');
  card.className = 'card';
  card.href = item.url;
  const media = document.createElement('div');
  media.className = 'media';
  if (item.image) {
    const image = document.createElement('img');
    image.src = item.image;
    image.alt = '';
    image.loading = 'lazy';
    media.append(image);
  }
  const info = document.createElement('div');
  info.className = 'card-info';
  const title = document.createElement('span');
  title.textContent = item.title;
  info.append(title);
  const price = document.createElement('span');
  price.className = 'price';
  price.textContent = item.price.trim();
  info.append(price);
  card.append(media, info);
  return card;
}

const currentUrl = new URL(location.href);
const firstSegment = currentUrl.pathname.split('/')[1];
const requestedLanguage = currentUrl.searchParams.get('lang') || firstSegment;
picker.value = Object.hasOwn(copy, requestedLanguage) ? requestedLanguage : 'en';

function basePath(path) {
  const code = path.split('/')[1];
  if (!Object.hasOwn(copy, code)) return path;
  return path.slice(code.length + 1) || '/';
}

function localizedPath(path, language) {
  return (language === 'en' ? '' : '/' + language) + basePath(path);
}

for (const link of document.querySelectorAll('nav a')) {
  if (basePath(currentUrl.pathname).startsWith(new URL(link.href).pathname)) link.setAttribute('aria-current', 'page');
}
for (const link of document.querySelectorAll('a[href]')) {
  const url = new URL(link.href);
  if (url.origin !== currentUrl.origin) continue;
  url.pathname = localizedPath(url.pathname, picker.value);
  url.searchParams.delete('lang');
  link.href = url.href;
}
picker.addEventListener('change', () => {
  currentUrl.pathname = localizedPath(currentUrl.pathname, picker.value);
  currentUrl.searchParams.delete('lang');
  location.assign(currentUrl);
});
updateLanguage();

function openLinkedQuestion() {
  const item = document.getElementById(location.hash.slice(1));
  if (item?.tagName === 'DETAILS') {
    item.open = true;
    item.scrollIntoView();
  }
}
window.addEventListener('hashchange', openLinkedQuestion);
openLinkedQuestion();

if (grid) {
  fetch('/api/catalog').then(response => {
    if (!response.ok) throw new Error('Catalog unavailable');
    return response.json();
  }).then(result => {
    data = result;
    grid.replaceChildren(...data.products.map(renderProduct));
    state = 'ready';
  }).catch(() => {
    state = 'unavailable';
  }).finally(updateLanguage);
}
