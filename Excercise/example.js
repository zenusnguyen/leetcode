// let firstName = null;
// let lastName = null;
// let nickName = "Supercoder";

// // shows the first truthy value:
// console.log(firstName || lastName || nickName || "Anonymous"); // Supercoder

// function pow

// let ask = (question, yes, no)=>{
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Do you agree?",
//   function() { alert("You agreed."); },
//   function() { alert("You canceled the execution."); }
// );

// let user = {
  
//   name: "John",
//   age: 30,
//   "likes birds": true  // multiword property name must be quoted
// };
// console.log('user: ', user);


let str= `D:/JS/Algorithm`


let convertPathToObject = (str)=>{
  
  return Object.assign({},Object.assign({},str.split('/')));
}
console.log('convertPathToObject: ', convertPathToObject(str));
