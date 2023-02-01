/***
 * Function calling itself.
 * Suppose that you have a function called recurse(). The recurse() is a recursive function if it calls itself inside its body, like this:

function recurse() {
    // ...
    recurse();
    // ...
}
A recursive function always has a condition to stop calling itself. Otherwise, it will call itself indefinitely. 
Once the condition is met, the function stops calling itself. This is called a base condition.

function recurse() {
    if(condition) {
        recurse();
    }
    else {
        // stop calling recurse()
    }
}
recurse();
 */

/**develop a function that counts down from a specified number to 1. For example, to count down from 4 to 1: */

// program to count down numbers to 1
function countDown(number) {
  // display the number
  console.log(number);

  // decrease the number value
  const newNumber = number - 1;

  // base case
  if (newNumber > 0) {
    countDown(newNumber);
  }
}

countDown(4);
