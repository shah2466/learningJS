// Wrapper classes in JavaScript are a group of classes that represent primitive data types (such as Number, String, Boolean, etc.) as objects.
// These classes provide a set of methods and properties that allow you to work with primitive values as if they were objects.
// For example, the 'Number' wrapper class allows you to create a number object and call methods like toFixed(), toExponential(), toPrecision(), etc. on it,
// whereas the primitive number value does not have these methods.

// Wrapper classes are useful because they allow you to work with primitive values as objects, providing additional functionality and convenience.
// For example, you can call methods on a string value by creating a String object using the new keyword, like this:
const myString = new String("Hello, world!"); //creating myString object using the 'String' wrapper class.

console.log(myString.toUpperCase()); // "HELLO, WORLD!"
console.log(myString.charAt(0)); // "H"
//Without the String wrapper class, you would have to use string methods directly on the primitive value, like this:

const myString1 = "Hello, world!"; //this string variable is NOT an instance of wrapper class String.

console.log(myString1.toUpperCase()); // "HELLO, WORLD!"
console.log(myString1.charAt(0)); // "H"

// The result looks the same but In first case, we are using 'myString' object's method from the Wrapper class 'String'. IN second case,
// you would have to use string methods directly on the primitive value

// Wrapper classes can also be used to convert between different data types. For example,
// you can convert a string to a number using the Number wrapper class, like this:

//Explaining NUMBER wrapper class
let num1 = new Number(100); //new num1 object is created that is an instance of Wrapper Class 'Number'.
//We have various methods such as toExponential(), available when the num1 is an object of a class.
console.log(num1.toExponential(2)); //1.00e+2 //note the 1.00 in  1.00e+2. Two 0 after the decimal because the argument passed is '2'.

let num2 = new Number(200); //new num2 object is created that is an instance of Wrapper Class 'Number'
console.log(num2.toExponential(4)); //2.0000e+2 //note the 2.0000 in  2.0000e+2. Four 0 after the decimal because the argument passed is '4'.

//Without using a Number wrapper class, i could not use toExponential(parameter) because it is not available to the number data type.
let num3 = 100;
console.log(num3.toExponential(1)); //1.0e+2. This happens ONLY beccause When a property is accessed on a primitive value, JavaScript automatically
//wraps the value into the corresponding wrapper object and accesses the property on the object instead. Without wrapping primitive value into the Number Wrapper class
//toExponential() would not be available to it.

//Summary: by using wrapper class, we are wrapping the primitive value and making the primitive value an object of the wrapper class, so the object can access the
//properties and methods available in the wrapper class.
