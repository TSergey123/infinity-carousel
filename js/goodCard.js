import { goodsData } from './const.js';

export const createGoodCard = (i) => {
  return {
    title: goodsData[i].title,
    image: goodsData[i].image,
    link: goodsData[i].link,
    price: goodsData[i].price,
    saleProcent: goodsData[i].saleProcent,
    oldPrice: goodsData[i].oldPrice,
    productSale: goodsData[i].productSale,
  }
};
