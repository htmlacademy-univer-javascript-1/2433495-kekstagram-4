import { onFilterButtonChange, effectList, sliderWrapper } from './effects.js';
import { isEscapeKey } from './util.js';
import { buttonAdjustment } from './hashtags-pristine.js';

const Zoom = {
  MIN: 25,
  MAX: 100,
  STEP: 25,
};

const body = document.querySelector('body');
const formUpload = body.querySelector('.img-upload__form');
const overlay = body.querySelector('.img-upload__overlay');
const fileUpload = body.querySelector('#upload-file');
const formUploadClose = body.querySelector('#upload-cancel');
const minusButton = body.querySelector('.scale__control--smaller');
const plusButton = body.querySelector('.scale__control--bigger');
const scaleControlValue = body.querySelector('.scale__control--value');
const imagePreview = body.querySelector('.img-upload__preview img');
const commentsField = formUpload.querySelector('.text__description');


const closeForm = () => {
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  effectList.removeEventListener('change', onFilterButtonChange);

  scaleControlValue.value = '100%';
  imagePreview.style.transform = 'scale(100%)';
  imagePreview.className = 'img-upload__preview';
  imagePreview.style.filter = '';

  formUpload.reset();
};

const onCloseFormEscKeyDown = (evt) => {
  if (isEscapeKey(evt) &&
      !evt.target.classList.contains('text__hashtags') &&
      !evt.target.classList.contains('text__description')
  ) {
    evt.preventDefault();
    closeForm();

    document.removeEventListener('keydown', onCloseFormEscKeyDown);
  }
};

const addFieldListener = (field) => {
  field.addEventListener('focus', () => {
    document.removeEventListener('keydown', onCloseFormEscKeyDown);
  });
  field.addEventListener('blur', () => {
    document.addEventListener('keydown', onCloseFormEscKeyDown);
  });
};

const changeImages = () => {
  const file = fileUpload.files[0];
  const fileUrl = URL.createObjectURL(file);

  imagePreview.src = fileUrl;
};


const changeZoom = (factor = 1) => {
  let size = Zoom.MAX;

  if (factor === -1) {
    size -= Zoom.STEP;
  } else if (factor === 1) {
    size = Zoom.MAX;
  }

  scaleControlValue.value = `${size}%`;
  imagePreview.style.transform = `scale(${size / 100})`;
};


const onFileUploadChange = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');

  changeImages();

  changeZoom();

  document.addEventListener('keydown', onCloseFormEscKeyDown);
  sliderWrapper.classList.add('hidden');
  effectList.addEventListener('change', onFilterButtonChange);
  addFieldListener(commentsField);
  buttonAdjustment();
};

fileUpload.addEventListener('change', onFileUploadChange);

formUploadClose.addEventListener('click', () => {
  closeForm();
});

const onMinusButtonClick = () => {
  changeZoom(-1);
};

const onPlusButtonClick = () => {
  changeZoom();
};

minusButton.addEventListener('click', onMinusButtonClick);
plusButton.addEventListener('click', onPlusButtonClick);

export {closeForm, formUpload, imagePreview};
