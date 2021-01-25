// Default Params (Parameter for short) are aguments or parameters that have been assigned a default value, 
// either to avoid NaN, Null or undefined.

//Example, We would create a rollDie function that would by default accept a num;
//         Each time the number is called, the function would produce a range of numbers from the number entered to 1;

const rollDie = function(num){
    return Math.floor(Math.random() * num ) + 1;
};

rollDie(5);// This would produce numbers from 1 to 5 randomly.

// One problem however is that, each time we call rollDie() without a number, it would return NaN, which means, Not a Number.

// To eliminate this, default Param would do the trick for us.

// Example;



const rollDie2 = function(num = 6){
    return Math.floor(Math.random() * num ) + 1;
};

// This way, when rollDie2() is called, without any argument, 
// it would return random numbers between 1 and 6, because 6 has been asigned as the default parameter.


// The Default Param also works in left to right precedence. 
// This means that, when there are two parameters and only one is defined, 
// it has to be at the edge of the closing bracket ti the right. 

// Example;

const rollDie3 = function(num2, num = 6){
    console.log(`Num 2: ${num2 * 2} is the number without default Param, while Num: ${num} is the number with Param`);
    // return Math.floor(Math.random() * num ) + 1;
};

/* 

Ex 1: When rollDie3() is called without any argument, it would print the following
OUTPUT: Num 2: NaN is the number without default Param, while Num: 6 is the number with Param

Ex 2: When rollDie3(20) is called with only one argument, it would print the following
OUTPUT: Num 2: 6 is the number without default Param, while Num: 6 is the number with Param

As seen in Ex 2:, because only one parameter was passed, 
the default param takes precedence and is output in place of the empty param

Ex 3: When rollDie3(3,9) is called with two argument as expected, it would print the following
OUTPUT: Num 2: 6 is the number without default Param, while Num: 9 is the number with Param

As seen in Ex 3:, even with two parameter passed as expected, 
the default param takes precedence and is output first before the param without default params.


If we switch places of the arguments as followed
*/

const rollDie4 = function(num2, num = 6){
    console.log(`Num 2: ${num * 2} is the number without default Param, while Num: ${num2} is the number with Param`);
};

/* 
If we call the function rollDie4(), we would get the following Output;
OUTPUT: Num 2: 12 is the number without default Param, while Num: undefined is the number with Param

If we call the function rollDie4(3), with one parameter, we would get the following Output;
OUTPUT: Num 2: 12 is the number without default Param, while Num: 3 is the number with Param

But if we call the function rollDie4(3, 20), with two parameters as expected, we would get the following Output;
OUTPUT: Num 2: 40 is the number without default Param, while Num: 3 is the number with Param
*/

// Default Params are quite easy to grasp, so play with it and try to eliminate those null, NaN or undefined returns of value,
// if possible, assigned a value by default and remain happy.