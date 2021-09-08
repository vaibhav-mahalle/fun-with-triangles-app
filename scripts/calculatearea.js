const base = document.querySelector("#base");
const height = document.querySelector("#height");
const output = document.querySelector("#output");
const button = document.querySelector("#calculate-area");

function calculateArea() {
    var area = 0.5*base.value*height.value;
    
    output.innerText = "The area of triangle is: "+area+" \u33A0";
}

function clickHandler() {
    if(height.value <=0 || base.value <= 0)
    {
        output.innerText = "The sides of triangle must be atleast greater than zero";
    }
    else
    {
        calculateArea();
    }
}

button.addEventListener('click', clickHandler)

