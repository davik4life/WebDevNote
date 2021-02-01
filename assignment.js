// Couldn't get any of the Algorithms to work. I have decided to commit this progress that I would learn Data Structure.

const { runInNewContext } = require("vm");


//Update, I hae bought the Data Structure and Algorithm course by Cold Steele onUdemy and would start learning that 
//simutaneously while I continue to code everyday to practice and become familiar with the syntax and how things work generally.

// Today was a very busy day for me, took my Baby to the hospital for check up. Didn't have any code reveiws today,
// but would definintely do some exptensive reminder of the program tomorrow and then review my study.



// function arry(name) {
//     for (let i of name){
//         let pos = i % 2 === 0;
//         return pos;
//     }
// }

function arry(arr){
    return arr.map(function(i){
        return i % 2 === 0;
    });
}

// Code War
// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas 
// except for the last two names, which should be separated by an ampersand.


// Example;
// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

// function list(arr){
//     let newStr = '';
//     let newName = arr.map(i => i.name);
//     // Now newName is an array holding the values ["Bart", "Lisa", "Maggie"]
//     // return newName;
//     // Now write a code to iterate the array element and get each word out into a string and return it.
//     for (let i of newName){
//         if(newName.length > 1){
//             newStr += i.split(/,/);
//         }
        
//     }
//     return newStr;
//     // Now it currently returns all the strings but not splited.
//     // Write a code to split each one accoring to the rules.

// }

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]);


function list(arr){
    //Use the Object.values to iterate through the values of the object.
    let newStr = '';
    let newName = arr.map(i => i.name);
    // Now newName is an array holding the values ["Bart", "Lisa", "Maggie"]
    // return newName;
    // Now write a code to iterate the array element and get each word out into a string and return it.
    for (let i of newName){
        if(newName.length > 1){
            newStr += i + ', ';
        }else{
        newStr += i + ', ';
        }
    }
    return newStr;

}

function list(arr){
    let newStr = '';
    let newName = arr.map(i => i.name);
    for (let i = 0; i < newName.length; i++){
        if(newName.length > 1){
            newStr = newName[i].slice();
            
        }
    }
    return newStr;
}


// In a factory a printer prints labels for boxes. For one kind of boxes the 

//printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. 
//For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times 
//color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced 
//e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer 
//as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. 
//Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from a to z.

function printerError(s) {
    // your code
    for(let i = 0; i <= s.length; i++){
        let def = 'aaabbbbhaijjjm';
        if (s === def) {
            return `0/${s.length}`;
        }else if (s[i] !== def[i]){
                    let sto += s[i];
                    return `${sto.length}/${s.length}`;
                }
            }
}


function printerError(s) {
    // your code
    for(let i = 0; i <= s.length; i++){
        let def = 'aaabbbbhaijjjm';
        if (s === def) {
            return `0/${s.length}`;
        }else if (s[i] !== def[i]){
                    return `${def.length - s.length}/${s.length}`;
                }
            }
}

function printerError(s) {
    // your code
    let def = 'aaabbbbhaijjjm';
    let count = 0;
    for(let i of s){
        if (s[i] !== def[i]){
            // Increment count by 1 each time.
            count++;
            // Return def.length - count. / s.length
            return `${count}/${s.length}`;
        }else{
            return `0/${s.length}`;
        }
    }
        
        
}


function positiveSum(arr){
    const total = arr.reduce((i, j) { 
        if (i > 0){
            return i + j;
        },
    
    }
    );
    }






function check(arr) {
    const total = arr.reduce((i, j) => {
        if(j > 0){
            const fin = i + j;
            i.push(fin);
        }
        return total;
    } )
}

postitiveSum([2,3,4,5,56,6,4]);

function positiveSum(arr){
    const total = arr.reduce(function (i, j) {
        if (i > 0 && j && 0) {
            return i + j;
        }
    })
    return total;
}


function positiveSum(arr){
    const total = arr.reduce((i, j) => i + j)
    return total;
}


// Got this from a friend on Slack... Something to learn from. 
function positiveSum (arr){
    const total = arr.filter((value) => value >= 0).reduce((sum, item) => sum + item)
    return total;
}


// Had a very long day today and didn't do much. Just wanted to push this, would go back and do a 
// review of my study thus far and get back to coding for some more couple hours.

// i want to complete the readng of my JavaScript book this week. Just an update.

// I fninshed over 80 modules of FreeCodeCamp JavaScript Basics within 4 hours throughout the night. 
// The refresher was well worth it.