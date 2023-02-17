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
