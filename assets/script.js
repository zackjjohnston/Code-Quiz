//initial state
var timePenalty = 10
var score = 0

//index tracks how many questions have been answered
var index = 0;
var scores = [];
var secondsLeft = 60
//timer
var timer = setInterval(startTimer, 1000) 
function startTimer () {
    document.getElementById("time-left").innerText = secondsLeft;
    secondsLeft--;
    if (secondsLeft <= 0) {
    clearInterval(timer);
    document.getElementById("time-left").innerText = "Time's Up!";  
    }
}

// buttons - html and event listeners
var startButton = document.getElementById("start-button")
startButton.addEventListener("click", startQuiz)
var varhighScore = document.getElementById("high-scores")
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

//quiz functionality
function startQuiz() {
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
//check if answer is correct, if correct add to score, go to next question
//if incorrect, do not add to score, subtract from timer, go to next question
function isRight () {
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
        showQuestions();
    }
}