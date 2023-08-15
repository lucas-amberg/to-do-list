import page from "./page";
import {ToDoItem} from "./todo.js"
import {ProjectList} from "./project-list.js"
import { listTodoItem } from "./list-todo-items";

function validateItem(name, description, dueDate, priority) {
    if (name.length > 20 || name.length < 1){
        alert("Name of task must be between 1 and 20 characters");
        return false
    }
    else if (description.length > 50) {
        alert("Description must be under 50 characters");
        return false
    }
    else if (dueDate.length > 50) {
        alert("Due date must be under 50 characters");
        return false
    }
    else if (priority > 3 || priority < 1 || priority.length > 1) {
        alert("Priority value must be between 1 and 3");
        return false
    }
    else {
        return true
    }
}

function createItem(name, description, dueDate, priority) {
    if (validateItem(name.value, description.value, dueDate.value, priority.value) === true) {
        ProjectList[page.itemsContainer.id].addItem(new ToDoItem(name.value, description.value, dueDate.value, priority.value));
        listTodoItem(new ToDoItem(name.value, description.value, dueDate.value, priority.value));
    }
}

export {createItem, validateItem};