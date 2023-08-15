import page from "./page";
import {Project} from "./project.js";
import { ToDoItem } from "./todo";
import { changeProject } from "./change-project";

const ProjectList = {};

addProjectToList(new Project("Default"), ProjectList);
addProjectToList(new Project("Test"), ProjectList);
page.itemsContainer.id = "Default";

//Testing page functionality
ProjectList["Test"].addItem(new ToDoItem("Homework","Complete math homework","Sunday","2"));
ProjectList["Test"].addItem(new ToDoItem("Work","Complete five assignments at work","Thursday","3"));
ProjectList["Test"].addItem(new ToDoItem("Work","Fill out timesheet","Aug 20","1"));
ProjectList["Test"].addItem(new ToDoItem("Clean room","Clean my room","Wednesday","1"));


console.log(ProjectList)

function addProjectToList(project, projectArray) {
    projectArray[project.name] = project;
    page.projectsList.innerHTML = "";
    for (const [name, project] of Object.entries(projectArray)) {
        const newItem = document.createElement("button");
        newItem.classList.add("project-button");
        newItem.textContent = name;
        newItem.name = name;
        newItem.addEventListener("click", ()=> {
            changeProject(name);
        })
        page.projectsList.appendChild(newItem);
    }
}

function createProjectPrompt() {
    const nameGetter = document.createElement("div");
    nameGetter.classList.add("project-name-getter");

    const nameInput = document.createElement("input");
    nameInput.classList.add("name-getter-input");
    nameInput.value = "Unnamed Project";

    const nameConfirmButton = document.createElement("button");
    nameConfirmButton.classList.add("name-getter-button");
    nameConfirmButton.innerHTML = "<svg xmlns=\"http:\/\/www.w3.org/2000/svg\" width=\"800px\" height=\"800px\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M4 12.6111L8.92308 17.5L20 6.5\" stroke=\"#000000\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/\></svg>";

    nameGetter.appendChild(nameInput);
    nameGetter.appendChild(nameConfirmButton);
    page.projectsList.appendChild(nameGetter);
    
    document.querySelectorAll(".name-getter-button").forEach( (projectButton) => {
        projectButton.addEventListener("click", () => {
            if (document.querySelector(".name-getter-input").value.length < 1) {
                addProjectToList(new Project("Unnamed Project"), ProjectList);
            }
            else {
                addProjectToList(new Project(document.querySelector(".name-getter-input").value), ProjectList);
            }
        })
    })
}

/* function updateProjectButtons() {
    page.projectButtons = document.querySelectorAll(".project-button");
    page.projectButtons.forEach( (item) => {
        item.onclick = 
    })
}
 */


export {addProjectToList, createProjectPrompt, ProjectList}