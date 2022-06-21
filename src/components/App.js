//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
// import pokemon from '../data/pokemon/pokemon.js';
// console.log(pokemon);
//
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);
//
import pokemon from "../data/pokemon/pokemon.js";

let data = pokemon.items;

export const randomizeCards = () => {data.sort(() => Math.random() - 0.5)}

export const GenerateBoard = () => {
  const board = document.createElement("div");
  board.className="board-cards"
  let cards = [];

  for (let j = 0; j < 2; j++) {
    for (let i = 0; i < data.length; i++) {

      cards.push(`
        <div class="container-card" id="${data[i].id}" name="${data[i].id}">
          <div class="front-card">
            <img src="${data[i].image}" alt="${data[i].id}"/>
          </div>
          <div class="back-card">
            <img src="../img/pokebola.png" alt="pokebola"/>
          </div>
        </div>`);
    }
  }
  randomizeCards();
  board.innerHTML = cards.join("");
  return board;
};
GenerateBoard();

