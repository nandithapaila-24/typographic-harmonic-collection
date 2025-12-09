let keyboard = document.getElementById("keyboard-graphic");
let body = document.body;
let h1 = document.querySelector("h1");

keyboard.addEventListener("click", function(event) {
    
    /* change background color and font color of body */
    body.classList.toggle("dark-mode");
    h1.classList.toggle("dark-mode");
});