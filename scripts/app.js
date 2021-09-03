const inputs = document.querySelectorAll(".angle");
const checkButton = document.querySelector("#is-triangle-button");
const outputMessage = document.querySelector("#output-message");

function isTriangle()
{
    var sum = 0;
    var angle1 = parseInt(inputs[0].value);
    var angle2 = parseInt(inputs[1].value);
    var angle3 = parseInt(inputs[2].value);
    sum = angle1 + angle2 + angle3;
    console.log(sum);

    if (sum == 180)
    {
        outputMessage.innerText ="the shape is triangle!!";
    }
    else{
        outputMessage.innerText ="The shape is not a triangle";
    }

}

checkButton.addEventListener('click',isTriangle);