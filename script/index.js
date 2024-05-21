document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.querySelector("#taskInput");
    const addTaskButton = document.querySelector("#addTask");
    const taskList = document.querySelector("#taskList");

    function addTask() {
        const taskText = taskInput.value.trim();
        
        if (taskText === "") {
            alert("Пожалуйста, введите задачу!");
            return;
        }

        const listItem = document.createElement("li");
        listItem.innerHTML = 
            `<span>${taskText}</span>
            <span class="delete">X</span>`
        ;
        
        listItem.querySelector(".delete").addEventListener("click", function () {
            listItem.remove();
        });

        taskList.appendChild(listItem);
        taskInput.value = "";
    }

    addTaskButton.addEventListener("click", addTask);

    taskInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    taskList.addEventListener("click", function (event) {
        if (event.target.classList.contains("delete")) {
            event.target.parentNode.remove();
        }
    });
});
