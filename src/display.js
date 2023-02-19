export function displayTheForm() {
    document.getElementById("add-todo-form").style.display = "";
}


export function clearForm() {
    document.getElementById("add-todo").reset();
}

export function displayToDo({ Title, Description, DueDate, Priority }) {
    if (Title == null || Description == null || DueDate == null || Priority == null) {
        return;
    }


    const projects = document.querySelector(".projects");
    const card = document.createElement("div");
    card.classList.add("card");
    projects.appendChild(card);


    const deleteToDoButton = document.createElement("button");
    deleteToDoButton.classList.add("remove-todo-button");
    deleteToDoButton.textContent = "Delete/Complete ToDo";
    card.appendChild(deleteToDoButton);
    deleteToDoButton.addEventListener("click", function deleteToDo() {
        card.remove();
    });


    let _displayArray = { Title, Description, DueDate, Priority };
    for (let key in _displayArray) {
        const para = document.createElement("p");
        para.textContent = (`${key}: ${_displayArray[key]}`);
        card.appendChild(para);
    }


}