let player = {
   name: "Henry",
   chips: 120
}
let cards = []
let message = ""
isAlive = false;
haveBlackjack = false;
let sumEl = document.getElementById("sum")
let messageEl = document.getElementById("message-el")
let cardEl = document.getElementById("cards")
let playerEl = document.getElementById("player-sum")

playerEl.textContent = player.name + ":  $" + player.chips

function getRandomCard() {
   let randomnumber = Math.floor(Math.random() * 13) + 1
   if( randomnumber >= 11){
      return 10
   }else if( randomnumber  === 1){
      return 11
   }else{
      return randomnumber
   }
  
  
}



function startGame() {
   isAlive = true
   let firstCard = getRandomCard();
   let secondCard = getRandomCard();
   cards = [firstCard, secondCard];
   sum = firstCard + secondCard;

   renderGame()
}
function renderGame() {
 
   cardEl.textContent = "cards: " 
   for(let i = 0; i < cards.length; i++) {
      cardEl.textContent += cards[i] + " "
   }
   if( sum < 21){
      message = "draw another card"

   }else if (sum === 21){
      message = "you have blackjack"
      haveBlackjack = true
   }else{
      message = "you are out of the game"
      isAlive = false
   }
   sumEl.textContent = "sum: " + sum
   
   messageEl.textContent = message
}


function newCard() {

   if (isAlive === true && haveBlackjack === false) {
      let thirdCard = getRandomCard();
      sum += thirdCard;
   
      cards.push(thirdCard)
      renderGame()
   }else{
      message = "You are out of the game"
   }
   
}

