// setInterval and setTimeout is a way of pausing or setting an interval 
// for a command to fire as set in the timing of the function.


//setInterval repeats the process of the passed function for a specified period of set Intervals. It isn't commonly used.

const id = setInterval(() => {
    console.log(`Hello Great Developer!!! This is setInterval `);
}, 3000);// To stop this use, clearInterval(id)

// This will run once, and at the setTime,and after completed, it would Timeout, i.e: close!
setTimeout(() => {
    console.log(`Hello Great Developer!!! This is setTimeout!!! `);
}, 3000);