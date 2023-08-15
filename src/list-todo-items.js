import page from "./page";
import { changePriority } from "./priority";

function listTodoItem(todo) {
    const newItem = document.createElement("div");
    
    const newTitle = document.createElement("div");
    newTitle.textContent = todo.name;
    newTitle.classList.add("item-text");
    const newDesc = document.createElement("div");
    newDesc.textContent = todo.description;
    newDesc.classList.add("item-desc");
    const newDD = document.createElement("div");
    newDD.textContent = todo.dueDate;
    newDD.classList.add("item-dd");
    const newPriority = document.createElement("div");
    newPriority.textContent = todo.priority;
    newPriority.classList.add("item-priority");
    changePriority(newPriority, newItem);

    newItem.appendChild(newTitle);
    newItem.appendChild(newDesc);
    newItem.appendChild(newDD);
    newItem.appendChild(newPriority);

    page.itemsContainer.appendChild(newItem);
}

export {listTodoItem}