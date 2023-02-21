person = {
  firstName: "Jim",
  lastName: "Kimmel",
  fullName: function () {
    return this.firstName + " " + this.lastName; //Must use 'this' keyword
  },
};
console.log(person.fullName());
