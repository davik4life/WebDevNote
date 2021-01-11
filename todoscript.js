/*  This is a CLI based Todo App. It doesn't store any information, it just  
    creates the Todo List temporarily. Once browser is refreshed, everything is lost.

*/

// Create a binding for the Todos to be stored.
const todos = [];
let numTodo = 0;

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
       if(list.length !== 0){
   console.log("**************");
    for (let i = 0; i < list.length; i++) {
       
        const eachL = list[i];
        console.log(`No.${[i]}, ${eachL}::: Has a word Count of:${eachL.length}.`);
        
    }
    console.log("**************");
        }else{
            console.log("**************");
        console.log(`The Todo List is empty! Enter "new" to enter a New Todo.`);
        console.log("**************");
    }
    // let todoItems = prompt("Enter a Todo", "Write some code...");
 }else if(todoItems === "delete"){
     let deleteTodo = parseInt(prompt(`Delete which todo?", "e.g: 2 or * to Delete All`));
     if(deleteTodo === 101010){
         if (todos.length === 0){
         console.log(`Your Todo list is already empty! Add new todos by entering the word "new"`);
        }else{
         todos.slice(0);
         console.log(`All todo's have been deleted!`);}
        }
         else{
     let deletedTodo = todos.splice(deleteTodo, 1);
     console.log(`The Todo "${deletedTodo}" with index No.${deleteTodo} is deleted.`);
 }}
    todoItems = prompt("What would you want to do?", `e.g: Enter "new" to create a Todo`);
    
}
console.log("You Quit!");