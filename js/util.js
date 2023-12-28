import { Keys, DELAY } from './consts.js';

const isEscapeKey = (evt) => evt.key === Keys.ESC || evt.key === Keys.ESCAPE;

const closeOnEscKeyDown = (evt, cb) => {
  if (isEscapeKey(evt)) {
    cb();
  }
};

const checkLenght = (inputString, maxLenght) => inputString.length <= maxLenght;

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

const debounce = (cb) => {
  let lastTimeout = null;

  return (...args) => {
    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }
    lastTimeout = window.setTimeout(() => {
      cb(...args);
    }, DELAY);
  };
};

const shuffleArray = (array) => {
  for (let indexOne = array.length - 1; indexOne  > 0; indexOne--) {
    const indexTwo = Math.floor(Math.random() * (indexOne + 1));
    [array[indexOne], array[indexTwo]] = [array[indexTwo], array[indexOne]];
  }
  return array;
};

export {checkLenght, closeOnEscKeyDown, isEscapeKey, showAlert, debounce, shuffleArray};
