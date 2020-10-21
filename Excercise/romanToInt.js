var romanToInt = function (s) {
  let symbol = ["I", "V", "X", "L", "C", "D", "M"];
  let value = [1, 5, 10, 50, 100, 500, 1000];
  let map = new Map();
  for (let i = 0; i < symbol.length; i++) {
    map.set(symbol[i], value[i]);
  }
  let sum = 0;
  let pre = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    let cur = map.get(s[i]);

    if (i == s.length - 1) {
      sum = sum + cur;
    } else {
      if (cur < pre) {
        sum = sum - cur;
      } else {
        sum = sum + cur;
      }
    }
    pre = cur;
  }
  return sum;
};
