let test_String = "Today is Tuesday. This day is the second day of the weekday";
//find how many times the 'day' occuers in the above string. It should be '5' times

let count = 0;
console.log(test_String.indexOf("day", 57)); // -1. This means 'no match' found.
console.log(test_String.indexOf("cat", 0)); // -1. This means 'no match' found. Dont have to explicitly mention '0' but i did it anyway.

/**
 * What is string indexOf !=- 1 in Javascript?
-1 means "no match found". The reason it returns -1 instead of "false" is that a needle at the beginning of the string 
would be at position 0, which is equivalent to false in Javascript.
 */

let value = test_String.indexOf("day"); //2 = gives the index of first occurance of 'day'. The search starts at '0'.

console.log(value);
while (value != -1) {
  count++;
  value = test_String.indexOf("day", value + 1); //returns '-1' if match no longer found.
}
console.log(count); //5
