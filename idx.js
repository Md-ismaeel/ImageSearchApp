const inputText = document.querySelector("#inputText");
const searchBtn = document.querySelector("#searchBtn");
const imageList = document.querySelector(".imageList");
const showMoreBtm = document.querySelector(".showMoreBtm");

const accessKey = "KaAbLeE5ARrqQXhHf2QfqQzt2imDHOiGlKbcBGPu3iY";
let page = 1;

async function searchImageApi() {
  let inputVal = inputText.value;
  const urlOfApi = `https://api.unsplash.com/search/photos?page=${page}&query=${inputVal}&client_id=${accessKey}&per_page=20`;
  const response = await fetch(urlOfApi);
  const data = await response.json();
  console.log(data);

  data.results.forEach((element) => {
    let image_Card = document.createElement("div");

    image_Card.innerHTML = `
    <figure id="imageData">
    <img src = ${element.urls.small} alt ="image"/>
    <p id="captionData">${element.alt_description}<p>
    </figure>`;

    image_Card.classList.add("imageCard");
    imageList.appendChild(image_Card);

    page++;
    if (page > 1) {
      showMoreBtm.style.display = "block";
    }
  });
}
showMoreBtm.addEventListener("click", () => {
  searchImageApi();
});

searchBtn.addEventListener("click", (event) => {
  event.preventDefault();
  searchImageApi();
});
