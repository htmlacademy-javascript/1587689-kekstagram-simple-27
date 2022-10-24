import { EFFECTS } from './effects.js';

const size = document.querySelector('.scale__control--value');
const sizeSmaller = document.querySelector('.scale__control--smaller');
const sizeBigger = document.querySelector('.scale__control--bigger');
const imgUploadPreview = document.querySelector('.img-upload__preview');
const sizeValueDefault = 100;
let sizeValue = 100;

const effectList = document.querySelector('.effects__list');

const editSize = () => {

  sizeSmaller.addEventListener('click', () => {
    if (sizeValue > 25) {
      sizeValue -= 25;
      size.value = `${sizeValue}%`;
      imgUploadPreview.style.transform = `scale(${sizeValue / 100})`;
    }
  });
  sizeBigger.addEventListener('click', () => {
    if (sizeValue < 100) {
      sizeValue += 25;
      size.value = `${sizeValue}%`;
      imgUploadPreview.style.transform = `scale(${sizeValue / 100})`;
    }
  });
};

effectList.addEventListener('change', (evt) => {
  for (let i = 0; i < EFFECTS.length; i++) {
    const classEffect = EFFECTS[i].className;
    if (evt.target.checked && evt.target.id === EFFECTS[i].idName) {
      imgUploadPreview.className = classEffect;
    }
  }
});

export {sizeValueDefault, editSize, imgUploadPreview, size};
