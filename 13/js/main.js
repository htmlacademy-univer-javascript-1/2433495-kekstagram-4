import {renderPictures} from './pictures.js';
import './form.js';
import './hashtags-pristine.js';
import {initEffects} from './effects.js';
import { loadData } from './api.js';
import { ALERT_SHOW_TIME } from './consts.js';
import { showAlert } from './util.js';
import './messages.js';

initEffects();

let photos = [];

const onSuccess = (data) => {
  photos = data.slice();
  renderPictures(photos);
  document.querySelector('.img-filters').classList.remove('img-filters--inactive');
};

const onError = () => {
  showAlert('Не удалось загрузить фотографии, обновите страницу', ALERT_SHOW_TIME);
};

loadData(onSuccess, onError);

export {photos};
