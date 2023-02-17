//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

//Let's decompose a traditional anonymous function down to the simplest arrow function step-by-step. Each step along the way is a valid arrow function.

/*Note: Traditional function expressions and arrow functions have more differences than their syntax. 
We will introduce their behavior differences in more detail in the next few subsections. */

// Traditional anonymous function
https: (function (a) {
  return a + 100;
});

// 1. Remove the word "function" and place arrow between the argument and opening body bracket
(a) => {
  return a + 100;
};

// 2. Remove the body braces and word "return" — the return is implied.
(a) => a + 100;

// 3. Remove the parameter parentheses
//  a => a + 100;
