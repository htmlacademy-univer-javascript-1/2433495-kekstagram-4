import { closeForm, onCloseFormEscKeyDown } from './form.js';
import { isEscapeKey } from './util.js';
import { uploadData } from './api.js';

const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorMessage = errorTemplate.cloneNode(true);
const successMessage = successTemplate.cloneNode(true);
const formUpload = document.querySelector('.img-upload__form');

const checkElementTarget = (evt, button, inner) => evt.target.classList.contains(button) || !evt.target.classList.contains(inner);

const closePopup = () => {
  const popup = document.querySelector('.error') || document.querySelector('.success');
  popup.remove();
};

const closeMessage = (message = successMessage) => {
  message.classList.add('hidden');
};

const onEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    closePopup();
  }
};

const onPopupClick = (evt) => {
  if (!evt.target.classList.contains('succes__inner') && !evt.target.classList.contains('error__inner')) {
    evt.preventDefault();
    closePopup();
    document.removeEventListener('keydown', onEscKeydown);
  }
};

const closeErrorMessage = () => {
  closeMessage(errorMessage);

  document.addEventListener('keydown', onCloseFormEscKeyDown);
};

const onErrorEscapeDown = (evt) => {
  if(isEscapeKey(evt)) {
    document.removeEventListener('keydown', onErrorEscapeDown);

    closeErrorMessage();
  }
};

const onErrorClick = (evt) => {
  if(checkElementTarget(evt, 'error__button', 'error__inner')) {
    document.removeEventListener('keydown', onErrorEscapeDown);

    closePopup();
  }
};

const showMessage = (message) => {
  message.addEventListener('click', onPopupClick);
  document.body.appendChild(message);
  document.addEventListener('keydown', onEscKeydown);
};

const showErrorMessage = () => {
  const messageFragment = errorMessage.cloneNode(true);
  messageFragment.classList.remove('hidden');

  document.removeEventListener('keydown', onCloseFormEscKeyDown);
  document.addEventListener('keydown', onErrorEscapeDown);

  showMessage(messageFragment);

  errorMessage.addEventListener('click', onErrorClick);
};

const showSuccesMessage = () => {
  const messageFragment = successMessage.cloneNode(true);
  showMessage(messageFragment);
};

const onSuccess = () => {
  closeForm();
  showSuccesMessage();
};

const onError = () => {
  showErrorMessage();
};

const onFormUploadSubmit = (evt) => {
  evt.preventDefault();
  uploadData(onSuccess, onError, 'POST', new FormData(evt.target));
};

formUpload.addEventListener('submit', onFormUploadSubmit);
