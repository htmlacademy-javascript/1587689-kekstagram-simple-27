import { isEscapeKey } from './utli.js';
import { sizeValueDefault, imgUploadPreview, size } from './edit-photo.js';

const filePhoto = document.querySelector('#upload-file');
const closeBtn = document.querySelector('#upload-cancel');
const editorPhoto = document.querySelector('.img-upload__overlay');
const bodyModalOpen = document.querySelector('body');
const imgUploadForm = document.querySelector('.img-upload__form');

const openEditor = () => filePhoto.addEventListener('change', () => {
  editorPhoto.classList.remove('hidden');
  bodyModalOpen.classList.add('modal-open');

  document.addEventListener('keydown', closeEscEditor);
  document.addEventListener('click', clickBtnClose);
});

const closeEditor = () => {
  editorPhoto.classList.add('hidden');
  bodyModalOpen.classList.remove('modal-open');
  imgUploadForm.reset();
  size.value = `${sizeValueDefault}%`;
  imgUploadPreview.style.transform = `scale(${sizeValueDefault / 100})`;
  imgUploadPreview.className = 'effects__preview--none';

  document.removeEventListener('keydown', closeEscEditor);
  document.removeEventListener('click', clickBtnClose);
};

const clickBtnClose = () => closeBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeEditor();
});

const closeEscEditor = () => document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeEditor();
  }
});


export { openEditor, closeEditor, clickBtnClose, closeEscEditor };
