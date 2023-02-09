// var a = 10;

// function functionA() {
//   console.log("Start function A");

//   function functionB() {
//     console.log("In function B");
//   }

//   functionB();
// }

// functionA();

// console.log("GlobalContext");

let a = "Hello World!";
function first() {
  console.log("Inside first function");
  second();
  console.log("Again inside first function");
}
function second() {
  console.log("Inside second function");
}
first();
console.log("Inside Global Execution Context");
