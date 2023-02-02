/*

What is "this"?
introduceSelf() {
  console.log(`Hi! I'm ${this.name[0]}.`);
}
The 'this' keyword refers to the current object the code is being written inside — so in this case this is equivalent to person. 
So why not just write person instead?
Well, when you only have to create a single object literal, it's not so useful. But if you create more than one, 
this enables you to use the same method definition for every object you create.
*/
