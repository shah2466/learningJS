//A function definition's last parameter can be prefixed with ... (three U+002E FULL STOP characters), which will cause all remaining (user supplied) parameters to be placed within an Array object.

function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");

// Console Output:
// a, one
// b, two
// manyMoreArgs, ["three", "four", "five", "six"]

//A function definition can only have one rest parameter, and the rest parameter must be the last parameter in the function definition.
