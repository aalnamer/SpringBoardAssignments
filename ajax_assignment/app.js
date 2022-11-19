console.log("Let's get this party started!");

const gifArea = document.getElementById("gifArea");
const searchInput = document.getElementById("search");

function addGif(res) {
  let numResults = res.data.length;
  if (numResults) {
    let randomIdx = Math.floor(Math.random() * numResults);
    const newCol = document.createElement("div");
    const newGif = document.createElement("img");
    newCol.classList.add("addedGif");
    newGif.classList.add("gifImage");
    newGif.src = res.data[randomIdx].images.original.url;
    newCol.appendChild(newGif);
    gifArea.appendChild(newCol);
  }
}

const form = document.getElementById("formArea");
form.addEventListener("submit", async function (evt) {
  evt.preventDefault();
  let searchTerm = searchInput.value;
  searchInput.value = "";
  const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: searchTerm,
      api_key: "elrB688RI2SxLZ1mOHMbN2P6cFhZzhzG",
    },
  });
  addGif(response.data);
});
