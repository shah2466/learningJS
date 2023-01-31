/*
If you want to create a function and execute it immediately after the declaration, you can declare an anonymous function like this:
(function(){
    //...
})();

*/

(function () {
  console.log("This is how you invoke a function immediately.");
})();

/* An IIFE can have a name. However, it cannot be invoked again after execution: 

(function namedIIFE() {
  //...
})();
*/
(function add(x, y) {
  console.log(x + y);
})(5, 10);

/* try to invoke the above 'add' IIFE function again */
console.log(add(10, 20)); //ReferenceError: add is not defined
