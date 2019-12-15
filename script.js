var timer = document.querySelector(".timer");
var secondsLeft = 75;

function quizTimer() {
    // Create the countdown timer.
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft + " seconds left";

        if (secondsLeft === 0) {
            timer.textContent = "0 seconds left";
            clearInterval(timerInterval);
            alert("Time's Up!")
        }

    }, 1000);
}
quizTimer();



