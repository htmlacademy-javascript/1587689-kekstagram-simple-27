import { createPhotos } from './data.js';

const blockPictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const photos = createPhotos(25);

photos.forEach(({ url, comments, likes }) => {
  const photoElement = pictureTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__comments').textContent = comments;
  photoElement.querySelector('.picture__likes').textContent = likes;
  blockPictures.append(photoElement);
});
