// Элементы редактора фото
const filePhoto = document.querySelector('#upload-file');
const closeBtn = document.querySelector('#upload-cancel');
const editorPhoto = document.querySelector('.img-upload__overlay');
const bodyElement = document.querySelector('body');
const imgUploadForm = document.querySelector('.img-upload__form');
const imgSubmitBtn = document.querySelector('.img-upload__submit');

// Элементы размера фото
const sizeControl = document.querySelector('.scale__control--value');
const sizeSmaller = document.querySelector('.scale__control--smaller');
const sizeBigger = document.querySelector('.scale__control--bigger');
const imgUploadPreview = document.querySelector('.img-upload__preview');

// Элементы эффектов
const effectsList = document.querySelector('.effects');
const sliderEffectWrapper = document.querySelector('.effect-level');
const sliderEffect = document.querySelector('.effect-level__slider');
const effectLevel = document.querySelector('.effect-level__value');
const imgPreviewFile = imgUploadPreview.querySelector('img');

export {
  filePhoto,
  closeBtn,
  editorPhoto,
  bodyElement,
  imgUploadForm,
  imgSubmitBtn,
  sizeControl,
  sizeSmaller,
  sizeBigger,
  imgUploadPreview,
  effectsList,
  sliderEffect,
  effectLevel,
  imgPreviewFile,
  sliderEffectWrapper
};
