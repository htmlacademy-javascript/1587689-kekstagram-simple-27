import {getRandomArrayElement, getRandomInteger} from './utli.js';

const COUNT_PHOTOS = 25;
const photosDescriptionsArray = [
  'Описание 1',
  'Описание 2',
  'Описание 3',
  'Описание 4'
];
const photosArray = [];

const createPhoto = (index) => ({
  id:  index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(photosDescriptionsArray),
  likes: getRandomInteger(15, 200),
  comments: getRandomInteger(0, 200)
});

const createPhotos = () => {
  for (let i = 1; i <= COUNT_PHOTOS; i++) {
    photosArray.push(createPhoto(i));
  }

  return photosArray;
};

export {createPhotos, COUNT_PHOTOS};
