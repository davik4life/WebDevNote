// Reduce is a very vast and powerful call back function that can be used for arrray in many different ways.

const pep = [2,3,4,5,6,7,8];

const sums = pep.reduce((ini, curr) => ini + curr);


// The variable sums now hold the total from the reduce callback function of the value 35.

// Here's an assignment someone posted on Slack sometime ago and was asking a way to solve the challenge

/**
* @tutorial https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript
* @description - You get an array of numbers, return the sum of all of the positives ones.
* @function positiveSum
* @param {array} arr - an array of numbers
* @returns {integer} - the sum of all the positive numbers
*/

// There are many ways to solve the problem, 
// but we would see how the reduce callback function makes it really simple to work with.

// Here's one way to solve it.

function positiveSum(arr){
    let total = 0;
    for(let i of arr){
        if (i > 0){
            total += i;
        }
    }
    return total;
}

// This would return the total in the array and sum them.

//With Reduce, it is much simpler and easy to work with.

function positiveSum(arr) {
    return arr.reduce((prevNum, currNum) => prevNum + currNum);
}

// Reduce can be used to do a whole lot more than just sum all numbers in an array.
