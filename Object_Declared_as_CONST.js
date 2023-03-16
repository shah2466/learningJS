// Objects are always references, so unless something is explicitly copying the object, mutations to an object would be visible to the outside.
// When an object variable is copied, the reference is copied, but the object itself is not duplicated. Now we have two variables, each storing a reference (address)
// to the same object. So, copying an object variable creates one more reference to the same object. We can use either variable to access the object and modify its contents.

// VVI: An important side effect of storing objects as references is that an object declared as const can be modified.
// For instance:
const user = {
  name: "John",
};
user.name = "Pete"; // (*)
console.log(user.name); // Pete
// It might seem that the line (*) would cause an error, but it does not. The value of user is constant, it must always reference the same object, but
// properties of that object are free to change. In other words, the const user gives an error only if we try to set user=... as a whole.
