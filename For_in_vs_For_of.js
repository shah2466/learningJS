/**
 * Difference for..in and for..of:
Both for..in and for..of are looping constructs which are used to iterate over data structures. The only difference between them is the entities they iterate over:

for..in iterates over all enumerable property keys of an object.
The for...in loop will traverse all integer keys before traversing other keys, and in strictly increasing order, making the behavior 
of for...in close to normal array iteration. However, the for...in loop will return all enumerable properties, including those with non–integer names and 
those that are inherited.

for..of iterates over the values of an iterable object. Examples of iterable objects are arrays, strings, and NodeLists.
The values which an iterable data structure will return using for..of is dependent on the type of iterable object. 
For example an array will return the values of all the array elements whereas a string returns every individual character of the string
 */
let arr = ["el1", "el2", "el3", "abc"];
arr.addedProp = "arrProp";
arr.cde = "123";
console.log(arr);
console.log("*****************");
// // elKey are the property keys
for (let elKey in arr) {
  console.log(elKey); //0,1,2,3,addedprop,cde. I printed all keys, integer or non-integer. It did not print "el1", "el2", "el3", "abc" because they are values.
} //

for (let elKey in arr) {
  console.log(elKey + ":" + arr[elKey]); //0,1,2,3,addedprop,cde. I printed all keys, integer or non-integer
} //

console.log("*****************");
// // elVal are the properties value
for (let elVal of arr) {
  console.log(elVal); //el1, el2, el3,abc. printed the values of the array elements that have integer indices.
} //

console.log("*****************");
let string = "Hemraj";
for (let char of string) {
  console.log(char); //H,e,m,r,a,j
} //

//using regular for loop
const array5 = ["a", "b", "c"];
array5.cde = "123";
console.log(array5.length); //3, cde = 123 is hidden. 'cde'' is not integer.
for (let i = 0; i < array5.length; i++) {
  console.log(array5[i]); //a, b, c
}
