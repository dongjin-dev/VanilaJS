const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
const savedTodos = JSON.parse(localStorage.getItem(TODOS_KEY)) || [];

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(savedTodos));
}

function renderTodoList() {
    todoList.innerHTML = "";
    savedTodos.forEach((todo, index) => {
        const li = document.createElement("li");
        li.textContent = todo;
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.addEventListener("click", () => {
            savedTodos.splice(index, 1);
            saveTodos();
            renderTodoList();
        });
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });
}

todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const newTodo = todoInput.value;
    savedTodos.push(newTodo);
    saveTodos();
    renderTodoList();
    todoInput.value = "";
});

renderTodoList();