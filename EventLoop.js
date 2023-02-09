/**
 *When you call the setTimeout(), the JavaScript engine creates a new function execution context and places it on the call stack.

The setTimeout() executes and creates a timer in the Web APIs component of the web browser. When the timer expires, the callback function 
that was passed in the setTimeout() is placed to the callback queue.

The event loop monitors both the call stack and the callback queue. It removes the callback function from the callback queue and places it 
to call stack when the call stack is empty.

Once the callback function is on the call stack, it is executed.
 */

function task(message) {
  // emulate time consuming task
  let n = 10000000000;
  while (n > 0) {
    n--;
  }
  console.log(message);
}

console.log("Start script...");
task("Call an API");
console.log("Done!");
//output:
//Start script...
//Call an API. --after 10000000000 ms
//Done!

/**
 * Callbacks to the rescue
To prevent a blocking function from blocking other activities, you typically put it in a callback function for execution later. For example:
 */
//refer callBack.js file
