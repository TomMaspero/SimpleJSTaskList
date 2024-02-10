const addTask = () => {
    const task = document.getElementById("task_input").value;
    if (task.length > 0){
        const markup = createTask(task);
    } else {
        alert('No task to add!')
    }
}

const createTask = (task) => {
    const newLi = createTaskItem();

    newLi.appendChild(createContent(task));
    newLi.appendChild(createButton());

    const taskList = document.getElementById("task-list");
    taskList.appendChild(newLi);
    
    //newLi.offsetHeight; //offsetHeight is used to force the browser to recalculate the position of every element
                        //it is often used to force a re-render and make sure certain transitions take place
                        //However, it can heavily impact performance if overused!!!

    // newLi.classList.add('fade-in')

    setTimeout(() => {      //this is the best way to avoid using offsetHeight, it simply waits just enough 
                            //for the DOM to render the element and then changes the opacity
        newLi.classList.add('fade-in')
    }, 10);

}

const createTaskItem = () => {
    const newLi = document.createElement("li");
    newLi.classList.add('list__item');
    return newLi;
}

const createContent = (task) => {
    const newContent = document.createElement("span");
    newContent.classList.add('list__item--text');
    newContent.textContent = `${task}`;
    return newContent;
}

const createButton = () => {
    const newButton = document.createElement("button");
    newButton.classList.add('list__item--delete');
    newButton.textContent = '❌';
    newButton.addEventListener('click', () => deleteTask(newButton));
    return newButton;
}

const deleteTask = (button) => {
    const taskItem = button.parentNode;
    taskItem.classList.remove('fade-in');
    setTimeout(function (){
        taskItem.parentNode.removeChild(taskItem);
    }, 500);
}

const resetValue = (taskInput) => {
    inputElement = document.getElementById(taskInput).value = '';
}