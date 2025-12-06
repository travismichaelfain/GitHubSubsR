// look back at the <readme.md> file for some hints //
// working API key //
const giphyApiKey = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";

const form = document.querySelector("form");
const resultsDiv = document.querySelector("#giphy-container");
const clearButton = document.querySelector("#clear-button");

function appendGifToResults(gifUrl) {
  const img = document.createElement("img");
  img.src = gifUrl;
  resultsDiv.appendChild(img);
}

function clearGifs() {
  resultsDiv.innerHTML = "";
}

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const query = document.querySelector("#giphy-input").value;
  const limit = 10;
  const numChoice = Math.floor(Math.random() * 10) + 1;

  const response = await axios.get(
    `https://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&q=${query}&limit=${limit}`
  );

  const gifUrl = response.data.data[numChoice].images.original.url;
  appendGifToResults(gifUrl);
});

clearButton.addEventListener("click", clearGifs);
