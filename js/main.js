import { getData } from './api.js';
import { renderPhotos } from './render-photos.js';
import { openEditor, closeEditor, onClickBtnCloseEditor, onEscCloseEditor, showAlert } from './open-close-editor.js';
import { editSize, changeImgEffect, createSlider } from './edit-photo.js';

getData(renderPhotos, showAlert);

onClickBtnCloseEditor();
onEscCloseEditor();
openEditor();
closeEditor();
editSize();
createSlider();
changeImgEffect();
