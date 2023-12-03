const pictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderPhoto = ({url, description, likes, comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = description;

  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;

  return pictureElement;
};

const renderPhotos = (photos) => {
  const fragment = document.createDocumentFragment();

  photos.forEach((picture) => {
    const pictureElement = renderPhoto(picture);
    fragment.appendChild(pictureElement);
  });

  pictures.appendChild(fragment);
};

export {renderPhotos};
