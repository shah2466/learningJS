/**
 * Variable scope

A variable can be defined in either local or global scope, which establishes the variables’ accessibility from different scopes during runtime. 
Any defined global variable, meaning any variable declared outside of a function body will live throughout runtime and can be accessed and altered in any scope. 
Local variables exist only within the function body of which they are defined and will have a different scope for every call of that function. 
There it is subject for value assignment, retrieval, and manipulation only within that call and is not accessible outside of that scope.

ECMAScript 6 (ES6/ES2015) introduced the let and const keywords that support the declaration of block scope local variables. 
This means the variable will be confined to the scope of a block that it is defined in, such as an if statement or for loop and will not 
be accessible outside of the opening and closing curly braces of the block. This is contrary to var declarations which are accessible 
outside blocks they are defined in. The difference between let and const is that a const declaration is, as the name implies, constant - a read-only 
reference to a value. This does not mean the value is 'immutable', just that the 'variable identifier' cannot be reassigned.
 */

/*
const declarations are block scoped. const cannot be updated or re-declared.
Every const declaration, therefore, must be initialized at the time of declaration.
This behavior is somehow different when it comes to objects declared with const. While a const object cannot be updated, the properties of 
this objects can be updated.
*/
//Therefore, if we declare a const object as this:

const greeting = {
  message: "say Hi",
  times: 4,
};

//while we cannot do this:

greeting = {
  words: "Hello",
  number: "five",
}; // error:  Assignment to constant variable.

//we can do this:

greeting.message = "say Hello instead"; //This will update the value of greeting.message without returning errors.
