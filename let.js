/*
let is block scoped
*/

// let greeting = "say Hi";
// let times = 4;

// if (times > 3) {
//   let hello = "say Hello instead";
//   console.log(hello); // "say Hello instead"
// }
// console.log(hello); // hello is not defined

/*
let can be updated but not re-declared.
*/
// let greeting = "say Hi";
// if (true) {
//   let greeting = "say Hello instead";
//   console.log(greeting); // "say Hello instead"
// }
// console.log(greeting); // "say Hi"

/*
let declarations are hoisted to the top. Unlike var which is initialized as undefined, the let keyword is not initialized.
*/
console.log(x);
let x = 5; //ReferenceError: Cannot access 'x' before initialization
