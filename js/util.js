import { Keys } from './consts.js';

const getRandomNumber = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const createRandom = (min, max) => {
  const number = [];

  return function () {
    let currentValue = getRandomNumber(min, max);
    while (number.includes(currentValue)) {
      currentValue = getRandomNumber(min, max);
    }
    number.push(currentValue);
    return currentValue;
  };
};

const isEscapeKey = (evt) => evt.key === Keys.ESC || evt.key === Keys.ESCAPE;

const closeOnEscKeyDown = (evt, cb) => {
  if (isEscapeKey(evt)) {
    cb();
  }
};

const checkLenght = (inputString, maxLenght) => inputString.length <= maxLenght;

const isPalindrom = (inputString) => {
  let reverseString = '';
  const newString = inputString.replaceAll(' ', '').toLowerCase();
  for (let i = newString.length - 1; i >= 0; i--) {
    reverseString += newString[i];
  }
  return (newString === reverseString);
};

const getCount = (inputParam) => {
  const newString = inputParam.toString();
  let number = '';
  for (let i = 0; i < newString.length; i++){
    if (!Number.isNaN(parseInt(newString[i], 10))) {
      number += newString[i];
    }
  }
  return parseInt(number, 10);
};

const showAlert = (message, alertShowTime) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = '#f5cc00';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => alertContainer.remove(), alertShowTime);
};

export {getRandomNumber, createRandom, checkLenght, isPalindrom, getCount, closeOnEscKeyDown, isEscapeKey, showAlert};
