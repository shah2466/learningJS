/*
From ChatGPT:
In JavaScript, every time a new function is defined, a new lexical environment is created. A lexical environment consists of all the variables and functions that were in scope at the time the function was defined. This means that a function can access variables and functions that are in its own lexical environment, as well as any lexical environments that contain it.

A closure is a function that has access to variables from its outer (enclosing) lexical environment, even after that outer function has returned. This is possible because the closure "closes over" those variables and keeps them alive, so they can still be accessed by the closure even though the outer function has completed execution.

Here's an example:

scss
Copy code
function outer() {
  var x = 10;

  function inner() {
    console.log(x);
  }

  return inner;
}

var closure = outer();
closure(); // logs 10
In this example, outer() defines a variable x and a function inner(), which logs the value of x. outer() then returns inner().

When we call outer(), it returns inner(), which we assign to the variable closure. We can then call closure(), which logs the value of x. The interesting thing here is that even though outer() has completed execution and x is no longer in scope, closure() still has access to x and can log its value.

This is because closure() "closes over" the variable x and keeps it alive. closure() is a closure because it has access to variables from its outer lexical environment, even though that outer environment is no longer in scope.

In summary, lexical scoping is the idea that a function can access variables and functions from its lexical environment, and closures are functions that "close over" variables from their outer lexical environments and keep them alive, even after those outer environments have completed execution.






*/
