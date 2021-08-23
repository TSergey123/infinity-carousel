const slides = document.querySelectorAll('.slider__item');
const next = document.querySelector('.slider__button--next');
const sliderList = document.querySelector('.slider__list');
let slider = [];

for (let i = 0; i < slides.length; i++) {
  slider[i] = slides[i];
  // slides[i].remove();
}
console.log(slider);

let step = 0;
let amount = 1180;
let offset = 0;

// const draw = () => {
//   let li = document.createElement('li');
//   li.classList.add('slider__item');
//   sliderList.appendChild(li);
//   li = slider[step]
//     step += amount;
//   for (let i = 0; i < slides.length; i++) {
//     const slide = slides[i];
//     sliderList.style.transition = '1s';
//     sliderList.style.transform = 'translateX(-' + step + 'px)';
//     console.log(step);
//   }
//   console.log(slider.length)
// }

const draw = () => {
  for (let i = 0; i < slides.length; i++) {
    const slide = slides[i];
      const slideClone = slide.cloneNode(true);
    // }
    // let li = document.createElement('li');
    // li = slider[step];
    // li.classList.add('slider__item');
    // slider.push(li);
  
    // for (let i = 0; i < slides.length; i++) {
    //   const slide = slides[i];
    // }

    if (step + 1 == slider.length) {
      step = 0;
    }
    else {
      step++;
      sliderList.appendChild(slideClone);

    }
    offset = 1;
  }
}

const move = () => {
  let offset2 = 0;
  step += amount;
  for (let i = 0; i < slides.length; i++) {
    let slide = slides[i];
    slide.style.transition = '2s';
    slide.style.transform = 'translateX(-' + step + 'px)';
    offset2++;
  }
    draw();
}
draw(); draw();

next.addEventListener('click', move, true);
