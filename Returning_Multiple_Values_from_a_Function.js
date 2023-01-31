/*
JavaScript functions can return a single value. To return multiple values from a function, you can pack the return 
values as elements of an array or as properties of an object.
*/

function getName_using_Array() {
  let firstName = "Ram",
    lastName = "Shahi";
  return [firstName, lastName];
}

const [first, last] = getName_using_Array();
console.log("The first name is: " + first + " Last name is: " + last);

/* In ES6, you can use the destructuring assignment syntax to unpack values from an array more intuitively, like this:

const [firstName, lastName] = getName_using_Array();
In this code, the firstName and lastName variables will take the first and second elements of the return ARRAY. */

/*****
 * Returning multiple values from an function using an object
 */

function getNames_using_Object() {
  // get names from the database or API
  let firstName = "John",
    lastName = "Doe";

  // return values
  return {
    first_nm: firstName,
    last_nm: lastName,
  };
}
let { first_nm, last_nm } = getNames_using_Object();
console.log("The first name is: " + first_nm + " Last name is: " + last_nm);

/* if we make the names of the properties same as the variables, you can shorten it using the object literal syntax extensions in ES6 as follows: */
function getNames_using_Object_short() {
  // get names from the database or API
  let firstName = "George",
    lastName = "Yama";

  // return values
  return { firstName, lastName };
}

let full_name = getNames_using_Object_short();

console.log(
  "The first name is: " +
    full_name.firstName +
    " Last name is: " +
    full_name.lastName
);
