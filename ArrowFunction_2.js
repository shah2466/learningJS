// // An empty arrow function returns undefined
// const empty = () => {};

// (() => "foobar")();
// // Returns "foobar"
// // (this is an Immediately Invoked Function Expression)

// const simple = (a) => (a > 15 ? 15 : a);
// simple(16); // 15
// simple(10); // 10

// const max = (a, b) => (a > b ? a : b);

// // Easy array filtering, mapping, etc.
const arr = [5, 6, 13, 0, 1, 18, 23];

// const sum = arr.reduce((a, b) => a + b, 0); //a = accumulator, b = the array element to be added.
// //a = 0 initially because I gave '0' as argument. This value is optional. If i do not give the value. arr[0] will be used in its place.
// console.log(sum);
// // 66

// const even = arr.filter((array_element) => array_element % 2 === 0);
// [6, 0, 18]

// const double = arr.map((v) => v * 2);
// // [10, 12, 26, 0, 2, 36, 46]

// More concise promise chains
// promise
//   .then((a) => {
//     // …
//   })
//   .then((b) => {
//     // …
//   });

// Parameterless arrow functions that are visually easier to parse

// setTimeout(() => {
//   console.log("I happen sooner");
//   setTimeout(() => {
//     // deeper code
//     console.log("I happen later");
//   }, 4000);
// }, 2000);

/*
Perhaps the greatest benefit of using arrow functions is with methods like setTimeout() and EventTarget.prototype.addEventListener() 
that usually require some kind of closure, call(), apply(), or bind() to ensure that the function is executed in the proper scope.

With traditional function expressions, code like this does not work as expected:
********************
Note: 'this' reers to the object that is executing the current function if the function is inside an object.
Note: 'this' refers to the global object (eg: window) if it is inside a function.
*/
const obj1 = {
  count: 10,
  //below, 'doSomethingLater()' is a method of an the 'obj1' hence, any 'this' inside it will bind to the 'obj1'.
  doSomethingLater() {
    setTimeout(function () {
      // the function executes on the window scope because this function is inside a function, unlike 'doSomethingLater()' which is inside an object and has binding to 'obj1'
      this.count++; //here 'this' refers to window object and 'count' variable in not defined in window scope.
      console.log(this.count); //same as above
    }, 300);
  },
};

obj1.doSomethingLater(); // logs "NaN", because the property "count" is not in the window scope. NaN = Not a number.
//We get NaN as output because we are trying to increment a non-number value. this.count is not defined, hence it is not a number and cannot be incremented.

//With ARROW functions, the 'this' scope is more easily preserved
const obj2 = {
  count: 10,
  doSomethingLater() {
    // The 'doSomethinglater' method syntax binds "this" to the "obj" context.
    setTimeout(() => {
      // Since the arrow function doesn't have its 'own binding' and
      // setTimeout (as a function call) doesn't create a binding
      // itself, the "obj2" context of the outer method is used.
      this.count++;
      console.log(this.count);
    }, 300);
  },
};

obj2.doSomethingLater(); // logs 11
