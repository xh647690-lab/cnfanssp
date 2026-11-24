const messages = {
  en: ['Spreadsheet','Categories','Sign up','Find your|next pick.','Explore the CNFansSP spreadsheet, compare prices, and go straight to the original listing.','Search','Search by name or product ID','Latest finds','Search results','Sort by','Newest','Price: low to high','Price: high to low','All products','View details','Show more','Loading listings…','No matching products.','CNFansSP is temporarily unavailable.','Try again','Listings and photos from CNFansSP.','Visit CNFansSP','Close','Product ID','Open seller listing','View on CNFansSP','Loading product…','Image unavailable','products loaded'],
  zh: ['商品表','分类','注册','发现你的|下一件好物','浏览 CNFansSP 商品表、对比价格，直接打开卖家原页。','搜索','搜索商品名称或 ID','最新商品','搜索结果','排序','最新','价格从低到高','价格从高到低','全部商品','查看详情','查看更多','正在加载商品…','未找到相关商品。','暂时无法连接 CNFansSP。','重试','商品和图片来自 CNFansSP。','访问 CNFansSP','关闭','商品 ID','前往卖家购买','打开 CNFansSP 商品页','正在加载商品详情…','暂无图片','件商品已加载'],
  es: ['Catálogo','Categorías','Registrarse','Encuentra tu|próxima compra.','Explora el catálogo de CNFansSP, compara precios y abre el anuncio original.','Buscar','Buscar por nombre o ID','Novedades','Resultados','Ordenar por','Más recientes','Menor precio','Mayor precio','Todos','Ver detalles','Ver más','Cargando productos…','No hay productos que coincidan.','CNFansSP no está disponible por el momento.','Reintentar','Productos y fotos de CNFansSP.','Visitar CNFansSP','Cerrar','ID de producto','Abrir anuncio del vendedor','Ver en CNFansSP','Cargando producto…','Imagen no disponible','productos cargados'],
  fr: ['Catalogue','Catégories','S’inscrire','Trouvez votre|prochain achat.','Explorez le catalogue CNFansSP, comparez les prix et ouvrez l’annonce d’origine.','Rechercher','Rechercher par nom ou identifiant','Nouveautés','Résultats','Trier par','Plus récents','Prix croissant','Prix décroissant','Tous les produits','Voir les détails','Voir plus','Chargement des produits…','Aucun produit correspondant.','CNFansSP est temporairement indisponible.','Réessayer','Produits et photos de CNFansSP.','Visiter CNFansSP','Fermer','ID produit','Ouvrir l’annonce du vendeur','Voir sur CNFansSP','Chargement du produit…','Image indisponible','produits chargés'],
  de: ['Produktliste','Kategorien','Registrieren','Finde deinen|nächsten Kauf.','Durchsuche die CNFansSP-Liste, vergleiche Preise und öffne das Originalangebot.','Suchen','Nach Name oder Produkt-ID suchen','Neueste Funde','Suchergebnisse','Sortieren nach','Neueste','Niedrigster Preis','Höchster Preis','Alle Produkte','Details ansehen','Mehr anzeigen','Produkte werden geladen…','Keine passenden Produkte gefunden.','CNFansSP ist vorübergehend nicht erreichbar.','Erneut versuchen','Produkte und Fotos von CNFansSP.','CNFansSP besuchen','Schließen','Produkt-ID','Angebot beim Verkäufer öffnen','Auf CNFansSP ansehen','Produkt wird geladen…','Bild nicht verfügbar','Produkte geladen']
};
const keys = 'catalog categories signup heading intro search placeholder latest searchResults sort newest low high all details more loading none error retry footer visit close id buy source detailLoading noImage count'.split(' ');
const categoryIndex = ['shoes','hoodies-sweaters','t-shirts','jackets','pants-shorts','headwear','accessories','short-sets','electronics','other-stuff','jersey'];
const categoriesByLanguage = {
  zh: ['鞋履','卫衣 / 毛衣','T 恤','夹克','裤装 / 短裤','帽饰','配饰','短款套装','电子产品','其他','球衣'],
  es: ['Calzado','Sudaderas','Camisetas','Chaquetas','Pantalones','Gorras','Accesorios','Conjuntos','Electrónica','Otros','Camisetas deportivas'],
  fr: ['Chaussures','Sweats','T-shirts','Vestes','Pantalons','Chapeaux','Accessoires','Ensembles','Électronique','Autres','Maillots'],
  de: ['Schuhe','Sweatshirts','T-Shirts','Jacken','Hosen','Kopfbedeckung','Accessoires','Sets','Elektronik','Sonstiges','Trikots']
};


