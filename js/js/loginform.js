const loginForm=document.querySelector(".login-form")
const loginInput=document.querySelector(".login-form input[type=text]")
const loginBtn=document.querySelector(".login-form input[type=submit")
const login=document.querySelector(".login")
const usernameGet=localStorage.getItem("username")
const HIDDEN="hidden"

function deleteUsername(event){
const span=event.target.parentElement
span.remove()
localStorage.removeItem("username")
loginForm.classList.remove(HIDDEN)
submitLogin()
}

function HelloMsg(){

    const span=document.createElement("span")
    const btn=document.createElement("i")
    span.innerText=`Hello! ${localStorage.getItem("username")}`
    login.appendChild(span)
    span.className="Hello"
    btn.className="fas fa-user-slash"
    span.appendChild(btn)
    loginForm.classList.add(HIDDEN)
    btn.addEventListener("click", deleteUsername)

}

function savedUsername(username){
    localStorage.setItem("username",username)
}

function submitLogin(event){
event.preventDefault()
const username=loginInput.value
savedUsername(username)
HelloMsg()
loginInput.value=""

}



if(usernameGet!==null){
    HelloMsg()
}else{
    loginForm.addEventListener("submit", submitLogin)
}