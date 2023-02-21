/**
 * https://www.freecodecamp.org/news/javascript-this-keyword-binding-rules/#:~:text=In%20JavaScript%2C%20the%20this%20keyword,when%20we%20invoke%20a%20method.
apply(): It is exactly the same as call() but allows you to pass the arguments more conveniently. Here we are able to pass an array of arguments, which is much more 
    convenient than passing them one by one. 
Tip: When you only have one value argument or no value arguments to pass, use call(). 
    When you have multiple value arguments to pass, use apply().
*/
let getName = function (hobby1, hobby2) {
  console.log(this.name + " likes " + hobby1 + " , " + hobby2);
};

let user = {
  name: "Tapas",
  address: "Bangalore",
};

let hobbies = ["Swimming", "Blogging"];

getName.apply(user, hobbies);

//Here we are able to pass an array of arguments, which is much more convenient than passing them one by one.
