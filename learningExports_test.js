// const user = require("./learningExports");

// console.log(
//   `${user.name} lives in ${user.getLocation()} and was born on ${user.dob}.`
// );

const { name, getLocation, dob } = require("./learningExports.js");
console.log(`${name} lives in ${getLocation()} and was born on ${dob}.`);
