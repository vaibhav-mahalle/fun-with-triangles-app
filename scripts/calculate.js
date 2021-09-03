const side1 = document.querySelector("#side-1");
const side2 = document.querySelector("#side-2");
const calculateScore = document.querySelector("#calculate-btn");
const output = document.querySelector("#output");


function calculateHypotenuse() {
    var hypotenuse = (side1.value*side1.value) + (side2.value*side2.value)  ;
    
    hypotenuse = Math.sqrt(hypotenuse);

    output.innerText = "Hypotenuse of the entered triangle is: " + hypotenuse;
    
}

calculateScore.addEventListener('click', calculateHypotenuse)
