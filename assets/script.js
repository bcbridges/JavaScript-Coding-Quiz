var startButton = document.querySelector("#start");
var instructions = document.querySelector(".instructions");
var mainDisplay = document.querySelector("#mainDisplay");
var answerChoice = document.querySelector("ol");
var secondsRemaining = document.querySelector("#seconds");

// Sets timer to stay at 75 seconds until the 'Start' button is pushed.
var timeLeft = 75;
secondsRemaining.textContent = timeLeft + " sec.";

// Object holding questions and their properties.
var questions = {
  question1: {
    prompt: "Question 1: DOM stands for ___ ___ ___.",
    answers: [
      "Data Oriented Model",
      "Docuent Outline Mode",
      "Document Object Model",
      "Data Object Model",
    ],
    solutionindex: 3,
  },
  // question2: ,
  // question3: ,
  // question4: ,
  // question5: ,
  // question6: ,
  // question7: ,
  // question8: ,
  // question9: ,
  // question10:
};

// Called when the game starts
startButton.addEventListener("click", function () {
  instructions.setAttribute("style", "display: none");
  startButton.setAttribute("style", "display: none");
  createQuestion();
  timerStart();
});

// Work on function for changing questions

// Used to append the questions
function createQuestion() {
  var prompt = document.createElement("p");
  var opt1 = document.createElement("li");
  var opt2 = document.createElement("li");
  var opt3 = document.createElement("li");
  var opt4 = document.createElement("li");

  prompt.textContent = questions.question1.prompt;
  opt1.textContent = questions.question1.answers[0];
  opt2.textContent = questions.question1.answers[1];
  opt3.textContent = questions.question1.answers[2];
  opt4.textContent = questions.question1.answers[3];

  opt1.setAttribute("id", "1");
  opt2.setAttribute("id", "2");
  opt3.setAttribute("id", "3");
  opt4.setAttribute("id", "4");

  mainDisplay.appendChild(prompt);
  mainDisplay.appendChild(opt1);
  mainDisplay.appendChild(opt2);
  mainDisplay.appendChild(opt3);
  mainDisplay.appendChild(opt4);
}

// Begins time countdown
function timerStart() {
  var timerInterval = setInterval(function () {
    timeLeft--;
    secondsRemaining.textContent = timeLeft + " sec.";

    if (timeLeft === 0) {
      clearInterval(timerInterval);
      // Should end game after this
    }
  }, 1000);
}

answerChoice.addEventListener("click", function (event) {
  var selectedAnswer = event.target.getAttribute("id");
  var correctAnswer = questions.question1.solutionindex;

  if (selectedAnswer == correctAnswer) {
    document.querySelector("h5").textContent = "Correct!";
  } else document.querySelector("h5").textContent = "Incorrect";
});
