const inputText = document.getElementById("inputTarea")
const buttonSubmit = document.getElementById("btnEnviar")
const taskContainer = document.getElementById("taskContainer")


let tasks = []

function addTask(text) {
    if (text.length !== 0) {
        const task = document.createElement("div");
        task.classList.add("task");
        task.classList.add("form-control");
        task.classList.add("d-flex")
        task.classList.add("justify-content-between")
        task.classList.add("align-items-center")
        
        const taskText = document.createElement("span");
        taskText.innerHTML = text;
        task.appendChild(taskText);

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("btn")
        deleteButton.classList.add("btn-danger")

        deleteButton.innerHTML = "Eliminar";
        deleteButton.addEventListener('click', () => removeTask(task));
        task.appendChild(deleteButton);

        taskContainer.appendChild(task);
        tasks.push(text);
    } else {
        alert("Ingresa alguna tarea");
    }
}

function removeTask(taskElement) {
    const taskTextElement = taskElement.querySelector("span");
    if (taskTextElement) {
        const taskText = taskTextElement.innerHTML;
        const index = tasks.indexOf(taskText);
        if (index !== -1) {
            tasks.splice(index, 1);
        }
        taskElement.remove();
    }
}

buttonSubmit.addEventListener('click', () => {
    const tarea = inputText.value;
    addTask(tarea);
    inputText.value = "";
});
