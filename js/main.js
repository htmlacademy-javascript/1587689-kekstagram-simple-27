function getNumber(min, max) {

  let randomizeNumber = Math.floor(Math.random() * (max - min + 1) + min)

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

  return randomizeNumber;
}

const MIN = 5;
const MAX = 20;
const number = getNumber(MIN, MAX);

console.log(number);

function getComment (string, maxLength) {
  return string <= maxLength;
}

console.log(getComment (1200, 140));
