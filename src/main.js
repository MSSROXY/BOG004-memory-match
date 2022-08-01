import { GenerateBoard } from "./components/App.js";

document.querySelector(".screen-two").appendChild(GenerateBoard());

const screenOne = document.querySelector(".screen-one");
const screenTwo = document.querySelector(".screen-two");
const modalLose = document.querySelector(".modal-lose");
const modalWin = document.querySelector(".modal-win");
const allCards = document.querySelectorAll(".container-card");

//PLAY BUTTON
const btnPlay = document.querySelector("#btn-play");
screenTwo.style.display = "none";
modalLose.style.display = "none";
modalWin.style.display = "none";

btnPlay.addEventListener("click", () => {
  screenOne.style.display = "none";
  screenTwo.style.display = "flex";
  allCards.forEach((card) => {
    card.style.pointerEvents="none"
    setTimeout(() => card.classList.add("toggleCard"), 500);
    setTimeout(() => card.classList.remove("toggleCard"), 5000);
    setTimeout(() => card.style.pointerEvents="all",5500)
  });
});

// PLAYER LIVES
const playerLivesCount = document.querySelector(".player-lives");
let playerLives = 6;
playerLivesCount.textContent = playerLives;

//FLIP EFFECT
//Usamos selector para todas las tarjetas que tienen la clase "container-card"
//usamos un loop for each, recordando que son varios 'container-card'
document.querySelectorAll(".container-card").forEach((card) => {
  card.addEventListener("click", (e) => {
    card.classList.toggle("toggleCard");
    checkCards(e);
  });
});

//CHECK CARDS
const checkCards = (e) => {
  const clickedCard = e.target;
  clickedCard.classList.add("flipped");
  const flippedCards = document.querySelectorAll(".flipped");
  const toggleCards = document.querySelectorAll(".toggleCard");
  if (flippedCards.length === 2) {
    if (
      flippedCards[0].getAttribute("name") ===
      flippedCards[1].getAttribute("name")
    ) {
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        card.style.pointerEvents = "none";
      });
    } else {
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        setTimeout(() => card.classList.remove("toggleCard"), 1000);
      });
      playerLives--;
      playerLivesCount.textContent = playerLives;
      if (playerLives === 0) {
        setTimeout(() => alertLose(), 1000);
      }
    }
  }
  if (toggleCards.length === 18) {
    setTimeout(() => modalWin.style.display = "flex", 1000)
  }
};

//RESTART
const alertLose = () => {
  allCards.forEach((card) => {
    card.classList.remove("toggleCard");
    card.style.pointerEvents = "none";
  });
  modalLose.style.display = "flex";
};
const restartGame = document.querySelector(".play-again");
restartGame.addEventListener("click", () => {
  window.location.reload();
});
const playAgain = document.querySelector(".play-again-win");
playAgain.addEventListener("click", () => {
  window.location.reload();
})