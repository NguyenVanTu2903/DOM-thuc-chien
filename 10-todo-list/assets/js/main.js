const inputTodo = document.querySelector("#input");
const btnAdd = document.querySelector(".btn");
const listTodo = document.querySelector(".list");

let todoList;
let inputValue = "";

function save() {
    localStorage.setItem("todoList", JSON.stringify(todoList));
}

function render() {
    todoList = JSON.parse(localStorage.getItem("todoList")) || [];
    const html = todoList
        .map(
            (todo) =>
                `<li class="item">${todo} <i class="fas fa-trash btnDelete"></i></li>`
        )
        .join("");

    listTodo.innerHTML = html;

    const btnDelete = document.querySelectorAll(".btnDelete");
    btnDelete.forEach((btn, idx) => {
        btn.addEventListener("click", (e) => {
            todoList.splice(idx, 1);
            e.target.parentElement.remove();
            save();
            render();
        });
    });
}
inputTodo.addEventListener("input", function (e) {
    inputValue = this.value;
});

btnAdd.addEventListener("click", function (e) {
    e.preventDefault();
    todoList.push(inputValue);
    save();
    render();
    inputTodo.value = "";
});
render();
