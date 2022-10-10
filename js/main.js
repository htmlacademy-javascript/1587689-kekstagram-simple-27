function getRandomInteger(min, max) {

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
}

function getComment (string, maxLength) {
  return string <= maxLength;
}

console.log(getComment (120, 140));

// module4-task1

const photosDescriptionsArray = [
  'Описание 1',
  'Описание 2',
  'Описание 3',
  'Описание 4'
]

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

let idCount = 25;

const photosIdArray = []

const createId = (idCount) => {
  for (i = 0; i <= idCount; i++) {
    photosIdArray.push(i)
  }

  return photosIdArray;
}

createId(idCount);

const createPhoto = () => ({
  id:  id = photosIdArray[i],
  url: `photos/${id}.jpg`,
  description: getRandomArrayElement(photosDescriptionsArray),
  likes: getRandomInteger(15, 200),
  comments: getRandomInteger(0, 200)
})

const photosArray = []

for (i = 0; i <= photosIdArray.length - 1; i++) {
  photosArray.push(createPhoto());
}

console.log(photosArray);
