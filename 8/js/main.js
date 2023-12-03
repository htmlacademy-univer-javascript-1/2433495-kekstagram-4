import './until.js';
import {getPhotos} from './data.js';
import { renderPhotos } from './pictures.js';

const pictures = getPhotos();
renderPhotos(pictures);
