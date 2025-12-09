let createButton = document.getElementById("create-button");
let firstSelectionButton = document.getElementById("first-letter-button");
let secondSelectionButton = document.getElementById("second-letter-button");
let thirdSelectionButton = document.getElementById("third-letter-button");
let fourthSelectionButton = document.getElementById("fourth-letter-button");
let fifthSelectionButton = document.getElementById("fifth-letter-button");
let backButton = document.getElementById("back-button");

let create = document.getElementById("create");
let first = document.getElementById("first-selection");
let second = document.getElementById("second-selection");
let third = document.getElementById("third-selection");
let fourth = document.getElementById("fourth-selection");
let fifth = document.getElementById("fifth-selection");
let design = document.getElementById("decorated-sign");

let square1 = document.getElementById('u-l');
let square2 = document.getElementById('s-l');
let square3 = document.getElementById('h-l');
let square4 = document.getElementById('a-l');
let square5 = document.getElementById('g-l');

first.style.display="block";
second.style.display="none";
third.style.display="none";
fourth.style.display="none";
fifth.style.display="none";
design.style.display="block";

/*createButton.addEventListener("click", function(){
    create.classList.toggle("show");
    first.classList.toggle("show");
    second.classList.toggle("hide");
    third.classList.toggle("hide");
    fourth.classList.toggle("hide");
    fifth.classList.toggle("hide");
    design.classList.toggle("hide");
})*/

firstSelectionButton.addEventListener("click", function(){
    
    // Get the checked radio button from the "first-selection" group
    let checkedOption = document.querySelector('input[name="first-selection"]:checked'); /* this is a new way of grabbing an element that we haven't gone over in class yet */
    /* set the odd squares equal to its value */
    ul.src = checkedOption.value;
    /* show the second-selection panel */
    first.style.display="none";
    second.style.display="block";

})

secondSelectionButton.addEventListener("click", function(){
    
    // Get the checked radio button from the "first-selection" group
    let checkedOption = document.querySelector('input[name="second-selection"]:checked'); /* this is a new way of grabbing an element that we haven't gone over in class yet */
    /* set the odd squares equal to its value */
    sl.src = checkedOption.value;
    /* show the second-selection panel */
    second.style.display="none";
    third.style.display="block";
})

thirdSelectionButton.addEventListener("click", function(){
    
    // Get the checked radio button from the "first-selection" group
    let checkedOption = document.querySelector('input[name="third-selection"]:checked'); /* this is a new way of grabbing an element that we haven't gone over in class yet */
    /* set the odd squares equal to its value */
    hl.src = checkedOption.value;
    /* show the second-selection panel */
   third.style.display="none";
    fourth.style.display="block";
})

fourthSelectionButton.addEventListener("click", function(){
    
    // Get the checked radio button from the "first-selection" group
    let checkedOption = document.querySelector('input[name="fourth-selection"]:checked'); /* this is a new way of grabbing an element that we haven't gone over in class yet */
    /* set the odd squares equal to its value */
    al.src = checkedOption.value;
    /* show the second-selection panel */
    fourth.style.display="none";
    fifth.style.display="block";
})

fifthSelectionButton.addEventListener("click", function(){
    
    // Get the checked radio button from the "first-selection" group
    let checkedOption = document.querySelector('input[name="fifth-selection"]:checked'); /* this is a new way of grabbing an element that we haven't gone over in class yet */
    /* set the odd squares equal to its value */
    gl.src = checkedOption.value;
    /* show the fifth-selection panel */
    fifth.style.display="none";
})



backButton.addEventListener("click", function(){
first.style.display="block";
ul.src = "";
sl.src = "";
hl.src = "";
al.src = "";
gl.src = "";
})


function AddToPanel(number) {}{

var RadioButton=getElementById('first-selection');
}