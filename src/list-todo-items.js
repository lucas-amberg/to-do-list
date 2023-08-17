import page from "./page";
import { changePriority } from "./priority";
import { ProjectList } from "./project-list";
import x from "./assets/x-icon.png";
import { changeProject } from "./change-project";
import { addProjectsToLocalStorage } from "./local-storage";

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

    const deleteButton = document.createElement("button");
    const xImg = new Image();
    xImg.src = x;
    deleteButton.appendChild(xImg);
    deleteButton.classList.add("delete-button");

    deleteButton.addEventListener("click", ()=> {
        ProjectList[page.itemsContainer.id].removeItem(todo);
        addProjectsToLocalStorage();
        changeProject(page.itemsContainer.id);
    })

    newItem.appendChild(newTitle);
    newItem.appendChild(newDesc);
    newItem.appendChild(newDD);
    newItem.appendChild(newPriority);
    newItem.appendChild(deleteButton);

    page.itemsContainer.appendChild(newItem);
}

export {listTodoItem}