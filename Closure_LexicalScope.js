function outer() {
  var x = 10;

  function inner() {
    console.log(x);
  }

  return inner;
}

var closure = outer();
closure(); // logs 10

/*
My explanation: When running this code, first function outer is defined along with its lexical environment. When var closure is created and assigned to 
the result of execution of outer function (outer()), the exuection goes into the outer function. Inside the outer function, it defines x and assigns 10 to it.
Next, it defines the function named 'inner' and its lexical environment is created (see below for definition). 'inner' function is a closure function.
Next, the return statement is executed. Here the return statement returns the function inner but it does not execute it because we have not given the '()' with the function.
Once we return from the outer function, the scope of 'x' is expired.
Next, when we run the closure(), the execution goes inside the inner() and does console.log(x) but the 'x' should be outside of the scope.
Normally that is how it is but because of the 'Closure' feature in JS, when the inner function (which is a closure function) was defined, it kept the scope of 'x' alive.
Hence we are able to access 'x' from the inner function even though we had already returned from the outer function and the scope of 'x' should have ended there.
*/

// ChatGPT:
//In JavaScript, every time a new function is defined, a new lexical environment is created. A lexical environment consists of all the variables and functions that were in scope at the time the function was defined. This means that a function can access variables and functions that are in its own lexical environment, as well as any lexical environments that contain it.

// A closure is a function that has access to variables from its outer (enclosing) lexical environment, even after that outer function has returned. This is possible because the closure "closes over" those variables and keeps them alive, so they can still be accessed by the closure even though the outer function has completed execution.

// Here's an example:

// scss
// Copy code
// function outer() {
//   var x = 10;

//   function inner() {
//     console.log(x);
//   }

//   return inner;
// }

// var closure = outer();
// closure(); // logs 10
// In this example, outer() defines a variable x and a function inner(), which logs the value of x. outer() then returns inner().

// When we call outer(), it returns inner(), which we assign to the variable closure. We can then call closure(), which logs the value of x.
// The interesting thing here is that even though outer() has completed execution and x is no longer in scope, closure() still has access to x and can log its value.

// This is because closure() "closes over" the variable x and keeps it alive. closure() is a closure because it has access to variables from
// its outer lexical environment, even though that outer environment is no longer in scope.

// In summary, lexical scoping is the idea that a function can access variables and functions from its lexical environment, and closures
// are functions that "close over" variables from their outer lexical environments and keep them alive, even after those outer environments have completed execution.
