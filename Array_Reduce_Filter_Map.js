//Give the sum of all marks in the array below
let student_marks = [20, 40, 35, 14, 37, 100];

// //traditional way
// let sum = 0;
// for (let i = 0; i < student_marks.length; i++) {
//   sum = sum + student_marks[i];
// }
// console.log(sum);

//REDUCE: do the same using Reduce() and Arrow function (callback function):
//Reduce method takes 2 paramenteres: a callback function and an initial value of the accumulation. Reduce(param1, Param2) = Reduce(CallbackFunction, initialValue).
/**
 * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call
 * to the callback function.
 * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
 * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
 */
sum_using_reduceMethod = student_marks.reduce(
  (total_sum, each_mark) => total_sum + each_mark,
  0
);
/*'each_mark' maps to each element of the array. '0' is the initial value of the total_sum (accumulation). It is optional. Above, callbackfn takes only 2 arguments: total_sum and each_mark. 
It can accept up to 4 arguments.*/
console.log(sum_using_reduceMethod);

//FILTER() methods to print our EVEN numbers. Filter method Returns the elements of an array that meet the condition specified in a callback function.
let even_num_marks_only = student_marks.filter(
  (each_mark) => each_mark % 2 == 0
);
console.log(even_num_marks_only);

//MAP() method. Returns the elements of an array that meet the condition specified in a callback function. It modifies each element into a new value.
/*For this example, take the even scores from the array and multiple by 3 */

modified_even_num_marks_only = even_num_marks_only.map(
  (each_mark) => each_mark * 3
);
console.log(modified_even_num_marks_only);
