//User can do:
  //Add todos
  //Delete todos
  //Complete todos
  //Save todos
  //Load todos
  //User will type in todo and click todo button.
  //This will then add the dodo to the list above.

const form = document.querySelector("#new-todo-form")
const todoInput = document.querySelector("#todo-input")
const list = document.querySelector("#list")
const template = document.querySelector("#list-item-template")
const todos = []
const LOCAL_STORAGE_PREFIX = "TODO_LIST-"
const TODOS_STORAGE_KEY = `${LOCAL_STORAGE_PREFIX}-todos`
//Add todos
//Delete todos
form.addEventListener("submit", e => {
    e.preventDefault()
    const todoName = todoInput.value
    if(todoName === "") return
    todos.push(todoName)
    renderTodo(todoName)
    saveTodos()
    todoInput.value = ""
})

function renderTodo(todoName) {
    const templateClone = template.content.cloneNode(true)
    const textElement = templateClone.querySelector('[data-list-item-text]')
    textElement.innerText = todoName
    list.appendChild(templateClone)
}

//Save todos
function saveTodos() {
    localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos))
}
//Load todos