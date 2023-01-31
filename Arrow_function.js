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
