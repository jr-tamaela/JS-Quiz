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

//TODO 3
statement.textContent = fact.statement;

//TODO 4
const disable = (button) => {
  button.setAttribute("disabled", "");
};

const enable = (button) => button.removeAttribute("disabled");
