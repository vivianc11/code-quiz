// variables targeted in HTML
var introCard = document.querySelector(".intro-card");
var h1 = document.querySelector(".h1");
var about = document.querySelector(".about");
var start = document.querySelector(".start-button");
var timerDisplay = document.querySelector(".timer-display");
var questionInfo = document.querySelector(".question-info");
var answers = document.querySelector(".answers");
var eval = document.querySelector('.eval');
var finalScore = document.querySelector(".final-score");
var initials = document.querySelector("#initials");
var highScore = document.querySelector(".highscore");
var goBack = document.querySelector(".go-back");
var reset = document.querySelector(".reset");
var startBtn = document.createElement('button');
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
var userChoice = "";
var userScore;
var index = 0;

var introCard = [
    {title: "Coding Quiz Challenge",
    about: "Please answer the following 3 coding questions to the best of your abilities. You will have 60 seconds to complete the 3 questions. Good Luck!!"
    }
]

var codingQuestions = [
    {question: "1. What kind of brackets are used for declaring HTML elements?",
    answers: {
        a: "[ ]",
        b: "< >",
        c: "{ }",
        d: "( )",
    },
    correctAnswer: "< >" },
    {question: "2. If there is an <div> with an id='fancy', how would you select it in CSS?",
    answers: {
        a: "#fancy",
        b: ".fancy",
        c: "/fancy",
        d: "-fancy",
    },
    correctAnswer: "#fancy" },
    {question: "3. After you complete a function called bestFunction in JavaScript, what's the notation to execute the function?",
    answers: {
        a: "bestFunction{};",
        b: "bestFunction;",
        c: "bestFunction[];",
        d: "bestFunction();",
    },
    correctAnswer: "bestFunction();" },
  
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
    timerCount = 60;
    userScore = 0;
    h1.textContent = "";
    about.textContent = "";
    start.removeChild(startBtn);
    // display first question
    displayQ();
    startTimer();
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

// Function to evaluate answer choice
function evaluate() {
    if (userChoice === codingQuestions[index].correctAnswer) {
        userScore = userScore + 33.3;
        eval.textContent = "Correct!😊";
    } else {
        eval.textContent = "Incorrect🙃";
        // If the wrong answer is chosen, then 10 seconds is taken away
        if (eval.textContent === "Incorrect🙃") {
        timerCount = timerCount - 20;
        timerDisplay.textContent = timerCount;
    }
    return userScore;
}}

// Function to display the final score card
function finalCard() {
    questionInfo.textContent = "";
    answers.removeChild(option1Li);
    answers.removeChild(option2Li);
    answers.removeChild(option3Li);
    answers.removeChild(option4Li);
    h1.textContent = "You're Done!!";
    about.textContent = `Final Score: ${userScore}`;
}
//Function to display the high scores

// Timer Function
function startTimer() {
    timer = setInterval(function(){
        if (timerCount >= 0) {
            timerCount--;
            timerDisplay.textContent = timerCount;
        }
        // If the timer = 0
        if (timerCount === 0) {
            clearInterval(timer);
            finalCard();
        }
    }, 1000)
}


//eventlisteners
start.addEventListener("click", startQuiz);

answers.addEventListener("click", () => {
    if (index < 3) {
        displayQ();
    } else if (index === 3){
        clearInterval(timer);
        finalCard();
        }
})

button1.addEventListener('click', () => {
    userChoice = button1.textContent;
    evaluate();
    index++;
})
button2.addEventListener('click', () => {
    userChoice = button2.textContent;
    evaluate();
    index++;

})
button3.addEventListener('click', () => {
    userChoice = button3.textContent;
    evaluate();
    index++;

})
button4.addEventListener('click', () => {
    userChoice = button4.textContent;
    evaluate();
    index++;

})

Introduction();