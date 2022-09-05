// variables targeted in HTML
var introCard = document.querySelector(".intro-card");
var h1 = document.querySelector(".h1");
var about = document.querySelector(".about");
var start = document.querySelector(".start-button");
var timeCounter = document.querySelector(".timer-count");
var questionInfo = document.querySelector(".question-info");
var answers = document.querySelector(".answers");
var finalScore = document.querySelector(".final-score");
var initials = document.querySelector("#initials");
var highScore = document.querySelector(".highscore");
var goBack = document.querySelector(".go-back");
var reset = document.querySelector(".reset");
const startBtn = document.createElement('button');
var option1Li = document.createElement('li');
var option2Li = document.createElement('li');
var option3Li = document.createElement('li');
var option4Li = document.createElement('li');
var button1 = document.createElement('button');
var button2 = document.createElement('button');
var button3 = document.createElement('button');
var button4 = document.createElement('button');

h1.textContent = "";
var timer;
var timerCount;
var correct;
var incorrect;
var index = 0;

var introCard = [
    {title: "Coding Quiz Challenge",
    about: "Please answer the following 3 coding questions to the best of your abilities. You will have 75 seconds to complete the 3 questions. Good Luck!!"
    }
]

var codingQuestions = [
    {question: "Blah",
    answers: {
        a: "a",
        b: "b",
        c: "c",
        d: "d",
    },
    correctAnswer: "b" },
    {question: "Blah2",
    answers: {
        a: "a",
        b: "b",
        c: "c",
        d: "d",
    },
    correctAnswer: "b" },
    {question: "Blah3",
    answers: {
        a: "a",
        b: "b",
        c: "c",
        d: "d",
    },
    correctAnswer: "b" },
  
]

//Generating intro card
function Introduction() {
    h1.textContent = introCard[0].title;
    about.textContent = introCard[0].about;
    startBtn.textContent = "Start Quiz";
    start.appendChild(startBtn);  
}

// Generating the quiz
function startQuiz() {
    timer = 75;
    h1.textContent = "";
    about.textContent = "";
    start.removeChild(startBtn);
    // display first question
    displayQ();
}

// Function to display questions one at a time
function displayQ() {
    questionInfo.textContent = codingQuestions[index].question;
    answers.appendChild(option1Li);
    answers.appendChild(option2Li);
    answers.appendChild(option3Li);
    answers.appendChild(option4Li);
    option1Li.appendChild(button1);
    option2Li.appendChild(button2);
    option3Li.appendChild(button3);
    option4Li.appendChild(button4);
    button1.textContent = codingQuestions[index].answers.a;
    button2.textContent = codingQuestions[index].answers.b;
    button3.textContent = codingQuestions[index].answers.c;
    button4.textContent = codingQuestions[index].answers.d;
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

answers.addEventListener("click", () => {
    if (index < 2) {
        index++;
        displayQ();
    }
})