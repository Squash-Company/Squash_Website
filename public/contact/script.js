// LABEL VISIBEL

var nameInput = document.getElementById('name')
var emailInput = document.getElementById('email')
var messageInput= document.getElementById('message') 

nameInput.addEventListener('keypress', () => {
    document.querySelector(".sr-only.name").style.visibility = "visible";
})
emailInput.addEventListener('keypress', () => {
    document.querySelector(".sr-only.email").style.visibility = "visible";
})
messageInput.addEventListener('keypress', () => {
    document.querySelector(".sr-only.message").style.visibility = "visible";
})
