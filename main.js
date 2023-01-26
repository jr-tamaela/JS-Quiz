const facts = [
  {
    statement: "Arrays are objects",
    answer: true,
    explanation: "Arrays are a kind of object with special properties.",
  },
  {
    statement: "Javascript was invented in 1995.",
    answer: true,
    explanation:
      "Javascript was created by Brendan Eich @ Netscape. The first version was written in 10 days.",
  },
  {
    statement: "1 + 1 === 2",
    answer: true,
    explanation: "The plus operator gives the sum of two numbers.",
  },
  {
    statement: "The HTML element in which you put JS is <javascript>.",
    answer: false,
    explanation: "Javascript is put in a <script> tag",
  },
  {
    statement: "An external JavaScript file must contain the <script> tag.",
    answer: false,
    explanation:
      "after refering to an external JavaScript file it is not needed to use the <script> tag.",
  },
];

//Functions to show/hide, enable/disable
function hide(element) {
  element.classList.add("hidden");
}

function show(element) {
  element.classList.remove("hidden");
}

function disable(button) {
  button.setAttribute("disabled", "");
}

function enable(button) {
  button.removeAttribute("disabled");
}

let correct = 0;
let completed = 0;

let fact;

const explanation = document.getElementById("explanation");
const nextButton = document.getElementById("next-question");
const optionButtons = document.getElementById("options").children;

function getNextFact() {
  fact = facts.shift(); // get the first fact in our array (shortening the array)

  document.getElementById("statement").textContent = fact.statement;
  hide(explanation);

  // Loop over all option buttons, make sure all classes are removed
  // and enable the buttons.
  for (let option of optionButtons) {
    option.classList.remove("correct");
    option.classList.remove("incorrect");
    enable(option);
  }

  // disable next-question button
  disable(nextButton);
}

nextButton.addEventListener("click", getNextFact);

for (let option of optionButtons) {
  option.addEventListener("click", (e) => {
    // upon click, disable all the option buttons
    for (let button of optionButtons) {
      disable(button);
    }

    // enable 'next-question' button
    if (facts.length > 0) {
      enable(nextButton);
    } else {
      nextButton.textContent = "No more questions..";
    }

    const guess = e.target.value;
    if (guess === fact.answer) {
      e.target.classList.add("correct");
      correct += 1;
    } else {
      e.target.classList.add("incorrect");
    }

    // display the fact's explanation by setting the text of the explanation element.
    explanation.textContent = fact.explanation;
    show(explanation);

    // update score
    completed += 1;
    document.getElementById("correct").textContent = correct;
    document.getElementById("completed").textContent = completed;
  });
}

getNextFact();
