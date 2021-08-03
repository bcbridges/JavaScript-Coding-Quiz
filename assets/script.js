var startButton = document.querySelector("#start");
var instructions = document.querySelector(".instructions");
var mainDisplay = document.querySelector("#mainDisplay");

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

startButton.addEventListener("click", function () {
  instructions.setAttribute("style", "display: none");
  startButton.setAttribute("style", "display: none");
  createQuestion();
});

function createQuestion() {
  var prompt = document.createElement("p");
  var opt1 = document.createElement("input");
  var opt2 = document.createElement("input");
  var opt3 = document.createElement("input");
  var opt4 = document.createElement("input");
  var lab1 = document.createElement("label");
  var lab2 = document.createElement("label");
  var lab3 = document.createElement("label");
  var lab4 = document.createElement("label");

  prompt.textContent = questions.question1.prompt;
  lab1.textContent = questions.question1.answers[0];
  lab2.textContent = questions.question1.answers[1];
  lab3.textContent = questions.question1.answers[2];
  lab4.textContent = questions.question1.answers[3];

  opt1.setAttribute("type", "radio");
  opt2.setAttribute("type", "radio");
  opt3.setAttribute("type", "radio");
  opt4.setAttribute("type", "radio");

  opt1.setAttribute("id", "1");
  opt2.setAttribute("id", "2");
  opt3.setAttribute("id", "3");
  opt4.setAttribute("id", "4");

  opt1.setAttribute("name", "option");
  opt2.setAttribute("name", "option");
  opt3.setAttribute("name", "option");
  opt4.setAttribute("name", "option");

  lab1.setAttribute("for", "1");
  lab2.setAttribute("for", "2");
  lab3.setAttribute("for", "3");
  lab4.setAttribute("for", "4");

  mainDisplay.appendChild(prompt);
  mainDisplay.appendChild(opt1);
  mainDisplay.appendChild(lab1);
  mainDisplay.appendChild(opt2);
  mainDisplay.appendChild(lab2);
  mainDisplay.appendChild(opt3);
  mainDisplay.appendChild(lab3);
  mainDisplay.appendChild(opt4);
  mainDisplay.appendChild(lab4);
}
