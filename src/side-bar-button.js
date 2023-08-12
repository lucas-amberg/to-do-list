import page from "./page"

function sideBarButton() {
        page.sideBar.classList.toggle("side-bar-hidden");
        page.sideBar.classList.toggle("side-bar-shown");
}

export {sideBarButton}

//Creates functionality for the side bar hamburger button