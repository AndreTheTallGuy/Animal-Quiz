var timer = document.querySelector(".timer");
var secondsLeft = 75;
var startButton = document.querySelector("#start");
var scoreBox = document.querySelector(".score");
var score = 0;


var questionContainer = document.querySelector("#question-container");
var count = 0;
var endCont = document.body.querySelector("#end-container");

var questions = [
  {
    question: "What is the fastest animal?",
    answers: [
      { text: "Peregrine Falcon", correct: true },
      { text: "Cheetah", correct: false },
      { text: "Blue Whale", correct: false },
      { text: "Chupacabra", correct: false }
    ],
    moreInfo: "The peregrine falcon can reach speeds of over 200mph!"
  },
  {
    question: "There is no such thing as a poisonous snake",
    answers: [
      { text: "False", correct: false },
      { text: "True", correct: true },
    ],
    moreInfo: "There are around 600 venomous snakes in the world but none of them are poisonous!"
  },
  {
    question: "Which is the largest type of owl?",
    answers: [
      { text: "Saw-whet", correct: false },
      { text: "Barred", correct: false },
      { text: "Great Grey", correct: true },
      { text: "Great Horned", correct: false }
    ],
    moreInfo: "Great greys also have asymmetrical ear holes allowing them to better hear and catch rodents moving beneath the snow!"
  },
  {
    question: "Which animal has the most complex eyes?",
    answers: [
      { text: "Peacock Mantis Shrimp", correct: true },
      { text: "Bald Eagle", correct: false },
      { text: "Anna's Hummingbird", correct: false },
      { text: "Mountain Lion", correct: false }
    ],
    moreInfo: "With 4 times as many receptive cones than humans, the peacock mantis shrimp can detect 10 times the amount of colors we can!"
  },
  {
    question: "Bats are blind",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true }
    ],
    moreInfo: "Research indicates that in certain situations, bats prefer to use eyesight rather than ecolocation. Additionally, many fruit bats don't have ecolocation at all!"
  },
  {
    question: "Which animal has the highest blood pressure?",
    answers: [
      { text: "Hummingbird", correct: false },
      { text: "Narwhale", correct: false },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: true }
    ],
    moreInfo: "Veterinarians must use extra care as sedatives can lower blood pressure and cut off blood supply to a giraffe's brain!"
  }
];

startButton.addEventListener("click", startGame);

function quizTimer() {
  // Create the countdown timer.
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = secondsLeft + " seconds left";

    if (secondsLeft === 0) {
      timer.textContent = "0 seconds left";
      clearInterval(timerInterval);
      // alert("Time's Up!")
      endQuiz();
    }
  }, 1000);
}

// function to start game
function startGame() {
  startButton.classList.add("hide");
  quizTimer();
  questionContainer.classList.remove("hide");
  renderQuestions();
}

// function for rendering questions
function renderQuestions() {
  var q = document.getElementById("question");
  q.textContent = questions[count].question;
  renderButtons();
}

function renderButtons() {
  var answerContainer = document.getElementById("answer-buttons");
  answerContainer.innerHTML = "";

  for (var i = 0; i < 4; i++) {
    var button = document.createElement("button");
    button.classList.add("btn");
    button.hasAttribute("data-correct");
    button.setAttribute("data-correct", questions[count].answers[i].correct);
    button.onclick = btnclick;
    button.textContent = questions[count].answers[i].text;
    answerContainer.appendChild(button);
  }
}

// if user clicks on button check if true
function btnclick() {
  var value = event.target.dataset.correct;
  scoreBox.textContent = "Score: " + score;
  if (value === "true") {
    score++;
  }
  var next = document.getElementById("answer-buttons");
  var nextBtn = document.createElement("button");
  nextBtn.classList.add("nextBtn")
  nextBtn.textContent = "Next"
  next.appendChild(nextBtn)
  nextBtn.onclick = nextBtnFx


  var infoContain = document.getElementById("more-info")
  infoContain.classList.remove("hide")
  infoContain.textContent = questions[count].moreInfo
  infoContain.appendChild(infoText)


}

function nextBtnFx() {
  var info = document.getElementById("more-info");
  info.classList.add("hide")

  count++;
  if (count < 6) {
    renderQuestions();
  } else {
    // endQuiz()
    secondsLeft = 1;
  }
  console.log(count);
}



function endQuiz() {
  questionContainer.classList.add("hide");
  // alert("working")
  endCont.classList.remove("hide");
  endCont.innerHTML += "End of Quiz <br> <br> Your Score: " + score + "<br>";
  endCont.innerHTML += "<br> Enter your initials: <br>";
  endCont.innerHTML +=
    "<input id='input' type='text'> <button class='btn submit'>Submit</button>";
  var submit = document.querySelector(".submit");
  submit.onclick = highScores;

  function highScores() {
    var input = document.querySelector("input").value;
    endCont.classList.add("hide");
    var person = {
      name: input,
      score: score
    };

    //Get Json array from local storage
    var hiScoresAsString = localStorage.getItem("person");
    // console.log(typeof hiScoresAsString);
    //Json.parse stringified json array
    var hiScores;
    if (hiScoresAsString === null) {
      hiScores = [];
    } else hiScores = JSON.parse(hiScoresAsString);
    console.log(hiScores);
    // at this point we have an array
    //add person to array
    hiScores.push(person);
    //Json.stringify the array
    //push new array to local storage using same key to replace data in value
    localStorage.setItem("person", JSON.stringify(hiScores));

    var $scores = document.getElementById("high-scores");
    $scores.classList.remove("hide");
    $scores.innerHTML += "HIGH SCORES: <br>";
    // display each hi score
    hiScores.sort((e, f) => f.score - e.score);
    hiScores.forEach(e => {
      $scores.innerHTML += e.name + ": " + e.score + "<br>";
    });

    // alert("working")

    console.log(input);
    // clearTimeout(timer)
    // stop(quizTimer)
    // timer.textContent = 0
  }
}
var runningIndex = 0;
