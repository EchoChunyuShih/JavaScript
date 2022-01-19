const companies = [
  { name: "company one", category: "retail", start: 1981, end: 2003 },
  { name: "company two", category: "auto", start: 1992, end: 2008 },
  { name: "company three", category: "finance", start: 1999, end: 2007 },
  { name: "company four", category: "auto", start: 1989, end: 2010 },
  { name: "company five", category: "retail", start: 2009, end: 2014 },
  { name: "company six", category: "finance", start: 1987, end: 2010 },
  { name: "company seven", category: "retail", start: 1986, end: 1996 },
  { name: "company eight", category: "auto", start: 2011, end: 2016 },
  { name: "company nine", category: "finance", start: 1981, end: 1989 },
];
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//for loop ------------------------------------------------
for (let i = 0; i < companies.length; i++) {
  console.log(companies[i]);
}

//  forEach() ------------------------------------------------
companies.forEach(function (company) {
  console.log(company.name);
});

//filter() ------------------------------------------------
//legal drinking age
const canDrink = ages.filter((age) => age >= 21);
console.log(canDrink);

//retail company
const retailCompany = companies.filter(
  (company) => company.category === "retail"
);
console.log(retailCompany);

//companies that start in the 80's
const companyEighties = companies.filter(
  (company) => company.start >= 1979 && company.start <= 1989
);
console.log(companyEighties);

//companies that lasts for 10+ years
const companyTenYrs = companies.filter(
  (company) => Number(company.end - company.start) >= 10
);
console.log(companyTenYrs);

//map() ------------------------------------------------
//create an array for company names
const companyNames = companies.map((company) => company.name);
console.log(companyNames);

//create an array for company names and years
// const companyInfo = companies.map(function (company) {
//   // return company.name;
//   return `${company.name} - [${company.start} - ${company.end}]`;
// });

const companyInfo = companies.map(
  (company) => `${company.name} - [${company.start} - ${company.end}]`
);
console.log(companyInfo); // "company one - [1981 - 2003]..."

//create an array of square root ages
const squareAges = ages.map((age) => Math.sqrt(age));
console.log(squareAges);

//age times two
const ageTimesTwo = ages.map((age) => age * 2);
console.log(ageTimesTwo); // [66, 24, 40, 32, 10, 108, 42, 88, 122, 26, 30, 90, 50, 128, 64]

//age sqrt then * 2
const ageMap = ages.map((age) => Math.sqrt(age)).map((age) => age * 2);

//sort() ------------------------------------------------
//accend by start years
const sortedCompany = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
console.log(sortedCompany);

//only sort by the first number
const sortAges = ages.sort(); // [12, 13, 15, 16, 20, 21, 25, 32, 33, 44, 45, 5, 54, 61, 64]
//accend by ages
//const sortedAges = ages.sort((a, b) => a - b);
console.log(sortAges);

//reduce() ------------------------------------------------
//adding up ages
const ageSum = ages.reduce((total, age) => total + age, 0);
console.log(ageSum);

//adding up company years
const totalYears = companies.reduce(
  (total, company) => total + (company.end - company.start),
  0
);
console.log(totalYears);
