const commentTemplate = document.querySelector('#comments').content.querySelector('li');

const body = document.body;
const picturesContainer = document.querySelector('.pictures');

const bigPictureForm = document.querySelector('.big-picture');
const bigPictureImage = bigPictureForm.querySelector('.big-picture__img img');
const bigPictureLikes = bigPictureForm.querySelector('.big-picture__social .likes-count');
const bigPictureCommentsCount = bigPictureForm.querySelector('.big-picture__social .comments-count');
const bigPictureDescription = bigPictureForm.querySelector('.big-picture__social .social__caption');

const closeButton = document.querySelector('#picture-cancel');

const createComment = (comment) => {
  const currentComment = commentTemplate.cloneNode(true);

  const pictureElement = currentComment.querySelector('.social__picture');
  pictureElement.src = comment.avatar;
  pictureElement.alt = comment.name;

  const textElement = currentComment.querySelector('.social__text');
  textElement.textContent = comment.message;

  return currentComment;
};

const createComments = (comments) => {
  const commentFragment = document.createDocumentFragment();
  const socials = document.querySelector('.social__comments');

  comments.forEach((comment) => {
    commentFragment.appendChild(createComment(comment));
  });

  socials.innerHTML = '';
  socials.appendChild(commentFragment);

  document.querySelector('.social__comment-count').classList.add('hidden');
  document.querySelector('.comments-loader').classList.add('hidden');
};

const renderBigPicture = (data) =>{
  bigPictureImage.src = data.url;
  bigPictureLikes.textContent = data.likes;
  bigPictureDescription.textContent = data.description;
  bigPictureCommentsCount.textContent = data.comments.length;
};

const closeBigPicture = () => {
  bigPictureForm.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeyDown);
};

function onDocumentKeyDown (evt) {
  if(evt.key === 'Escape'){
    evt.preventDefault();
    closeBigPicture();
  }
}

const hideStatsElements = (picture) => {
  picture.querySelector('.picture__comments').classList.add('hidden');
  picture.querySelector('.picture__likes').classList.add('hidden');
};

const displayImageAndComments = (data) => {
  renderBigPicture(data);
  createComments(data.comments);
};

const showBigPicture = (data, picture) => {
  bigPictureForm.classList.remove('hidden');
  body.classList.add('modal-open');

  hideStatsElements(picture);
  displayImageAndComments(data);

  document.addEventListener('keydown', onDocumentKeyDown);
  closeButton.addEventListener('click', closeBigPicture);
};

const initPictures = (pictures) => {
  picturesContainer.addEventListener('click', (evt) =>{

    evt.preventDefault();

    const currentPicture = evt.target.closest('[data-id]');

    if(!currentPicture){
      return;
    }

    const currentPictureData = pictures.find((picture) => picture.id === +currentPicture.dataset.id);

    showBigPicture(currentPictureData, currentPicture);
  });
};

export { initPictures };
