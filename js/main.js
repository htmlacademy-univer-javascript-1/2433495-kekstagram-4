import './data.js';
import {PHOTOS_COUNT, createImage } from './data.js';
import {createPictures} from './pictures.js';
import './big-picture.js';
import './form.js';
import './hashtag-pristine.js';

const pictures = Array.from( {length: PHOTOS_COUNT}, createImage);

createPictures(pictures);
