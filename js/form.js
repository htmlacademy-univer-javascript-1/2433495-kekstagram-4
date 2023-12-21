import { isEscKey } from './utils.js';
import {pristine} from './hashtag-pristine.js';
import {initRadios, resetFilters } from './effects.js';

const body = document.querySelector('body');
const formUpload = document.querySelector('.img-upload__form');
const fileUpload = document.querySelector('#upload-file');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const closeButton = document.querySelector('#upload-cancel');

const effects = document.querySelectorAll('.effects__preview');
const mainPicture = document.querySelector('.img-upload__preview img');

const plusButton = document.querySelector('.scale__control--bigger');
const minusButton = document.querySelector('.scale__control--smaller');
const scaleControl = document.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview img');

const Zoom = {
  STEP: 25,
  MIN: 25,
  MAX: 100,
};

const initForm = () => {
  closeButton.addEventListener('click', onCloseFormClick);
  document.addEventListener('keydown', onCloseFormEscDown);

  fileUpload.addEventListener('change', onFileUploadChange);
  scaleControl.value = '100%';
};

const changeZoom = (factor = 1) => {
  let size = parseInt(scaleControl.value, 10) + (Zoom.STEP * factor);

  if(size < Zoom.MIN){
    size = Zoom.MIN;
    return;
  }
  if(size > Zoom.MAX){
    size = Zoom.MAX;
    return;
  }

  scaleControl.value = `${size}%`;
  imagePreview.style.transform = `scale(${size / 100})`;
};

const initButtons = () => {

  const onMinusButtonClick = () => {
    changeZoom(-1);
  };

  const onPlusButtonClick = () => {
    changeZoom(1);
  };

  minusButton.addEventListener('click', onMinusButtonClick);
  plusButton.addEventListener('click', onPlusButtonClick);
};

const closeForm =  () => {
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');

  closeButton.removeEventListener('click', onCloseFormClick);
  document.removeEventListener('keydown', onCloseFormEscDown);

  formUpload.reset();
};

pristine.reset();

scaleControl.value = '100%';
imagePreview.style.transform = 'scale(100%)';

resetFilters();

function onCloseFormClick (evt) {
  evt.preventDefault();
  closeForm();
}

function onCloseFormEscDown (evt) {
  if(isEscKey(evt) &&
  !evt.target.classList.contains('text__hashtag') &&
  !evt.target.classList.contains('text__description'))
  {
    evt.preventDefault();
    closeForm();
  }
}

const changeImages = () => {
  const file = fileUpload.files[0];
  const fileUrl = URL.createObjectURL(file);

  mainPicture.src = fileUrl;

  effects.forEach((effect) => {
    effect.style.backgroundImage = `url('${fileUrl}')`;
  });
};


function onFileUploadChange () {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');

  initForm();
  changeImages();
  initButtons();
  initRadios();
}

export {initForm};
