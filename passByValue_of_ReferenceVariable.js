/**
 * reference values are also passed by VALUES.
 * JavaScript passes all arguments to a function by VALUES.
Function arguments are local variables in JavaScript.
In JavaScript, all function arguments are always passed by value. It means that JavaScript copies the values of the variables into the function arguments.
Any changes that you make to the arguments inside the function do not reflect the passing variables outside of the function. 
In other words, the changes made to the arguments are not reflected outside of the function.

If function arguments are passed by reference, the changes of variables that you pass into the function will be reflected outside the function. 
This is not possible in JavaScript.

***My understanding is, when passing the value of a reference variable to a function, the value can be modified but you cannot modify which object the 
passed reference points to.
 */

/* lets create an object */
let person1 = {
  name: "Raj",
  age: 25,
  city: "Herndon",
};

// /* lets create a function that increases age of a person */

// function increaseAge(obj1) {
//   obj1.age += 1;
//   return obj1;
// }

// let modified_person1 = increaseAge(person1); //At this point, obj reference variable and person reference variable are pointing to the same object.

// console.log(person1); //{ name: 'Raj', age: 26, city: 'Herndon' }
// console.log(modified_person1); //{ name: 'Raj', age: 26, city: 'Herndon' }

/***
 * It seems that JavaScript passes an object by reference because the change to the object is reflected outside the function. However, this is not the case.
 */

/* lets take an example where the obj (refer) to another object (person2) while it is inside the changeCity() function. This will not make person reference 
variable point to the person2. */

function changeCity(obj1) {
  obj1.city = "Chantilly"; //changing the city value
  //create person2 here and make the obj1 reference variable point to the object that person2 references.
  person2 = {
    name: "Jack",
    age: 88,
  };
  obj1 = person2;
  return obj1;
}

changeCity(person1);
console.log(person1); //{ name: 'Raj', age: 25, city: 'Chantilly' }. So person1 still points to the original person1 object although obj1 is now pointing to a person2.
console.log(changeCity(person1)); //{ name: 'Jack', age: 88 }. Becauase the function returns obj1 that now points to person2
