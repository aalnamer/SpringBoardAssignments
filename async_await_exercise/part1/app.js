console.log("test");

let url = "http://numbersapi.com";
let favNum = 7;
let favNumbers = [5, 6, 7];

async function getCardFact() {
  let res = await axios.get(`${url}/${favNum}?json`);
  let fact = res.data.text;
  console.log(fact);
}

async function getMultipleCardFacts() {
  let cardFacts = await Promise.all([
    axios.get(`${url}/1?json`),
    axios.get(`${url}/2?json`),
    axios.get(`${url}/3?json`),
  ]);

  console.log(`${cardFacts[0].data.text}`);
  console.log(`${cardFacts[1].data.text}`);
  console.log(`${cardFacts[2].data.text}`);
}

baseURL = "https://deckofcardsapi.com/api/deck";

let deck = {
  async init() {
    let res = await axios.get(`${baseURL}/new/`);
    this.deckID = res.data.deck_id;
    console.log(res);
  },
  async shuffle() {
    let res = await axios.get(`${baseURL}/${this.deckID}/shuffle/`);
    console.log(res);
  },
  async drawCard() {
    let res = await axios.get(`${baseURL}/${this.deckID}/draw/?count=1`);
    img = [];
    img = res.data.cards[0].image;
    remaining = [];
    remainingCard = res.data.remaining;
    remaining.push(remainingCard);
    console.log(res.data.remaining);
    console.log(res.data.cards[0].image);
  },
};

async function addCard() {
  let button = document.getElementById("button");
  let cardArea = document.getElementById("card-area");

  let deckData = await axios.get(`${baseURL}/new/shuffle/`);
  console.log(deckData);
  console.log(deckData.data.deck_id);

  button.onclick = async function () {
    let cardData = await axios.get(`${baseURL}/${deckData.data.deck_id}/draw/`);
    console.log(cardData);
    let cardSrc = cardData.data.cards[0].image;
    img = document.createElement("img");
    img.src = cardSrc;
    cardArea.append(img);
    if (cardData.data.remaining === 50)
      document.getElementById("button").remove();
  };
}

addCard();
