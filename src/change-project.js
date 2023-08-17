import page from "./page";
import {ProjectList} from "./project-list.js"
import { listTodoItem } from "./list-todo-items";
import { createItemInput } from "./new-item-button";

function changeProject(button){
    page.itemsContainer.innerHTML = "";
    page.itemsContainer.id = button;
    ProjectList[button].projectItems.forEach( ( item ) => {
        listTodoItem(item);
    })
    if (ProjectList[button].projectItems.length === 0) {
        createItemInput();
    }
}

export {changeProject}