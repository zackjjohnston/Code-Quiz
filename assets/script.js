//initial state
var secondsLeft = 60
var timePenalty = 10
var score = 0

//index tracks how many questions have been answered
var index = 0;
var scores = [];

//html elements - buttons
var startButton = document.getElementById("start-button")
startButton.addEventListener("click", startQuiz)
var varhighScore = document.getElementById("high-scores")
var nextButton = document.getElementById("next-button")
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

// if (answers.correct == true) {
//     score ++
// }
// else {
//     timeleft - 10
// }
//if (index == questions.length - 1) {
//questionContainer.classList.add('hide)
//} 
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
        answers: [
            {text: "javascript", correct: false},
            {text: "h1", correct: false},
            {text: "script", correct: true},
            {text: "code", correct: false}
        ]
    }
]
console.log(questions[0])