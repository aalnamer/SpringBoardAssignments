url = "https://deckofcardsapi.com/api/deck";

// axios.get(`${url}/new/draw`).then((res) => {
//   console.log(res.data);
//   data = res.data;
//   let { suit, value } = data.cards[0];
//   console.log(`${value} of ${suit}`);
// });

// let cards = [];
// let deckIdData = [];

// let first = axios
//   .get(`${url}/new/draw`)
//   .then((res) => {
//     firstData = res.data;
//     deckId = firstData.deck_id;
//     deckIdData.push(deckId);
//     let { suit, value } = firstData.cards[0];
//     let cardOne = `${value} of ${suit}`;
//     cards.push(cardOne);
//   })
//   .then((res) => {
//     axios.get(`${url}/${deckId}/draw/`).then((res) => {
//       secondData = res.data;
//       let { suit, value } = secondData.cards[0];
//       let cardTwo = `${value} of ${suit}`;
//       cards.push(cardTwo);
//       console.log("Success!", cards);
//     });
//   });

async function addCard() {
  let button = document.getElementById("button");
  let cardArea = document.getElementById("card-area");

  let deck = axios.get(`${url}/new/shuffle/`).then((res) => {
    deckData = res.data;
    console.log(deckData);
  });
  button.onclick = async function () {
    card = axios.get(`${url}/${deckData.deck_id}/draw/`).then((res) => {
      data = res.data;
      cardImgSrc = data.cards[0].image;
      img = document.createElement("img");
      img.src = cardImgSrc;
      cardArea.append(img);
      if (data.remaining === 0) document.getElementById("button").remove();
    });
  };
}

addCard();
