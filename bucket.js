//每個水桶的容量都是 2 的 n 次方，每一次取水都能帶最少的水桶去，而且「每一個水桶一定都要裝滿」，現在你已經知道要取水的單位了，請你幫忙算算看，最少需要帶幾個水桶。

const one = (total) => {
  let arr = [];
  let sum = 0;
  for (let i = 1; i <= 2 ** 31; i *= 2) {
    arr.push(i);
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] <= total) {
      total -= arr[i];
      sum++;
    }
  }
  return sum;
};
const binary = (total) => {
  output = total.toString(2);
  // let sum = output.split("").filter((v) => v != 0).length;
  let sum = 0;
  for (let i = 0; i < output.length; i++) {
    if (output[i] == "1") {
      sum++;
    }
  }
  return sum;
};
const binary2 = (total) => {
  let sum = 0;
  while (total > 0) {
    sum += total & 1;
    total >>= 1;
  }
  return sum;
};
const bucket = (total) => {
  // console.log(one(total));
  // console.log(binary(total));
  console.log(binary2(total));
};
bucket(30);
