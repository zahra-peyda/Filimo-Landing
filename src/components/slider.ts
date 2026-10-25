import { moviesData } from "../data/movies";

export function slider(): void {
  const app = document.querySelector<HTMLDivElement>("#App");
  if (!app) return;

  const slider = document.createElement("div");
  slider.className = "slider";

  const images = import.meta.glob<string>("../assets/images/slide/*", {
    eager: true,
    import: "default",
  });

  const imageMap = new Map(
    Object.entries(images).map(([path, src]) => [path.split("/").pop()!, src]),
  );

  const slidesArray: HTMLDivElement[] = [];
  const dotsArray: HTMLButtonElement[] = [];
  const slideImages: string[] = [];

  const dotsContainer = document.createElement("div");
  dotsContainer.className = "slider-dot";

  const prevButton = document.createElement("button");
  prevButton.className = "slide-prev";
  prevButton.type = "button";
  prevButton.setAttribute("aria-label", "اسلاید قبلی");

  const prevIcon = document.createElement("i");
  prevIcon.className = "fa-solid fa-angle-left";
  prevButton.appendChild(prevIcon);

  const nextButton = document.createElement("button");
  nextButton.className = "slide-next";
  nextButton.type = "button";
  nextButton.setAttribute("aria-label", "اسلاید بعدی");

  const nextIcon = document.createElement("i");
  nextIcon.className = "fa-solid fa-angle-right";
  nextButton.appendChild(nextIcon);

  let currentSlide: number = 0;

  function showSlide(index: number): void {
    slidesArray.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });

    dotsArray.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });

    document.body.style.setProperty(
      "--slide-bg",
      `url("${slideImages[index]}")`,
    );
  }

  prevButton.addEventListener("click", () => {
    currentSlide--;

    if (currentSlide < 0) {
      currentSlide = slidesArray.length - 1;
    }

    showSlide(currentSlide);
  });

  nextButton.addEventListener("click", () => {
    currentSlide++;

    if (currentSlide >= slidesArray.length) {
      currentSlide = 0;
    }

    showSlide(currentSlide);
  });
  moviesData.forEach((item: any) => {
    const src = imageMap.get(item.imageFile);

    if (!src) return;

    const index = slidesArray.length;

    const slide = document.createElement("div");
    slide.className = "slide";

    const img = document.createElement("img");
    img.src = src;
    img.alt = item.title;
    slide.appendChild(img);

    const content = document.createElement("div");
    content.className = "slide-content";

    const englishTitle = document.createElement("span");
    englishTitle.className = "slide-english-title";
    englishTitle.textContent = item.englishTitle;

    const title = document.createElement("h2");
    title.textContent = item.title;

    const details = document.createElement("div");
    details.className = "slide-details";

    details.textContent = `${item.year}  |  ${item.genres.join("، ")}  |  ⭐ ${item.rating}  |  ${item.age}`;

    const description = document.createElement("p");
    description.textContent = item.description;

    content.appendChild(englishTitle);
    content.appendChild(title);
    content.appendChild(details);
    content.appendChild(description);

    slide.appendChild(content);

    const dot = document.createElement("button");
    dot.className = "dot";
    dot.type = "button";

    dot.setAttribute("aria-label", `رفتن به اسلاید ${index + 1}`);

    if (index === 0) {
      slide.classList.add("active");
      dot.classList.add("active");
    }

    slider.appendChild(slide);
    slidesArray.push(slide);
    slideImages.push(src);

    dotsContainer.appendChild(dot);
    dotsArray.push(dot);

    dot.addEventListener("click", () => {
      currentSlide = index;
      showSlide(currentSlide);
    });
  });

  if (slidesArray.length === 0) return;

  slider.appendChild(prevButton);
  slider.appendChild(nextButton);
  slider.appendChild(dotsContainer);

  app.appendChild(slider);

  showSlide(0);

  if (slidesArray.length > 1) {
    setInterval(() => {
      currentSlide++;

      if (currentSlide >= slidesArray.length) {
        currentSlide = 0;
      }

      showSlide(currentSlide);
    }, 5000);
  }
}
