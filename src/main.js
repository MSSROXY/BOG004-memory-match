import { GenerateBoard, randomizeCards } from "./components/App.js";

document.querySelector(".screen-two").appendChild(GenerateBoard());

const screenOne = document.querySelector(".screen-one");
const screenTwo = document.querySelector(".screen-two");
const screenThree = document.querySelector(".screen-three");

screenOne.style.display = "none";

//PLAY BUTTON
const btnPlay = document.querySelector("#btn-play");
// screenTwo.style.display="none";
screenThree.style.display = "none";

btnPlay.addEventListener("click", () => {
  screenOne.style.display = "none";
  screenTwo.style.display = "block";
});

// PLAYER LIVES
const playerLivesCount = document.querySelector(".player-lives");
let playerLives = 6;
playerLivesCount.textContent = playerLives

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
  if (flippedCards.length === 2) {
    if (
      flippedCards[0].getAttribute("name") ===
      flippedCards[1].getAttribute("name")
    ) {
      console.log("MATCHHHHH");
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        card.style.pointerEvents = "none"
      });
    } else {
      console.log("WRONGGGG");
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        setTimeout(() => card.classList.remove("toggleCard"), 1000);
      });
      playerLives--;
      playerLivesCount.textContent= playerLives;
      if(playerLives ===0){
          setTimeout(() => restartGame(),1000)
      }
    }
  }
};

//RESTART 
const restartGame = () => {
    const allCards = document.querySelectorAll(".container-card");
    allCards.forEach(card =>{
        card.classList.remove("toggleCard")
        card.style.pointerEvents= "none";
    })
}