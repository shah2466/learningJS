//Give the sum of all marks in the array below
let student_marks = [20, 40, 35, 14, 37, 100];
let sum = 0;
for (let i = 0; i < student_marks.length; i++) {
  sum = sum + student_marks[i];
}
console.log(sum);

//Reduce: do the same using Reduce()
sum = student_marks.reduce();
