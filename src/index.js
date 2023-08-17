import page from "./page"
import "./styles/style.css"

import { sideBarButton } from "./side-bar-button"
import { createProjectPrompt } from "./project-list"
import { createItemInput } from "./new-item-button"
import { getProjectsFromLocalStorage } from "./local-storage"

getProjectsFromLocalStorage();

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
