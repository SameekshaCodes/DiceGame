// Utility: Generate a random number from 1 to 6
const rollDice = () => Math.floor(Math.random() * 6) + 1;

// DOM elements
const dice1Img = document.getElementById("dice1");
const dice2Img = document.getElementById("dice2");
const resultHeading = document.getElementById("result-heading");
const refreshBtn = document.getElementById("refresh-btn");

// Roll dice and update UI
function updateDiceGame() {
  const dice1 = rollDice();
  const dice2 = rollDice();

  // Update images and alt text
  dice1Img.src = `images/dice${dice1}.png`;
  dice1Img.alt = `Dice showing ${dice1}`;
  dice2Img.src = `images/dice${dice2}.png`;
  dice2Img.alt = `Dice showing ${dice2}`;

  // Show result
  if (dice1 > dice2) {
    resultHeading.textContent = "🚩 Player 1 Wins!";
  } else if (dice1 < dice2) {
    resultHeading.textContent = "Player 2 Wins! 🚩";
  } else {
    resultHeading.textContent = "🤝 It's a Draw!";
  }
}

// Initial roll on page load
window.addEventListener("load", updateDiceGame);

// Roll again on button click
refreshBtn.addEventListener("click", updateDiceGame);
