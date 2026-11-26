import { languagePath } from './copy.mjs'
export const route = (language, page = '') => languagePath(language) + (page ? page + '/' : '')
export const labels = {
  en: { faq:'FAQ', articles:'Buying guides', more:'See all', language:'Language', english:'' },
  zh: { faq:'常见问题', articles:'购买指南', more:'查看全部', language:'语言', english:'FAQ 和购买指南正文为英文。' },
  es: { faq:'Preguntas frecuentes', articles:'Guías de compra', more:'Ver todo', language:'Idioma', english:'Las preguntas y las guías están en inglés.' },
  fr: { faq:'Questions fréquentes', articles:'Guides d’achat', more:'Tout voir', language:'Langue', english:'Le contenu des questions et des guides est en anglais.' },
  de: { faq:'Häufige Fragen', articles:'Kaufratgeber', more:'Alle ansehen', language:'Sprache', english:'Die Fragen und Ratgeber sind auf Englisch.' },
}
