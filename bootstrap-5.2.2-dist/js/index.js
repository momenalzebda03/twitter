const fruits = [];
const forloopDiv = document.getElementById("forloopDiv");
const refreshButton = document.getElementById("refreshButton");
const likeButton = document.getElementById("likeButton");
const createButton = document.getElementById("createButton");

function displayFruits() {
  forloopDiv.innerHTML = "";
  for (let i = 0; i < fruits.length; i += 2) {
    const tweetContainer = document.createElement("div");
    const newParagraph = document.createElement("p");
    const tweetValue = fruits[i];
    const nameValue = fruits[i + 1];
    const displayText = `Name: ${nameValue}<br>Tweet: ${tweetValue}`;

    newParagraph.innerHTML = displayText;
    newParagraph.className =
      "mb-0 tagText text-white p-3 rounded-3 fw-bold mt-3";

    const buttonContainer = document.createElement("div");
    buttonContainer.className =
      "d-flex justify-content-between gap-2 w-100 mt-2";

    const refreshButtonClone = refreshButton.cloneNode(true);
    refreshButtonClone.addEventListener("click", function () {
      // Handle refresh button click
    });

    const likeButtonClone = likeButton.cloneNode(true);
    likeButtonClone.addEventListener("click", function () {
      // Handle like button click
    });

    const createButtonClone = createButton.cloneNode(true);
    createButtonClone.addEventListener("click", function () {
      // Handle create button click
    });

    buttonContainer.appendChild(refreshButtonClone);
    buttonContainer.appendChild(likeButtonClone);
    buttonContainer.appendChild(createButtonClone);
    tweetContainer.appendChild(newParagraph);
    tweetContainer.appendChild(buttonContainer);
    forloopDiv.appendChild(tweetContainer);
  }
}

displayFruits();

const form = document.getElementById("myForm");
const tweetInput = document.getElementById("tweetInput");
const nameInput = document.getElementById("nameInput");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const newTweet = tweetInput.value.trim();
  const newTweetName = nameInput.value.trim();
  if (newTweet !== "" && newTweetName !== "") {
    fruits.push(newTweet, newTweetName);
    console.log("Updated Array:", fruits);
    displayFruits();
    tweetInput.value = "";
    nameInput.value = "";
  }
});
