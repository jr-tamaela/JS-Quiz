//TODO 1
const statement = document.getElementById("statement");
const optionButtons = document.querySelector("#options").children;
const explanation = document.getElementById("explanation");

//TODO 2
const fact = {
  statement: "Arrays are objects",
  answer: true,
  explanation: "Arrays are a kind of object with special properties.",
};

//TODO 7
const facts = [
  {
    statement: "Arrays are objects",
    answer: true,
    explanation: "Arrays are a kind of object with special properties.",
  },
  {
    statement: "Javascript was invented in 1995",
    answer: true,
    explanation:
      "Javascript was created by Brendan Eich @ Netscape. The first version was written in 10 days.",
  },
  {
    statement: "1 + 1 === 2",
    answer: true,
    explanation: "The plus operator gives the sum of two numbers",
  },
  {
    statement: "The HTML element in which you put JS is <javascript>",
    answer: false,
    explanation: "Javascript is put in a <script> tag",
  },
  {
    statement: "Javascript was invented in 1995",
    answer: true,
    explanation:
      "Javascript was created by Brendan Eich @ Netscape. The first version was written in 10 days.",
  },
];

//TODO 3
statement.textContent = fact.statement;

//TODO 4
const disable = (button) => {
  button.setAttribute("disabled", "");
};

const enable = (button) => button.removeAttribute("disabled");

//TODO 5
const isCorrect = (guessString) => {
  return guessString === fact.answer.toString();
};

//TODO 6
for (let button of optionButtons) {
  button.addEventListener("click", (event) => {
    console.log("clicked");

    // display the fact's explanation by setting the text of the explanation element.
    explanation.textContent = fact.explanation;

    // disable all the option buttons
    for (let disableButtons of optionButtons) {
      disable(disableButtons);
    }

    if (isCorrect(button.value)) {
      button.classList.add("correct");
    } else {
      button.classList.add("incorrect");
    }
  });
}
