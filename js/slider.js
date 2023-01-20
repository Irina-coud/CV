const sliderTrack = document.querySelector(".slider__track"),
  prevButton = document.querySelector(".slider__prev-btn"),
  nextButton = document.querySelector(".slider__next-btn"),
  countSlides = document.querySelectorAll(".slider__item"),
  widthSliderTrack = document.querySelector(".slider__wrap");

const widthSlide = widthSliderTrack.offsetWidth;

let position = 0;

const positionLastSlide = - ((countSlides.length - 1) * widthSlide);

const nextSlide = () => {
  if (position === positionLastSlide) {
    position = 0;
  } else {
    position -= widthSlide;
  }
  sliderTrack.style.left = `${position}px`;
}

const prevSlide = () => {
  if (position === 0) {
    position = positionLastSlide;
  } else {
    position += widthSlide;
  }
  sliderTrack.style.left = `${position}px`;
}

nextButton.addEventListener("click", nextSlide)
prevButton.addEventListener("click", prevSlide)
