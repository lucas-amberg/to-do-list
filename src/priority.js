function changePriority(priority,parent){
    if (priority.textContent == 3) {
        parent.classList.add("high-priority");
    }
    else if (priority.textContent == 2) {
        parent.classList.add("med-priority");
    }
    else if (priority.textContent == 1) {
        parent.classList.add("low-priority");
    }
}

export {changePriority}