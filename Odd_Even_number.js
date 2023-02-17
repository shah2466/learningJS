// //print ODD number between 1 and 10
// for (i = 1; i <= 10; i++) {
//   if (i % 2 != 0) {
//     console.log(i);
//   }
// }
// console.log("**********");
// //print EVEN number between 1 and 10
// for (i = 1; i <= 10; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

//The above loop can be written using CONTINUE:
//print ODD number between 1 and 10
for (i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    continue;
  }
  console.log(i);
}
console.log("**********");
//print EVEN number between 1 and 10
for (i = 1; i <= 10; i++) {
  if (i % 2 != 0) {
    continue;
  }
  console.log(i);
}

//Create a new array from an existing array. Get just the EVEN numbers using FILTER() method.
//FILTER() methods to print our EVEN numbers. Filter method Returns the elements of an array that meet the condition specified in a callback function.
let student_marks = [20, 40, 35, 14, 37, 100];
even_num_marks_only = student_marks.filter((each_mark) => each_mark % 2 == 0);
console.log(even_num_marks_only);
