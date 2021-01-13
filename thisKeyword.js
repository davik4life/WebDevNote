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