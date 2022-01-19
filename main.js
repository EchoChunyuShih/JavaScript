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

// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

//forEach
// companies.forEach(function (company) {
//   console.log(company.name);
// });

//filter
// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }
// console.log(canDrink);

// const canDrink = ages.filter(function (age) {
//   if (age >= 21) {
//     return true;
//   }
// });

// const canDrink = ages.filter((age) => age >= 21);
// console.log(canDrink);

// const retailCompany = companies.filter(function (companies) {
//   if (companies.category === "retail") {
//     return true;
//   }
// });
// console.log(retailCompany);

// const retailcompany = companies.filter(
//   (company) => company.category === "retail"
// );
// console.log(retailcompany);

//companies that start in the 80's
const companyEighties = companies.filter(
  (company) => company.start >= 1979 && company.start <= 1989
);
console.log(companyEighties);

const companyTenYrs = companies.filter(
  (company) => Number(company.end - company.start) >= 10
);
console.log(companyTenYrs);

//map
//sort
//reduce
