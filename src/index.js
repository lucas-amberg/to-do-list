import page from "./page"
import "./styles/style.css"

import { sideBarButton } from "./side-bar-button"
import { Project } from "./project.js"
import { addProjectToList } from "./project-list"
import { createItemInput } from "./create-remove-item"

createItemInput();


page.sideBarButton.addEventListener("click", () => {
    sideBarButton();
})

page.newItemButton.addEventListener("click", ()=> {
    createItemInput();
})