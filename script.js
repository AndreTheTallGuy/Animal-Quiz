var timer = document.querySelector(".timer");
var secondsLeft = 75;
var startButton = document.querySelector("#start")
var scoreBox = document.querySelector(".score");
var score = 0;

console.log(score)
var questionContainer = document.querySelector('#question-container');
var count = 0;
var endCont = document.body.querySelector("#end-container")

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
            { text: '2', correct: false },
            { text: '13', correct: false },
            { text: '4', correct: true },
            { text: '3', correct: false },
        ]
    },
    {
        question: 'What is 3 + 2?',
        answers: [
            { text: '9', correct: false },
            { text: '22', correct: false },
            { text: '5', correct: true },
            { text: '8', correct: false },
        ]
    },
    {
        question: 'What is 4 + 2?',
        answers: [
            { text: '4', correct: false },
            { text: '47', correct: false },
            { text: '2', correct: false },
            { text: '6', correct: true },
        ]
    }

]


startButton.addEventListener('click', startGame)

function quizTimer() {
    // Create the countdown timer.
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft + " seconds left";

        if (secondsLeft === 0) {
            timer.textContent = "0 seconds left";
            clearInterval(timerInterval);
            // alert("Time's Up!")
            endQuiz()
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



// function for rendering questions
function renderQuestions() {

    var q = document.getElementById('question')
    q.textContent = questions[count].question;
    renderButtons();

}

function renderButtons() {
    var answerContainer = document.getElementById('answer-buttons');
    answerContainer.innerHTML = "";

    for (var i = 0; i < 4; i++) {
        var button = document.createElement("button");
        button.classList.add('btn');
        button.hasAttribute('data-correct');
        button.setAttribute('data-correct', questions[count].answers[i].correct);
        button.onclick = btnclick;
        button.textContent = questions[count].answers[i].text;
        answerContainer.appendChild(button);
        // console.log(questions.answers.correct);

        // button.onclick = function () {
        //     alert("working");
        //     count++;
        //     renderQuestions();
        // }
    }

}

// if user clicks on button check if true



function btnclick() {
    var value = event.target.dataset.correct
    if (value === "true") {
        score++
        scoreBox.textContent = "Score: " + score;
    }
    console.log(value);
    console.log(score)
    // alert("working");
    count++;
    if (count < 4) {
        renderQuestions();
    }
    else {
        // endQuiz()
        secondsLeft = 1

    }

    console.log(count);

}


function endQuiz() {
    questionContainer.classList.add("hide")
    // alert("working")
    endCont.classList.remove("hide")
    endCont.innerHTML += "End of Quiz <br> <br> Your Score: " + score + "<br>"
    endCont.innerHTML += "<br> Enter your initials: <br>"
    endCont.innerHTML += "<input id='input' type='text'> <button class='btn submit'>Submit</button>";
    var submit = document.querySelector(".submit")
    submit.onclick = highScores

    function highScores() {
        var input = document.querySelector("input").value
        endCont.classList.add("hide")
        var person = {
            name: input,
            score: score
        }
        //Get Json array from local storage
        var hiScoresAsString = localStorage.getItem("person");
        // console.log(typeof hiScoresAsString);
        //Json.parse stringified json array
        var hiScores;
        if (hiScoresAsString === null) {
            hiScores = [];
        } else (
            hiScores = JSON.parse(hiScoresAsString)
        )
        console.log(hiScores);
        // at this point we have an array


        //add person to array
        hiScores.push(person);
        //Json.stringify the array
        //push new array to local storage using same key to replace data in value
        localStorage.setItem('person', JSON.stringify(hiScores));

        // for (let i = 0; i < .length; i++) {
        //     const element = array[i];

        // }
        var $scores = document.getElementById("high-scores")
        $scores.classList.remove("hide")
        $scores.innerHTML += "HIGH SCORES: <br>"
        // display each hi score
        hiScores.sort((e, f) => f.score - e.score);
        hiScores.forEach(e => {
            $scores.innerHTML += e.name + ": " + e.score + "<br>"
        })

        // alert("working")

        console.log(input);
        // clearTimeout(timer)
        // stop(quizTimer)
        // timer.textContent = 0
    }

}



// 

// question array 
// var questionIndex = questions.length - 1;
var runningIndex = 0;


// console.log(this).val()
// document.querySelector(--"button"--).addEventListener("click", function () {
//     console.log(this);

// })




// function to keep score




















