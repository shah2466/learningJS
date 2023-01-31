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
