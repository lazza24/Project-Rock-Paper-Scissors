// Computer choice - using radnom function

let playerWins = 0;
let compWins = 0;

function computerChoice() {
  let choice = ["Paper", "Rock", "Scissors"];
  randomChoice = choice[Math.floor(Math.random() * choice.length)];
  return randomChoice.toLowerCase();
}

// Player choice
function playerSelection() {
  let player = prompt("Paper, Scissors or Rock: ").toLowerCase();
  return player;
}

// Play round function
function playRound(compChoice, playerChoice) {
  if (playerChoice === compChoice) {
    return `Draw, ${compChoice} is same as ${playerChoice}!`;
  } else if (
    (playerChoice === "paper" && compChoice === "rock") ||
    (playerChoice === "rock" && compChoice === "scissors") ||
    (playerChoice === "scissor" && compChoice === "paper")
  ) {
    playerWins += 1;
    return `You won. ${playerChoice} beats ${compChoice} `;
  } else {
    compWins += 1;
    return `You lose ${compChoice} beats ${playerChoice}`;
  }
}

// const playerChoice = playerSelection();
// const compChoice = computerChoice();

function game() {
  for (i = 1; i <= 5; i++) {
    console.log(`Round ${i}\n`);
    console.log(playRound(computerChoice(), playerSelection()));
    console.log(`Player:${playerWins}
Comp:${compWins}`);
  }
}

game();

if (playerWins > compWins) {
  console.log(`Congrats! You won`);
} else if (compWins > playerWins) {
  console.log(`Robot won! Sorry Human!`);
} else {
  console.log(`No one won! Pffff`);
}
