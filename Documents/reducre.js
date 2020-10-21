const arr = [{ name: "Amy" }, { name: "Bob" }];
const a= arr.map((it) => it.name); // map
console.log('a: ', a);
arr.reduce((c, n) => [...c, n.name], []); // reduce

const numbers = [5, 10, 15];
const total = numbers.reduce((accumulator , item) => accumulator + item,1);
console.log("total: ", total);
