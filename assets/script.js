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
nextButton.addEventListener("click", nextQuestion)
var answerButtons = document.getElementById("answer-buttons")
//html elements - text boxes
var question = document.getElementById("question")
var questionsContainer = document.getElementById("question-container")
var intro = document.getElementById("intro")
//quiz functionality
function startQuiz() {
    console.log("started")
    startButton.classList.add('hide')
    intro.classList.add("hide")
    questionsContainer.classList.remove('hide')
    question.innerHTML = questions[index].question
};
function nextQuestion (question) {
    question.innerText = question
}
function resetState() {

}
function selectAnswer () {
nextButton.classList.remove('hide')
}
// if (answers.correct == true) {
//     score ++
// }
// else {
//     timeleft - 10
// }
var questions = [
    {
        question: "What does JS stand for?",
        answers: [
            {text: "JavaScript", correct: true},
            {text: "Jim's Sandwich", correct: false},
            {text: "Jumping Spiders", correct: false},
            {text: "Jade Sculptures", correct: false}
        ]
    },
    {
        question: "What tag do you use to to place JavaScript in?",
        answers: [
            {text: "javascript", correct: false},
            {text: "h1", correct: false},
            {text: "script", correct: true},
            {text: "code", correct: false}
        ]
    },
    {
        questions: ""
    }
]
console.log(questions[0].answers[0].correct)