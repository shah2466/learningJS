//printing 1 to 10
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// //Print 1 to 4, break when i = 5
// for (let i = 1; i <= 10; i++) {
//   if (i == 5) {
//     break;
//   }
//   console.log(i);
// }

// //Print i but SKIP 5. When i = 5, it skips to the next iteration.
// for (let i = 1; i <= 10; i++) {
//   if (i == 5) {
//     continue;
//   }
//   console.log(i);
// }

//uses a nested for loop to output a pair of numbers from 1 to 3:
// for (i = 1; i <= 3; i++) {
//   for (j = 1; j <= 3; j++) {
//     console.log(i, j);
//   }
// }

//If you use a BREAK statement inside an inner loop, it only terminates the enclosing loop.
// for (i = 1; i <= 3; i++) {
//   for (j = 1; j <= 3; j++) {
//     if (i + j == 4) {
//       break;
//     }
//     console.log(i, j);
//   }
// }

console.log("***************");
//To terminate the nested (outer) loop, you use a 'label' statement. The name of the label can be anything. Below the name of the label is 'outer'.
outer: for (i = 1; i <= 3; i++) {
  for (j = 1; j <= 10; j++) {
    if (i + j == 4) {
      break outer;
    }
    console.log(i, j);
  }
}

//Using the CONTINUE statement with a 'label'. Below, 'continue outer' exists the inner loop and goes to the next iteration of the outer loop.
// outer: for (let i = 1; i <= 4; i++) {
//   for (let j = 1; j < 4; j++) {
//     if (i + j == 4) {
//       continue outer;
//     }
//     console.log(i, j);
//   }
// }
