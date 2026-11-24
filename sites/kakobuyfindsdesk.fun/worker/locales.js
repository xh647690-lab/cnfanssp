const languageList = {
  en:['English','EN'], zh:['简体中文','中文'], de:['Deutsch','DE'], es:['Español','ES'],
  fr:['Français','FR'], it:['Italiano','IT'], pl:['Polski','PL'], pt:['Português','PT'],
  ro:['Română','RO'], sv:['Svenska','SV'], nl:['Nederlands','NL'], da:['Dansk','DA'],
  fi:['Suomi','FI'], el:['Ελληνικά','EL'], cs:['Čeština','CS'], hu:['Magyar','HU'],
  bg:['Български','BG'], sk:['Slovenčina','SK'], hr:['Hrvatski','HR'], sl:['Slovenščina','SL'],
  lt:['Lietuvių','LT'], lv:['Latviešu','LV'], et:['Eesti','ET'], ga:['Gaeilge','GA'], mt:['Malti','MT'],
};

const navigationLabels = {
  en:['Home','Spreadsheet','Categories','Guides','Create an account','Language','Latest questions','Latest guides','See all','Research sources','English edition'],
  zh:['首页','商品目录','分类','选购指南','注册账号','语言','最新问答','最新指南','查看全部','参考资料','英文内容'],
  de:['Startseite','Katalog','Kategorien','Ratgeber','Konto erstellen','Sprache','Neueste Fragen','Neueste Ratgeber','Alle ansehen','Quellen','Englische Ausgabe'],
  es:['Inicio','Catálogo','Categorías','Guías','Crear una cuenta','Idioma','Últimas preguntas','Últimas guías','Ver todo','Fuentes','Edición en inglés'],
  fr:['Accueil','Catalogue','Catégories','Guides','Créer un compte','Langue','Dernières questions','Derniers guides','Tout voir','Sources','Édition anglaise'],
  it:['Home','Catalogo','Categorie','Guide','Crea un account','Lingua','Ultime domande','Ultime guide','Vedi tutto','Fonti','Edizione inglese'],
  pl:['Strona główna','Katalog','Kategorie','Poradniki','Utwórz konto','Język','Najnowsze pytania','Najnowsze poradniki','Zobacz wszystko','Źródła','Wersja angielska'],
  pt:['Início','Catálogo','Categorias','Guias','Criar conta','Idioma','Últimas perguntas','Últimos guias','Ver tudo','Fontes','Edição em inglês'],
  ro:['Acasă','Catalog','Categorii','Ghiduri','Creează un cont','Limbă','Ultimele întrebări','Ultimele ghiduri','Vezi tot','Surse','Ediție în engleză'],
  sv:['Hem','Katalog','Kategorier','Guider','Skapa konto','Språk','Senaste frågorna','Senaste guiderna','Visa alla','Källor','Engelsk utgåva'],
  nl:['Home','Catalogus','Categorieën','Gidsen','Account maken','Taal','Laatste vragen','Laatste gidsen','Alles bekijken','Bronnen','Engelse editie'],
  da:['Hjem','Katalog','Kategorier','Guider','Opret konto','Sprog','Seneste spørgsmål','Seneste guider','Se alle','Kilder','Engelsk udgave'],
  fi:['Etusivu','Luettelo','Kategoriat','Oppaat','Luo tili','Kieli','Uusimmat kysymykset','Uusimmat oppaat','Katso kaikki','Lähteet','Englanninkielinen versio'],
  el:['Αρχική','Κατάλογος','Κατηγορίες','Οδηγοί','Δημιουργία λογαριασμού','Γλώσσα','Τελευταίες ερωτήσεις','Τελευταίοι οδηγοί','Δείτε όλα','Πηγές','Αγγλική έκδοση'],
  cs:['Úvod','Katalog','Kategorie','Průvodci','Vytvořit účet','Jazyk','Nejnovější otázky','Nejnovější průvodci','Zobrazit vše','Zdroje','Anglické vydání'],
  hu:['Kezdőlap','Katalógus','Kategóriák','Útmutatók','Fiók létrehozása','Nyelv','Legújabb kérdések','Legújabb útmutatók','Összes megtekintése','Források','Angol kiadás'],
  bg:['Начало','Каталог','Категории','Ръководства','Създай акаунт','Език','Последни въпроси','Последни ръководства','Виж всички','Източници','Издание на английски'],
  sk:['Úvod','Katalóg','Kategórie','Sprievodcovia','Vytvoriť účet','Jazyk','Najnovšie otázky','Najnovší sprievodcovia','Zobraziť všetko','Zdroje','Anglické vydanie'],
  hr:['Početna','Katalog','Kategorije','Vodiči','Izradi račun','Jezik','Najnovija pitanja','Najnoviji vodiči','Vidi sve','Izvori','Englesko izdanje'],
  sl:['Domov','Katalog','Kategorije','Vodniki','Ustvari račun','Jezik','Najnovejša vprašanja','Najnovejši vodniki','Poglej vse','Viri','Angleška izdaja'],
  lt:['Pradžia','Katalogas','Kategorijos','Vadovai','Sukurti paskyrą','Kalba','Naujausi klausimai','Naujausi vadovai','Žiūrėti visus','Šaltiniai','Angliškas leidimas'],
  lv:['Sākums','Katalogs','Kategorijas','Ceļveži','Izveidot kontu','Valoda','Jaunākie jautājumi','Jaunākie ceļveži','Skatīt visu','Avoti','Izdevums angļu valodā'],
  et:['Avaleht','Kataloog','Kategooriad','Juhendid','Loo konto','Keel','Viimased küsimused','Viimased juhendid','Vaata kõiki','Allikad','Ingliskeelne väljaanne'],
  ga:['Baile','Catalóg','Catagóirí','Treoracha','Cruthaigh cuntas','Teanga','Ceisteanna is déanaí','Treoracha is déanaí','Féach ar gach ceann','Foinsí','Eagrán Béarla'],
  mt:['Bidu','Katalgu','Kategoriji','Gwidi','Oħloq kont','Lingwa','L-aħħar mistoqsijiet','L-aħħar gwidi','Ara kollox','Sorsi','Edizzjoni bl-Ingliż'],
};
const catalogLabels = {
  it:['Cerca per nome','Cerca','Ultimi prodotti','Tutti i prodotti'],
  pl:['Szukaj według nazwy','Szukaj','Najnowsze produkty','Wszystkie produkty'],
  pt:['Pesquisar por nome','Pesquisar','Últimos produtos','Todos os produtos'],
  ro:['Caută după nume','Caută','Ultimele produse','Toate produsele'],
  sv:['Sök efter namn','Sök','Senaste produkterna','Alla produkter'],
  nl:['Zoeken op naam','Zoeken','Nieuwste producten','Alle producten'],
  da:['Søg efter navn','Søg','Nyeste produkter','Alle produkter'],
  fi:['Hae nimellä','Hae','Uusimmat tuotteet','Kaikki tuotteet'],
  el:['Αναζήτηση με όνομα','Αναζήτηση','Τελευταία προϊόντα','Όλα τα προϊόντα'],
  cs:['Hledat podle názvu','Hledat','Nejnovější produkty','Všechny produkty'],
  hu:['Keresés név szerint','Keresés','Legújabb termékek','Összes termék'],
  bg:['Търсене по име','Търси','Най-нови продукти','Всички продукти'],
  sk:['Hľadať podľa názvu','Hľadať','Najnovšie produkty','Všetky produkty'],
  hr:['Pretraži po nazivu','Traži','Najnoviji proizvodi','Svi proizvodi'],
  sl:['Išči po imenu','Išči','Najnovejši izdelki','Vsi izdelki'],
  lt:['Ieškoti pagal pavadinimą','Ieškoti','Naujausios prekės','Visos prekės'],
  lv:['Meklēt pēc nosaukuma','Meklēt','Jaunākās preces','Visas preces'],
  et:['Otsi nime järgi','Otsi','Uusimad tooted','Kõik tooted'],
  ga:['Cuardaigh de réir ainm','Cuardaigh','Táirgí is déanaí','Gach táirge'],
  mt:['Fittex bl-isem','Fittex','L-aħħar prodotti','Il-prodotti kollha'],
};

function interfaceText(lang) {
  if (phrases[lang]) return phrases[lang];
  const [placeholder,search,latest,all] = catalogLabels[lang];
  const nav = navigationLabels[lang];
  const text = [...phrases.en];
  Object.assign(text,{0:languageList[lang][0],1:nav[1],2:nav[2],3:nav[4],4:'CNFansSP ' + nav[1],5:'',6:placeholder,7:search,8:nav[2],9:latest,10:all,20:nav[1],23:nav[8]});
  return text;
}

function localizedPath(path,lang,parameters = {}) {
  const query = new URLSearchParams(parameters).toString();
  const prefix = lang === 'en' ? '' : '/' + lang;
  return prefix + path + (query ? '?' + query : '');
}
