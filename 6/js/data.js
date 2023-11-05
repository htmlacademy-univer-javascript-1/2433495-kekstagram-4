import { getRandomInt } from './until.js';

const COUNT_PHOTO = 25;

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAME = ['Ladka', 'Yorchik', 'Ksu', 'Maksik', 'Romchik', 'Dusha', 'Dashka'];

const DESCRIPTION = [
  'Отдыхаю',
  'Работаю',
  'Кушаю',
  'Гуляю с собакой',
  'С друзьями',
  'С семьей'
];

const addComments = () => ({
  id: getRandomInt(1, 5000),
  avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
  message: MESSAGE[getRandomInt(0, MESSAGE.length - 1)],
  name: NAME[getRandomInt(0, NAME.length - 1)]
});

const addPhoto = (index) => ({
  id:index,
  url: `photos/${index + 1}.jpg`,
  description: DESCRIPTION[getRandomInt(0, DESCRIPTION.length - 1)],
  likes: getRandomInt(15, 200),
  comments: Array.from({length: getRandomInt(0, 30)}, addComments)
});

const getPhotos = () => Array.from({length: COUNT_PHOTO}, addPhoto);

export {getPhotos};
