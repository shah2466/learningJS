/*
In JavaScript, regular expressions are objects. JavaScript provides the built-in RegExp type that allows you to work with regular expressions effectively.

Regular expressions are useful for searching and replacing strings that match a pattern. They have many useful applications.

For example, you can use regular expressions to extract useful information in web scraping like product prices. 
Or you can use regular expressions to validate form fields like email addresses and phone numbers. 
*/
/* 
To create a regular expression in JavaScript, you enclose its pattern in forward-slash characters (/) like this: 
Note that a regular expression doesn’t have single quotes or double quotes like a regular string.
*/
let re = /hi/;

/* Or you can use the RegExp constructor: */
re = new RegExp("hello");
/* 
The RegExp object has many useful methods. 
One of them is the test() method that allows you to test if a string contains a match of the pattern in the regular expression. 
The following example use the test() method to test whether the string 'hi John' matches the pattern hi :
*/
re = /hi/;
let result = re.test("hi John");

console.log(result); // true

/* Using pattern flags */
// 1) The ignore flag (i) - ignores casing (case-sensitive)
// 2) The global flag (g) -
/**
 * Another commonly used flag is the global flag (g). Without the global flag, the RegExp object only checks if there is a match in a string and returns the first match.

When the g flag is available, the RegExp looks for all matches and returns all of them.

It’s possible to combine flags e.g., gi flags combine the ignore (i) and the global (g) flags.
 */
/**
 * Summary
Use /.../ or RegExp constructor to create a regular expression.
Use the pattern flag e.g., ignore (i) and global (g) to modify the matching behavior.
Use the RegExp.test() method to determine if a pattern is found in a string.
Use the RegExp.exec() method to find the match and return an array that contains the information of the match.
 */
