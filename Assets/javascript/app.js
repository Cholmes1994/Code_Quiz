
var questions = [
    {
        title: "Which is a library commonly used in Javascript?",
        choices: ["Bootstrap", "HTML", "jQuery", "CSS"],
        answer: "answer from choices"
    },
    {
        title: "Which of these is NOT a semantic tag?",
        choices: ["<div>", "<aside>", "<section>", "<article>"],
        answer: "answer from choices"
    },
    {
        title: "Which of these is a common framework for CSS?",
        choices: ["jQuery", "Python", "Bootstrap", "React"],
        answer: "answer from choices"
    },
    {
        title: "What does DOM mean?",
        choices: ["Document Object Model", "Digital Order Mover", "Document Open Master", "Document Order Machine"],
        answer: "answer from choices"
    },
    {
        title: "Which option is NOT a way a variable can be created?",
        choices: ["const", "var", "let", "put"],
        answer: "answer from choices"
    }
];
//Hook Elements from the HTML
//Hook container element
var containerEl = document.querySelector(".container");
//Hook timer element
var timerDisplay = document.querySelector(".timer");

//Create dynamic elements
//Create h1 to show starting heading
var startText = document.createElement("h1");
//Create button to start quiz
var startBtn = document.createElement("button");
//Creat P tag to display question
var questionText = document.createElement("p");

//Declare global variables
//Variable to store timer number
var timer = 75;
//Variable to store current index
var index = 0;

//**FUNCTIONS**
//Function that loads content when page first opens
function openingPage() {
    //Add text to Header
    startText.textContent = "Welcome to the Quiz!";
    //Add text to Button
    startBtn.textContent = "Start Quiz"
    //Append text to Container
    containerEl.appendChild(startText);
    //Append button to Container
    containerEl.appendChild(startBtn);
}
//Function that shows the question and starts the timer
function startQuiz() {
    //Show timer funtion
    showTimer();
    //Call next question function
    nextQuestion();
}

//Function that handles the timer
function showTimer() {
    //Display timer to screen
    timerDisplay.textContent = timer;
    //Create setInterval and store it to a variable
    var timeInterval = setInterval(function () {
        //Decrease timer by 1
        timer--;
        // Display timer to screen
        timerDisplay.textContent = timer;
        if (timer === 0) {
            clearInterval(timeInterval)
        }
    }, 1000)


}
//Function that handles and displays the next question
function nextQuestion() {
    //Declare a variable  to store current question. Assign the current question
    var currentQuestion = questions[index];
    //Empty container element
    containerEl.textContent = "";
    //Add current question title to the question display variable
    questionText.textContent = currentQuestion.title;
    //Append the question display variable to the container
    containerEl.appendChild(questionText);
    //Create a div element to wrap the "choices"
    var answersDiv = document.createElement("div");
//Create a for loop
for (let i = 0; i < currentQuestion.choices.length; i++) {
    //Create button elements for each choice
    var answerBtn = document.createElement("button");
    //Add a class to each button to be used with the even listener
    answerBtn.classList.add("choiceBtn");
    //Add text to each button from question choices
    answerBtn.textContent = currentQuestion.choices[i];
    //Append buttons to the div element created to wrap choices
    answersDiv.appendChild(answerBtn);
    
}

//Append div element to the container
containerEl.appendChild(answersDiv);

};

//Function to check the answer and display the following question
function checkAnswer(event){
    //If event.target.matches(--Choice button class--)
    if(event.target.matches(".choiceBtn")){
    //Logic to check for right answer
    //Increase index by 1
    index++;
    //Show next question
    nextQuestion()
    
}


}

//Add event listener to start quiz
startBtn.addEventListener("click", startQuiz);
//Add event listener to choice button
document.addEventListener("click", checkAnswer);
//Call function to show opening page
openingPage()
