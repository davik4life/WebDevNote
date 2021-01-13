/*  this keyword is used mostly to reference the parent object 
    or something in the parent category. It is used mostly within scope.
*/ 

//e.g:

const student = {
    name: "Ade",
    age: 26,
    class(){
        console.log(`${this.name} is ${this.age} years Old!`);
    }
};
student.class();// Output = Ade is 26 years Old! 

// The keyword this, is that simple.

// Additional Example

// Define an object called <code>hen</code>. 
// It should have three properties: <code>name</code> & should be set to 'Helen', 
// <code>eggCount</code>, should be set to 0 and 
// <code>layAnEgg</code>,  should be a method which increments the value of <code>eggCount</code> 
// by 1 and returns the string "EGG".  You'll need to use <code>this</code>.
// 
const hen = {
    name: "Helen",
    eggCount: 0,
    layAnEgg(){
        this.eggCount+=1;
        return "EGG";
    }
};