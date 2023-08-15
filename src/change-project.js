import page from "./page";
import {ProjectList} from "./project-list.js"
import { listTodoItem } from "./list-todo-items";

function changeProject(button){
    page.itemsContainer.innerHTML = "";
    page.itemsContainer.id = button;
    ProjectList[button].projectItems.forEach( ( item ) => {
        listTodoItem(item);
    })
}

export {changeProject}