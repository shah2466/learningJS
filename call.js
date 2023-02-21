/** call this function on which object.
 * https://www.freecodecamp.org/news/javascript-this-keyword-binding-rules/#:~:text=In%20JavaScript%2C%20the%20this%20keyword,when%20we%20invoke%20a%20method.
With the call() method, the context with which the function has to be called will be passed as a parameter to the call().
Tip: When you only have one value argument or no value arguments to pass, use call(). 
    When you have multiple value arguments to pass, use apply().
*/

let getName = function () {
  console.log(this.name);
};

let user = {
  name: "Tapas",
  address: "Freecodecamp",
};

getName.call(user);

/**
 * Here the call() method is invoked on a function called getName(). The getName() function just logs this.name.
 * But what is this here? That gets determined by what has been passed to the call() method. Here, this will bind to the user object because we have passed the
 * user as a parameter to the call() method. So this.name should log the value of the name property of the user object, that is Tapas.
 */

//In the above example, we have passed just one argument to call(). But we can also pass multiple arguments to call(), like this:

getName = function (hobby1, hobby2) {
  console.log(this.name + " likes " + hobby1 + " , " + hobby2);
};

user = {
  name: "Tapas",
  address: "Bangalore",
};

let hobbies = ["Swimming", "Blogging"];

getName.call(user, hobbies[0], hobbies[1]);
/*Here we have passed multiple arguments to the call() method. The first argument must be the 'object context' with which the function has to be invoked. 
Other parameters could just be values to use.*/
/**
 * Did you notice a pain point here? In case of a call(), the arguments need to be passed one by one – which is not a smart way of doing things!
 * That's where our next method, apply(), comes into the picture.
 */
