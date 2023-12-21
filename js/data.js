import {getRandomInteger, createRandomIdFromRangeGenerator, createImageUrl} from './utils.js';

const DESCRIPTIONS = [
  'Кабинет',
  'Лагерь',
  'Шоколадка',
  'В сейфе',
  'Простокваша',
  'Игра в покер',
  'Цирковой номер',
  'Бла бла бла',
  'Курицы',
];

const NAMES = [
  'Ромулька',
  'Ладуня',
  'Приколист Вася',
  'VeraBOG2003',
  'Катерина',
  'Мария',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const PHOTOS_COUNT = 25;
const imageIdGenerator = createRandomIdFromRangeGenerator(1, PHOTOS_COUNT);
const imageUrlGenerator = createRandomIdFromRangeGenerator(1, PHOTOS_COUNT);

const COMMENTS = {
  MIN : 0,
  MAX : 30
};

const LIKES = {
  MIN : 15,
  MAX : 200
};

const createRandomComment = (generatorComments, generatorUrl) => ({
  id: generatorComments(),
  avatar: createImageUrl(generatorUrl(), 'img/avatar-', '.svg'),
  name: NAMES[getRandomInteger(0, NAMES.length - 1)],
  message: MESSAGES[getRandomInteger(0, MESSAGES.length - 1)],
});

const createRandomComments = (count) => {
  const result = [];
  const commentIdGenerator = createRandomIdFromRangeGenerator(1, count);

  for (let i = 0; i < count; i++) {
    const urlIdGenerator = createRandomIdFromRangeGenerator(1, 6);

    result.push(createRandomComment(commentIdGenerator, urlIdGenerator));
  }

  return result;
};

const createImage = () => ({
  id: imageIdGenerator(),
  url: createImageUrl(imageUrlGenerator(), 'photos/', '.jpg'),
  description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
  likes: getRandomInteger(LIKES.MIN, LIKES.MAX),
  comments: createRandomComments(getRandomInteger(COMMENTS.MIN, COMMENTS.MAX)),
});

export {PHOTOS_COUNT, createImage};
