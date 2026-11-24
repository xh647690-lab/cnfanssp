document.querySelector('#language').addEventListener('change', event => {
  location.assign(event.target.value);
});

function openFaqAnchor() {
  const slug = location.hash.slice(1);
  const question = slug && document.getElementById(slug);
  if (question instanceof HTMLDetailsElement) question.open = true;
}
openFaqAnchor();
window.addEventListener('hashchange', openFaqAnchor);

function productCard(item) {
  const card = document.createElement('a');
  card.className = 'card';
  card.href = item.url;
  const picture = document.createElement('div');
  picture.className = 'product-image';
  if (item.image) {
    const image = new Image();
    image.loading = 'lazy';
    image.decoding = 'async';
    image.alt = '';
    image.src = item.image;
    picture.append(image);
  }
  const body = document.createElement('div');
  body.className = 'card-body';
  const name = document.createElement('h3');
  name.textContent = item.title;
  const bottom = document.createElement('div');
  bottom.className = 'card-bottom';
  const price = document.createElement('span');
  price.className = 'price';
  price.textContent = item.price ? '¥' + item.price : '';
  const detail = document.createElement('span');
  detail.textContent = document.body.dataset.productLabel;
  bottom.append(price, detail);
  body.append(name, bottom);
  card.append(picture, body);
  return card;
}

async function displayProducts(grid) {
  const status = document.getElementById('catalogue-status');
  const chinese = document.documentElement.lang === 'zh-Hans';
  try {
    const response = await fetch('/api/catalogue');
    if (!response.ok) throw new Error('Catalogue unavailable');
    const {items} = await response.json();
    grid.replaceChildren(...items.slice(0, Number(grid.dataset.limit)).map(productCard));
    if (!items.length) status.textContent = chinese ? '主站暂未返回商品。' : 'The source returned no products.';
    const featured = document.querySelector('.featured');
    const item = items.find(product => product.id === '6667');
    if (featured && item?.image) {
      featured.querySelector('.featured-image').href = item.url;
      const image = featured.querySelector('img');
      image.src = item.image;
      image.alt = item.title;
      document.getElementById('featured-title').textContent = item.title;
      featured.hidden = false;
    }
  } catch {
    status.textContent = chinese ? '商品暂时无法加载，请打开主站查看。' : 'Products are temporarily unavailable. Open the source catalogue to browse.';
  } finally {
    grid.removeAttribute('aria-busy');
  }
}
const grid = document.getElementById('items');
if (grid) displayProducts(grid);
