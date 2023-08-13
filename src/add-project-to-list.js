import page from "./page";

function addProjectToList(project, projectArray) {
    projectArray.push(project);
    page.projectsList.innerHTML = "";
    projectArray.forEach((item)=> {
        const newItem = document.createElement("button");
        page.projectsList.appendChild(newItem);
        newItem.classList.add("project-button");
        newItem.textContent = item.name;
    })
}

export {addProjectToList}