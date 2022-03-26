//* -------- 翻轉字串 --------
function reverse(a) {
  console.log(a.split("").reverse().join(""));
}
reverse("hello");

//* -------- 使用ASCII轉換小寫到大寫 --------
const cap = (o) => {
  // let opt1 = o.toUpperCase();
  // console.log(opt1);
  let opt = "";
  for (let i = 0; i < o.length; i++) {
    opt += String.fromCharCode(o.charCodeAt(i) - 32);
  }
  console.log(opt);
};
cap("abced");

//* -------- 刪除特定字元 -------
//用'略過'去思考不要用'刪除'
const del = (s) => {
  let rm = "l";
  let ans = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== rm) {
      ans += s[i];
    }
  }
  console.log(ans);
};
del("hello world");

//* -------- 使用ASCII轉換大小寫 --------
const toggle = (s) => {
  let ans = "";
  for (let i = 0; i < s.length; i++) {
    let code = s.charCodeAt(i);
    let lower = code >= 97 && code <= 122;
    let upper = code >= 65 && code <= 90;
    if (lower) {
      ans += String.fromCharCode(code - 32);
    } else if (upper) {
      ans += String.fromCharCode(code + 32);
    } else {
      ans += s[i];
    }
  }
  console.log("toggle", s, "=>", ans);
};
toggle("HellO wOrLd");
