/*

What is "this"?
introduceSelf() {
  console.log(`Hi! I'm ${this.name[0]}.`);
}
The 'this' keyword refers to the current object the code is being written inside — so in this case this is equivalent to person. 
So why not just write person instead?
Well, when you only have to create a single object literal, it's not so useful. But if you create more than one, 
this enables you to use the same method definition for every object you create.
*/

/*
What is “this” Context? Context is most often determined by how a function is invoked. When a function is called as a method of an object, 'this' is 
set to the object the method is called on: Below, functions 'foo' and 'boo' are called as methos of the objct 'obj'. Hence the 'this'
is set to the 'obj'*/

// var obj = {
//   foo: function () {
//     return this;
//   },
//   boo: function () {
//     return this;
//   },
// };
// obj.foo() === obj; // true
// console.log(obj); //{ foo: [Function: foo], boo: [Function: boo] }
// console.log(obj.foo()); //{ foo: [Function: foo], boo: [Function: boo] }
// console.log(obj.boo()); //{ foo: [Function: foo], boo: [Function: boo] }

/*The same principle applies when invoking a function with the 'new' operator to create an instance of an object. When invoked in this manner, the 
value of 'this' within the scope of the function will be set to the 'newly created instance': */

function foo() {
  //alert(this);
}

foo(); // window object--because the function is unbounded.
new foo(); // foo object --because this function is created using 'new'. so it is binded/bounded to the 'foo' function defined above.
new foo() === foo(); // false
console.log(new foo() === foo()); //false
/*
When called as an unbound function, this will default to the global context or window object in the browser. However, if the function is executed in strict mode, the 
context will default to undefined. An unbound function is a function that is not bound to an object, so this in that function refers to the global (window) object.
You can either bind a function by making it a method of an object or explicitly binding it using the .bind() method.
*/
