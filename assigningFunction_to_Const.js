/* function can be also declared as an expression which is called a function expression. A reference name is given so that the function can be used later by
referring to that name */

const getName = () => {
  return "Jim";
};

function location() {
  return "Munich";
}
const getLocation = location();

const dateOfBirth = "12.01.1982";

console.log(
  `${getName()} lives in ${getLocation} and was born on ${dateOfBirth}.`
);
