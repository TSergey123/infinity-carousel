const sliderWrapper = document.querySelector('.slider__wrapper');
const sliderList = document.querySelector('.slider__list');
const sliderItem = document.querySelector('.slider__item');
const sliderNextButton = document.querySelector('.slider__button--next');
const sliderPrevButton = document.querySelector('.slider__button--prev');

const ELEMENTS_AMOUN_IN_SLIDE = 5;
const BUTTON_DEBOUNCE_INTERVAL = 50;
const DEFAULT_TRANSITION = 'transform 0.6 ease';
const PLACING_POSITION_START = 'start';
const PLACING_POSITION_END = 'end';
const DIRECTION_RIGHT = -1;
const DIRECTION_LEFT = 1;

let sliderChildren = sliderList.children;
let sliderDirection = DIRECTION_RIGHT;

const sliderStep = sliderItem.offsetWidth * ELEMENTS_AMOUN_IN_SLIDE;

const getTranslate = (shiftX = 0, shiftY = 0, shiftZ = 0) => {
  return `translate3d(${shiftX}px, ${shiftY}px, ${shiftZ}px)`;
};

const setTransform = (direction) => {
  sliderList.style.transform = getTranslate(direction * sliderStep);
}

const replaceElements = (placing) => {
  const sliderElements = Array.from(sliderChildren);

  const newFragment = document.createDocumentFragment();
  const sliderLastGroup = sliderElements.slice(-ELEMENTS_AMOUN_IN_SLIDE);
  const sliderFirstGroup = sliderElements.slice(0, ELEMENTS_AMOUN_IN_SLIDE);
  if (placing === PLACING_POSITION_START) {
    for (const el of sliderLastGroup) {
      newFragment.appendChild(el);
    }
    sliderList.prepend(newFragment);
  }

  if (placing === PLACING_POSITION_END) {
    for (const el of sliderLastGroup) {
      newFragment.appendChild(el);
    }
    sliderList.append(newFragment);
  }
};

const sliderNextMove = () => {
  if (sliderDirection === DIRECTION_LEFT) {
    sliderDirection = DIRECTION_RIGHT;
    replaceElements(PLACING_POSITION_START);
  }

  sliderWrapper.style.justifyContent = 'flex-start';
  sliderList.style.justifyContent = 'flex-start';
  setTransform(sliderDirection);
}

const sliderPrevMove = () => {
  if (sliderDirection === DIRECTION_RIGHT) {
    sliderDirection = DIRECTION_LEFT;
    replaceElements(PLACING_POSITION_END);
  }

  sliderWrapper.style.justifyContent = 'flex-end';
  sliderList.style.justifyContent = 'flex-end';
  setTransform(sliderDIrection);
}

  sliderList.addEventListener(`transitionstart`, (evt) => {
    if (evt.target === sliderList) {
      sliderList.classList.add(`slider--in-move`);
    }
  });

sliderList.addEventListener(`transitionend`, (evt) => {
  if (evt.target === sliderList) {
    replaceElements(sliderDirection === DIRECTION_LEFT ? PLACING_POSITION_START : PLACING_POSITION_END);

    sliderList.classList.remove(`slider--in-move`);
    sliderList.style.transition = `none`;
    setTransform(0);
    setTimeout(() => {
      sliderList.style.transition = DEFAULT_TRANSITION;
    });
  }
});


sliderNextButton.addEventListener('click', sliderNextMove);
sliderPrevButton.addEventListener('click', sliderPrevMove);


// const sliderNextMove = () => {
//   sliderDirection === DIRECTION_LEFT ? sliderDirection = DIRECTION_LEFT : replace
//   if (sliderDirection === DIRECTION_LEFT) {
//     slider
//   }
// }
// console.log(sliderChildren);

// sliderNextButton.addEventListener('click', setTransform(DIRECTION_RIGHT), true);

