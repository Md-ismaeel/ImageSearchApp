const inputText = document.querySelector("#inputText");
const searchBtn = document.querySelector("#searchBtn");
const imageList = document.querySelector(".imageList");
const showMoreBtm = document.querySelector(".showMoreBtm");

const accessKey = "KaAbLeE5ARrqQXhHf2QfqQzt2imDHOiGlKbcBGPu3iY";
let page = 1;

async function imageSearch() {
  let inputVal = inputText.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}=1&query=${inputVal}&client_id=${accessKey}&per_page=20`;
  console.log(inputVal);
  const response = await fetch(url);
  const data = await response.json();

  console.log(data);

  data.results.forEach((element) => {
    let imageCard = document.createElement("div");
    imageCard.innerHTML = `<figure id="imageData"><img src= ${element.urls.small} alt ="image"/> <p id="captionData">${element.alt_description}</p></figure>`;

    imageCard.classList.add("imageCard");
    imageList.appendChild(imageCard);

    page++;
    if (page > 1) {
      showMoreBtm.style.display = "block";
    }
  });
}

showMoreBtm.addEventListener("click", () => {
  console.log("working");
  imageSearch();
});

searchBtn.addEventListener("click", (event) => {
  event.preventDefault();
  // page = 1;
  imageSearch();
});
