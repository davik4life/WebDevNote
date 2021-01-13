/*  This section deals with fuctions in JavaScript and somple sampple functon codes
to further illustrate my learning curve and application of the concept I have learned.
*/ 



// Exercise 1

// define isSnakeEyes below:

function isSnakeEyes (num1, num2){
    if (num1 ===1 && num2 === 1){
        console.log('Snake Eyes!');
    }else{
        console.log('Not Snake Eyes!');
    }
}


// Exercise 2

// DEFINE YOUR FUNCTION BELOW:

function multiply (num1, num2){
    return num1 * num2;
}


// Exercise 3

// DEFINE YOUR FUNCTION BELOW:
function isShortsWeather(temperature){
    if (temperature >= 75){
        return true;
    }
    return false;
}

// Exercise 4

// DEFINE YOUR FUNCTION BELOW:

function lastElement (arr){
    if(arr.length === 0){
        return null;
    }
    return arr[arr.length-1];
}

// Exercise 5


// DEFINE YOUR FUNCTION BELOW:
function capitalize (str){
    const fLetter = str.charAt(0).toUpperCase();
    const sLetters = str.slice(1);
    return `${fLetter}${sLetters}`;
}

// Exercise 6

// DEFINE YOUR FUNCTION BELOW:
function sumArray (nums){
const newSum = nums.reduce(function(a, b) { return a + b; }, 0);
return newSum;
}

// Exercise 7
// DEFINE YOUR FUNCTION BELOW:

const dow = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];

// Long Version of the code!

// function returnDay(theDay) {
//     if (theDay < 1 || theDay > 7) {
//         return null;
//     }else if(theDay === 1){
//     return dow[0];
//     }else if(theDay === 2){
//     return dow[1];
//     }else if(theDay === 3){
//     return dow[2];
//     }else if(theDay === 4){
//     return dow[3];
//     }else if(theDay === 5){
//     return dow[4];
//     }else if(theDay === 6){
//     return dow[5];
//     }else if(theDay === 7){
//     return dow[6];
//     }

// }


// Code Refactored and shortened.
function returnDay(theDay) {
    if (theDay < 1 || theDay > 7) {
        return null;
    }
    for (let i = 0; i < dow.length; i++) {
        // const element = dow[i];
        if (theDay === i+1) {
            const enteredDay = dow[i];
            return enteredDay;
        }
        
    }

}

/*  Function Scope


*/

