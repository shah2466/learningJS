/**
 * Reference values are also passed by VALUES.
 * JavaScript passes all arguments to a function by VALUES.
Function arguments are local variables in JavaScript.
In JavaScript/Java, all function arguments are always passed by value. 
It means that JavaScript copies the values of the variables into the function arguments.

1) If the variable is of primitive type and it is passed into a function, the argument variable makes a COMPLETELY NEW COPY of the variable, 
so any change made to the copy from inside the function will not impact the copy that is outside the function. They live in two separate memory addresses.

2) If the variable is of reference type (meaning it holds an address that is pointing to an object) and it is passed into a function, the 
'argument variable' copies the address of the object that the 'reference variable' holds. This means, the 'reference variable' is pointing to the object and the argument 
variable inside the function that copied the reference variable (the address of the object) is also pointing to the same object. They both hold the same address.
Any changes the 'argument variable' makes to the object from inside the function will be visible to the 'reference variable' outside the function because they 
both are pointing to the same object.


/*********UNCOMMENT below */

// /* lets create an object */
// let person1 = {
//   name: "Raj",
//   age: 25,
//   city: "Herndon",
// };

// // /* lets create a function that increases age of a person */

// function increaseAge(obj1) {
//   obj1.age += 1;
//   return obj1;
// }

// let modified_person1 = increaseAge(person1); //At this point, 'modified_person1' reference variable and 'person1' reference variable hold the value which is
// //address of the same object. Hence both reference variable are pointing to the same object.

// console.log(person1); //{ name: 'Raj', age: 26, city: 'Herndon' }
// console.log(modified_person1); //{ name: 'Raj', age: 26, city: 'Herndon' }

/*********UNCOMMENT till here */

/***
 * It seems that JavaScript passes an object by reference because the change to the object is reflected outside the function. However, this is not the case.
 */

/* lets take an example where the obj (refer) to another object (person2) while it is inside the changeCity() function. This will NOT make 'person' reference 
variable point to the person2. */

/*********UNCOMMENT below */

let person2 = {
  name: "SAM",
  age: 30,
  city: "Okton",
};

function changeCity(obj1) {
  obj1.city = "Chantilly"; //changing the city value
  //create person3 here and make the obj1 reference variable point to the object that person3 references.
  person3 = {
    name: "Jack",
    age: 88,
  };
  obj1 = person3; //the argument object obj1 is reassigned to the person3 object, which means that obj1 now refers to person3.
  return obj1;
}

changeCity(person2); //modifies the 'person2' object and returns a reference variable that now points to person3. This will not impact where the person2 is pointing to.
console.log(person2); //{ name: 'SAM', age: 30, city: 'Chantilly' }. So person2 still points to the original person2 object. Person2' city property changed by the function.
console.log(person3); //{ name: 'Jack', age: 88 }.
/*********UNCOMMENT till here */

// Objects are always references, so unless something is explicitly copying the object, mutations to an object would be visible to the outside.
// When an object variable is copied, the reference is copied, but the object itself is not duplicated. Now we have two variables, each storing a reference (address)
// to the same object. So, copying an object variable creates one more reference to the same object. We can use either variable to access the object and modify its contents.

// VVI: An important side effect of storing objects as references is that an object declared as const can be modified.
// For instance:
const user = {
  name: "John",
};
user.name = "Pete"; // (*)
console.log(user.name); // Pete
// It might seem that the line (*) would cause an error, but it does not. The value of user is constant, it must always reference the same object, but
// properties of that object are free to change. In other words, the const user gives an error only if we try to set user=... as a whole.
