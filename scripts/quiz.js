const quizForm = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelector("#check-solution");

const outputElement = document.querySelector("#output");

const correctAnswers = ["60° 60° 60°", "equilateral", "right angle", "acute", "2 equal sides"];

function calculateScore() {
    var score = 0;
    var i = 0;
    const formResults = new FormData(quizForm);

    for (let value of formResults.values()) {
        if (value === correctAnswers[i]) {
            score++;
        }
        i++;
    }


    output.innerText = "Congrats you scored :" + score;
}

submitAnswerBtn.addEventListener('click', calculateScore)