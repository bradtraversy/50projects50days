const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

async function fetchURL(url) {
  const res = await fetch(url);
  const data = await res.json();

  return data;
}

fetchURL(API_URL).then((data) => {
  displayData(data.results);
});

const form = document.getElementById("form");
const search = document.getElementById("search");
let searchVal = "";
form.addEventListener("submit", (e) => {
  e.preventDefault();

  searchVal = search.value;

  fetchURL(SEARCH_API + searchVal).then((data) => {
    displayData(data.results);
  });
});

function displayData(data) {
  const wrapper = document.getElementById("wrapper");
  wrapper.innerHTML = "";

  data.forEach((movie) => {
    const { title, overview, poster_path, vote_average } = movie;

    const divContainer = document.createElement("div");
    divContainer.classList.add("movie-container");

    const posterContainer = document.createElement("div");
    posterContainer.classList.add("poster-container");

    const img = document.createElement("img");
    img.src = IMG_PATH + poster_path;

    const info = document.createElement("div");
    info.classList.add("info-container");

    const movieTitle = document.createElement("span");
    movieTitle.classList.add("title");
    movieTitle.append(document.createTextNode(title));

    const rating = document.createElement("span");
    rating.classList.add("rating");
    rating.append(document.createTextNode(vote_average));
    if (+vote_average >= 8) {
      rating.style.color = "lightgreen";
    } else if (+vote_average >= 5) {
      rating.style.color = "orange";
    } else {
      rating.style.color = "red";
    }

    const overviewContainer = document.createElement("div");
    overviewContainer.classList.add("overview-container");

    const overviewTitle = document.createElement("span");
    overviewTitle.classList.add("overview-title");
    overviewTitle.append(document.createTextNode("Overview"));

    const p = document.createElement("p");
    p.append(document.createTextNode(overview));

    overviewContainer.append(overviewTitle);
    overviewContainer.append(p);

    info.append(movieTitle);
    info.append(rating);

    posterContainer.append(img);

    divContainer.append(posterContainer);
    divContainer.append(info);
    divContainer.append(overviewContainer);

    wrapper.append(divContainer);

    divContainer.addEventListener("mouseover", () => {
      overviewContainer.classList.add("lift");
    });
    divContainer.addEventListener("mouseout", () => {
      overviewContainer.classList.remove("lift");
    });
  });
}
