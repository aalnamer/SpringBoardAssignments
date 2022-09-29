const form = document.querySelector("#main-page");
const urlInput = document.getElementById("url-input");
const topInput = document.querySelector("#top-text-input");
const botInput = document.querySelector("#bottom-text-input");
const meme = document.querySelector("#created-meme");
const button = document.querySelector("#add-button");

button.addEventListener("click", function (e) {
  e.preventDefault();
  if (urlInput.value.length === 0) {
    alert("URL Required");
  } else if (
    urlInput.value.length !== 0 &&
    topInput.value.length === 0 &&
    botInput.value.length === 0
  ) {
    console.log("valid");
    const newMeme = document.createElement("img");
    newMeme.src = urlInput.value;
    meme.appendChild(newMeme);
    urlInput.value = "";
  } else if (
    urlInput.value.length !== 0 &&
    topInput.value.length === 0 &&
    botInput.value.length !== 0
  ) {
    console.log("valid");
    const newMeme = document.createElement("img");
    const newMemeBot = document.createElement("bottom-text");
    newMeme.src = urlInput.value;
    newMemeBot.src = botInput.value;
    meme.appendChild(newMemeBot);
    meme.appendChild(newMeme);
    botInput.value = "";
    urlInput.value = "";
  } else if (
    urlInput.value.length !== 0 &&
    topInput.value.length !== 0 &&
    botInput.value.length === 0
  ) {
    console.log("valid");
    const newMeme = document.createElement("img");
    const newMemeTop = document.createElement("top-text");
    newMeme.src = urlInput.value;
    meme.appendChild(newMeme);
    newMemeTop.src = topInput.value;
    meme.appendChild(newMemeTop);
    topInput.value = "";
    urlInput.value = "";
  } else if (
    urlInput.value.length !== 0 &&
    topInput.value.length !== 0 &&
    botInput.value.length !== 0
  ) {
    console.log("valid");
    const newMeme = document.createElement("img");
    newMeme.src = urlInput.value;
    meme.appendChild(newMeme);
    urlInput.value = "";
  }
});
