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
