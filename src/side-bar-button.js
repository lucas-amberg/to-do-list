const sideBar = document.querySelector(".side-bar-hidden");

function sideBarButton() {
        sideBar.classList.toggle("side-bar-hidden");
        sideBar.classList.toggle("side-bar");
}

export {sideBarButton}