// variables targeted in HTML
var introCard = document.querySelector(".intro-card");
var start = document.querySelector(".start");
var timeCounter = document.querySelector(".timer-count");
var questionInfo = document.querySelector(".question-info");
var answers = document.querySelector(".answers");
var finalScore = document.querySelector(".final-score");
var initials = document.querySelector("#initials");
var highScore = document.querySelector(".highscore");
var goBack = document.querySelector(".go-back");
var reset = document.querySelector(".reset");

var timer;
var timerCount;
var correct;
var incorrect;

var codingQuestions = [
    {question1: Blah,
    answers: {
        a: a,
        b: b,
        c: c,
        d: d,
    },
    correctAnswer: b },

    {question2: Blah,
        answers: {
            a: a,
            b: b,
            c: c,
            d: d,
        },
    correctAnswer: b },

    {question3: Blah,
        answers: {
            a: a,
            b: b,
            c: c,
            d: d,
        },
        correctAnswer: b },

]
// Generating the quiz
function startQuiz(){
    timer = 100;
    document.innerHTML = ""
    // looping through questions to display them
    for (let index = 0; index < codingQuestions.length; index++) {
        
        
    }

}

// Timer Function
function startTimer() {
    timer = setInterval(function(){
        timerCount--;
        timecounter.textContent = timerCount;
        // If the wrong answer is chosen, then 10 seconds is taken away
        
        // If the timer = 0
    }, 1000)
}


//eventlisteners
start.addEventListener("click", startQuiz);