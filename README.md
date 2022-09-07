# code-quiz

## About the Project
On becoming a full stack web developer, it's likely that we will have to take a coding assessment/quiz during the interview process of finding employment. I was asked to build a coding quiz that displays a functional timer when the user clicks on "start quiz", displays the user's final score at the end, and allows the user to input their initials. The user's initials are stored in their browser local storage as well as displayed on the page when "view high scores" link clicked.

## Building the Quiz
The entirety of this project was created from scratch to meet the following requirements:

- When the user is presented with the code quiz with a start button

- When the start button is clicked, the timer starts and a question is displayed on the page

- When the user answers a question, they are presented with the next question

- If an answer is incorrect, then time is subtracted from the clock

- When all questions are answered or the timer reaches 0, then the quiz is over

- When the quiz is over, then the user can save their initials and score

## Applied Skills
- DOM manipulation to target specific classes, creating elements and setting their attributes, appending the new elements on the page, and modifying the text content in different elements.

- Working with objects nested in an array

- Creating many separate functions that makes specific parts of the quiz functional. The functions are written outside of the main function and called upon to be executed.

- if/else statements to evaluate the user's answer choice with the correct condition applied whether the answer is correct or incorrect

- Using localStorage to store user intitals and their score. Since the user initials and score is set as an object, and localStorage can only take in strings; JSON.strinify was used. Then JSON.parse was used when pulling out information from localStorage to convert the string back into object notation.

- setInterval() was utilized to set up a timer for the quiz

- Many event listeners were used to react to user clicking on certain links/buttons.

## Deployed Project
https://vivianc11.github.io/code-quiz/




![image of code quiz](./Assets/Screen%20Shot%202022-09-07%20at%202.36.37%20PM.png)


### References
https://herewecode.io/blog/create-button-javascript/
https://www.geeksforgeeks.org/how-to-create-a-simple-javascript-quiz/
https://simplestepscode.com/javascript-quiz-tutorial/