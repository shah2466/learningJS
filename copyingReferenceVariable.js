/**
 * When you assign a reference value from one variable to another, the JavaScript engine creates a reference so that both variables refer to the same
 * object on the heap memory. This means that if you change one variable, it’ll affect the other.
 */

let car1 = {
  brand: "ford",
  price: 2000,
  color: "white",
}; //car1 is a reference variable stored in STACK and will point to the Car1 object stored in HEAP.

let car2 = car1; //car2 is a reference variable that will point to the same Car1 object in HEAP.

/* Now if we make changes to car2 variable, it will affect car1 variable as well since both are pointing to the same object in HEAP. */
car2.year = 1985;

console.log(car1); //{ brand: 'ford', price: 2000, color: 'white', year: 1985 }
console.log(car2); //{ brand: 'ford', price: 2000, color: 'white', year: 1985 }
