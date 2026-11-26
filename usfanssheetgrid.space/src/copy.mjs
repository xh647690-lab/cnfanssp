export const languages = {
  en: {
    label:'English', home:'Home', categories:'Categories', catalog:'Latest products', register:'USFans sign up',
    hero:'Find your next pick.', intro:'Browse products from the CNFansSP catalog, open the original listing, and take the seller link to USFans.',
    search:'Search CNFansSP', placeholder:'Try jerseys, shoes or hoodies', all:'Browse all products', details:'View details',
    featured:'Find by category', example:'Sample listing', buy:'Look up on USFans', source:'Product catalog by CNFansSP · Independent spreadsheet',
    names:[],
  },
  zh: {
    label:'简体中文', home:'首页', categories:'分类', catalog:'最新商品', register:'注册 USFans',
    hero:'发现下一件好物。', intro:'浏览 CNFansSP 商品目录，查看主站详情，再将卖家链接带到 USFans。',
    search:'搜索主站', placeholder:'试试球衣、鞋履或卫衣', all:'浏览全部商品', details:'查看详情',
    featured:'按分类查找', example:'示例商品', buy:'在 USFans 查询', source:'商品目录来自 CNFansSP · 独立选品网站',
    names:['鞋履','卫衣与毛衣','T 恤','夹克','裤装','帽饰','配饰','球衣','电子产品','其他'],
  },
  es: {
    label:'Español', home:'Inicio', categories:'Categorías', catalog:'Últimos productos', register:'Registro en USFans',
    hero:'Encuentra tu próxima compra.', intro:'Explora el catálogo de CNFansSP, abre la ficha original y lleva el enlace del vendedor a USFans.',
    search:'Buscar en CNFansSP', placeholder:'Busca camisetas, zapatillas o sudaderas', all:'Ver todos los productos', details:'Ver detalles',
    featured:'Explorar por categoría', example:'Producto de ejemplo', buy:'Buscar en USFans', source:'Catálogo de CNFansSP · Sitio independiente',
    names:['Calzado','Sudaderas y jerséis','Camisetas','Chaquetas','Pantalones','Gorras y sombreros','Accesorios','Camisetas deportivas','Electrónica','Otros'],
  },
  fr: {
    label:'Français', home:'Accueil', categories:'Catégories', catalog:'Derniers produits', register:'Inscription USFans',
    hero:'Trouvez votre prochain coup de cœur.', intro:'Explorez le catalogue CNFansSP, ouvrez la fiche originale et utilisez le lien du vendeur sur USFans.',
    search:'Rechercher sur CNFansSP', placeholder:'Maillots, chaussures ou sweats', all:'Voir tous les produits', details:'Voir la fiche',
    featured:'Parcourir par catégorie', example:'Article exemple', buy:'Chercher sur USFans', source:'Catalogue CNFansSP · Site indépendant',
    names:['Chaussures','Sweats et pulls','T-shirts','Vestes','Pantalons','Couvre-chefs','Accessoires','Maillots','Électronique','Autres'],
  },
  de: {
    label:'Deutsch', home:'Startseite', categories:'Kategorien', catalog:'Neueste Produkte', register:'Bei USFans registrieren',
    hero:'Entdecke deinen nächsten Fund.', intro:'Durchsuche den CNFansSP-Katalog, öffne das Originalangebot und nutze den Händlerlink bei USFans.',
    search:'CNFansSP durchsuchen', placeholder:'Trikots, Schuhe oder Hoodies', all:'Alle Produkte ansehen', details:'Details ansehen',
    featured:'Nach Kategorie suchen', example:'Beispielartikel', buy:'Bei USFans suchen', source:'Produktkatalog von CNFansSP · Unabhängige Übersicht',
    names:['Schuhe','Hoodies und Pullover','T-Shirts','Jacken','Hosen','Kopfbedeckungen','Accessoires','Trikots','Elektronik','Sonstiges'],
  },
}

export const languagePath = code => code === 'en' ? '/' : `/${code}/`
