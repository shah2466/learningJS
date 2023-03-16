let user1 = {
  name: "user1",
};

let user2 = { name: "user2" }; //new object declared with 'let'
user1 = user2; //user1 reference variable copied the same address the user2 holds. they both now point to user2 object.
//if the user1 was declared with CONST, i could not change the address that it holds.

console.log(user1); //{ name: 'user2' }
console.log(user2); //{ name: 'user2' }
