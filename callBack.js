/**
 * By definition, a callback is a function that you pass into another function as an argument to execute at a later time.
 */
/**
 * Callbacks to the rescue
To prevent a blocking function from blocking other activities, you typically put it in a callback function for execution later. For example:
 */
console.log("Start script...");

setTimeout(() => {
  task("Download a file.");
}, 1000); //delays by 1000 ms, meanwhile the below function, console.log("Done!") gets executed.

console.log("Done!");

//output is as follows:
//Start script...
//Done!
//Download a file

/**
 * In this example, you’ll see the message 'Start script...' and 'Done!' immediately. And after that, you’ll see the message 'Download a file'.
 */

/**
 * Synchronous callbacks
A synchronous callback is executed during the execution of the high-order function that uses the callback. 
The isOdd and isEven are examples of synchronous callbacks because they execute during the execution of the filter() function.

Asynchronous callbacks
An asynchronous callback is executed after the execution of the high-order function that uses the callback.

Asynchronicity means that if JavaScript has to wait for an operation to complete, it will execute the rest of the code while waiting.
 */
function isOdd(number) {
  return number % 2 != 0;
}
function isEven(number) {
  return number % 2 == 0;
}

function filter(numbers, fn) {
  let results = [];
  for (const number of numbers) {
    if (fn(number)) {
      results.push(number);
    }
  }
  return results;
}
let numbers = [1, 2, 4, 7, 3, 5, 6];

console.log(filter(numbers, isOdd));
console.log(filter(numbers, isEven));
