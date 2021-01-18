// setInterval and setTimeout is a way of pausing or setting an interval 
// for a command to fire as set in the timing(In Milli Seconds) of the function.


//setInterval repeats the process of the passed function for a specified period of set Intervals. It isn't commonly used.

setInterval(() => {
    console.log(`Hello Great Developer!!! This is setInterval `);
}, 3000);

// The above code would run at the intervals of 3 Seconds.
// To have full control, it's best to assign it a variable or an ID.

const id = setInterval(() => {
    console.log(`Hello Great Developer!!! This is setInterval `);
}, 3000);// To stop this use, clearInterval(id)

// This will run once, and at the setTime,and after completed, it would Timeout, i.e: close!
setTimeout(() => {
    console.log(`Hello Great Developer!!! This is setTimeout!!! `);
}, 3000);


// setTimeout would play more role during async JavaScript Section.