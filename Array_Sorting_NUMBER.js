let scores = [27, 12, 31, 19, 003];
//scores.sort(); //gives weird result because Sort() does not work well on number.
//console.log(scores);

//Instead, we have to modify the Sort(). Below, the callback function recursively sorts our the number from smaller to largest
scores.sort((a, b) => a - b);
console.log(scores);
//1.33
