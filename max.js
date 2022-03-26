//* -------- 找最大值 --------
const findmax = (m) => {
  console.log(Math.max(...m));
};
findmax([1, 5, 8, 10, 45, 78]);

//* -------- 找第二大值 --------
const smax = (m) => {
  let max2 = Math.max(...m);
  let b = m.filter((v) => v !== max2);
  console.log(Math.max(...b));
};
smax([1, 5, 8, 10, 45, 78]);
