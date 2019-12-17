var timer = document.querySelector(".timer");
var secondsLeft = 75;
var startButton = document.querySelector("#start")
var scoreBox = document.querySelector(".score");
scoreBox.innerHTML = "Score: " + score;
var score;

var questions = [
    {
        question: 'What is 1 + 2?',
        answers: [
            { text: '3', correct: true },
            { text: '22', correct: false },
            { text: '2', correct: false },
            { text: '8', correct: false },
        ]
    },
    {
        question: 'What is 2 + 2?',
        answers: [
            { text: '4', correct: true },
            { text: '22', correct: false },
            { text: '2', correct: false },
            { text: '8', correct: false },
        ]
    },
    {
        question: 'What is 3 + 2?',
        answers: [
            { text: '5', correct: true },
            { text: '22', correct: false },
            { text: '2', correct: false },
            { text: '8', correct: false },
        ]
    },
    {
        question: 'What is 4 + 2?',
        answers: [
            { text: '6', correct: true },
            { text: '22', correct: false },
            { text: '2', correct: false },
            { text: '8', correct: false },
        ]
    }

]

var questionContainer = document.querySelector('#question-container');

startButton.addEventListener('click', startGame)

function quizTimer() {
    // Create the countdown timer.
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft + " seconds left";

        if (secondsLeft === 0) {
            timer.textContent = "0 seconds left";
            clearInterval(timerInterval);
            alert("Time's Up!")
            //end quiz
        }

    }, 1000);
}

// function to start game
function startGame() {
    startButton.classList.add('hide')
    quizTimer();
    questionContainer.classList.remove('hide');
    renderQuestions();

}


var count = 0;

// function for rendering questions
function renderQuestions() {

    var q = document.getElementById('question')
    q.textContent = questions[count].question;
    renderButtons();

}

function renderButtons() {
    var answerContainer = document.getElementById('answer-buttons');
    answerContainer.innerHTML = "";

    for (var i = 0; i < questions[count].answers.length; i++) {
        var button = document.createElement("button");
        button.classList.add('btn');
        button.hasAttribute('data-correct');
        button.setAttribute('data-correct', questions[count].answers[i].correct);
        // button.onclick = function () {
        //     alert("working");
        //     count++;
        //     renderQuestions();
        // }

        button.onclick = btnclick;
        button.textContent = questions[count].answers[i].text;
        answerContainer.appendChild(button);
        if (count > 3) {
            alert(working)
        }
    }





    function btnclick() {
        // alert("working");
        count++;
        renderQuestions();
        console.log(count);

    }


    // 

    // question array 
    // var questionIndex = questions.length - 1;
    var runningIndex = 0;






}
// function to keep score




















