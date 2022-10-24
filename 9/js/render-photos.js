import {createPhotos, COUNT_PHOTOS} from './data.js';

const blockPhotos = document.querySelector('.pictures');
const photoTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const photos = createPhotos(COUNT_PHOTOS);
const userPhotoFragment = document.createDocumentFragment();

const renderPhotos = () => {
  photos.forEach(({ url, comments, likes }) => {
    const photoElement = photoTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = url;
    photoElement.querySelector('.picture__comments').textContent = comments;
    photoElement.querySelector('.picture__likes').textContent = likes;
    userPhotoFragment.appendChild(photoElement);
  });
  blockPhotos.append(userPhotoFragment);
}

export {renderPhotos};
