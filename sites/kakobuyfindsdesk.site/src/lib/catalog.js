import snapshot from './preview-products.json';

export const mainSite = 'https://www.cnfanssp.com';
export const categories = [
  ['Shoes', '/shoes/'], ['T-shirts', '/t-shirts/'], ['Hoodies & sweaters', '/hoodies-sweaters/'],
  ['Jackets', '/jackets/'], ['Pants & shorts', '/pants-shorts/'], ['Headwear', '/headwear/'],
  ['Accessories', '/accessories/'], ['Jerseys', '/Jersey/'], ['Electronics', '/electronics/'],
  ['Other finds', '/other-stuff/'],
].map(([name, path]) => ({ name, url: mainSite + path }));

export const products = snapshot.map(({ currency, ...product }) => ({
  ...product,
  url: new URL(product.url, mainSite).href,
  price: new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(product.amount),
}));
