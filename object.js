/**An object is a collection of related data and/or functionality.
 * hese usually consist of several variables and functions (which are called properties and methods when they are inside objects)
 *
 */

//Objects as object properties
const person = {
  name: {
    first: "Bob",
    last: "Smith",
  },
};

console.log(person.name.first);
console.log(person["name"]["last"]); //can also do this

// if an object property name is held in a variable, then you can't use dot notation to access the value, but you can access the value using bracket notation.
