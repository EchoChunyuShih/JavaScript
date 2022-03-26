//* -------- 找最小值 --------
var findmin = function (arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  console.log("min", min);
};
findmin([5, 4, 8, 9, 3, 2, 1]);
//*排序

//* -------- 找2nd小值 --------
const smin = (arr0) => {
  let min = Math.min(...arr0);
  let arr = arr0.filter((v) => v !== min);
  let min2 = Math.min(...arr);

  console.log("smin", min2);
};
smin([5, 4, 8, 9, 3, 2, 1]);
