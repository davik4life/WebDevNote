// The "this" keyword has its own complexities. For example when used within an object, it has its advantage and disadvantage.
//Here are more detailed examples.

const person = {
    name: 'Victor',
    grade: 6,
    finalGrade (score){
        return `Your Current Grade is ${this.grade}, while your Final grade is ${score/100 * this.grade}`;
    }
};


// If we called person.finalGrade(6) 
// We would get the correct Output: "Your Current Grade is 6, while your Final grade is 0.36"

// But if we re-wrote the entire code using arrow function as follows

const person2 = {
    name: 'Victor',
    grade: 6,
    finalGrade: (score) => {
        return `Your Current Grade is ${this.grade}, while your Final grade is ${score/100 * this.grade}`;
    }
};

// We would get the correct Output: "Your Current Grade is undefined, while your Final grade is NaN"

// The reason is because the this keyword works or operates within the function scope from which it was initiated and called.

// This may not make much sense now, but I will clarify with a much clearer example;

const printer = {
    name: 'Victor',
    grade: 6,
    latePrint: function (){
        return setTimeout(() => {
            console.log(`Printer user name is${this.name} but I have no clue who he is!`);
        }, 3000);
    }
};