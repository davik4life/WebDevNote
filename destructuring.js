/*

Destructing is a method of extracting some data from an Array, Object or function Parameters 

*/

// Below is an example of how an Array can be destructured.

const names = ['Victor', 'Jade', 'Edidiong', 'Tina'];

// By design, we know that each element of an array has an index identifier starting from 0 to the end of the array.
// Arrays are also ordered list of element, so the order matters also while destructuring.

const [Winner, second, ...everyoneElse] = names;

// if we call the variable Winner, it stores the first element of the array 'Victor'.
// Winner
// OutPut: "Victor"
// second
// OutPut: "Jade"
// everyoneElse
// OutPut: ["Edidiong", "Tina"]

// The names Array is not tampered with in any way, we have only created a list of variables for the elements 
// found in the names Array.

/*
As seen in the code above, we used the Rest operator (...everyoneElse) to categorize the remaining elements in the name array.
This makes us get the remaining elements as a new array in the vaiable name everyoneElse.
*/

// Descturing of Arrays aren't really common in programming, whats more common is desctructuring of Objects.

// Below we would learn how to destructure an Object and it's common use.

const subjectScores = {
    english: 98,
    math: 90,
    socialStudies: 95,
    elective: 60
};

// If we had to access each element before, we would do the following;

// const english = subjectScores.english;

// Now if we called english, would get 98.

//If we had way more data to pull out and use for a specific purpose, it would be crazy to have to repeat this pattern, 
// for this sake, we can use destructuring.

const {math, elective, ...allOthers } = subjectScores;
// Just like we did with arrays, it's easy to also destructure an Object, and the same would apply this case.

// How do we rename any of the key in the subjectScores Object?

// To do this, find the key that we want to rename and then, assign a new name to it. This would nake the previous name unusable.
const {elective: electiveStudies, english} = subjectScores;
// Now that we have renamed the key "elective" to "electiveStudies", 
// if we call elective, we would get the following error "Uncaught ReferenceError: elective is not defined".
// But if we call english, we would still get the output 98, and if we call the new name electiveStudies, OutPut: 60.

// Another very common use case is to use default params with Destructuring.


const arry = {
    // name: 'James',
    occupation: 'Programmer',
    bankSum: 700,
    taxPaid(num){
        return 700 * num / 100;
    },

};
// If we called arry.name we would get 'James' 
// But if we destructure like we did below and assigned a default Param to name like seen below;
const {name: named = 'Goblin' } = arry;

// name still reamins 'James' because we have it assigned already in the array and that takes precedence. 

// But If we remove the name Property and then destructure again with the same example, 
// we will access the property using the new name property.

// Example;
const arrys = {
    occupation: 'Programmer',
    bankSum: 700,
    taxPaid(num){
        return 700 * num / 100;
    },

};

const {name: namedd = 'Shawl' } = arrys;

const fullName = function ({occupation, bankSum}) {
    return `${occupation}, ${bankSum}`;
};

// Now, namedd will OutPut 'Shawl' as expected.


// Destructuring Params in Functions

// Let's create an Object for example;

const users = {
    name: 'Victor',
    isAdmin: false,
    email: 'myEmail@gmail.com',
    dob: '20/01,1901',
    ethnicity: 'Black'
};

//  Now, we would create a Function that takes in the arguments or properties of the Object Above.

const callUsersDet = function({email, dob, isAdmin}){
return `Users email is: ${email}, born on the: ${dob}, and is Admin privilege is ${isAdmin}.`;
};

// Whenever, we call the callUsersDetails function, it is expecting us to pass in Object that has all these 
// properties that's housed in the users Object., to do this, we would say; callUsersDetails(users);

// This would call return the following output; 
// "Users email is: myEmail@gmail.com, born on the: 20/01,1901, and is Admin privilege is false."

// I hope this helps clarify what is going on.

/*
 Destructuring really is very simple if understood its use cases, I hope I've been able to clarify a little about the Topic.
*/


