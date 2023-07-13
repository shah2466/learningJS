/**
 * As mentioned earlier, the JavaScript engine can do only one thing at a time. However, it’s more precise to say that the JavaScript runtime can do one thing at a time.
The web browser also has other components, not just the JavaScript engine.
When you call the setTimeout() function, make a fetch request, or click a button, the web browser can do these activities concurrently and asynchronously.
The setTimeout(), fetch requests, and DOM events are parts of the Web APIs of the web browser.
https://www.javascripttutorial.net/javascript-event-loop/

 * Working with asynchronous functions:
 * setTimeout() is an asynchronous function, meaning that the timer function will not pause execution of other functions in the
 * functions stack. In other words, you CANNOT use setTimeout() to create a "pause" before the next function in the function stack fires.
 * See the following example:
 */

setTimeout(() => {
  console.log("this is the first message");
}, 5000);
setTimeout(() => {
  console.log("this is the second message");
}, 3000);
setTimeout(() => {
  console.log("this is the third message");
}, 1000);

// Output:

// this is the third message
// this is the second message
// this is the first message

/**
 * Notice that the first function does not create a 5-second "pause" before calling the second function. Instead, the first function is called, but waits
 * 5 seconds to execute. While the first function is waiting to execute, the second function is called, and a 3-second wait is applied to the second function
 * before it executes. Since neither the first nor the second function's timers have completed, the third function is called and completes its execution first.
 * Then the second follows. Then finally the first function is executed after its timer finally completes.
 * --To create a progression in which one function only fires after the completion of another function, see the documentation on 'Promises'.
 */

/**
 * Timeouts are cancelled using clearTimeout().
 * To call a function repeatedly (e.g., every N milliseconds), consider using setInterval().
 */

//The following illustrates the syntax of setTimeout():

let timeoutID  = setTimeout(cb [,delay], arg1, arg2,...);
/* In this syntax: 'cb' is a callback function to be executed after the timer expires.
delay is the time in milliseconds that the timer should wait before executing the callback function. If you omit it, the delay defaults to 0.
arg1, arg2, … are arguments passed to the cb callback function.
The setTimeout() returns a timeoutID which is a positive integer identifying the timer created as a result of calling the method.
The timeoutID can be used to cancel timeout by passing it to the clearTimeout() method. */