// variables targeted in HTML
var introCard = document.querySelector(".intro-card");
var h1 = document.querySelector(".h1");
var about = document.querySelector(".about");
var start = document.querySelector(".start-button");
var timerDisplay = document.querySelector(".timer-display");
var initials = document.querySelector(".initials");
var questionInfo = document.querySelector(".question-info");
var answers = document.querySelector(".answers");
var eval = document.querySelector('.eval');
var clearScores = document.querySelector('.clear-high-score-button');
var goBack = document.querySelector('.go-back-button');
var viewHighScore = document.querySelector('.view-high-score');

// Creating needed elements, some with certain attributes, and setting them to a variable
// Creating a start button
var startBtn = document.createElement('button');
// Creating li's for the answer choices
var option1Li = document.createElement('li');
var option2Li = document.createElement('li');
var option3Li = document.createElement('li');
var option4Li = document.createElement('li');
// Creating answer buttons 
var button1 = document.createElement('button');
    button1.setAttribute('class', 'answer-buttons');
var button2 = document.createElement('button');
    button2.setAttribute('class', 'answer-buttons');
var button3 = document.createElement('button');
    button3.setAttribute('class', 'answer-buttons');
var button4 = document.createElement('button');
    button4.setAttribute('class', 'answer-buttons');
// Creating input for high scores
var initialInput = document.createElement('input');
    initialInput.setAttribute('type', 'text');
    initialInput.setAttribute('name', 'initials');
    initialInput.setAttribute('id', 'initial-input');
// Creating submit button to submit input
var submitBtn = document.createElement('button');
    submitBtn.setAttribute('class', 'submit-button')
    submitBtn.textContent = 'Submit';
// Creating a button that clear scores
var clearBtn = document.createElement('button');
    clearBtn.textContent = "Clear High Scores"
// Creating a go back button that returns the user to the intro card
var goBackBtn = document.createElement('button');
    goBackBtn.textContent = "Go Back";

// Creating needed variables
var timer;
var timerCount;
var userChoice = "";
var userScore;
var index = 0;
var enteredInitials;
var highScoreList;
var highScoreListItems;
var newScore;
var totalHighScores = [];
var fromStorage = [];
// Intro card content
var introCard = [
    {title: "Coding Quiz Challenge",
    about: "Please answer the following 3 coding questions to the best of your abilities. You will have 60 seconds to complete the 3 questions. Good Luck!!"
    }
]
// Quiz questions content
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
    timerCount = 60;
    userScore = 0;
    index = 0;
    timerDisplay.textContent = 60;
    h1.textContent = introCard[0].title;
    about.textContent = introCard[0].about;
    startBtn.textContent = "Start Quiz";
    start.appendChild(startBtn);  
}

// Generating the quiz
function startQuiz() {
    h1.textContent = "";
    about.textContent = "";
    start.removeChild(startBtn);
    viewHighScore.textContent = "";
    // display first question
    displayQ();
    startTimer();
}

// Function to display questions one at a time
function displayQ() {
    questionInfo.textContent = codingQuestions[index].question;
    // Appending all the li's under the ol
    answers.appendChild(option1Li);
    answers.appendChild(option2Li);
    answers.appendChild(option3Li);
    answers.appendChild(option4Li);
    // Appending all the buttons in the li's
    option1Li.appendChild(button1);
    option2Li.appendChild(button2);
    option3Li.appendChild(button3);
    option4Li.appendChild(button4);
    // Filling in the buttons with the appropraite answer choices
    button1.textContent = codingQuestions[index].answers.a;
    button2.textContent = codingQuestions[index].answers.b;
    button3.textContent = codingQuestions[index].answers.c;
    button4.textContent = codingQuestions[index].answers.d;
    
}

// Function to evaluate answer choice
function evaluate() {
    if (userChoice === codingQuestions[index].correctAnswer) {
        userScore = userScore + 33;
        eval.textContent = "Correct!😊";
    } else {
        eval.textContent = "Incorrect🙃";
        // If the wrong answer is chosen, then 10 seconds is taken away
        if (eval.textContent === "Incorrect🙃") {
        timerCount = timerCount - 10;
        timerDisplay.textContent = timerCount;
    }
    return userScore;
}}

// Function to display the final score card
function finalCard() {
    // Clearing out the questions
    questionInfo.textContent = "";
    answers.removeChild(option1Li);
    answers.removeChild(option2Li);
    answers.removeChild(option3Li);
    answers.removeChild(option4Li);
    // Final card content
    h1.textContent = "🎉You're Done!!🎉";
    about.textContent = `Final Score: ${userScore}`;
    initials.textContent = "Enter your initials to be placed on the scoreboard: "
    initials.appendChild(initialInput);
    initials.appendChild(submitBtn);
    
}

//Function to display the high scores
function displayHighScore () {
    h1.textContent = "High Scores";
    about.textContent = "";
    eval.textContent = "";
    initials.textContent = "";
    // Creating ol element to list high scores
    highScoreList = document.createElement('ol');
    about.appendChild(highScoreList);
    // Getting player information with inititals and score from localStorage
    fromStorage = JSON.parse(localStorage.getItem('player'))
    for (let i = 0; i < fromStorage.length; i++){
        highScoreListItems = document.createElement('li');
        highScoreListItems.textContent = `${fromStorage[i].enteredInitials} : ${fromStorage[i].userScore}`;
        highScoreList.appendChild(highScoreListItems);
    }
    goBack.appendChild(goBackBtn);
    clearScores.appendChild(clearBtn);
}

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
viewHighScore.addEventListener('click', () => {
    displayHighScore();
    start.removeChild(startBtn);
})

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
// Entered initials and userScore is stored as an object in an array under the variable newScore
// newScore is then stringified to be stored in the localStorage
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    enteredInitials = document.getElementById('initial-input').value;
    newScore = {enteredInitials, userScore};
    totalHighScores.push(newScore);
    localStorage.setItem('player', JSON.stringify(totalHighScores));
    displayHighScore();
})

goBackBtn.addEventListener('click', () => {
    goBack.removeChild(goBackBtn);
    clearScores.removeChild(clearBtn);
    viewHighScore.textContent = "View High Scores"
    Introduction();
})
// Clearing the high scores
clearBtn.addEventListener('click', () => {
    localStorage.clear();
    totalHighScores = [];
    highScoreList.textContent = "All Scores Cleared!"

})
// When the page loads
Introduction();