// Definition of const
const taskInput = document.querySelector(".task-input input"),
filters = document.querySelectorAll(".filters span"),
clearAll = document.querySelector(".clear-btn"),
taskBox = document.querySelector(".task-box")

// Variable
let editId,
isEditTask = false, 
todos = JSON.parse(localStorage.getItem("todo-list"));

// Filters
filters.forEach(btn =>{
    btn.addEventListener("click", ()=> {
        document.querySelector("span.active").classList.remove("active");
        btn.classList.add("active");
        showTodo(btn.id);
    });
});

