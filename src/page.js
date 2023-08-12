//Creates and/or selects DOM elements for use in other modules

function webPage() {
    //For side-bar-button.js
    const sideBar = document.querySelector(".side-bar");
    const sideBarButton = document.querySelector(".side-bar-button");

    return {
        sideBar,
        sideBarButton
    };
}

const page = new webPage();

export default page;