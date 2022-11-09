const getRandomInteger = (min, max) => {

  if (min < 0 || max < 0) {
    return -1;
  }

  if (min > max) {
    min = max;
    max = min;
  }

  if (min === max) {
    return -1;
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const checkStringLength = (string, maxLength) => string <= maxLength;

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

export {
  getRandomArrayElement,
  getRandomInteger,
  isEscapeKey,
  checkStringLength,
};
