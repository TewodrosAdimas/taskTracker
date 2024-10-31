document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        if (taskText) {
            addTask(taskText);
            taskInput.value = "";
        }
    });

    function addTask(taskText) {
        const taskItem = document.createElement("li");
        taskItem.classList.add("task-item");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", function() {
            if (checkbox.checked) {
                taskItem.classList.add("done");
                taskList.appendChild(taskItem); // Move to bottom
            } else {
                taskItem.classList.remove("done");
                taskList.insertBefore(taskItem, taskList.firstChild); // Move to top
            }
        });

        const taskContent = document.createElement("span");
        taskContent.textContent = taskText;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", function() {
            taskList.removeChild(taskItem);
        });

        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskContent);
        taskItem.appendChild(deleteBtn);

        taskList.insertBefore(taskItem, taskList.firstChild); // Insert at the top
    }
});
