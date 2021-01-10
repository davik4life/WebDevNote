/*  This is a CLI based Todo App. It doesn't store any information, it just  
    creates the Todo List temporarily. Once browser is refreshed, everything is lost.

*/

// Create a binding for the Todos to be stored.
const todos = [];
let numTodo = 0;

// Create a Loop for the questions of the prompts.

let todoItems = prompt("What would you want to do?", `e.g: Enter "new" to create a Todo`);

//Create a while loop to keep asking for a Todo until quit.
while(todoItems !== "quit" && todoItems !== "q"){
    if (todoItems === "new") {
    let newTodo = prompt("Enter a new Todo.", "Go to the Gym...");
    todos.push(newTodo);
    console.log(`${newTodo} added successfully.`);
    numTodo++;
}
    
// When a Todo is entered, push the todo entered to the todos array.
 else if (todoItems === "list"){
     let list = todos;
   console.log("**************");
//    for (let i of list){
//     console.log(`No.${} ${[i]}`);
//    }
    for (let i = 0; i < list.length; i++) {
        const eachL = list[i];
        console.log(`No.${[i]}, ${eachL}::: Has a word Count of:${eachL.length}.`);
        
    }
    console.log("**************");
    // let todoItems = prompt("Enter a Todo", "Write some code...");
 }else if(todoItems === "delete"){
     let deleteTodo = parseInt(prompt("What todo to Delete?", "e.g: 2"));
     let deletedTodo = todos.splice(deleteTodo, 1);
     console.log(`The Todo "${deletedTodo}" with index No.${deleteTodo} is deleted.`);

//  }else if (todoItems === "quit"){
//     console.log("You Quit!");

 }
    todoItems = prompt("What would you want to do?", `e.g: Enter "new" to create a Todo`);
    
}
console.log("You Quit!");

//     numTodo = todos.length;

//write a code to prompt for a new todo and add to the list.


// List the Todo on the console when queried.

