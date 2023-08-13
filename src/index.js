import page from "./page"
import "./styles/style.css"

import { sideBarButton } from "./side-bar-button"
import { Project } from "./project.js"
import { addProjectToList } from "./add-project-to-list"


page.sideBarButton.addEventListener("click", () => {
    sideBarButton();
})

const projectList = [];

const defaultProject = new Project("Default");

addProjectToList(defaultProject, projectList);
addProjectToList(defaultProject, projectList);
addProjectToList(defaultProject, projectList);