// Native names follow the reference site's language menu, with Simplified Chinese added.
const interfaceLabels = {
  en: ['English','Home','Guides','Language','Browse the spreadsheet','View all','Sources','Browse categories','Previous','Next'],
  zh: ['简体中文','首页','选购指南','语言','浏览商品表','查看全部','参考来源','浏览分类','上一页','下一页'],
  es: ['Español','Inicio','Guías','Idioma','Explorar el catálogo','Ver todo','Fuentes','Explorar categorías','Anterior','Siguiente'],
  fr: ['Français','Accueil','Guides','Langue','Explorer le catalogue','Voir tout','Sources','Explorer les catégories','Précédent','Suivant'],
  de: ['Deutsch','Startseite','Ratgeber','Sprache','Produktliste durchsuchen','Alle anzeigen','Quellen','Kategorien durchsuchen','Zurück','Weiter']
};

const additional = {
  it: ['Italiano','Home','Catalogo','Categorie','Guide','Lingua','Cerca','Registrati','Scopri il tuo|prossimo acquisto','Novità','Cerca per nome o ID','Vedi tutto','Sfoglia il catalogo','Apri categoria'],
  pl: ['Polski','Start','Katalog','Kategorie','Poradniki','Język','Szukaj','Zarejestruj się','Znajdź swój|kolejny zakup','Nowości','Szukaj według nazwy lub ID','Zobacz wszystko','Przeglądaj katalog','Otwórz kategorię'],
  pt: ['Português','Início','Catálogo','Categorias','Guias','Idioma','Pesquisar','Criar conta','Encontre a sua|próxima compra','Novidades','Pesquisar por nome ou ID','Ver tudo','Explorar o catálogo','Abrir categoria'],
  ro: ['Română','Acasă','Catalog','Categorii','Ghiduri','Limbă','Caută','Înregistrare','Găsește următoarea|ta achiziție','Noutăți','Caută după nume sau ID','Vezi tot','Explorează catalogul','Deschide categoria'],
  sv: ['Svenska','Hem','Produktlista','Kategorier','Guider','Språk','Sök','Registrera dig','Hitta ditt|nästa fynd','Senaste fynd','Sök efter namn eller ID','Visa alla','Bläddra i listan','Öppna kategori'],
  nl: ['Nederlands','Home','Productlijst','Categorieën','Gidsen','Taal','Zoeken','Registreren','Vind je|volgende aankoop','Nieuwste vondsten','Zoeken op naam of ID','Bekijk alles','Bekijk de productlijst','Open categorie'],
  da: ['Dansk','Forside','Produktliste','Kategorier','Guider','Sprog','Søg','Tilmeld dig','Find dit|næste køb','Seneste fund','Søg efter navn eller ID','Se alle','Gennemse produktlisten','Åbn kategori'],
  fi: ['Suomi','Etusivu','Tuoteluettelo','Kategoriat','Oppaat','Kieli','Hae','Rekisteröidy','Löydä seuraava|ostoksesi','Uusimmat löydöt','Hae nimellä tai tunnuksella','Näytä kaikki','Selaa tuoteluetteloa','Avaa kategoria'],
  el: ['Ελληνικά','Αρχική','Κατάλογος','Κατηγορίες','Οδηγοί','Γλώσσα','Αναζήτηση','Εγγραφή','Βρες την επόμενη|αγορά σου','Νεότερα προϊόντα','Αναζήτηση με όνομα ή κωδικό','Προβολή όλων','Δες τον κατάλογο','Άνοιγμα κατηγορίας'],
  cs: ['Čeština','Domů','Katalog','Kategorie','Průvodci','Jazyk','Hledat','Registrace','Najděte svůj|další nákup','Nejnovější nabídky','Hledejte podle názvu nebo ID','Zobrazit vše','Procházet katalog','Otevřít kategorii'],
  hu: ['Magyar','Kezdőlap','Katalógus','Kategóriák','Útmutatók','Nyelv','Keresés','Regisztráció','Találd meg a|következő vételt','Legújabb termékek','Keresés név vagy azonosító alapján','Összes megtekintése','Katalógus böngészése','Kategória megnyitása'],
  bg: ['Български','Начало','Каталог','Категории','Ръководства','Език','Търсене','Регистрация','Намерете следващата|си покупка','Най-нови продукти','Търсене по име или номер','Вижте всички','Разгледайте каталога','Отвори категорията'],
  sk: ['Slovenčina','Domov','Katalóg','Kategórie','Sprievodcovia','Jazyk','Hľadať','Registrácia','Nájdite svoj|ďalší nákup','Najnovšie produkty','Hľadajte podľa názvu alebo ID','Zobraziť všetko','Prehliadať katalóg','Otvoriť kategóriu'],
  hr: ['Hrvatski','Početna','Katalog','Kategorije','Vodiči','Jezik','Pretraži','Registracija','Pronađi svoju|sljedeću kupnju','Najnoviji proizvodi','Pretraži po nazivu ili ID-u','Vidi sve','Pregledaj katalog','Otvori kategoriju'],
  sl: ['Slovenščina','Domov','Katalog','Kategorije','Vodniki','Jezik','Išči','Registracija','Najdite svoj|naslednji nakup','Najnovejši izdelki','Išči po imenu ali ID-ju','Prikaži vse','Prebrskaj katalog','Odpri kategorijo'],
  lt: ['Lietuvių','Pradžia','Katalogas','Kategorijos','Vadovai','Kalba','Ieškoti','Registracija','Raskite savo|kitą pirkinį','Naujausios prekės','Ieškokite pagal pavadinimą ar ID','Žiūrėti viską','Naršyti katalogą','Atidaryti kategoriją'],
  lv: ['Latviešu','Sākums','Katalogs','Kategorijas','Ceļveži','Valoda','Meklēt','Reģistrēties','Atrodi savu|nākamo pirkumu','Jaunākās preces','Meklēt pēc nosaukuma vai ID','Skatīt visu','Pārlūkot katalogu','Atvērt kategoriju'],
  et: ['Eesti','Avaleht','Kataloog','Kategooriad','Juhendid','Keel','Otsi','Registreeru','Leia oma|järgmine ost','Uusimad leiud','Otsi nime või ID järgi','Vaata kõiki','Sirvi kataloogi','Ava kategooria'],
  ga: ['Gaeilge','Baile','Catalóg','Catagóirí','Treoracha','Teanga','Cuardaigh','Cláraigh','Aimsigh do|chéad cheannach eile','Na táirgí is nuaí','Cuardaigh de réir ainm nó aitheantais','Féach ar gach ceann','Brabhsáil an chatalóg','Oscail an chatagóir'],
  mt: ['Malti','Paġna ewlenija','Katalgu','Kategoriji','Gwidi','Lingwa','Fittex','Irreġistra','Sib ix-xirja|li jmiss','L-aħħar prodotti','Fittex bl-isem jew bl-ID','Ara kollox','Ibbrawżja l-katalgu','Iftaħ il-kategorija']
};

