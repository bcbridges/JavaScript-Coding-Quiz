var startButton = document.querySelector("#start");
var instructions = document.querySelector(".instructions");
var mainDisplay = document.querySelector("#mainDisplay");
var answerChoice = document.querySelector("ol");
var secondsRemaining = document.querySelector("#seconds");
var currentQuestion = 0;
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
  question2: {
    prompt: "Which of the following is selecting and id of 'code'?",
    answers: [
      'documnet.querySelector("#code"',
      'documnet.querySelector(".code")',
      'document.idSelector("code")',
      'document.idSelector("#code")',
    ],
    solutionindex: 1,
  },
  question3: {
    prompt: "Which of the following is selecting and id of 'q2'?",
    answers: [
      'documnet.querySelector("#code"',
      'documnet.querySelector(".code")',
      'document.idSelector("code")',
      'document.idSelector("#code")',
    ],
    solutionindex: 1,
  },
  question4: {
    prompt: "Which of the following is selecting and id of 'q3'?",
    answers: [
      'documnet.querySelector("#code"',
      'documnet.querySelector(".code")',
      'document.idSelector("code")',
      'document.idSelector("#code")',
    ],
    solutionindex: 1,
  },
  question5: {
    prompt: "Which of the following is selecting and id of 'q4'?",
    answers: [
      'documnet.querySelector("#code"',
      'documnet.querySelector(".code")',
      'document.idSelector("code")',
      'document.idSelector("#code")',
    ],
    solutionindex: 1,
  },
};

// Called when the game starts
startButton.addEventListener("click", function () {
  instructions.setAttribute("style", "display: none");
  startButton.setAttribute("style", "display: none");
  changeQuestion();
  createQuestion();
  timerStart();
});

// Changes the current question
function changeQuestion() {
  if (currentQuestion == 0) {
    currentQuestion = questions.question1;
  } else if (currentQuestion == questions.question1) {
    currentQuestion = questions.question2;
  } else if (currentQuestion == questions.question2) {
    currentQuestion = questions.question3;
  } else if (currentQuestion == questions.question3) {
    currentQuestion = questions.question4;
  } else if (currentQuestion == questions.question4) {
    currentQuestion = questions.question5;
  }
}

// Used to append the questions
function createQuestion() {
  var prompt = document.createElement("p");
  var opt1 = document.createElement("li");
  var opt2 = document.createElement("li");
  var opt3 = document.createElement("li");
  var opt4 = document.createElement("li");

  prompt.textContent = currentQuestion.prompt;
  opt1.textContent = currentQuestion.answers[0];
  opt2.textContent = currentQuestion.answers[1];
  opt3.textContent = currentQuestion.answers[2];
  opt4.textContent = currentQuestion.answers[3];

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
  var correctAnswer = currentQuestion.solutionindex;

  if (selectedAnswer == correctAnswer) {
    document.querySelector("h5").textContent = "Correct!";
  } else {
    timeLeft -= 20;
    document.querySelector("h5").textContent = "Incorrect";
  }
});
