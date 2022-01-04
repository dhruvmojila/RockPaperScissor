let choice = ["rock", "paper", "scissor"];

var rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");
let gameStatus = document.getElementById("gameStatus");
let container = document.querySelector(".container");
let btn = document.querySelector(".btn");

let reset = () => {
  let shawResult = `<img src="img/${choice[0]}.png" alt="" class="sign" id="${choice[0]}" onclick="rockFun()"/><img src="img/${choice[1]}.png" alt="" class="sign" id="${choice[1]}" onclick="paperFun()"/>
    <img src="img/${choice[2]}.png" alt="" class="sign" id="${choice[2]}" onclick="scissorFun()"/>`;
  container.innerHTML = shawResult;
  gameStatus.innerHTML = "";
  btn.style.visibility = "hidden";
};

let rockFun = function (event) {
  let userChoice = document.getElementById("rock").attributes.id.value;
  let compChoice = computerChoice();
  let result = checkWinner(userChoice, compChoice);
  result = `Compture Choice : ${compChoice} <br>Your Choice : ${userChoice}<br>${result}`;

  let shawResult = `<img src="img/${userChoice}.png" alt="" class="sign" id="${userChoice}" /><img src="img/${compChoice}.png" alt="" class="sign" id="${compChoice}" />`;

  container.innerHTML = shawResult;
  gameStatus.innerHTML = result;
  btn.style.visibility = "visible";
};

let paperFun = (event) => {
  let userChoice = document.getElementById("paper").attributes.id.value;
  let compChoice = computerChoice();
  let result = checkWinner(userChoice, compChoice);
  result = `Compture Choice : ${compChoice} <br>Your Choice : ${userChoice}<br>${result}`;
  let shawResult = `<img src="img/${userChoice}.png" alt="" class="sign" id="${userChoice}" /><img src="img/${compChoice}.png" alt="" class="sign" id="${compChoice}" />`;
  container.innerHTML = shawResult;
  gameStatus.innerHTML = result;
  btn.style.visibility = "visible";
};

let scissorFun = (event) => {
  let userChoice = scissor.attributes.id.value;
  let compChoice = computerChoice();
  let result = checkWinner(userChoice, compChoice);
  result = `Compture Choice : ${compChoice} <br>Your Choice : ${userChoice}<br>${result}`;
  let shawResult = `<img src="img/${userChoice}.png" alt="" class="sign" id="${userChoice}" /><img src="img/${compChoice}.png" alt="" class="sign" id="${compChoice}" />`;
  container.innerHTML = shawResult;
  gameStatus.innerHTML = result;
  btn.style.visibility = "visible";
};

let randomChoice = () => {
  return Math.floor(Math.random() * 3);
};

let computerChoice = () => {
  compSign = "";
  compSign = choice[randomChoice()];
  return compSign;
};

let checkWinner = (userChoice, compChoice) => {
  if (userChoice === "rock") {
    if (compChoice === "scissor") {
      return "You Won!";
    } else if (compChoice === "paper") {
      return "You Lost!";
    } else {
      return "Draw!";
    }
  } else if (userChoice === "paper") {
    if (compChoice === "scissor") {
      return "You Lost!";
    } else if (compChoice === "paper") {
      return "Draw!";
    } else {
      return "You Won!";
    }
  } else {
    if (compChoice === "scissor") {
      return "Draw!";
    } else if (compChoice === "paper") {
      return "You Won!";
    } else {
      return "You Lost!";
    }
  }
};
