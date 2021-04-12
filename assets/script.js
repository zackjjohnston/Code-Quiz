//index tracks how many questions have been answered
var index = 0;
//
var storedScores = JSON.parse(localStorage.getItem("scores"));
if (!storedScores) {
    storedScores = [];
}
var secondsLeft = 60
//timer
var timer = setInterval(startTimer, 1000) 
function startTimer () {
    document.getElementById("time-left").innerText = secondsLeft;
    secondsLeft--;
    if (secondsLeft <= 0) {
    clearInterval(timer);
    document.getElementById("time-left").innerText = "Time's Up!";
    displayScoreScreen () 
    }
}
//function to display score screen, called by timer
function showScoreScreen () {
    questionsContainer.style.display = "none"
    intro.style.display = "none"

}
// buttons - html and event listeners
var startButton = document.getElementById("start-button")
startButton.addEventListener("click", startQuiz)
var highScoreSubmit = document.getElementById("high-score-submit")
highScoreSubmit.addEventListener("click", submitScore)
var answerButtons = document.getElementsByClassName("answer-button")
for (var i = 0; i < answerButtons.length; i++) {
  (function(x) {
    answerButtons[x].addEventListener("click", isRight)
  })(i);
}
var buttonA = document.getElementById("A")
var buttonB = document.getElementById("B")
var buttonC = document.getElementById("C")
var buttonD = document.getElementById("D")
//html elements - text boxes
var question = document.getElementById("question")
var questionsContainer = document.getElementById("question-container")
var intro = document.getElementById("intro")
var highScores = document.getElementById("high-scores")
var quizEnd = document.getElementById("quiz-end")

//quiz functionality
function startQuiz() {
    score = 0
    console.log("started")
    startButton.classList.add('hide')
    intro.classList.add('hide')
    questionsContainer.classList.remove('hide')
    showQuestions ()
    timer
};
//show buttons w/answers
function showQuestions() {
    question.innerText = questions[index].question;
    question.innerText = questions[index].question;
    buttonA.innerText = questions[index].answerA;
    buttonB.innerText = questions[index].answerB;
    buttonC.innerText = questions[index].answerC;
    buttonD.innerText = questions[index].answerD;
}
//check if answer is correct, if correct add to score, go to next question
//if incorrect, do not add to score, subtract from timer, go to next question
function isRight () {
    if (questions[index] <= question.length) {
        showEnd ();
    }
    if (this.innerText === questions[index].correctAnswer) {
        score++;
        console.log("correct");
        index++;
        showQuestions();
    }
    else {
        console.log("wrong");
        index++;
        secondsLeft = secondsLeft - 10;
        document.getElementById("time-left").innerText = secondsLeft;
        showQuestions();
    }
}
//show scores
function showHighScores () {
    intro.display = "none"
    questionsContainer.display = "none"
    quizEnd.display = "none"
    highScores.display = "block"
    for (var i = 0; i < storedScores.length; i++) {
        var scoreElement = document.createElement("p");
        scoreElement.innerText = scoresFromStorage[i].initials + "recorded a score of" + scoresFromStorage[i].score;
        scoreTable.appendChild(scoreElement)
    }
}

function showEnd () {
    intro.display = "none"
    questionsContainer.display = "none"
    quizEnd.display = "block"
    highScores.display = "none"
}

//submit score
function submitScore () {
    var newUser = initials.value
}
var questions = [
    {
        question: "What does JS stand for?",
        correctAnswer: "JavaScript",
        answerA: "JavaScript",
        answerB: "Jim's Sandwich",
        answerC: "Jumping Spiders",
        answerD: "Jade Sculptures"
    },
    {
        question: "What tag do you use to to place JavaScript in?",
        correctAnswer: "script",
        answerA: "javascript",
        answerB: "h1",
        answerC: "script",
        answerD: "code",
    },
    {
        question: "",
        correctAnswer: "",
        answerA: "",
        answerB: "",
        answerC: "",
        answerD: "",
    },
    {
        question: "",
        correctAnswer: "",
        answerA: "",
        answerB: "",
        answerC: "",
        answerD: "",
    }
]
