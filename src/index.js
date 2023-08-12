import page from "./page"
import "./styles/style.css"

import { sideBarButton } from "./side-bar-button"

page.sideBarButton.addEventListener("click", () => {
    sideBarButton();
})