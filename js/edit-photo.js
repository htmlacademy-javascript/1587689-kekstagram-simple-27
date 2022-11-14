import { EFFECTS } from './effects.js';
import { sizeControl, sizeSmaller, sizeBigger, imgUploadPreview, effectsList, sliderEffect, effectLevel, imgPreviewFile, sliderEffectWrapper } from './dom-elements.js';

const SIZE_VALUE_DEFAULT = 100;
const SIZE_MIN = 25;
const SIZE_MAX = 100;
const SIZE_STEP = 25;
let sizeValue = 100;

// Размер фотографии

const editSize = () => {

  sizeSmaller.addEventListener('click', () => {
    if (sizeValue > SIZE_MIN) {
      sizeValue -= SIZE_STEP;
      sizeControl.value = `${sizeValue}%`;
      imgUploadPreview.style.transform = `scale(${sizeValue / 100})`;
    }
  });
  sizeBigger.addEventListener('click', () => {
    if (sizeValue < SIZE_MAX) {
      sizeValue += SIZE_STEP;
      sizeControl.value = `${sizeValue}%`;
      imgUploadPreview.style.transform = `scale(${sizeValue / 100})`;
    }
  });
};

// Эффекты

const addSlider = () => {
  sliderEffectWrapper.style.visibility = 'visible';
  sliderEffectWrapper.removeAttribute('aria-hidden');
};

const removeSlider = () => {
  sliderEffectWrapper.style.visibility = 'hidden';
  sliderEffectWrapper.setAttribute('aria-hidden', 'true');
};

const resetEffect = () => {
  imgPreviewFile.classList.forEach(
    (item) =>
      item.includes('effects__preview--') &&
      imgPreviewFile.classList.remove(item),
    imgPreviewFile.style.filter = 'inherit'
  );
};

const updateSlider = (effect) => {
  if (!EFFECTS[effect]) {
    return;
  }

  const { min, max, step } = EFFECTS[effect];

  sliderEffect.noUiSlider.updateOptions({
    range: {
      min,
      max,
    },
    start: max,
    step,
  });
};

const changeImgEffect = () => {
  const onEffectsListChange = () => {
    const { value: effect } = effectsList.querySelector(
      'input[type=radio]:checked'
    );

    sliderEffect.noUiSlider.off('update');
    resetEffect();

    if (effect !== 'none') {
      imgPreviewFile.classList.add(`effects__preview--${effect}`);
      addSlider();
      updateSlider(effect);

      sliderEffect.noUiSlider.on('update', () => {
        effectLevel.value = sliderEffect.noUiSlider.get();
        const { filter, units } = EFFECTS[effect];
        imgPreviewFile.style.filter = `${filter}(${effectLevel.value}${units})`;
      });
    } else {
      removeSlider();
    }
  };

  effectsList.addEventListener('change', onEffectsListChange);
};

const createSlider = () => {
  noUiSlider.create(sliderEffect, {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
    connect: 'lower',
  });
  removeSlider();
};

const resetEditPhoto = () => {
  sizeValue = SIZE_VALUE_DEFAULT;
  sizeControl.value = `${SIZE_VALUE_DEFAULT}%`;
  imgUploadPreview.style.transform = `scale(${SIZE_VALUE_DEFAULT / 100})`;
  resetEffect();
  removeSlider();
};

export {
  changeImgEffect,
  createSlider,
  editSize,
  resetEditPhoto
};
