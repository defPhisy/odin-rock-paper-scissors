function pickRandomShape() {
  const handShapes = ["rock", "paper", "scissors"];
  let choice = handShapes[Math.floor(Math.random() * handShapes.length)];
  return choice;
}

function askUserShape() {
  let choice = prompt("Choose Rock, Paper or Scissors: ", "Rock").toLowerCase();
  return choice;
}

function processWinner(userChoice, computerChoice) {
  // Tie
  if (userChoice === computerChoice) {
    console.log(`Tie! Both have ${userChoice}.`);
    // User Wins
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`User wins: ${userChoice} beats ${computerChoice}`);
    // Computer Wins
  } else {
    console.log(`Computer wins: ${computerChoice} beats ${userChoice}.`);
  }
}

function askUserForGame() {
  let userChoice = prompt(
    "Do you want play another round of Rock, Paper, Scissors? Than type 'yes' or 'y'"
  ).toLowerCase();
  if (userChoice === "yes" || userChoice === "y") {
    playGame();
  }
}

function playGame() {
  let pcChoice = pickRandomShape();
  let userChoice = askUserShape();

  processWinner(userChoice, pcChoice);
  askUserForGame();
}

playGame();
