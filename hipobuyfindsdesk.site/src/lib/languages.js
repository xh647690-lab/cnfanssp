// Each translation follows the order of the keys below.
const keys = ['search', 'placeholder', 'home', 'categories', 'browse', 'intro', 'latest', 'details', 'source', 'language', 'all', 'shoes', 'hoodies', 'tees', 'jackets', 'bottoms', 'accessories'];
const translations = {
  en: ['Search', 'Try sneakers, hoodies or a product name', 'Home', 'Categories', 'Browse all products', 'Find product links, browse categories and check listing details on CNFansSP.', 'Recently added', 'View details', 'Product data and photos from CNFansSP', 'Language', 'View full catalog', 'Shoes', 'Hoodies', 'T-shirts', 'Jackets', 'Pants & shorts', 'Accessories'],
  zh: ['搜索', '试试运动鞋、连帽衫或商品名称', '首页', '商品分类', '浏览全部商品', '查找商品链接，按分类浏览，并在 CNFansSP 查看商品详情。', '最新上架', '查看详情', '商品数据和图片来自 CNFansSP', '语言', '查看完整目录', '鞋类', '连帽衫', 'T 恤', '夹克', '裤子与短裤', '配饰'],
  de: ['Suchen', 'Sneaker, Hoodies oder einen Produktnamen eingeben', 'Startseite', 'Kategorien', 'Alle Produkte durchsuchen', 'Finde Produktlinks und Kategorien und sieh dir die Artikeldetails auf CNFansSP an.', 'Neu hinzugefügt', 'Details ansehen', 'Produktdaten und Fotos von CNFansSP', 'Sprache', 'Vollständigen Katalog ansehen', 'Schuhe', 'Hoodies', 'T-Shirts', 'Jacken', 'Hosen und Shorts', 'Accessoires'],
  es: ['Buscar', 'Prueba con zapatillas, sudaderas o un nombre', 'Inicio', 'Categorías', 'Explorar todos los productos', 'Encuentra enlaces, explora las categorías y consulta los detalles en CNFansSP.', 'Añadidos recientemente', 'Ver detalles', 'Datos y fotos de CNFansSP', 'Idioma', 'Ver catálogo completo', 'Calzado', 'Sudaderas', 'Camisetas', 'Chaquetas', 'Pantalones y shorts', 'Accesorios'],
  fr: ['Rechercher', 'Essayez baskets, sweats ou un nom de produit', 'Accueil', 'Catégories', 'Parcourir tous les produits', 'Trouvez des liens, parcourez les catégories et consultez les fiches sur CNFansSP.', 'Ajouts récents', 'Voir les détails', 'Données et photos de CNFansSP', 'Langue', 'Voir le catalogue complet', 'Chaussures', 'Sweats à capuche', 'T-shirts', 'Vestes', 'Pantalons et shorts', 'Accessoires'],
};

export const languages = { en: 'English', zh: '简体中文', de: 'Deutsch', es: 'Español', fr: 'Français' };
export const languagePath = lang => lang === 'en' ? '/' : '/' + lang + '/';
export const copyFor = lang => Object.fromEntries(keys.map((key, index) => [key, translations[lang][index]]));
