let button = document.getElementById("pink-mode");
let button2 = document.getElementById("green-mode");
let button3 = document.getElementById("font-mode");
let page = document.body;

button.addEventListener("click", function(){
    page.classList.toggle("switch-mode")
})
button2.addEventListener("click", function(){
    page.classList.toggle("green-switch-mode")
})

// button3.addEventListener("change", function(){
//     let selectedFont = title.value;
//     page.style.fontFamily = selectedFont;
// })

let dropdown = document.getElementById("desktop");
let img = document.getElementById("mobile");


dropdown.addEventListener("change", function(){
    /*first get what the user selected*/

    let val = dropdown.value

    /*then  change the image*/

    img.src = val;
})

let nametextInput = document.getElementById("name-text");
let taglinetextInput = document.getElementById("tagline-text");
let title = document.getElementById("title");
let tagline = document.getElementById("tagline");
let fonttextInput = document.getElementById("font-text");



nametextInput.addEventListener("input", function(){
    let userText = nametextInput.value;
    title.innerHTML = userText;
})

taglinetextInput.addEventListener("input", function(){
    let userText = taglinetextInput.value;
    tagline.innerHTML = userText;
})

let colorInput = document.getElementById("color");

colorInput.addEventListener("input", function(){
    let userColor = colorInput.value;
    page.style.backgroundColor = userColor;
    /* this is saying go into the style of the page and make the background color equal the user color*/
})



let downloadButton = document.getElementById("download");

downloadButton.addEventListener("click", function(){
    window.print();
    page.style.backgroundColor = userColor;
})

if (selectedFont) {
    posterText.style.fontFamily = '"${selectedFont}", system-ui,sans-serif';
} else {
    posterText.style.fontFamily = "font-name";
}