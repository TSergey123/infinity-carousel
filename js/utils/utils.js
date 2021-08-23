// import { goodsList } from "../slotenScript";

export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomArrayElement = (elements) => {
  return elements[getRandomInteger(0, elements.length - 1)];
};
export const myArr = [
  { title: 'chair1', image: 'product-photo-1', link: 'link1', price: '10 000' },
  { title: 'chair2', image: 'product-photo-2', link: 'link2', price: '20 000' },
  { title: 'chair3', image: 'product-photo-3', link: 'link3', price: '30 000' },
  { title: 'chair4', image: 'product-photo-4', link: 'link4', price: '40 000' },
]


export const ressurectedFunc = (elements) => {
  const el = elements[getRandomInteger(0, elements.length - 1)];
  return elements.sort();
};

// console.log(ressurectedFunc(myArr));

// const myFunct = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     let total = 0 + i;
//     console.log(arr[total]);
//     return arr[i];
//   }
// }
// myFunct(myArr);
// let arrTitle = myArr.title;
// let newArrTitle = myFunct(myArr);
// console.log(newArrTitle);


export const getFirstArrayElement = (elements) => {
  for (let index = 0; index < elements.length; index++) {
    let total = 0;
    // index = elements[total];
    let result = total + elements;
    console.log(result);
    return result;
  }
};

