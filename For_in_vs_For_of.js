/**
 * Difference for..in and for..of:
Both for..in and for..of are looping constructs which are used to iterate over data structures. The only difference between them is the entities they iterate over:

for..in iterates over all enumerable property keys of an object
for..of iterates over the values of an iterable object. Examples of iterable objects are arrays, strings, and NodeLists.
The values which an iterable data structure will return using for..of is dependent on the type of iterable object. 
For example an array will return the values of all the array elements whereas a string returns every individual character of the string
 */
let arr = ["el1", "el2", "el3"];
arr.addedProp = "arrProp";
console.log(arr);

// elKey are the property keys
for (let elKey in arr) {
  console.log(elKey);
}

// elVal are the properties value
for (let elVal of arr) {
  console.log(elVal);
}
