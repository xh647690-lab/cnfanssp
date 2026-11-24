// Locale order follows the reference's public menu, with Simplified Chinese added.
const locales = {
  en: ['English','Home','Spreadsheet','Categories','FAQ','Guides','Register','Language','Search','Search products…','View details','Latest products'],
  zh: ['简体中文','首页','商品目录','商品分类','常见问题','购物指南','注册','语言','搜索','搜索商品…','查看主站详情','最新商品'],
  de: ['Deutsch','Startseite','Produktliste','Kategorien','FAQ','Ratgeber','Registrieren','Sprache','Suchen','Produkte suchen…','Details ansehen','Neue Produkte'],
  es: ['Español','Inicio','Catálogo','Categorías','Preguntas frecuentes','Guías','Registrarse','Idioma','Buscar','Buscar productos…','Ver detalles','Últimos productos'],
  fr: ['Français','Accueil','Catalogue','Catégories','FAQ','Guides','S’inscrire','Langue','Rechercher','Rechercher des produits…','Voir les détails','Nouveaux produits'],
  it: ['Italiano','Home','Catalogo','Categorie','FAQ','Guide','Registrati','Lingua','Cerca','Cerca prodotti…','Vedi dettagli','Ultimi prodotti'],
  pl: ['Polski','Strona główna','Katalog','Kategorie','FAQ','Poradniki','Zarejestruj się','Język','Szukaj','Szukaj produktów…','Zobacz szczegóły','Najnowsze produkty'],
  pt: ['Português','Início','Catálogo','Categorias','Perguntas frequentes','Guias','Registar','Idioma','Pesquisar','Pesquisar produtos…','Ver detalhes','Produtos recentes'],
  ro: ['Română','Acasă','Catalog','Categorii','Întrebări frecvente','Ghiduri','Înregistrare','Limbă','Caută','Caută produse…','Vezi detalii','Produse recente'],
  sv: ['Svenska','Hem','Katalog','Kategorier','Vanliga frågor','Guider','Registrera dig','Språk','Sök','Sök produkter…','Visa detaljer','Senaste produkter'],
  nl: ['Nederlands','Home','Catalogus','Categorieën','Veelgestelde vragen','Gidsen','Registreren','Taal','Zoeken','Producten zoeken…','Bekijk details','Nieuwste producten'],
  da: ['Dansk','Forside','Katalog','Kategorier','Ofte stillede spørgsmål','Guides','Registrer','Sprog','Søg','Søg efter varer…','Se detaljer','Nyeste varer'],
  fi: ['Suomi','Etusivu','Tuoteluettelo','Kategoriat','UKK','Oppaat','Rekisteröidy','Kieli','Hae','Hae tuotteita…','Katso tiedot','Uusimmat tuotteet'],
  el: ['Ελληνικά','Αρχική','Κατάλογος','Κατηγορίες','Συχνές ερωτήσεις','Οδηγοί','Εγγραφή','Γλώσσα','Αναζήτηση','Αναζήτηση προϊόντων…','Δείτε λεπτομέρειες','Νέα προϊόντα'],
  cs: ['Čeština','Úvod','Katalog','Kategorie','Časté dotazy','Průvodci','Registrace','Jazyk','Hledat','Hledat produkty…','Zobrazit podrobnosti','Nejnovější produkty'],
  hu: ['Magyar','Kezdőlap','Katalógus','Kategóriák','GYIK','Útmutatók','Regisztráció','Nyelv','Keresés','Termékek keresése…','Részletek','Legújabb termékek'],
  bg: ['Български','Начало','Каталог','Категории','Често задавани въпроси','Ръководства','Регистрация','Език','Търсене','Търсене на продукти…','Вижте подробности','Нови продукти'],
  sk: ['Slovenčina','Domov','Katalóg','Kategórie','Časté otázky','Sprievodcovia','Registrácia','Jazyk','Hľadať','Hľadať produkty…','Zobraziť podrobnosti','Najnovšie produkty'],
  hr: ['Hrvatski','Početna','Katalog','Kategorije','Česta pitanja','Vodiči','Registracija','Jezik','Traži','Pretraži proizvode…','Prikaži detalje','Najnoviji proizvodi'],
  sl: ['Slovenščina','Domov','Katalog','Kategorije','Pogosta vprašanja','Vodniki','Registracija','Jezik','Išči','Išči izdelke…','Prikaži podrobnosti','Najnovejši izdelki'],
  lt: ['Lietuvių','Pradžia','Katalogas','Kategorijos','DUK','Vadovai','Registruotis','Kalba','Ieškoti','Ieškoti produktų…','Rodyti išsamią informaciją','Naujausi produktai'],
  lv: ['Latviešu','Sākums','Katalogs','Kategorijas','BUJ','Ceļveži','Reģistrēties','Valoda','Meklēt','Meklēt produktus…','Skatīt detaļas','Jaunākie produkti'],
  et: ['Eesti','Avaleht','Kataloog','Kategooriad','KKK','Juhendid','Registreeru','Keel','Otsi','Otsi tooteid…','Vaata üksikasju','Uusimad tooted'],
  ga: ['Gaeilge','Baile','Catalóg','Catagóirí','Ceisteanna coitianta','Treoracha','Cláraigh','Teanga','Cuardaigh','Cuardaigh táirgí…','Féach ar na sonraí','Táirgí is déanaí'],
  mt: ['Malti','Paġna ewlenija','Katalgu','Kategoriji','Mistoqsijiet frekwenti','Gwidi','Irreġistra','Lingwa','Fittex','Fittex prodotti…','Ara d-dettalji','L-aħħar prodotti']
}

