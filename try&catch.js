/*  Try/Catch is an error handling mechanism built into JavaScript
    that helps with handling errors in a way that doesn't break the execution of your code
*/ 

//e.g;

const arr = {
    name: "Victor",
    class: 7,
    occupation: "Programmer"
};

// for (let i of arr){
//     console.log(i);
// }


// the above code looks correct, but we all know objects are non-iterable 
// so, uncommenting line 13 through 15 idealy would break the execution of the code.

// Output: try&catch.js:13 Uncaught TypeError: arr is not iterable
//    at try&catch.js:13

console.log("I got here"); // This code would never run, because the error would stop the execution of any code after detecting the error.

// To handle the error, we can wrap our code snippet inside the try/catch syntax.
// Remember to comment line 13 through 15 and you should be able to see how the error is handled.

try {
    for (let i of arr){
    console.log(i);
}
} catch (e){
    console.log(`You can't iterate an Object!\nYou must convert it to an array using the "for in" loop or just use the Object.values or Object.keys syntax to get it done"`);
}

//another way to output the exact error is to pass in an argument or identifer for the catch. You can use (e) or (error).

try {
    for (let i of arr){
    console.log(i);
}
} catch (e) {
    console.log(e);
}