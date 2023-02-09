/**
 * Simply put, A lexical environment is a structure that holds identifier-variable mapping. 
 * (here identifier refers to the name of variables/functions, and the variable is the reference to actual object [including function object and array object] 
 * or primitive value).

For example, consider the following snippet:

var a = 20;
var b = 40;
function foo() {
  console.log('bar');
}
So the lexical environment for the above snippet looks like this:

lexicalEnvironment = {
  a: 20,
  b: 40,
  foo: <ref. to foo function>
}
 */
