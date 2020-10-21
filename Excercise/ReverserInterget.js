// var reverse = function (x) {
//   const limit = Math.pow(2, 31);
//   if (x == 0 || x > limit - 1 || x < -limit) {
//     return 0;
//   }

//   let temp = Array.from(x.toString()).reverse();

//   let result = 0;
//   for (let i = 0; i < temp.length; i++) {
//     if (Number.isInteger(parseInt(temp[i]))) {
//       result *= 10;
//       result += parseInt(temp[i]);
//     }
//   }
//   result *= Math.abs(x) / x;
//   if (result > limit - 1 || result < -limit) {
//     return 0;
//   }
//   return result;
// };

var reverse = function (x) {
  if (x === 0) return x;
  const limit = Math.pow(2, 31);
  let result =
    (parseInt(Math.abs(x).toString().split("").reverse().join("")) *
      Math.abs(x)) /
    x;

  return result > limit - 1 || result < -limit ? 0 : result;
};

console.log("reverse: ", reverse(1534236469));

// lay dau
// to array.revers.tostring * dau
