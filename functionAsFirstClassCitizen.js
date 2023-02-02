/**
 * Function are firstclass citizens: An entity that can be constructed at run-time, passed as a parameter, returned from a function, or assigned into a variable.
 */

/**
 * 1. Ability to treat functions as values: Functions in JavaScript can be treated as values, i.e. a function can be stored as a value in a variable.
 */

let greet = function () {
  console.log("this message is stored in 'greet' variable");
};
greet(); //Anonymous function is used in the places where that function is used as a value.

/**
 * 2. Ability to pass a function as arguments: Functions in JavaScript also has the ability to be passed as arguments to another function.
 */

function returnPerson1() {
  return "Ram karki";
}
function returnPerson2() {
  return "Sam veda";
}

function printName(name) {
  console.log("The person's name is: " + name());
}

printName(returnPerson1);
printName(returnPerson2);

/**3. Ability to return a function from another function: Functions that return a function are called Higher Order Functions. */

greet = function () {
  return function () {
    console.log("printing from a function inside a function.");
  };
};

greet()();
/** Here, we use the double parentheses to invoke the returned function, hence we use greet()(). 
 * Single parenthesis will call the function itself without invoking its returned function. We can also do it by storing the function in a variable like this-
var func = greet();
func();
 */
