let totalTasks = 0;

const taskInput = document.getElementById("task");
const addBtn = document.getElementById("addButtn");
const taskList = document.getElementById("task-list");
const taskCount = document.getElementById("task-count");

function updateTaskCount(amount) {
  totalTasks = totalTasks + amount;
  taskCount.textContent = totalTasks;
}

function addTask() {
  const text = taskInput.value.trim();

  if (text === "") {
    return;
  }

  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const span = document.createElement("span");
  span.className = "task-text";
  span.textContent = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "Delete";

  checkbox.addEventListener("change", function() {
    li.classList.toggle("completed");
  });

  deleteBtn.addEventListener("click", function() {
    li.remove();
    updateTaskCount(-1);
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  updateTaskCount(1);
  taskInput.value = "";
  taskInput.focus();
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    addTask();
  }
});
