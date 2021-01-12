// Higher Order Function

/* This are Functions that works with other functions, accepts other functions as arguments or return a function */

//e.g:

function turn(rollDie) {
    rollDie();
    rollDie();
}

function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

// To call the above, turn(rollDie); would result in sequence of random numbers between 1 and 6 returned twice.
// To see the result in the browser Console replace code on line 13 with console.log(Math.floor(Math.random() * 6) + 1);

// Returning a function as a value.



function FirstFunc(min, max) {
    return function (num) {
        return num >=min && num <= max;
    };
}

// The Above Function (FirstFunc) is more like a factory that produces more Functions for it's operation.

// An example, is the following.

// First pass it into a variable and give it a name to make it a unique function.

const child = FirstFunc(12, 18);// This makes child a function in form of a variable or stored in a variable.
// You can now have several variance of the same function to make them unique.

const adult = FirstFunc(19, 30); // for Adult.
const aged = FirstFunc(31, 90); // for Aged.

// Then call child(17); This would return true because it falls between the min & max.