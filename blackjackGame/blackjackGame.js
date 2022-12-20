let firstCard = 3;
let secondCard = 11;

let cards = [firstCard, secondCard];

let sum = firstCard + secondCard;

let hasBlackJack = false;

let isAlive = true;

let message = "";

let messageEl = document.getElementById("message-el");

let sumEl = document.getElementById("sum-el");

let cardsEl = document.getElementById("cards-el");

// let sumEl = document.getElementById("sum-el") can be written
// as follows:
// let sumEl = document.querySelector("#sum-el")

function startGame() {
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
     message = "Woohoo! You've got Blackjack";
     hasBlackJack = true;
  } else {
     message = "You're out of the game!";
     isAlive = false;
  }
  
  messageEl.textContent = message;
}


function newCard() {
  let card = 5;
  
  sum += card;
  
  renderGame();
}