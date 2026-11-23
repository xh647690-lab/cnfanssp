export const navigation = [['finds', '/finds/'], ['categories', '/categories/'], ['faq', '/faq/'], ['guides', '/guides/'], ['about', '/about/']];
const fields = ['name', 'menu', 'langLabel', 'finds', 'categories', 'faq', 'guides', 'about', 'intro', 'search', 'placeholder', 'disclosure', 'latest', 'questions', 'read'];
const rows = {
  en: ['English','Main navigation','Language','Finds','Categories','FAQ','Guides','About','Browse products from CNFansSP and open the original listings.','Search','Search CNFansSP products','Independent guide. Listings and product photos come from CNFansSP.','Latest finds','Recent questions','Recent guides'],
  de: ['Deutsch','Hauptnavigation','Sprache','Produkte','Kategorien','FAQ','Ratgeber','Über uns','Entdecke Produkte von CNFansSP und öffne die Originalangebote.','Suchen','Produkte bei CNFansSP suchen','Unabhängiger Ratgeber. Angebote und Fotos stammen von CNFansSP.','Neueste Produkte','Neue Fragen','Neue Ratgeber'],
  es: ['Español','Navegación principal','Idioma','Productos','Categorías','Preguntas','Guías','Acerca de','Explora productos de CNFansSP y abre los anuncios originales.','Buscar','Buscar productos en CNFansSP','Guía independiente. Los anuncios y las fotos proceden de CNFansSP.','Últimos productos','Preguntas recientes','Guías recientes'],
  fr: ['Français','Navigation principale','Langue','Produits','Catégories','FAQ','Guides','À propos','Parcourez les produits de CNFansSP et ouvrez les annonces originales.','Rechercher','Rechercher sur CNFansSP','Guide indépendant. Les annonces et les photos viennent de CNFansSP.','Derniers produits','Questions récentes','Guides récents'],
  it: ['Italiano','Navigazione principale','Lingua','Prodotti','Categorie','FAQ','Guide','Informazioni','Esplora i prodotti di CNFansSP e apri gli annunci originali.','Cerca','Cerca prodotti su CNFansSP','Guida indipendente. Annunci e foto provengono da CNFansSP.','Ultimi prodotti','Domande recenti','Guide recenti'],
  pl: ['Polski','Menu główne','Język','Produkty','Kategorie','FAQ','Poradniki','O nas','Przeglądaj produkty CNFansSP i otwieraj oryginalne oferty.','Szukaj','Szukaj produktów w CNFansSP','Niezależny poradnik. Oferty i zdjęcia pochodzą z CNFansSP.','Najnowsze produkty','Najnowsze pytania','Najnowsze poradniki'],
  pt: ['Português','Navegação principal','Idioma','Produtos','Categorias','FAQ','Guias','Sobre','Explore produtos da CNFansSP e abra os anúncios originais.','Pesquisar','Pesquisar produtos na CNFansSP','Guia independente. Os anúncios e as fotos vêm da CNFansSP.','Produtos recentes','Perguntas recentes','Guias recentes'],
  zh: ['简体中文','主导航','语言','商品','分类','常见问题','指南','关于','浏览 CNFansSP 商品，打开主站原始商品页。','搜索','搜索 CNFansSP 商品','独立导购。商品资料和图片来自 CNFansSP。','最新商品','最新问题','最新指南'],
};
export const languages = Object.fromEntries(Object.entries(rows).map(([code, values]) =>
  [code, Object.fromEntries(fields.map((key, index) => [key, values[index]]))],
));
