import {faq,guides,research} from './content.mjs';
const escape = text => text.replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'})[c]);
const sourceLinks = keys => keys.map(key => {
  const [label,url] = research[key];
  return '<li><a href="'+url+'">'+escape(label)+'</a></li>';
}).join('');
const question = ([q,a]) => '<details><summary>'+escape(q)+'</summary><p>'+escape(a)+'</p></details>';
const articleCard = ([slug,title,keyword]) => '<a class="editorial-card" href="/guides/'+slug+'/"><strong>'+escape(title)+'</strong><small>'+escape(keyword)+'</small></a>';
const faqPage = index => {
  const links = Array.from({length:3},(_,i)=>{
    const href = i ? '/faq/'+(i+1)+'/' : '/faq/';
    return '<a href="'+href+'"'+(i===index?' aria-current="page"':'')+'>'+(i+1)+'</a>';
  }).join('');
  return '<h1>Hipobuy FAQ</h1><div class="questions">'+faq.slice(index*8,index*8+8).map(question).join('')+'</div><div class="paging" aria-label="FAQ pages">'+links+'</div><h2>Sources</h2><ul>'+sourceLinks(['catalog','official','comparison','faq'])+'</ul>';
};
export const pages = {
  'categories/':['Categories','<h1 data-t="categories">Categories</h1><div class="chips" id="chips"></div><p id="status" role="status"></p>'],
  'products/':['All products','<div class="section-head"><h1 data-t="latest">Latest products</h1><a href="https://www.cnfanssp.com/AllProducts/" data-t="all">All products</a></div><p id="status" role="status"></p><div class="grid" id="products"></div>'],
  'faq/':['Hipobuy FAQ',faqPage(0)],
  'faq/2/':['Hipobuy FAQ · 2',faqPage(1)],
  'faq/3/':['Hipobuy FAQ · 3',faqPage(2)],
  'guides/':['Hipobuy Guides','<h1>Hipobuy Guides</h1><div class="editorial-grid">'+guides.map(articleCard).join('')+'</div>']
};
for(const [slug,title,keyword,primary,secondary,paragraphs] of guides){
  pages['guides/'+slug+'/'] = [
    title,
    '<article><a href="/guides/" data-t="guides">Guides</a><h1>'+escape(title)+'</h1>'+
    paragraphs.map(p=>'<p>'+escape(p)+'</p>').join('')+
    '<h2>Sources</h2><ul>'+sourceLinks([primary,secondary])+'</ul></article>',
    keyword
  ];
}
export const editorial = '<section class="editorial"><div class="section-head"><h2>FAQ</h2><a href="/faq/" data-t="allFaq">All questions</a></div><div class="questions">'+faq.slice(0,3).map(question).join('')+'</div><div class="section-head"><h2 data-t="guides">Guides</h2><a href="/guides/" data-t="allGuides">All guides</a></div><div class="editorial-grid">'+guides.slice(0,3).map(articleCard).join('')+'</div></section>';
