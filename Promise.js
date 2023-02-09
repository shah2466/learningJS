/**
 * 
 * A promise is an object that encapsulates the result of an asynchronous operation.
A promise starts in the pending state and ends in either fulfilled state or rejected state.
Use then() method to schedule a callback to be executed when the promise is fulfilled, and catch() method to schedule a callback to be invoked when the promise is rejected.
Place the code that you want to execute in the finally() method whether the promise is fulfilled or rejected.
 */
function getUsers() {
  let users = [];

  // delay 1 second (1000ms)
  setTimeout(() => {
    users = [
      { username: "john", email: "john@test.com" },
      { username: "jane", email: "jane@test.com" },
    ];
  }, 1000);

  return users;
}
console.log(getUsers());
/*returns empty array because of setTimeout, the 'return users' is executed before the 
users = [{username: "john", email: "john@test.com"}, {username: "jane", email: "jane@test.com"}] gets executed */
/* to resolve this issue, we may use a 'callback' function but it adds complexicity and if the number of functions grows, you may end up with the callback hell problem.
So, it is better to use the concept of 'Promises' */

/**
 * By definition, a promise is an object that encapsulates the result of an asynchronous operation.
 */

//To create a promise object, you use the Promise() constructor:
//The promise constructor accepts a callback function that typically performs an asynchronous operation. This function is often referred to as an 'executor'.

//In turn, the executor accepts two callback functions with the name 'resolve' and 'reject'.
//Note that the callback functions passed into the executor are resolve and reject by convention only.

/**
 * If the asynchronous operation completes successfully, the executor will call the resolve() function to change the state of the promise from pending to 
 * fulfilled with a value. In case of an error, the executor will call the reject() function to change the state of the promise from pending to rejected with the 
 * error reason. Once a promise reaches either fulfilled or rejected state, it stays in that state and can’t go to another state.
In other words, a promise cannot go from the fulfilled state to the rejected state and vice versa. Also, it cannot go back from the fulfilled or rejected state 
to the pending state. Once a new Promise object is created, its state is pending. If a promise reaches fulfilled or rejected state, it is resolved.

***Note that you will rarely create promise objects in practice. Instead, you will consume promises provided by libraries.
 * 
 */
const promise = new Promise((resolve, reject) => {
  // contain an operation
  // ...

  // return the state
  if (success) {
    resolve(value);
  } else {
    reject(error);
  }
});

//Consuming a Promise: then, catch, finally

/* 1) The then() method. To get the value of a promise when it’s fulfilled, you call the then() method of the promise object. 
The following shows the syntax of the then() method:
promise.then(onFulfilled,onRejected);
The then() method accepts two callback functions: onFulfilled and onRejected.
The then() method calls the onFulfilled() with a value, if the promise is fulfilled or the onRejected() with an error if the promise is rejected.
Note: that both onFulfilled and onRejected arguments are optional. */
