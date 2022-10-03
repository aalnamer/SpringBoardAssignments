const form = document.querySelector("#main-page");
const urlInput = document.getElementById("url-input");
const topInput = document.getElementById("top-text-input");
const botInput = document.getElementById("bottom-text-input");
const meme = document.querySelector("#created-meme");
const button = document.querySelector("#add-button");

let counter = 0;

button.addEventListener("click", function (e) {
  e.preventDefault();
  if (urlInput.value.length === 0) {
    alert("URL Required");
  } else {
    console.log("valid");
    const container = document.createElement("div");
    const hoverContainer = document.createElement("div");
    const topContainer = document.createElement("div");
    const bottomContainer = document.createElement("div");
    const newMeme = document.createElement("img");
    newMeme.src = urlInput.value;
    if (topInput.value.length !== 0) {
      topContainer.textContent = topInput.value;
    }
    if (botInput.value.length !== 0) {
      bottomContainer.textContent = botInput.value;
    }
    container.id = counter + "";
    hoverContainer.addEventListener("click", function (r) {
      const selectedMeme = document.getElementById(container.id);
      selectedMeme.remove();
    });
    counter++;
    container.classList.add("new-meme");
    hoverContainer.classList.add("new-meme-hover");
    topContainer.classList.add("new-meme-top");
    bottomContainer.classList.add("new-meme-bottom");
    container.appendChild(hoverContainer);
    container.appendChild(topContainer);
    container.appendChild(newMeme);
    container.appendChild(bottomContainer);
    meme.appendChild(container);

    urlInput.value = "";
    topInput.value = "";
    botInput.value = "";
  }
});

// topContainer.classList.add("new-meme-top");
// bottomContainer.classList.add("new-meme-bottom");
