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

function person(first, last) {
  firstName = first;
  lastName = last;
  return { firstName, lastName };
}

console.log(
  person("Ram", "karki").firstName + " " + person("Ram", "karki").lastName
);
