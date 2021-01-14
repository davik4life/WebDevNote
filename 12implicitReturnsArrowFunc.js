/*  Implicit returns with Arrow Functions is a Syntactically Compact Alternative to a Regular Function Expression.
    Implicit Returns are used on a function that has to return 
    or works when there's ONLY ONE expression in the body of the function.
*/

// e.g: 

const floor = function() {
    return true;
}; // If I called floor(), Output = true

// To shorten the above with arrow function and implicit return.

const floored = () => false; // If I called floored(), Output = false
const add = (a, b) => a + b; // If I called add(4,5) Output = 9
const s = b => b * b; // if I called s(4) Output = 16


const rand = function () {
    return Math.floor(Math.random() * 6) + 1;
};

// To shorten the above using implicit return

const rando = () => (
    Math.floor(Math.random() * 6) + 1
);

const even = num => num % 2 === 0; // returns num if it is divisible by 2


//Using arrow functions with methods.

const arro = [
    {
        name: "Dele",
        class: 5,
        score: 29
    },
    {
        name: "Victor",
        class: 9,
        score: 99
    },
    {
        name: "Segun",
        class: 3,
        score: 70
    },
    {
        name: "Dayo",
        class: 2,
        score: 80
    }
];

const findd = arro.map(names => `${names.name} scored ${names.score /10}`); 
//Output = ["Dele scored 2.9", "Victor scored 9.9", "Segun scored 7", "Dayo scored 8"]

//Can be re-written as;

const finds = arro.map(names => (
    `${names.name} scored ${names.score /10}`)
); 

