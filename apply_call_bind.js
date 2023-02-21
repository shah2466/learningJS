/*
https://www.freecodecamp.org/news/javascript-this-keyword-binding-rules/#:~:text=In%20JavaScript%2C%20the%20this%20keyword,when%20we%20invoke%20a%20method.

A function object has three important methods: apply(), call() and bind(). 
bind(), call(), and apply() methods are also known as borrowing functions (explained at the end).

The apply() and call() methods call a function with a given 'this' value and arguments.

The difference between the apply() and call() is that you need to pass the arguments to the apply() 
method as an array-like object, whereas you pass the arguments to the call() function individually.

The bind() method creates a new function instance whose 'this' value is bound to the object that you provide.
bind() method creates a new function that you can execute later while the call() method executes the function immediately.
*/

let cat = { type: "cat", sound: "meow" };
let dog = { type: "dog", sound: "woof" };

const say = function (arg1, arg2) {
  console.log(arg1 + " " + arg2);
  console.log(this.type + " says " + this.sound);
};

say.apply(cat, ["What does", " the cat say?"]); //passing arg1 and arg2 from inside an array.
say.call(dog, "What does", " the DOG say?"); // passing arg1 and arg2 individually

/* bind() method: The bind() method creates a new function instance whose 'this' value is bound to the object that you provide. */

//First, define an object named car:

let car = {
  speed: 5,
  start: function () {
    console.log("Start with " + this.speed + " km/h");
  },
};

//Then, define another object named aircraft:

let aircraft = {
  speed: 10,
  fly: function () {
    console.log("Flying");
  },
};
/* The aircraft has no start() method. To start an aircraft, you can use the bind() method of the start() method of the car object: */

let taxiing = car.start.bind(aircraft);

/* In this statement, we change the 'this' value inside the start() method of the car object to the  aircraft object.  
The bind() method returns a new function that is assigned to the taxiing variable. */

/* call that new function */

taxiing(); //Start with 10 km/h.

/* The following uses the call() method to call the start() method on the aircraft object: */
car.start.call(aircraft); //Start with 10 km/h

/*
As you can see, the bind() method creates a new function that you can execute later (using the taxiing variable), 
while the call() method executes the function immediately. This is the main difference between the bind() and call() methods.

Technically, the aircraft object borrows the start() method of the car object via the bind(), call() or apply() method.

For this reason, the bind(), call(), and apply() methods are also known as borrowing functions.
*/
