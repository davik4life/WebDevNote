/*  Arrow Function is a way of writing function in a shorter form.  
    It's a newer syntac for defining functions but it doesn't support the internet explorer browser.

    They are used when we have function expressions.
 */


// 
const greet = function (name){
    console.log(`Hi ${name}`);
};

//Output greet("Victor") == Hi Victor

// The above function is the same as the one below


const greeting = (name) => {console.log(`Hello ${name}`);};
//Output greeting("Victor") == Hello Victor


// When working with arrow functions if you have a single argument, you can remove the parethesis, it would still work.

// e.g: 
const greetAgain = name => {console.log(`Hello ${name}`);};
//Output greetAgain("Victor") == Hello Victor

// But with 0 or multiple arguments, the parethesis is a must.
