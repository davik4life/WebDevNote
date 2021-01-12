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

