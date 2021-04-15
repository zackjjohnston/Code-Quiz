//index tracks how many questions have been answered
var index = 0
//timer
var secondsLeft
var timer
function startTimer () {
    timer = setInterval (timerLogic, 1000)
    secondsLeft = 60
    function timerLogic() {
        if (secondsLeft <= 0) {
            document.getElementById("time-left").innerText = "Time's Up!"
            showEnd() 
            clearInterval(timer)
            }
        else {
            secondsLeft--
            document.getElementById("time-left").innerText = secondsLeft
        }
    }
}
// buttons - html and event listeners
var startButton = document.getElementById("start-button")
startButton.addEventListener("click", startQuiz)
var viewScoresButton = document.getElementById("scores-button")
viewScoresButton.addEventListener("click", showHighScores)
var highScoreSubmit = document.getElementById("high-score-submit")
highScoreSubmit.addEventListener("click", submitScore)
var answerButtons = document.getElementsByClassName("answer-button")
for (var i = 0; i < answerButtons.length; i++) {
  (function(x) {
    answerButtons[x].addEventListener("click", isRight)
  })(i)
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
    index = 0
    startButton.style.display = "none"
    intro.style.display = "none"
    highScores.style.display = "none"
    quizEnd.style.display = "none"
    questionsContainer.style.display = "block"
    showQuestions ()
//Ensure timer has stopped, then start new timer
    clearInterval(timer)
    startTimer()
}
//show buttons w/answers
function showQuestions() {
    question.innerText = questions[index].question
    question.innerText = questions[index].question
    buttonA.innerText = questions[index].answerA
    buttonB.innerText = questions[index].answerB
    buttonC.innerText = questions[index].answerC
    buttonD.innerText = questions[index].answerD
}
//check if answer is correct, if correct add to score, go to next question
//if incorrect, do not add to score, subtract from timer, go to next question
function isRight () {

    if (this.innerText === questions[index].correctAnswer) {
        score++
        index++
    }
    else {
        index++
        secondsLeft = secondsLeft - 10
        document.getElementById("time-left").innerText = secondsLeft
    }
    if (index === questions.length) {
        showEnd()
        clearInterval(timer)
    }
    else {
        showQuestions()
    }
}
function indexCheck () {

}
//show scores

function showHighScores () {
    intro.style.display = "none"
    questionsContainer.style.display = "none"
    quizEnd.style.display = "none"
    highScores.style.display = "block"
    highScores.innerHTML = "<h2>Scores</h2><br>"
    for (var i = 0; i < storedScores.length; i++) {        
        var scoreListItem = document.createElement("p");
        scoreListItem.innerText = storedScores[i].initials + " - " + storedScores[i].score;
        highScores.appendChild(scoreListItem)
    }
    startButton.style.display = "block"
}
function showEnd () {
    intro.style.display = "none"
    questionsContainer.style.display = "none"
    quizEnd.style.display = "block"
    highScores.style.display = "none"
}

//submit score
var storedScores = []
function submitScore () {
    intro.style.display = "none"
    questionsContainer.style.display = "none"
    quizEnd.style.display = "none"
    highScores.style.display = "block"

    var userInitials = document.getElementById("user-initials").value
    var userScore = score
    var newStoredUser = {
        initials: userInitials,
        score: userScore
    }
   storedScores.push(newStoredUser);
    //add to local storage
    localStorage.setItem("scores", JSON.stringify(storedScores));
    showHighScores()
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
        question: "Which one is bologna?",
        correctAnswer: "Bologna",
        answerA: "Ham",
        answerB: "Turkey",
        answerC: "Beef",
        answerD: "Bologna",
    },
    {
        question: "Please be right",
        correctAnswer: "right",
        answerA: "right",
        answerB: "left",
        answerC: "wrong",
        answerD: "no",
    }
]
