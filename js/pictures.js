const pictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderPhoto = (picture) => {
  const pictureElement = pictureTemplate.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = picture.url;
  pictureElement.querySelector('.picture__img').alt = picture.description;

  pictureElement.querySelector('.picture__likes').textContent = picture.likes;
  pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;

  pictureElement.dataset.id = picture.id;
  pictures.append(pictureElement);
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
