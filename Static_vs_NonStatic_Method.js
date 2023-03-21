In JavaScript, there is no explicit concept of static and non-static methods like in some other object-oriented programming languages such as Java or C#. However, we can achieve similar functionality using JavaScript's prototypical inheritance.

A method defined on an object's prototype is shared among all instances of the object. This is similar to a static method in other languages as it does not belong to a specific instance of the object. On the other hand, a method defined inside an object's constructor or directly on the instance belongs to that specific instance only, and is not shared among other instances. This is similar to a non-static method in other languages.

Here is an example to illustrate this:

javascript
Copy code
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  
  // non-static method
  this.getAge = function() {
    return new Date().getFullYear() - this.year;
  }
}

// static method
Car.getInfo = function() {
  return "This is a car object";
}

// prototype method
Car.prototype.startEngine = function() {
  return "Engine started for " + this.make + " " + this.model;
}

// creating objects of Car
let car1 = new Car("Toyota", "Corolla", 2015);
let car2 = new Car("Honda", "Civic", 2018);

console.log(Car.getInfo()); // This is a car object
console.log(car1.startEngine()); // Engine started for Toyota Corolla
console.log(car2.startEngine()); // Engine started for Honda Civic
console.log(car1.getAge()); // 8
console.log(car2.getAge()); // 5
In this example, getInfo is defined as a static method on the Car constructor function, and can be called directly on the Car function itself. startEngine is defined on the Car prototype, and can be called on any instance of the Car object. Finally, getAge is defined as a method on the instances of the Car object and is not shared among other instances.
