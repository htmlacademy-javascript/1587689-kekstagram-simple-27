import { getData } from './api.js';
import { renderPhotos, COUNT_PHOTOS } from './render-photos.js';
import { openEditor, closeEditor, clickBtnClose, closeEscEditor } from './open-close-editor.js';
import { editSize, changeImgEffect, createSlider } from './edit-photo.js';

getData((photos) => {
  renderPhotos(photos.slice(0, COUNT_PHOTOS));
});

clickBtnClose();
closeEscEditor();
openEditor();
closeEditor();
editSize();
createSlider();
changeImgEffect();
