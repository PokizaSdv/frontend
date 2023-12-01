const todos = [
    {
        text: "Breakfast",
        status: "TODO",
        id: crypto.randomUUID()
    },
    {
        text: "Dinner",
        status: "TODO",
        id: crypto.randomUUID()
    }
];

const changeTodoStatus = (id, status) => {
    for (const todo of todos) {
        if (todo.id === id) {
            todo.status = status;
        }
    }
};

const ul = document.querySelector(".todos");
let checkboxes = document.querySelectorAll('input[type="checkbox"]');

const renderTodo = (text, id) => {
    const li = document.createElement("li");
    li.innerText = text;
    li.setAttribute("data-todoId", id);
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    li.appendChild(checkbox);

    ul.appendChild(li);
    checkboxes = document.querySelectorAll('input[type="checkbox"]');
};

const renderTodos = () => {
    for (let i = 0; i < todos.length; i++) {
        const todo = todos[i];

        renderTodo(todo.text, todo.id);
    }
};
renderTodos();

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.querySelector(".todo-input");
    const textValue = input.value;
    const id = crypto.randomUUID();
    const todo = {
        text: textValue,
        status: "todo",
        id: id
    };
    todos.push(todo);
    renderTodo(textValue, id);
});


checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (e) => {
        const parent = checkbox.parentElement;
        const todoId = parent.getAttribute("data-todoId");

        if (checkbox.checked) {
            parent.style.textDecoration = "line-through";
            changeTodoStatus(todoId, "done")
        } else {
            parent.style.textDecoration = "none";
            changeTodoStatus(todoId, "todo")

        }
    });
});
console.log(todos);
