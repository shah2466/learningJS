//'arguments' is an Array -like object accessible inside functions that contains the values of the arguments passed to that function

function foo(n) {
  const f = () => arguments[0] + n; // foo's implicit arguments binding. arguments[0] is n
  return f();
}

console.log(foo(3)); // 3 + 3 = 6
