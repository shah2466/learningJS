/*
function without a name.An anonymous function is not accessible after its initial creation. Therefore, you often need to assign it to a variable.
Note that if you don’t place the anonymous function inside the (), you’ll get a syntax error. 
The () makes the anonymous function an expression that returns a function object.
Anonymous functions can be used as an argument to other functions or as an immediately invoked function execution.
*/

/*
In below example, the anonymous function has no name between the function keyword and parentheses ().
Because we need to call the anonymous function later, we assign the anonymous function to the show variable.
*/

let show = function () {
  console.log("Example of anonymous function.");
};
show();

/* Using anonymous functions as arguments 
In this example, we pass an anonymous function into the setTimeout() function. 
The setTimeout() function executes this anonymous function one second later
*/

setTimeout(function () {
  console.log("Execute later after 1 second");
}, 1000);
