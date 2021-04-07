//initial state
var secondsLeft = 60
var timePenalty = 10
var score = 0
var index = 0;
var scores = [];
//html elements - buttons
startButton = document.getElementById("start-button")
startButton.addEventListener("click", startQuiz)
highScore = document.getElementById("high-scores")
nextButton = document.getElementById("next-button")
//html elements - text boxes
var questionsContainer = document.getElementById("question-container")
//quiz functionality
function startQuiz() {
    console.log("started")
    startButton.classList.add('hide')
    questionsContainer.classList.remove('hide')
};
function nextQuestion () {

}

function selectAnswer () {

}