// Элементы редактора фото
const filePhoto = document.querySelector('#upload-file');
const closeBtn = document.querySelector('#upload-cancel');
const editorPhoto = document.querySelector('.img-upload__overlay');
const bodyModalOpen = document.querySelector('body');
const imgUploadForm = document.querySelector('.img-upload__form');

// Элементы размера фото
const sizeControl = document.querySelector('.scale__control--value');
const sizeSmaller = document.querySelector('.scale__control--smaller');
const sizeBigger = document.querySelector('.scale__control--bigger');
const imgUploadPreview = document.querySelector('.img-upload__preview');

// Элементы эффектов
const effectList = document.querySelector('.effects__list');
const sliderEffect = document.querySelector('.effect-level__slider');
const effectLevel = document.querySelector('.effect-level__value');

export { filePhoto, closeBtn, editorPhoto, bodyModalOpen, imgUploadForm, sizeControl, sizeSmaller, sizeBigger, imgUploadPreview, effectList, sliderEffect, effectLevel };
