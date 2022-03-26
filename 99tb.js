//* -------- 99乘法表 --------
function nine(m) {
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= m; j++) {
      console.log(i, "x", j, "=", i * j);
    }
  }
}
// nine(9);

//* -------- mn乘法表 --------
function mn(m, n) {
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      console.log(i, "x", j, "=", i * j);
    }
  }
}
mn(9, 11);
