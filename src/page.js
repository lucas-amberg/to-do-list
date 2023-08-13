//Creates and/or selects DOM elements for use in other modules

function webPage() {
    //For add-project-to-side-bar.js
    const projectsList = document.querySelector(".projects-list");

    //For side-bar-button.js
    const sideBar = document.querySelector(".side-bar");
    const sideBarButton = document.querySelector(".side-bar-button");

    const newItemButton = document.querySelector(".new-item-button");

    return {
        sideBar,
        sideBarButton,
        projectsList
    };
}

const page = new webPage();

export default page;