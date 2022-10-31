// Computer choice - using radnom function
function computerChoice() {
  let choice = ["paper", "rock", "scissors"];
  randomChoice = choice[Math.floor(Math.random() * choice.length)];
  return randomChoice;
}
// Player choice

console.log(computerChoice());
