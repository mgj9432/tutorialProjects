let firstCard = 10;
let secondCard = 11;

let sum = firstCard + secondCard;

let hasBlackJack = false;

let isAlive = true;

let message = "";

// 2. Create a startGame() function. Move the conditional
// below ( line 15-27) inside the body of the function.

if (sum <= 20) {
  message = "Do you want to draw a new card?";
} else if (sum === 21) {
  message = "Woohoo! You've got Blackjack";
  hasBlackJack = true
} else {
  message = "You're out of the game!";
  isAlive = false;
}

// 3. Log it out

console.log(message);

// Another test
//Yet another tes line