export const languageOrder = 'en de es fr it pl pt ro sv nl da fi el cs hu bg sk hr sl lt lv et ga mt zh'.split(' ');
export const languageTag = locale => locale === 'zh' ? 'zh-Hans' : locale;
export const languageName = locale => (interfaceLabels[locale] ?? additional[locale])[0];
export const localizedPath = (locale, path = '/') => (locale === 'en' ? '' : '/' + locale) + path;
export function localizedCategory(locale, key, label) {
  if (key === 'AllProducts') return localizedText(locale).all;
  return categoriesByLanguage[locale]?.[categoryIndex.indexOf(key)] ?? label;
}

export function localizedText(locale) {
  const base = messages[locale] ?? messages.en;
  const extra = interfaceLabels[locale] ?? interfaceLabels.en;
  const text = Object.fromEntries(keys.map((key, i) => [key, base[i]]));
  const [, home, guides, language, browse, viewAll, sources, browseCategories, previous, next] = extra;
  Object.assign(text, {home, guides, language, browse, viewAll, sources, browseCategories, previous, next, faq: locale === 'zh' ? '常见问题' : 'FAQ'});
  if (additional[locale]) {
    const coreKeys = 'home catalog categories guides language search signup heading latest placeholder viewAll browse browseCategories'.split(' ');
    const core = additional[locale].slice(1);
    coreKeys.forEach((key, i) => { text[key] = core[i]; });
  }
  return text;
}
