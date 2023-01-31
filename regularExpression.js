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

console.log(re);

/* 
The RegExp object has many useful methods. 
One of them is the test() method that allows you to test if a string contains a match of the pattern in the regular expression. 
The following example use the test() method to test whether the string 'hi John' matches the pattern hi :
*/
re = /hi/;
let result = re.test("hi John");

console.log(result); // true
