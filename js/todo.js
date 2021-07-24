const todoForm=document.querySelector(".todo-form")
const toDosList=document.querySelector(".todos")
const todoInput=document.querySelector(".todo-form input")
const savedParse=JSON.parse(localStorage.getItem("toDos"))
let toDos=[]

function saveToLocal(){
    localStorage.setItem("toDos", JSON.stringify(toDos))
}


function removeTodo(event){
    const li=event.target.parentElement
    const deletedId=li.id
    li.remove()
    toDos = toDos.filter(items => items.id !== parseInt(deletedId))
    saveToLocal()
  
    
    
    
}

function paintTodo(toDo){
const li = document.createElement("div")
const span = document.createElement("span")
const btn = document.createElement("i")
span.innerText=toDo.text
li.id=toDo.id
btn.className="fas fa-minus-circle"
btn.addEventListener("click", removeTodo)
toDosList.appendChild(li)
li.appendChild(span)
li.appendChild(btn)
}

function setTodo(event){
event.preventDefault()
const toDo=todoInput.value
const toDoObj={
    text:toDo,
    id:Date.now()
}
toDos.push(toDoObj)
saveToLocal()
todoInput.value=""
paintTodo(toDoObj)
}


todoForm.addEventListener("submit", setTodo)

if(savedParse){
    toDos=savedParse
    toDos.forEach(paintTodo)
}