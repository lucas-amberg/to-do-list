import { changeProject } from "./change-project";
import { addProjectsToLocalStorage } from "./local-storage";
import page from "./page";
import { ProjectArray, ProjectList } from "./project-list";

function deleteProject() {
    if (confirm(`Are you sure you want to delete the "${page.itemsContainer.id}" project?`)) {
        console.log(ProjectArray.length);
        ProjectArray.splice(ProjectArray.indexOf(page.itemsContainer.id),1);
        console.log(ProjectArray.length);
        page.projectsList.removeChild(document.querySelector(`button[name="${page.itemsContainer.id}"]`))
        delete ProjectList[page.itemsContainer.id];
        if (ProjectArray.length == 0) {
            page.itemsContainer.id = "";
        }
        changeProject(ProjectArray[0].name)
        addProjectsToLocalStorage();
    }
}

export {deleteProject}