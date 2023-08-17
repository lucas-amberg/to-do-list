import page from "./page"
import "./styles/style.css"

import { sideBarButton } from "./side-bar-button"
import { createProjectPrompt } from "./project-list"
import { createItemInput } from "./new-item-button"
import { deleteProject } from "./delete-project"

import ToDoFavicon from "./assets/to-do-favicon.svg"


const favicon = document.createElement("link");
favicon.setAttribute("href", ToDoFavicon);
favicon.setAttribute("rel", "shortcut icon");
document.getElementsByTagName("head")[0].appendChild(favicon);

page.deleteProjectButton.addEventListener("click", () => {
    deleteProject();
})

page.sideBarButton.addEventListener("click", () => {
    sideBarButton();
})

page.newItemButton.addEventListener("click", ()=> {
    if (!(page.itemsContainer.contains(document.querySelector(".new-item-creator")))) {
        createItemInput();
    }
})

page.newProjectButton.addEventListener("click", () => {
    if (!(page.projectsList.contains(document.querySelector(".project-name-getter")))) {
        createProjectPrompt();
    }
})
