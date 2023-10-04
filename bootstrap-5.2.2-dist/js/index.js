const fruits = [];
const forloopDiv = document.getElementById("forloopDiv");
const refreshButton = document.getElementById("refreshButton");
const likeButton = document.getElementById("likeButton");
const createButton = document.getElementById("createButton");

function createTweetContainer(tweet, name) {
  const tweetContainer = document.createElement("div");
  tweetContainer.className = "tweet-container";
  const newParagraph = document.createElement("p");
  const displayText = `Name: <span class='name-span d-none'>${name}</span><br>Tweet: ${tweet}`;
  newParagraph.innerHTML = displayText;
  newParagraph.className = "mb-0 tagText text-white p-3 rounded-3 fw-bold mt-3";
  const buttonContainer = document.createElement("div");
  buttonContainer.className = "d-flex justify-content-between gap-2 w-100 mt-2";

  const refreshButtonClone = refreshButton.cloneNode(true);
  refreshButtonClone.addEventListener("click", function () {
    createTweetContainer(tweet, name);
  });

  const likeButtonClone = likeButton.cloneNode(true);
  likeButtonClone.addEventListener("click", function () {
    const arrayColor = ["red", "black", "white", "orange", "gold", "green"];
    const randomColorIndex = Math.floor(Math.random() * arrayColor.length);
    const randomColor = arrayColor[randomColorIndex];
    const paragraph = this.closest(".tweet-container").querySelector("p");
    paragraph.style.setProperty("color", randomColor, "important");
  });

  const createButtonClone = createButton.cloneNode(true);
  createButtonClone.addEventListener("click", function () {
    const nameSpan = tweetContainer.querySelector(".name-span");
    if (nameSpan) {
      nameSpan.classList.toggle("d-none");
    }
  });

  buttonContainer.appendChild(refreshButtonClone);
  buttonContainer.appendChild(likeButtonClone);
  buttonContainer.appendChild(createButtonClone);
  tweetContainer.appendChild(newParagraph);
  tweetContainer.appendChild(buttonContainer);
  forloopDiv.appendChild(tweetContainer);
}

const form = document.getElementById("myForm");
const tweetInput = document.getElementById("tweetInput");
const nameInput = document.getElementById("nameInput");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const newTweet = tweetInput.value.trim();
  const newTweetName = nameInput.value.trim();
  if (newTweet !== "" && newTweetName !== "") {
    fruits.push(newTweet, newTweetName);
    createTweetContainer(newTweet, newTweetName);
    console.log("Updated Array:", fruits);
    tweetInput.value = "";
    nameInput.value = "";
  }
});
