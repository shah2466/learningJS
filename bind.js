/**
 * https://www.freecodecamp.org/news/javascript-this-keyword-binding-rules/#:~:text=In%20JavaScript%2C%20the%20this%20keyword,when%20we%20invoke%20a%20method.
    bind(): Unlike the call() method of calling the function directly, bind() 'returns a brand new function' and we can invoke that instead.
*/
let getName = function (hobby1, hobby2) {
  console.log(this.name + " likes " + hobby1 + " , " + hobby2);
};

let user = {
  name: "Tapas",
  address: "Bangalore",
};

let hobbies = ["Swimming", "Blogging"];

let newFn = getName.bind(user, hobbies[0], hobbies[1]);

newFn();
//Here the getName.bind() doesn't invoke the function getName() directly. It returns a new function, newFn and we can invoke it as newFn().
