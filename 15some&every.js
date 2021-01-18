// Some & Every is a type of method that returns a Boolean value and allows to work on an Array.

//Some responds to one or more properties of an Array while the Every responds to all properties of an Array.

// Example.

const students = [
    {
        name: "Victor",
        class: 5,
        subjects: ["Math", "English", "Science"],
        pass: true
    },
    {
        name: "Segun",
        class: 9,
        subjects: ["Chemistry", "Math", "Computer Studies"],
        pass: false
    },
    {
        name: "Faith",
        class: 3,
        subjects: ["Social Studies", "Medicine", "CRK"],
        pass: true
    },
    {
        name: "Tracy",
        class: 5,
        subjects: ["Biology", "Agriculture", "Literature"],
        pass: false
    }
    
];

// We have defined an array above

const subjectTaken = function(){
    return students.every(eStudents => eStudents.subjects);
};

subjectTaken(); //Output would return "true" because every students took a subject.

const subjectTaken2 = function(){
    return students.some(eStudents => eStudents.subjects);
};

subjectTaken2(); //Output would return "true" because some students took a subject.

// If we however defined the function with an additional condition like the following (using implicit return with arrow function);

const passed = () => students.some(students => students.pass === true);

// Output: true

const passed2 = () => students.every(students => students.pass === true);

// Output: false Because not every student actually passed.