/**
 * Find factorial of a number using 'Recursive' function.
 * The factorial of a number is the product of all the integers from 1 to that number. For example, the factorial of 6 is 1*2*3*4*5*6 = 720 .
 * Factorial of '0' = 1
 */

function findFactorial(number) {
  if (number == 0) {
    return 1; //factorial of 0 is 1
  }
  let factorial = number;
  if (number > 1) {
    //console.log(number); // just for test
    factorial = factorial * findFactorial(number - 1);
  }
  return factorial;
}
console.log(findFactorial(6)); // factorial of 6 = 720
