let firstCard = 10;
let secondCard = 11;

// 1. Create a new array - cards - that contain firstCard and secondCard
let cards = [firstCard, secondCard];

let sum = firstCard + secondCard;

let hasBlackJack = false;

let isAlive = true;

let message = "";

let messageEl = document.getElementById("message-el");

let sumEl = document.getElementById("sum-el");

let cardsEl = document.getElementById("cards-el");


// Create a function, getRandomCard(), that always returns the number 5
function getRandomCard() {
  return 5;
}

// let sumEl = document.getElementById("sum-el") can be written
// as follows:
// let sumEl = document.querySelector("#sum-el")

function startGame() {
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  
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
  let card = 6;
  
  sum += card;
  
  cards.push(card)

  renderGame();
}