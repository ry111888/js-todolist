import { createToDo } from './createTodo.js';
import { displayTheForm, clearForm} from './display.js'
import './style.css';



// Click event for displaying the form
const addNewToDo = document.querySelector(".add-todo-button");
addNewToDo.addEventListener("click", displayTheForm);


// Click event to clear the form
const clearButton = document.querySelector(".reset-button");
clearButton.addEventListener("click", clearForm);

// Click event to submit a new todo form to project
const submitButton = document.querySelector(".submit-button");
submitButton.addEventListener("click", createToDo);
    
