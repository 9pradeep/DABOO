// Global variables
const diceElements = Array.from(document.querySelectorAll('.dice'));
const scoreElement = document.getElementById('score');
const rollButton = document.getElementById('roll-button');


function calculateScore(rolls) {
  let score = 0;

  // Calculate the score based on the dice rolls
  // You need to implement the scoring rules of the Ferengi Game of Daboo here.

  // Example scoring logic (modify according to the game rules):
  for (const roll of rolls) {
    if (roll === 1) {
      score += 10;
    } else if (roll === 6) {
      score += 6;
    } else {
      score += roll;
    }
  }

  return score;
}

function rollDice() {
  // Generate random dice rolls
  const rolls = diceElements.map(() => Math.floor(Math.random() * 6) + 1);

  // Display the rolls on the dice elements
  for (let i = 0; i < diceElements.length; i++) {
    diceElements[i].textContent = rolls[i];
  }

  // Calculate and update the score
  const score = calculateScore(rolls);
  scoreElement.textContent = score;

  // Check win/lose conditions
  if (score >= 100) {
    alert('Congratulations! You won!');
    resetGame();
  } else if (rolls.includes(1)) {
    alert('Oops! You rolled a 1. Game over!');
    dabooAchieved();
    resetGame();
  }
}

// Function to reset the game
function resetGame() {
  // Reset dice rolls
  for (const diceElement of diceElements) {
    diceElement.textContent = '';
  }

  // Reset the score
  scoreElement.textContent = '0';
}

// Event listener for the "Roll Dice" button
rollButton.addEventListener('click', rollDice);

// Event listener for the "Enter" key
document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    rollDice();
  }
});
function playSoundEffect(soundFile, duration) {
  var audio = new Audio('sounds/' + soundFile);
  audio.play();

  // Stop the audio after the specified duration
  setTimeout(function() {
    audio.pause();
    audio.currentTime = 0; // Reset the audio to the beginning
  }, duration * 1000); // Convert duration to milliseconds
}


function dabooAchieved() {
  // Other code to handle the DABOO achievement

  // Play sound effect for DABOO achievement
  playSoundEffect('sound1.mp3',8);
}


