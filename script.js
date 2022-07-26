const darkModebtn = document.querySelector("#btn")
const bg = document.getElementById("bg" )
const ball = document.getElementById("ball")
let toggle = false

function toggle2(){
ball.classList.toggle("is-on")
}

darkModebtn.addEventListener ("click", toggle2)
ball.addEventListener("click",)