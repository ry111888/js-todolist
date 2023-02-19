import {clearForm, displayToDo} from './display.js';

export const createToDo = () => {
    
    let Title = document.getElementById("Title").value;
    let Description = document.getElementById("Description").value;
    let DueDate = document.getElementById("DueDate").value;
    let Priority = document.getElementById("Priority").value;


    if (Title == "" || Description == "" || DueDate == "") {
        alert("Title, Description, and Due Date are required fields, please try again!");
        return;
    }



    displayToDo({ Title, Description, DueDate, Priority });
    clearForm();

    return { Title, Description, DueDate, Priority };
}