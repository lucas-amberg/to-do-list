import page from "./page";

function createItemInput() {
    const newItem = document.createElement("div");

    const newName = document.createElement("input");
    newName.setAttribute("name", "name");
    newName.setAttribute("placeholder", "Task Name");
    const newDescription = document.createElement("input");
    newDescription.setAttribute("name", "description");
    newDescription.setAttribute("placeholder", "A brief description of your task");
    const newDueDate = document.createElement("input");
    newDueDate.setAttribute("name", "due-date");
    newDueDate.setAttribute("placeholder", "The due date of your task");
    const newPriority = document.createElement("input");
    newPriority.setAttribute("name", "priority");
    newPriority.setAttribute("placeholder", "Priority (1-3)");

    newItem.appendChild(newName);
    newItem.appendChild(newDescription);
    newItem.appendChild(newDueDate);
    newItem.appendChild(newPriority);

    page.itemsContainer.appendChild(newItem);
}

export {createItemInput};