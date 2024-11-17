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
        deleteBtn.type = "button"; // 버튼 기본 타입 명시
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
    event.preventDefault(); // 기본 동작 방지    
    const newTodo = todoInput.value;
    savedTodos.push(newTodo);
    saveTodos();
    renderTodoList();
    todoInput.value = ""; // 입력창 초기화
});

renderTodoList();
