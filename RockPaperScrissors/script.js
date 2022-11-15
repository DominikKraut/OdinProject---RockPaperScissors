const getComputerChoice = () => {
  let choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * 3)];
};

const singleRound = (playerSelection, computerSelection) => {
  computerSelection = getComputerChoice();
  let player = playerSelection.toLowerCase();
  if (player == computerSelection.toLowerCase()) {
    return "It is a tie!" + " " + "The computer has chosen " + computerSelection;
  }
  if (player == "rock" && computerSelection == "Paper") {
    return "You lose!" + " " + "The computer has chosen " + computerSelection;
  }
  if (player == "rock" && computerSelection == "Scissors") {
    return "You win!" + "The computer has chosen " + computerSelection;
  }
  if (player == "paper" && computerSelection == "Scissors") {
    return "You lose!" + "The computer has chosen " + computerSelection;
  }
  if (player == "paper" && computerSelection == "Rock") {
    return "You win!" + "The computer has chosen " + computerSelection;
  }
  if (player == "scissors" && computerSelection == "Rock") {
    return "You lose!" + "The computer has chosen " + computerSelection;
  }
  if (player == "scissors" && computerSelection == "Paper") {
    return "You win!" + "The computer has chosen " + computerSelection;
  }
};

const game = () => {
  let sign = prompt("What's your sign?");
  for (let i = 0; i < 5; i++) {
    console.log(singleRound(sign));
  }
};

game();
