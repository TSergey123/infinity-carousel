import { slider } from './slide.js';
import { createGoodsList } from './goodsList.js';
import { createGoodsItem } from './goodsItem.js';
import { goodsData } from './const.js';
import { createGoodCard } from './goodCard.js';

const main = document.querySelector('.main');

export const render = (container, template, place = 'beforeend') => {
  place = 'beforeend';
  container.insertAdjacentHTML(place, template);
};

render(main, createGoodsList());
export const goodsList = document.querySelector('.slider__list');

for (let i = 0; i < goodsData.length; i++) {
    render(goodsList, createGoodsItem(createGoodCard(i)));
  }

const sliderRoots = document.querySelectorAll(`.slider`);

sliderRoots.forEach((root) => {
  slider(root);
});

// setOnClickBlur();
