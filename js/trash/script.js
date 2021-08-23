import Slider from "../modules/slider.js";

const sliderElements = document.querySelectorAll('.slider');

sliderElements.forEach((element) => {
  const slider = new Slider(element);
  slider.init();
});



