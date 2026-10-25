export function moviesCarousel() {
  const app = document.querySelector("#App");
  const moviesBox = document.createElement("div");
  moviesBox.classList.add("movies-box");

  if (!app) return;

  const images = import.meta.glob<string>("../assets/images/poster/*", {
    eager: true,
    import: "default",
  });
  const imagesArray = Object.values(images);

  imagesArray.forEach((image, index): void => {
    const movieDiv = document.createElement("div");
    movieDiv.classList.add("movie-div");

    const img = document.createElement("img");
    img.classList.add("movie-img");

    img.src = image;
    img.alt = `پوستر فیلم ${index + 1}`;

    movieDiv.appendChild(img);

    moviesBox.appendChild(movieDiv);
  });
  app.appendChild(moviesBox);
}
