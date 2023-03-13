const todoInput = document.getElementById('todoInput');
const addTodoButton = document.getElementById('addTodoButton');
const todoList = document.getElementById('todoList');


let todos = [];

const renderTodos = () => {
    while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild);
    }

    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.checked = todo.completed;

        checkbox.addEventListener('click', () => {
            todos[index].completed = !todos[index].completed;
            renderTodos();
        })

        const span = document.createElement('span');
        span.innerText = todo.text;
        span.classList.add(todo.completed ? 'completed' : '');

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'Delete';
        deleteButton.addEventListener('click', () => {
            deleteTodoList(index);
        })

        const editButton = document.createElement('button');
        editButton.innerHTML = 'Edit';
        editButton.addEventListener('click', () => {
            editTodoList(index);
        })

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteButton);
        li.appendChild(editButton);

        todoList.appendChild(li);

    })
}

const addTodo = () => {
    if (!todoInput.value.trim()) {
        return;
    }

    const newTodo = {
        text: todoInput.value,
        completed: false
    }

    todos.push(newTodo);
    todoInput.value = '';
    renderTodos();


}

const deleteTodoList = (index) => {
    todos.splice(index, 1);
    renderTodos();
}

const editTodoList = (index) => {
    const todo = todos[index];
    const newText = prompt('enter new text', todo.text)
    if (newText) {
        todo.text = newText;
        renderTodos();
    }
}

addTodoButton.addEventListener('click', addTodo);

todoInput.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
        addTodo();
    }
});
renderTodos();


