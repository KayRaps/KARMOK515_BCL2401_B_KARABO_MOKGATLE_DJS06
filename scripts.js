const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

// 1. Log Products
console.log(products.forEach(product => console.log(product.product)));

// 2. Filter by Name Length
console.log(products.filter(product => product.product.length <= 5));

// 3. Price Manipulation
console.log(
  products
    .filter(product => product.price && product.price.toString().trim() !== '')
    .map(product => ({ ...product, price: Number(product.price) }))
    .reduce((total, product) => total + product.price, 0)
);

// 4. Concatenate Product Names
console.log(products.reduce((acc, product) => acc + product.product, ''));

// 5. Find Extremes in Prices
console.log(
  (() => {
    const pricesArray = products
      .filter(product => product.price && product.price.toString().trim() !== '')
      .map(product => Number(product.price));

    const highestPrice = Math.max(...pricesArray);
    const lowestPrice = Math.min(...pricesArray);

    return `Highest: ${highestPrice}. Lowest: ${lowestPrice}.`;
  })()
);

// 6. Object Transformation
console.log(
  products.map(product => {
    const { product: name, price: cost } = product;
    return { name, cost };
  })
);
