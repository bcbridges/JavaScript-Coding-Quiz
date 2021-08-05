var startButton = document.querySelector("#start");
var instructions = document.querySelector(".instructions");
var mainDisplay = document.querySelector("#mainDisplay");
var answerChoice = document.querySelector("ol");
var secondsRemaining = document.querySelector("#seconds");
var leaderBoard = document.querySelector("#highScore");
var currentQuestion = 0;
var score = 0;
// Sets timer to stay at 75 seconds until the 'Start' button is pushed.
var timeLeft = 60;
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
    prompt: "Question 2: Which of the following is selecting an id of 'code'?",
    answers: [
      'documnet.querySelector("#code")',
      'documnet.querySelector(".code")',
      'document.idSelector("code")',
      'document.idSelector("#code")',
    ],
    solutionindex: 1,
  },
  question3: {
    prompt:
      "Question 3: Which of the following will update the displayed text of the variable 'cow'?",
    answers: [
      'cow.textUpdate("Hello World")',
      'cow.textContent = "Hello World"',
      'cow.textContent("Hello World")',
      'cow.insertText = "Hello World"',
    ],
    solutionindex: 2,
  },
  question4: {
    prompt: "Question 4: Which of the following is NOT an arithmetic operator?",
    answers: ["*", "++", "-", "="],
    solutionindex: 4,
  },
  question5: {
    prompt:
      "Question 5: 'Apples' is what index number in this array? ['Oranges', 'Apples', 'Pears']",
    answers: ["0", "1", "2", "3"],
    solutionindex: 2,
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
  } else if (currentQuestion == questions.question5) {
    currentQuestion = "end";
    endGame();
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

  prompt.setAttribute("id", "prompt");
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

// Used to change the values of the questions after submit
function updateQuestion() {
  if (currentQuestion == "end") {
  } else {
    var prompt = document.getElementById("prompt");
    var opt1 = document.getElementById("1");
    var opt2 = document.getElementById("2");
    var opt3 = document.getElementById("3");
    var opt4 = document.getElementById("4");

    prompt.textContent = currentQuestion.prompt;
    opt1.textContent = currentQuestion.answers[0];
    opt2.textContent = currentQuestion.answers[1];
    opt3.textContent = currentQuestion.answers[2];
    opt4.textContent = currentQuestion.answers[3];
  }
}

// Begins time countdown
function timerStart() {
  var timerInterval = setInterval(function () {
    timeLeft--;
    secondsRemaining.textContent = timeLeft + " sec.";

    if (timeLeft <= 0 && currentQuestion != "end") {
      endGame();
      clearInterval(timerInterval);
    } else if (timeLeft >= 0 && currentQuestion == "end") {
      clearInterval(timerInterval);
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

  changeQuestion();
  updateQuestion();
  setTimeout(function () {
    document.querySelector("h5").textContent = "";
  }, 800);
});

function endGame() {
  var prompt = document.getElementById("prompt");
  var opt1 = document.getElementById("1");
  var opt2 = document.getElementById("2");
  var opt3 = document.getElementById("3");
  var opt4 = document.getElementById("4");

  prompt.setAttribute("style", "display: none");
  opt1.setAttribute("style", "display: none");
  opt2.setAttribute("style", "display: none");
  opt3.setAttribute("style", "display: none");
  opt4.setAttribute("style", "display: none");
  document.querySelector("h5").setAttribute("style", "display: none");

  score = timeLeft;
  var endMessage = document.createElement("h4");
  endMessage.textContent =
    "Thanks for playing, your score was " +
    score +
    ". Please enter your initials for the high scores board.";
  mainDisplay.appendChild(endMessage);

  var initials = document.createElement("input");
  initials.setAttribute("placeholder", "Enter initials here");
  form.appendChild(initials);

  var enter = document.createElement("input");
  enter.setAttribute("type", "submit");
  form.appendChild(enter);
}

var form = document.querySelector("form");

var stats = {
  initials: [],
  score: [],
};

form.addEventListener("submit", function (event) {
  var storedStats = JSON.parse(localStorage.getItem("highScores"));
  console.log(storedStats);

  if (storedStats === null) {
    console.log("false");
  } else {
    stats.initials = storedStats.initials;
    stats.score = storedStats.score;
  }

  stats.initials.push(document.querySelector("input").value.trim());
  stats.score.push(score);

  localStorage.setItem("highScores", JSON.stringify(stats));

  console.log(storedStats);
  location.reload();
});

var scoreItem;
leaderBoard.addEventListener("click", function () {
  var storedStats = JSON.parse(localStorage.getItem("highScores"));
  console.log(storedStats);
  console.log(storedStats.score[3]);

  instructions.setAttribute("style", "display: none");
  startButton.setAttribute("style", "display: none");

  for (var i = 0; i < 9; i++) {
    if (storedStats.score[i] == null) {
    } else {
      scoreItem = document.createElement("li");
      scoreItem.textContent =
        storedStats.initials[i] + " --- " + storedStats.score[i];
      mainDisplay.appendChild(scoreItem);
    }
  }

  backToGameButton = document.getElementById("backToGame");
  backToGameButton.textContent = "Back to game";
});

backToGameButton = document.getElementById("backToGame");

backToGameButton.addEventListener("click", function () {
  location.reload();
});
