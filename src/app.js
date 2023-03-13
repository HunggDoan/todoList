const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');


let todos = [];

function renderTodos() {
    list.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
          <span class="todo-text">${todo}</span>
          <button class="edit-btn">Edit</button>
          <button class="delete-btn">Delete</button>
        `;
        list.appendChild(li);
        const editBtn = li.querySelector('.edit-btn');
        editBtn.addEventListener('click', () => {
            editTodoAt(index);
        });
        const deleteBtn = li.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {
            deleteTodoAt(index);
        });
    })
}

function addTodo() {
    const todoText = input.value.trim();
    if (todoText) {
        todos.push(todoText);
        input.value = '';
        renderTodos();
    }
}

function editTodoAt(index) {
    const todoText = prompt('Enter a new task:', todos[index]);
    if (todoText) {
        todos[index] = todoText;
        renderTodos();
    }
}

function deleteTodoAt(index) {
    todos.splice(index, 1);
    renderTodos();
}

form.addEventListener('click', (event) => {
    event.preventDefault();
    addTodo();
});

renderTodos();