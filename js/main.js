function getNumber(min, max) {
  let randomizeNumber

  randomizeNumber = Math.floor(Math.random() * (max - min + 1) + min)

  if (min < 0 || max < 0) {
    randomizeNumber = NaN
  }

  if (min > max) {
    min === max && max === min
  }

  if (min === max) {
    randomizeNumber = 'Ты сам знаешь какое это число'
  }

  return randomizeNumber
};

const NUMBER = getNumber(0, 20);

console.log(NUMBER);

function getComment (string, maxLength) {
  if (string < maxLength) {
    return true
  }

  return false
};

console.log(getComment (1200, 140));
