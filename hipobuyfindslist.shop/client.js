const grid = document.getElementById('grid');
const status = document.getElementById('status');

document.getElementById('language').addEventListener('change', event => {
  location.assign(event.target.value + location.hash);
});

function card(item) {
  const link = document.createElement('a');
  link.className = 'card';
  link.href = item.url;
  if (item.image) {
    const img = new Image();
    img.src = item.image;
    img.alt = '';
    img.loading = 'lazy';
    link.append(img);
  }
  const title = document.createElement('h3');
  title.textContent = item.title;
  const price = document.createElement('strong');
  price.textContent = item.price ? '¥' + item.price : '';
  const details = document.createElement('span');
  details.textContent = document.body.dataset.details;
  const line = document.createElement('div');
  line.append(price, details);
  link.append(title, line);
  return link;
}

async function load() {
  try {
    const response = await fetch('/api/catalogue');
    if (!response.ok) throw Error('Catalogue unavailable');
    const items = await response.json();
    grid.append(...items.slice(0, Number(grid.dataset.limit)).map(card));
    const feature = document.querySelector('.feature');
    const item = feature && items.find(entry => entry.url === feature.dataset.url);
    if (item) {
      document.getElementById('feature-name').textContent = item.title;
      if (item.image) {
        const img = feature.querySelector('img');
        img.src = item.image;
        img.alt = item.title;
        img.hidden = false;
      }
    }
    status.textContent = '';
  } catch {
    status.textContent = document.body.dataset.error;
  } finally {
    grid.removeAttribute('aria-busy');
  }
}
if (grid) load();

function openQuestion() {
  const question = document.getElementById(location.hash.slice(1));
  if (question instanceof HTMLDetailsElement) {
    question.open = true;
    question.scrollIntoView();
  }
}
openQuestion();
window.addEventListener('hashchange', openQuestion);

