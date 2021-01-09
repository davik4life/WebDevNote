/*  Note:
    Object an non-iterable elements. You cannot apply functions like .length 
    or enumerate through the properties like you would with the array object.

    Let's see some code samples of working with Object.
*/ 

// Delcare an Object

let class5 = {
    className: "Primary 5",
    ageGroup: "5 to 10",
    color: "green",
    breakfast: true,
    lunch: false,
    dinner: false,
};

// Using the ES6 For of statement

// for (let student of class5){
//     // Do something...
//     console.log(`All students in ${class5.className} are of the agegroup of ${class5.ageGroup}`);
// }

/*  If you uncomment lines 21 to 24, the "for of" code gives you the following error 
    "Uncaught TypeError: class5 is not iterable at object.js:21"

    As correct as the code may seem, 
    it just won't work because an Object is non-iterable.

    To make this work, 
    we must either find a way to make an array from the Object using the "for in" loop
    or use the special Object.values or Object.keys method to be able to work with the data.
*/ 

for (let student in class5){
    // Do something...
    console.log(`All Class 5 have the following: \n${student} = ${class5[student]}`);
    // console.log(`All students in ${class5.className} are of the agegroup of ${class5.ageGroup}`);
}

/*  The code in line 37 through 40 would run 6 times 
    because we have 6 object elements and we are console.logging with the "for in" syntax.
    We are referencing the values of the object with the .notation which would then refrence the 
    value of the key called.

    The Second method would be to use the Object.value(Objectname) or Object.keys(Objectname) syntax.
    The following can be used...
    Object.values
    Object.keys
    Object.entries
*/

for (let eachStudent in class5){
    console.log(`Class 5 has the following Keys: ${Object.keys(class5)}`);
    console.log(`Class 5 has the following Values: ${Object.values(class5)}`);
}


/*  The code of line 55 through 58 would run the console.log command 6 times each, 
    making a total of 12. 

    Now that we have made an array of the Object using the Object method,
    we can now perfrom logis na duse the data the way we would normally do 
    like when accessing an array.
*/

let count = 0;
let ourClass = Object.values(class5);
for (const eachP of ourClass) {
    count++;
    console.log(`This is line ${count} and the length of our class Object now is ${ourClass.length}`);
}
