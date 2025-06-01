const userScoreVal = document.getElementById("userScoreVal");
const compScoreVal = document.getElementById("compScoreVal");
const resultUserStat = document.getElementById("result-user-stat");
const resultCompStat = document.getElementById("result-comp-stat");
const resultFinalStat = document.getElementById("result-final-stat");

let compScore = 0;
let userScore = 0;

const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissor = document.getElementById("s");

const choice = document.querySelectorAll(".choice");

let userChoice = null;
let compChoice = null;

const computerChoice = () => {
  const compRandom = Math.floor(Math.random() * 3) + 1;
  let compMsg;

  if (compRandom === 1) {
    compMsg = "Computer: Rock";
    resultCompStat.innerHTML = compMsg;
    return (compChoice = "r");
  } else if (compRandom === 2) {
    compMsg = "Computer: Paper";
    resultCompStat.innerHTML = compMsg;
    return (compChoice = "p");
  } else if (compRandom === 3) {
    compMsg = "Computer: Scissor";
    resultCompStat.innerHTML = compMsg;
    return (compChoice = "s");
  }
};

const computerWon = () => {
  compScoreVal.innerText = Number(compScoreVal.innerText) + 1;
  return "Computer Won";
};
const userWon = () => {
  userScoreVal.innerText = Number(userScoreVal.innerText) + 1;
  return "User Won";
};