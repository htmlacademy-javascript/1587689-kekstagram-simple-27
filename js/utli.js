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

getRandomInteger();

const checkStringLength = (string, maxLength) => string <= maxLength;

checkStringLength();

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

export {getRandomArrayElement, getRandomInteger};
