const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

// 1. forEach Basics
console.log("1. forEach Basics:");
provinces.forEach(province => console.log(province));
names.forEach(name => console.log(name));
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`)); // Fixed template literal syntax

// 2. Uppercase Transformation
console.log("\n2. Uppercase Transformation:");
const uppercaseProvinces = provinces.map(province => province.toUpperCase());
console.log(uppercaseProvinces);

// 3. Name Lengths
console.log("\n3. Name Lengths:");
const nameLengths = names.map(name => name.length);
console.log(nameLengths);

// 4. Sorting
console.log("\n4. Sorting:");
const sortedProvinces = provinces.slice().sort(); // Slice to avoid mutating the original array
console.log(sortedProvinces);

// 5. Filtering Cape
console.log("\n5. Filtering Cape:");
const noCapeProvinces = provinces.filter(province => !province.includes('Cape'));
console.log(`Count of remaining provinces: ${noCapeProvinces.length}`); // Fixed template literal syntax

// 6. Finding 'S'
console.log("\n6. Finding 'S':");
const namesWithS = names.map(name => name.toLowerCase().includes('s'));
console.log(namesWithS);

// 7. Creating Object Mapping
console.log("\n7. Creating Object Mapping:");
const nameProvinceMap = names.reduce((map, name, index) => {
  map[name] = provinces[index];
  return map;
}, {});
console.log(nameProvinceMap);

// Advanced Exercises
console.log("\nAdvanced Exercises:");

// 1. Log Products
console.log("\n1. Log Products:");
const productNames = products.map(p => p.product);
console.log(productNames);

// 2. Filter by Name Length
console.log("\n2. Filter by Name Length:");
const shortNamedProducts = products.filter(p => p.product.length <= 5);
console.log(shortNamedProducts);

// 3. Price Manipulation
console.log("\n3. Price Manipulation:");
const validPricedProducts = products.filter(p => p.price && !isNaN(p.price));
const totalPrice = validPricedProducts.reduce((sum, p) => sum + Number(p.price), 0);
console.log(`Total price: ${totalPrice}`);

// 4. Concatenate Product Names
console.log("\n4. Concatenate Product Names:");
const concatenatedProductNames = products.reduce((str, p) => str + p.product, "");
console.log(concatenatedProductNames);

// 5. Find Extremes in Prices
console.log("\n5. Find Extremes in Prices:");
const numericPrices = products.map(p => Number(p.price) || 0);
const highestPrice = Math.max(...numericPrices);
const lowestPrice = Math.min(...numericPrices);
console.log(`Highest: ${highestPrice}. Lowest: ${lowestPrice}`);

// 6. Object Transformation
console.log("\n6. Object Transformation:");
const transformedProducts = products.map(({ product, price }) => ({ name: product, cost: price }));
console.log(transformedProducts);
