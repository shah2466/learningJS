/**
 * The JavaScript array prototype constructor is used to allow to add new methods and properties to the Array() object. If the method is constructed, then
 * it will available for every array. When constructing a property, All arrays will be given the property, and its value, as default.
 * Syntax: Array.prototype.name = value.
 */

/**Create a custom method that transforms any array values into upper case:*/

Array.prototype.myUcase = function () {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].toUpperCase();
  }
};
//Use the method on any array:

let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.myUcase();
console.log(fruits); //[ 'BANANA', 'ORANGE', 'APPLE', 'MANGO' ]
