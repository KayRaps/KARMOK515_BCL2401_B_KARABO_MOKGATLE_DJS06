// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];

// Log each province to the console
provinces.forEach(province => {
  console.log(province);
})

// Array with province names in all uppercase
const provinceUppercase = provinces.map(province => province.toUpperCase());
console.log(provinceUppercase);

// Sort the provinces alphabetically
const sortedProvinces = provinces.sort();
console.log(sortedProvinces);

// Filter for filtering out provinces conataining "Cape"
const provincesWithoutCape = provinces.filter(province => !province.includes('Cape'));
const reaminingProvincesCount = provincesWithoutCape.length;
console.log(reaminingProvincesCount);


// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];

// Logging each name to the console
names.forEach(name => {
  console.log(name);
})

//Logging each name with its matching province
names.forEach((name, index) => {
  const province = provinces[index];
  console.log(`${name} (${province})`);
});

// array with the length of each name
const nameLengths = names.map(name => name.length);
console.log(nameLengths);

// Boolean array indicating whether each name contains the letter 'S'
const containsS = names.map(name => name.toLowerCase().includes('s'));
console.log(containsS);

// Use reduce to create an object mapping names to their respective provinces
const nameProvinceMapping = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

//1. Logging Products on the console
console.log(products.forEach(product => console.log(product.product)));

// filtering by Name Length
console.log(products.filter(product => product.length <= 5));


//