import { addProjectToList, ProjectList, ProjectArray } from "./project-list.js";
import { Project } from "./project.js";
import { ToDoItem } from "./todo.js";

function addProjectsToLocalStorage() {
    localStorage.clear()
    ProjectArray.forEach((project) =>  {
        let resultArray = [];
        /* resultArray.push(project.name); */
        project.projectItems.forEach((item) => {
            const itemArray = [item.name, item.description, item.dueDate, item.priority];
            resultArray.push(JSON.stringify(itemArray));
        })
        localStorage.setItem(project.name, JSON.stringify(resultArray));
    })
}

function getProjectsFromLocalStorage() {
    for (let i = 0; i < localStorage.length; i++) {
        addProjectToList(new Project(localStorage.key(i)));
        const itemsArray = JSON.parse(localStorage.getItem(localStorage.key(i)));
        itemsArray.forEach((item) => {
            const itemParsed = JSON.parse(item);
            ProjectList[localStorage.key(i)].addItem(new ToDoItem(itemParsed[0], itemParsed[1], itemParsed[2], itemParsed[3]));
        })
    }
}

export {addProjectsToLocalStorage, getProjectsFromLocalStorage}