const base = document.querySelector("#base");
const height = document.querySelector("#height");
const output = document.querySelector("#output");
const button = document.querySelector("#calculate-area");

function calculateArea() {
    var area = 0.5*base.value*height.value;
    
    output.innerText = "The area of triangle is: "+area+" \u33A0";
}


button.addEventListener('click', calculateArea)

