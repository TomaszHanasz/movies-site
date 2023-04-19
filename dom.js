"use strict";

import movies from "./moviesList.js";

//--- Function to create movie tiles and modals---//
function createMoviesModals(moviesList) {
  const modalContainer = document.querySelector(".modal-container");

  moviesList.forEach((el, index) => {
    const movieModal = document.createElement("div");
    movieModal.classList.add("movie-modal");
    movieModal.classList.add("hidden");

    const closeMovie = document.createElement("button");
    closeMovie.classList.add("close-modal");
    closeMovie.textContent = "X";
    closeMovie.addEventListener("click", () =>
      movieModal.classList.add("hidden")
    );

    const summary = document.createElement("div");
    summary.classList.add("summary");

    const moviePoster = document.createElement("img");
    moviePoster.src = el.image;
    const movieDetails = document.createElement("ul");
    const productionYear = document.createElement("li");
    productionYear.textContent = `Production Year: ${el.year}`;
    const director = document.createElement("li");
    director.textContent = `Director: ${el.director}`;
    const cast = document.createElement("li");
    cast.textContent = `Starring: ${el.cast}`;
    const genre = document.createElement("li");
    genre.textContent = `Genre: ${el.genre}`;

    movieDetails.appendChild(moviePoster);
    movieDetails.appendChild(productionYear);
    movieDetails.appendChild(director);
    movieDetails.appendChild(cast);
    movieDetails.appendChild(genre);

    summary.appendChild(movieDetails);

    const movieDescription = document.createElement("div");
    movieDescription.classList.add("description");

    const title = document.createElement("p");
    title.classList.add("title");
    title.textContent = `${el.title}`;

    const movieInfo = document.createElement("p");
    movieInfo.classList.add("movie-text");
    movieInfo.textContent = `${el.description}`;

    const playMovie = document.createElement("button");
    playMovie.classList.add("play");
    playMovie.textContent = "Play movie ▷";

    const trailerVideo = document.createElement("iframe");
    trailerVideo.src = el.trailer;
    trailerVideo.classList.add("trailer");

    movieDescription.appendChild(title);
    movieDescription.appendChild(movieInfo);
    movieDescription.appendChild(playMovie);

    movieModal.appendChild(closeMovie);
    movieModal.appendChild(summary);
    movieModal.appendChild(movieDescription);
    movieModal.appendChild(trailerVideo);

    const movieStatus = document.createElement("div");
    movieStatus.classList.add("movie-info");
    const movieImage = document.createElement("img");
    movieImage.src = moviesList[index].image;
    const movieRating = document.createElement("div");
    movieRating.classList.add("rating");
    movieRating.textContent = "🍌" + moviesList[index].rating;
    const titleMain = document.createElement("h1");
    titleMain.classList.add("title-main");
    titleMain.textContent = `${el.title}`;
    if (el.title.length > 15) {
      titleMain.style.fontSize = "1rem";
    }
    const watchMovie = document.createElement("button");
    watchMovie.classList.add("watch-movie");
    watchMovie.textContent = "Watch movie";

    modalContainer.appendChild(movieStatus);
    movieStatus.appendChild(movieImage);
    movieStatus.appendChild(movieRating);
    movieStatus.appendChild(titleMain);
    movieStatus.appendChild(watchMovie);

    modalContainer.appendChild(movieModal);
  });
}

createMoviesModals(movies);

const watchMovieBtn = document.querySelectorAll(".watch-movie");
const moviesList = document.querySelectorAll(".movie-modal");
const overlay = document.querySelector(".overlay");
const closeMovie = document.querySelectorAll(".close-modal");
const trailerVideo = document.querySelectorAll(".trailer"); //not used yet

const watchMovieHandler = (index) => {
  moviesList[index].classList.remove("hidden");
  moviesList[index].classList.add("watch-flex");
  overlay.classList.remove("hidden");
};

const closeMovieHandler = (index) => {
  moviesList[index].classList.add("hidden");
  moviesList[index].classList.remove("watch-flex");
  overlay.classList.add("hidden");
};

closeMovie.forEach((el, index) => {
  el.addEventListener("click", () => closeMovieHandler(index));
});

watchMovieBtn.forEach((el, index) => {
  el.addEventListener("click", () => watchMovieHandler(index));
});

document.querySelector("body").addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    moviesList.forEach((el, index) => {
      el.addEventListener("click", closeMovieHandler(index));
    });
  }
});
