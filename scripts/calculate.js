const side1 = document.querySelector("#side-1");
const side2 = document.querySelector("#side-2");
const calculateScore = document.querySelector("#calculate-btn");
const output = document.querySelector("#output");


function calculateHypotenuse() {
    if(side1.value <= 0 || side2.value <= 0)
    {
        output.innerText = "Sides of triangle should atleast be greater than zero";
    }

    else
    {
    var hypotenuse = (side1.value*side1.value) + (side2.value*side2.value)  ;
    
    hypotenuse = Math.sqrt(hypotenuse);

    output.innerText = "Hypotenuse of the entered triangle is: " + hypotenuse;
    }
}

calculateScore.addEventListener('click', calculateHypotenuse)
