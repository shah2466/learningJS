/*
function can be also declared as an expression which is called a function expression:
*/
/* In this syntax, the part on the right side of the assignment operator(=) is a function expression. 
In below example, the sum variable is referenced as the anonymous function that adds two arguments.*/
let sum = function (a, b) {
  return a + b;
};

/* Because a function is an expression, you can wrap it inside parentheses. */
// sum = (function (a, b) {
//   return a + b;
// })

/* In addition, you can execute the function immediately after creating it: Immediately invoked function expression (IIFE)*/

sum = (function (a, b) {
  return a - b;
})(5, 3);
console.log(sum);

/* i cna also output like but this is different topic */

console.log(
  (sum = (function (a, b) {
    return a * b;
  })(5, 3))
);
