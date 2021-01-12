// Function Expression;

/*  Function expressions are a way of creating a function thats stored in a value that can be accessed.

e.g: 
*/
const add = function(x,y){
    return x + y;
};
/*
if you call the function;
add(5,8)// 13 would be the result.

Functions are also value that can be parsed, stored and worked with just like arrays and other data types.
*/


// Function Expression Exercise;

/* Define a function that returns the square of a number. 
Define the function as a function expression, stored in a variable called  
*/

const squared = function (a) {
    return a*a;
};

//if squared(4); is called, you would get 16. You can also use the Math.pow() to acheive the same result.

// Higher Order Function

/* This are Functions that works with other functions, accepts other functions as arguments or return a function */