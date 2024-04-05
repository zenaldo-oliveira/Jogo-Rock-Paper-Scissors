const result = document.querySelector(".result");
const humanScore = document.querySelector("#human-score");
const machineScore = document.querySelector("#machine-score");

let humanScoreNumber = 0;
let machineScoreNumber = 0;

/*
    humanScoreNumber -> Camel Case
    GAME_OPTIONS     -> Snake Case
 */
// ENUMS
const GAME_OPTIONS = {
  ROCK: "rock",
  PAPER: "paper",
  SCISSORS: "scissors",
};

const playHuman = (humanChoice) => {
  playTheGame(humanChoice, playMachine());
};
const playMachine = () => {
  const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS];
  const randomNumber = Math.floor(Math.random() * 3);

  return choices[randomNumber];
};

const playTheGame = (human, machine) => {
  console.log("Humano: " + human + " Maquina: " + machine);

  if (human === machine) {
    result.innerHTML = "Deu empate";
  } else if (
    (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) ||
    (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) ||
    (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER)
  ) {
    humanScoreNumber++;
    humanScore.innerHTML = humanScoreNumber;
    result.innerHTML = "Você Ganhou!";
  } else {
    machineScoreNumber++;
    machineScore.innerHTML = machineScoreNumber;
    result.innerHTML = "Você perdeu para a Alexa!!!!";
  }
};
