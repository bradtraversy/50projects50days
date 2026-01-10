const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todos");
const countEl = document.getElementById("count");
const clearBtn = document.getElementById("clear");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

renderTodos();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input.value.trim() === "") {
    alert("Todo empty nahi ho sakta 😅");
    return;
  }

  todos.push({
    text: input.value,
    completed: false
  });

  input.value = "";
  saveAndRender();
});

function renderTodos() {
  todosUL.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.innerText = todo.text;

    if (todo.completed) li.classList.add("completed");

    li.addEventListener("click", () => {
      todo.completed = !todo.completed;
      saveAndRender();
    });

    li.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      todos.splice(index, 1);
      saveAndRender();
    });

    todosUL.appendChild(li);
  });

  updateCount();
}

function updateCount() {
  const pending = todos.filter(t => !t.completed).length;
  countEl.innerText = `${pending} tasks left`;
}

clearBtn.addEventListener("click", () => {
  todos = todos.filter(todo => !todo.completed);
  saveAndRender();
});

function saveAndRender() {
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
}
