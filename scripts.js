// A list of provinces:
const provinces = [
  "Western Cape",
  "Gauteng",
  "Northern Cape",
  "Eastern Cape",
  "KwaZulu-Natal",
  "Free State",
];

// A list of names:
const names = [
  "Ashwin",
  "Sibongile",
  "Jan-Hendrik",
  "Sifso",
  "Shailen",
  "Frikkie",
];

// A list of products with prices:
const products = [
  { product: "banana", price: "2" },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: "8" },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// #1  log each name  and province to the console
names.forEach((name) => console.log(name));
provinces.forEach((province) => console.log(province));

//#2 log each name with a province that matches
names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`); // created a template literal so grouping is paired
});

//#3 make the provinces upercase
const provincesUpercase = provinces.map((province) => province.toUpperCase());
console.log(provincesUpercase);

//#4  log  name of lengths in
console.log(names.map((name) => name.length));

//#5  alphabetically sort province
console.log([...provinces].sort());

//6 When the cape is removed this code will log out and filter provinces // needed help with this
console.log(provinces.filter((province) => !province.includes("Cape")).length);
