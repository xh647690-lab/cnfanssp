const language = document.getElementById('language');
language.addEventListener('change', () => {
  const next = language.value;
  if (next) location.assign(next);
});

const grid = document.getElementById('grid');
if (grid) {
  const text = JSON.parse(grid.dataset.text);
  const home = grid.dataset.view === 'home';
  const results = document.getElementById('results');
  const sort = document.getElementById('sort');
  const pagination = document.getElementById('pagination');
  const pageSize = home ? 4 : 8;
  const origin = 'https://www.cnfanssp.com';
  let items = [];
  let next = null;
  let page = 0;
  let loading = false;

  function element(tag, css, label) {
    const node = document.createElement(tag);
    if (css) node.className = css;
    if (label) node.textContent = label;
    return node;
  }

  function photo(item, parent, eager = false) {
    if (!item.image) {
      parent.textContent = text.noImage;
      return;
    }
    const image = element('img');
    image.alt = '';
    image.src = item.image;
    image.loading = eager ? 'eager' : 'lazy';
    image.decoding = 'async';
    image.addEventListener('error', () => { parent.textContent = text.noImage; });
    parent.append(image);
  }

  function card(item) {
    const anchor = element('a', 'card');
    anchor.href = new URL(item.path, origin).href;
    const picture = element('span', 'card-photo');
    photo(item, picture);
    const copy = element('span', 'card-copy');
    const meta = element('span', 'card-meta');
    const value = Number(item.price);
    const price = item.price && Number.isFinite(value)
      ? '¥' + new Intl.NumberFormat(document.documentElement.lang).format(value) : item.price;
    meta.append(element('span', 'card-price', price), element('span', 'card-link', text.details));
    copy.append(element('strong', '', item.name), meta);
    anchor.append(picture, copy);
    return anchor;
  }

  function button(label, handler) {
    const control = element('button', 'button secondary', label);
    control.type = 'button';
    control.addEventListener('click', handler);
    return control;
  }

  function display() {
    const order = sort?.value;
    const arranged = !order || order === 'recent' ? items : [...items].sort((a, b) => {
      if (!a.price || !b.price) return Number(!a.price) - Number(!b.price);
      return (order === 'low' ? 1 : -1) * (Number(a.price) - Number(b.price));
    });
    const visible = arranged.slice(page * pageSize, (page + 1) * pageSize);
    grid.replaceChildren(...visible.map(card));
    if (!visible.length) grid.append(element('p', 'status', text.none));
    if (!pagination) return;
    const previous = button(text.previous, () => { page -= 1; display(); bringIntoView(); });
    previous.disabled = page === 0;
    const onward = button(text.next, advance);
    onward.disabled = !next && (page + 1) * pageSize >= items.length;
    const indicator = element('span', 'page-number', new Intl.NumberFormat(document.documentElement.lang).format(page + 1));
    pagination.replaceChildren(previous, indicator, onward);
    results.textContent = visible.length ? new Intl.NumberFormat(document.documentElement.lang).format(items.length) + ' ' + text.count : '';
  }

  function bringIntoView() {
    document.getElementById('catalog-title').scrollIntoView({ block: 'start' });
    document.getElementById('catalog-title').focus({ preventScroll: true });
  }

  async function advance() {
    if (loading) return;
    if ((page + 1) * pageSize >= items.length && next && !await load(next)) return;
    if ((page + 1) * pageSize >= items.length) return;
    page += 1;
    display();
    bringIntoView();
  }

  async function load(cursor) {
    loading = true;
    grid.setAttribute('aria-busy', 'true');
    try {
      const params = new URLSearchParams();
      if (cursor) params.set('page', cursor);
      const response = await fetch('/api/catalog?' + params);
      if (!response.ok) throw new Error();
      const data = await response.json();
      const before = items.length;
      items = [...new Map([...items, ...data.items].map(item => [item.path, item])).values()];
      next = items.length > before ? data.next : null;
      if (home) {
        const hero = document.getElementById('hero-media');
        hero.replaceChildren(...items.filter(item => item.image).slice(0, 3).map(item => {
          const panel = element('div', 'hero-photo');
          photo(item, panel, true);
          return panel;
        }));
      }
      display();
      return true;
    } catch {
      const retry = button(text.retry, cursor ? advance : () => load());
      if (items.length && pagination) {
        pagination.replaceChildren(element('p', '', text.error), retry);
      } else {
        const status = element('div', 'status', text.error);
        status.append(document.createElement('br'), retry);
        grid.replaceChildren(status);
      }
      return false;
    } finally {
      loading = false;
      grid.setAttribute('aria-busy', 'false');
    }
  }

  sort?.addEventListener('change', () => { page = 0; if (items.length) display(); });
  load();
}

function showLinkedQuestion() {
  const id = location.hash.slice(1);
  const entry = document.getElementById(id);
  if (entry instanceof HTMLDetailsElement) {
    entry.open = true;
    entry.scrollIntoView({ block: 'nearest' });
  }
}
showLinkedQuestion();
window.addEventListener('hashchange', showLinkedQuestion);
