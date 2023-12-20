import './until.js';
import {PHOTOS_COUNT, getPhotos} from './data.js';
import { renderPhotos } from './pictures.js';
import { initPictures } from './big-picture.js';

const pictures = Array.from( {length: PHOTOS_COUNT}, getPhotos);
renderPhotos(pictures);
initPictures(pictures);
