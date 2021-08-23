const slides = document.querySelectorAll('.slider__item');
const next = document.querySelector('.slider__button--next');
let slider = [];

for (let i = 0; i < slides.length; i++) {
  slider[i] = slides[i];
  // slides.remove();
}

console.log(slider);

let step = 0;
let offset = 0;

const draw = () => {
  let li = document.createElement('li');
  li = slider[step];
  li.classList.add('slider__item');
  li.style.transition = '2s';
  // li.style.transform = 'transitionX(' + offset * 512 + 'px)';
  li.style.transform = 'transitionX(-500%)';
  document.querySelector('.slider__list').appendChild(li);

  if (step + 1 == slider.length) {
    step = 0;
  }
  else {
    step++;
  }
  offset = 1;
}

const left = () => {
  let slides2 = document.querySelectorAll('.slider__item');
  let offset2 = 0;
  for (let i = 0; i < slides2.length; i++) {
    slides2[i].style.transition = '2s';
    // slides2[i].style.transform = 'transitionX(' + offset2 * 512 - 512 + 'px)';
    slides2[i].style.transform = 'transitionX(200%)';
    offset2++;
  }
  setTimeout(function () {
    slides[0].remove();
    draw();
    next.addEventListener('click', left, true);
  }, 100)
}

draw(); draw();
next.addEventListener('click', left, true);
