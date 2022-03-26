//* -------- isPrime --------
const isPrime = (n) => {
  let ans = true;
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      ans = false;
      break;
    }
  }
  console.log(ans);
};
isPrime(11);

//* -------- isComposite --------
const isComposite = (n) => {
  let ans = [];
  for (let i = 1; i < n; i++) {
    if (n % i == 0) {
      ans.push(i);
    }
  }
  console.log("The composite of", n, "is", ans);
};
isComposite(30);
