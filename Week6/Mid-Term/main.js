//Constants declared
const list = document.getElementById("lItem");
const form = document.getElementById("form");
const text = document.getElementById("text");

const actButton = document.getElementById("act");
const allButton = document.getElementById("all");
const compButton = document.getElementById("comp");

const newTask = document.getElementById("newTask");
const addButton = document.getElementById("submit");

const checked = document.getElementById("checked");
const localStorageTransactions = JSON.parse(localStorage.getItem("tasks"));

//Event listeners added for each button
let tasks = localStorage.getItem("tasks") !== null ? localStorageTransactions : [];
addButton.addEventListener("click", addTask);
actButton.addEventListener("click", actView);
allButton.addEventListener("click", allView);
compButton.addEventListener("click", compView);


//Function that formats the way the list item is added
function addProcedure(task) {
    const item = document.createElement("li");
    item.innerHTML = `
    <input type="checkbox" id="checked" ${
      task.completed === true ? "checked" : ""
    } onclick="updateTask(${task.id})"/>
    <label class="markedCheck" for="idInput">${
      task.text
    }</label> <button class="deleteButton" onclick="removeTask(${
    task.id
  })">X</button>
    `;
    list.appendChild(item);
}

//Initialise for tasks to be added
function init() {
    list.innerHTML = "";
    tasks.forEach(addProcedure);
    countRemainTasks(tasks);
}

//Add a task to the list of items to be done
function addTask(event) {
    event.preventDefault();
    if (newTask.value === "") {
        alert("Submission Empty. Please Try Again.");
    } else {
        const task = {
            id: Date.now(),
            text: newTask.value,
            completed: false,
        };
        tasks.push(task);
        console.log(tasks);
        newTask.value = "";
        console.log(task);
        addProcedure(task);
        updateLocalStorage();
    }
    countRemainTasks(tasks);
}

//Allows the local storage to accept changes to information held by it
function updateLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    countRemainTasks();
}

//Sends an update to the local storage for each task change
function updateTask(id) {
    const tasksIndex = tasks.map((transaction) => transaction.id);
    const index = tasksIndex.indexOf(id);
    tasks[index].completed = !tasks[index].completed;
    updateLocalStorage();
    init();
}

//Removes the task from the list
function removeTask(id) {
    tasks = tasks.filter((task) => task.id !== id);
    updateLocalStorage();
    init();
}

//Determines how many tasks are left
function countRemainTasks() {
    document.getElementById("count").innerText = tasks.filter(
        (task) => task.completed === false
    ).length;
}

//Different viewing options to be selected
function allView() {
    init();
}

function actView() {
    list.innerText = "";
    filteredTasks = tasks.filter((task) => task.completed === false);
    filteredTasks.forEach(addProcedure);
}

function compView() {
    list.innerText = "";
    filteredTasks = tasks.filter((task) => task.completed === true);
    filteredTasks.forEach(addProcedure);
}

init();