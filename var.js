/*
Scope of var
*/
// var greeter = "hey hi";

// function newFunction() {
//   var hello = "hello";
// }
// console.log(greeter); // error: hello is not defined

/*
var variables can be re-declared and updated
*/

// var greeter = "hey hi";
// var greeter = "say Hello instead";
// console.log(greeter); //say Hello instead

/*
Hoisting of var: Hoisting is a JavaScript mechanism where variables and function declarations are moved 
to the top of their scope before code execution. This means that if we do this:
*/

console.log(greeter); //undefined
var greeter = "say hello";

/* This is interpreted as:
    var greeter;
    console.log(greeter); // greeter is undefined
    greeter = "say hello";
    */
/* So var variables are hoisted to the top of their scope and initialized with a value of undefined. */
