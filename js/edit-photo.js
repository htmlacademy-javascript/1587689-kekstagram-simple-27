import { EFFECTS } from './effects.js';
import { sizeControl, sizeSmaller, sizeBigger, imgUploadPreview, effectList, sliderEffect, effectLevel } from './dom-elements.js';

const sizeValueDefault = 100;
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

  noUiSlider.create(sliderEffect, {
    range: {
      'min': 0,
      'max': 100
    },
    step: 0.1,
    start: 80
  });

  sliderEffect.noUiSlider.on('update', () => {
    effectLevel.value = sliderEffect.noUiSlider.get();
  });

  const addSlider = () => {
    sliderEffect.classList.remove('visually-hidden');
  };

  const removeSlider = () => {
    sliderEffect.classList.add('visually-hidden');
  };

effectList.addEventListener('change', (evt) => {
  for (let i = 0; i < EFFECTS.length; i++) {
    const classEffect = EFFECTS[i].className;

    if (evt.target.checked && evt.target.id === EFFECTS[i].idName) {
      imgUploadPreview.className = classEffect;
      if (evt.target.checked && evt.target.id != 'effect-none') {
        addSlider();
        const imageWithClassEffect = document.querySelector(`.${classEffect}`);
        sliderEffect.noUiSlider.updateOptions({
          start: EFFECTS[i].maxValue,
          range: {
            'min': EFFECTS[i].minValue,
            'max': EFFECTS[i].maxValue
          },
          step: EFFECTS[i].step
        });
        sliderEffect.noUiSlider.on('update', () => {
          imageWithClassEffect.style.filter = `${EFFECTS[i].filter}(${effectLevel.value}${EFFECTS[i].unit})`;
        });
      } else {
        removeSlider();
        imgUploadPreview.style.filter = 'none';
      }
    }
  }
});

const resetEditPhoto = () => {
  sizeValue = sizeValueDefault;
  imgUploadPreview.style.transform = `scale(${sizeValueDefault / 100})`;
  imgUploadPreview.className = 'effects__preview--none';
  imgUploadPreview.style.filter = 'none';
  removeSlider();
};

export { sizeValueDefault, editSize, sizeControl, resetEditPhoto };
