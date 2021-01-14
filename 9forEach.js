/*  forEach method expects a callback function and is the old way of iterating or working with arrays
    right before the for of syntax came.
    It expects a callback function or an anonymous function. 
    for of is simpler to use, newer and easier, but the forEach method is not that used often.
*/


const num = [1,2,3,4,5,6,7,8,9,10];

num.forEach(function(eachNum) {
    console.log(`${eachNum}`);
});

// Output: Prints 1 to 10.

// Using for of is much more newer approach in JavaScript but does the same thing.

for(let i of num){
    console.log(`${i}`);
}


// Another example


// Create an array of Objects
const arre = [
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

// using forEach method to iterate.

arre.forEach(function(student) {
    console.log(`${student.name} is in class ${student.class} and scored ${student.score}/100`);
});

// Output: Dele is in class 5 and scored 29/100
// Victor is in class 9 and scored 99/100
// Segun is in class 3 and scored 70/100
// Dayo is in class 2 and scored 80/100

//Same thing using for of loop.

for (let i of arre){
    console.log(`${i.name} is in class ${i.class} and scored ${i.score}/100`);
}

// Output: Dele is in class 5 and scored 29/100
// Victor is in class 9 and scored 99/100
// Segun is in class 3 and scored 70/100
// Dayo is in class 2 and scored 80/100