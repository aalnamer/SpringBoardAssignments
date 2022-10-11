const gameContainer = document.getElementById("game");
let card1 = null;
let card2 = null;
let cardsFlipped = 0;
let noClicking = false;

const characters = [
  "./images-sources-for-mem-challenge/brian_family_new.jpeg",
  "./images-sources-for-mem-challenge/chris_family_new.jpeg",
  "./images-sources-for-mem-challenge/cleaveland_family.jpeg",
  "./images-sources-for-mem-challenge/Consuela_Family_New.jpeg",
  "./images-sources-for-mem-challenge/death_family.jpg",
  "./images-sources-for-mem-challenge/jereome_family.jpeg",
  "./images-sources-for-mem-challenge/joe_family.png",
  "./images-sources-for-mem-challenge/peter.jpeg",
  "./images-sources-for-mem-challenge/quagmire.jpeg",
  "./images-sources-for-mem-challenge/stewie_family_new.jpeg",
  "./images-sources-for-mem-challenge/brian_family_new.jpeg",
  "./images-sources-for-mem-challenge/chris_family_new.jpeg",
  "./images-sources-for-mem-challenge/cleaveland_family.jpeg",
  "./images-sources-for-mem-challenge/Consuela_Family_New.jpeg",
  "./images-sources-for-mem-challenge/death_family.jpg",
  "./images-sources-for-mem-challenge/jereome_family.jpeg",
  "./images-sources-for-mem-challenge/joe_family.png",
  "./images-sources-for-mem-challenge/peter.jpeg",
  "./images-sources-for-mem-challenge/quagmire.jpeg",
  "./images-sources-for-mem-challenge/stewie_family_new.jpeg",
];

function shuffle(array) {
  let counter = array.length;
  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter--;
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledCharacters = shuffle(characters);

function divsCharacters(charactersArray) {
  for (let character of charactersArray) {
    const newDiv = document.createElement("div");
    newDiv.classList.add(character);
    newDiv.style.backgroundSize = "100px";
    newDiv.addEventListener("click", cardClick);
    gameContainer.append(newDiv);
  }
}
function cardClick(e) {
  if (noClicking) return;
  if (e.target.classList.contains("flipped")) return;

  let currentCard = e.target;
  currentCard.style.backgroundImage = "url(" + currentCard.classList[0] + ")";
  console.log(currentCard.style.backgroundImage);
  console.log(currentCard.classList[0]);
  if (!card1 || !card2) {
    currentCard.classList.add("flipped");
    card1 = card1 || currentCard;
    card2 = currentCard === card1 ? null : currentCard;
  }

  if (card1 && card2) {
    noClicking = true;

    let gif1 = card1.className;
    let gif2 = card2.className;

    if (gif1 === gif2) {
      cardsFlipped += 2;
      card1.removeEventListener("click", cardClick);
      card2.removeEventListener("click", cardClick);
      card1 = null;
      card2 = null;
      noClicking = false;
    } else {
      setTimeout(function () {
        card1.style.backgroundImage = "";
        card2.style.backgroundImage = "";
        card1.classList.remove("flipped");
        card2.classList.remove("flipped");
        card1 = null;
        card2 = null;
        noClicking = false;
      }, 1000);
    }
  }

  if (cardsFlipped === characters.length) alert("game over!");
}
divsCharacters(shuffledCharacters);

// function e() {
//   const imageContainer = document.createElement("div");
//   const newImage = document.createElement("img");
//   newImage.src = characters[0];
//   newImage.classList.add("card");
//   imageContainer.appendChild(newImage);
//   gameContainer.appendChild(imageContainer);
// }