const localeKeys = ['name','home','catalog','categories','faq','guides','register','language','search','placeholder','details','latest']

const interfaceText = {
  en: {intro:'Search CNFansSP or browse a category. Listings open on the source site.',price:'Listed price',all:'View all on CNFansSP',next:'Next',previous:'Previous',source:'Sources',more:'Read more',error:'The source site is temporarily unavailable.',credit:'Product data: CNFansSP',open:'Open CNFansSP',brands:'Shopping spreadsheet',menu:'Menu',back:'All guides',main:'Open category',faqGroup:['Finding and ordering','Marketplace links and QC','Pricing and warehouse','Packing, returns and tracking']},
  zh: {intro:'搜索 CNFansSP 或按类目浏览，点开商品即可前往主站详情。',price:'主站标价',all:'前往主站查看全部',next:'下一页',previous:'上一页',source:'参考来源',more:'阅读全文',error:'暂时无法读取主站商品。',credit:'商品数据来自 CNFansSP',open:'打开 CNFansSP',brands:'购物选品目录',menu:'菜单',back:'全部指南',main:'打开主站分类',faqGroup:['选品与下单','卖家链接与验货','费用与仓库','打包、退换与物流']},
  es: {intro:'Busca en CNFansSP o elige una categoría. Las fichas se abren en el sitio de origen.',price:'Precio publicado',all:'Ver todo en CNFansSP',next:'Siguiente',previous:'Anterior',source:'Fuentes',more:'Leer más',error:'El sitio de origen no está disponible temporalmente.',credit:'Datos de productos: CNFansSP',open:'Abrir CNFansSP',brands:'Lista de compras',menu:'Menú',back:'Todas las guías',main:'Abrir la categoría',faqGroup:['Búsqueda y pedidos','Enlaces e inspección','Precios y almacén','Embalaje, devoluciones y seguimiento']}
}

function withLocale(lang, path = '/') {
  return (lang === 'en' ? '' : '/' + lang) + path
}

function parseLocale(url) {
  const parts = url.pathname.split('/')
  if (parts[1] && Object.hasOwn(locales,parts[1])) {
    return {lang:parts[1],path:'/' + parts.slice(2).join('/').replace(/\/$/,'')}
  }
  return {lang:'en',path:url.pathname.replace(/\/$/,'') || '/'}
}

function siteText(lang) {
  return {
    ...(interfaceText[lang] ?? interfaceText.en),
    ...Object.fromEntries(localeKeys.map((key,index)=>[key,locales[lang][index]]))
  }
}

const editorialLanguage = lang => lang === 'zh' ? 'zh' : 'en'
