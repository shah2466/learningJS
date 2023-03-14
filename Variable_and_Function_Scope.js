/*
Variable and function scoping in JavaScript refers to how variables and functions are accessible within different parts of your code. Understanding scoping is important for writing clean, efficient, and bug-free JavaScript code. In JavaScript, there are two types of scope: global scope and local scope.

Global Scope
Variables declared outside of any function or block in JavaScript have global scope. This means that they are accessible from anywhere in your code. For example:

javascript
Copy code
let myGlobalVar = "hello";

function greet() {
  console.log(myGlobalVar); // "hello"
}

greet();
console.log(myGlobalVar); // "hello"
Here, myGlobalVar is declared outside of any function and therefore has global scope. It can be accessed from within the greet() function and outside of it as well.

Local Scope
Variables declared inside a function or block have local scope. This means that they are only accessible from within the function or block in which they are declared. For example:

javascript
Copy code
function greet() {
  let myLocalVar = "hello";
  console.log(myLocalVar); // "hello"
}

greet();
console.log(myLocalVar); // Uncaught ReferenceError: myLocalVar is not defined
Here, myLocalVar is declared inside the greet() function and therefore has local scope. It can be accessed from within the greet() function, but not outside of it.

Function Scoping
Functions in JavaScript create a new scope. This means that variables declared inside a function are only accessible from within that function or any nested functions. For example:

javascript
Copy code
function greet() {
  let myVar = "hello";

  function nestedGreet() {
    console.log(myVar); // "hello"
  }

  nestedGreet();
}

greet();
console.log(myVar); // Uncaught ReferenceError: myVar is not defined
Here, myVar is declared inside the greet() function and is accessible from within the nestedGreet() function because nestedGreet() is nested inside of greet(). However, myVar is not accessible from outside of greet() because it has function scope.

Block Scoping
Variables declared with let or const have block scope. This means that they are only accessible within the block in which they are declared. For example:

javascript
Copy code
function greet() {
  if (true) {
    let myVar = "hello";
    console.log(myVar); // "hello"
  }

  console.log(myVar); // Uncaught ReferenceError: myVar is not defined
}

greet();
Here, myVar is declared inside the if block and is only accessible from within that block. Once the block is exited, myVar is no longer accessible. This is useful for avoiding variable collisions and for keeping your code clean and organized.

Conclusion
Understanding variable and function scoping is important for writing efficient, maintainable JavaScript code. Remember that variables declared outside of any function have global scope, variables declared inside of a function have local scope, functions create a new scope, and variables declared with let or const have block scope.
*/
