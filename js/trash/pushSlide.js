const slides = document.querySelectorAll('.slider__item');
const next = document.querySelector('.slider__button--next');
const sliderList = document.querySelector('.slider__list');
let slider = [];

const draw = () => {
  let count = 0;
  for (let i = 0; i < slides.length; i++) {
    const slide = slides[i];
    const slideClone = slide.cloneNode(true);
    sliderList.appendChild(slideClone);
    sliderList.style.transform = 'translateX(-100' + count + 'px)';
    count++;
    
  }

}

next.addEventListener('click', draw, true);
