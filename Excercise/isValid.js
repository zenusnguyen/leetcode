/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) return false;
  const openSymbol = ["(", "{", "["];
  const closeSymbol = new Map();
  closeSymbol.set(")", "(");
  closeSymbol.set("}", "{");
  closeSymbol.set("]", "[");
  let counter = s.length / 2;
  let store = [];
  for (let i = 0; i < s.length; i++) {
    if (openSymbol.indexOf(s[i]) !== -1) {
      store.push(s[i]);
    } else {
      if (store.pop() !== closeSymbol.get(s[i])) return false;
      counter--;
    }
  }
  return counter == 0 ? true : false;
};
