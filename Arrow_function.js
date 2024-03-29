/*
Arrow function: shorthand for declaring anonymous function.
*/

let show = function () {
  console.log("anonymous function");
};

/*
We can use ARROW function to write the above anonymous function as follows:
*/
show = () => console.log("This is an arrow function");
show();

let add = function (a, b) {
  return a + b;
};
console.log(add(2, 4));

/* this is same as below */
add = (x, y) => x * y; //no need to use return. It is used by default.
console.log(add(5, 10));


/*
// An empty arrow function returns undefined
const empty = () => {};

(() => "foobar")();
// Returns "foobar"
// (this is an Immediately Invoked Function Expression)

const simple = (a) => (a > 15 ? 15 : a);
simple(16); // 15
simple(10); // 10

const max = (a, b) => (a > b ? a : b);

// Easy array filtering, mapping, etc.
const arr = [5, 6, 13, 0, 1, 18, 23];

const sum = arr.reduce((a, b) => a + b);
// 66

const even = arr.filter((v) => v % 2 === 0);
// [6, 0, 18]

const double = arr.map((v) => v * 2);
// [10, 12, 26, 0, 2, 36, 46]

// More concise promise chains
promise
  .then((a) => {
    // …
  })
  .then((b) => {
    // …
  });

// Parameterless arrow functions that are visually easier to parse
setTimeout(() => {
  console.log("I happen sooner");
  setTimeout(() => {
    // deeper code
    console.log("I happen later");
  }, 1);
}, 1);
