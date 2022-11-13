import { getData } from './api.js';
import { renderPhotos } from './render-photos.js';
import { openEditor, closeEditor, clickBtnClose, closeEscEditor } from './open-close-editor.js';
import { editSize, changeImgEffect, createSlider } from './edit-photo.js';

getData(renderPhotos);

clickBtnClose();
closeEscEditor();
openEditor();
closeEditor();
editSize();
createSlider();
changeImgEffect();
