"use strict";
// element
const taskInput = document.getElementById("task");
const addTask = document.getElementById("addTaskBtn");
const list = document.getElementById("taskList");

// addTask
addTask.addEventListener("click", function () {
  //   task text
  const taskValue = taskInput.value;

  // if it empty
  if (taskValue === "") return alert("Please enter a task! ☺");

  // create task
  const task = document.createElement("li");
  task.textContent = taskValue;
  list.appendChild(task);

  // create delete btn
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  task.appendChild(deleteBtn);

  //   reset
  taskInput.value = "";

  // completed task
  task.addEventListener("click", () => task.classList.toggle("completed"));

  // delete task
  deleteBtn.addEventListener("click", () => task.remove());
});
