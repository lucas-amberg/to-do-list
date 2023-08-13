class Project {
    constructor(name) {
        this.name = name;
        this.projectItems = [];
    }
    addItem(toDoItem) {
        this.projectItems.push(toDoItem);
    }
    removeItem(toDoItem) {
        this.projectItems.splice(this.projectItems.indexOf(toDoItem), 1);
    }
}

export {Project};