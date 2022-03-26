//* -------- reduce  --------
function sum(n) {
  let result = n.reduce((prev, curr) => prev + curr, 10); //accumulator累加器
  // let result = n.reduce((prev, curr) => {
  //   console.log(prev, curr);
  //   return prev + curr;
  // }, 10); //accumulator累加器
  console.log(result);
}
sum([1, 2, 3, 4, 5]);

//* -------- recursive 遞迴  --------
function sum_recursive(n) {
  if (n < 1) return 0;
  return n + sum_recursive(n - 1);
}
// console.log(sum_recursive(1)); //1
// console.log(sum_recursive(2)); //3
// console.log(sum_recursive(5)); //15
// console.log(sum_recursive(10)); //55
