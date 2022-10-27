import { isEscapeKey } from './utli.js';
import { sizeValueDefault, sizeControl, resetEditPhoto } from './edit-photo.js';
import { filePhoto, closeBtn, editorPhoto, bodyModalOpen, imgUploadForm } from './dom-elements.js';

const openEditor = () => filePhoto.addEventListener('change', () => {
  editorPhoto.classList.remove('hidden');
  bodyModalOpen.classList.add('modal-open');

  document.addEventListener('keydown', closeEscEditor);
  document.addEventListener('click', clickBtnClose);
});

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

const closeEditor = () => {
  editorPhoto.classList.add('hidden');
  bodyModalOpen.classList.remove('modal-open');
  imgUploadForm.reset();
  sizeControl.value = `${sizeValueDefault}%`;
  resetEditPhoto();

  document.removeEventListener('keydown', closeEscEditor);
  document.removeEventListener('click', clickBtnClose);
};

export { openEditor, closeEditor, clickBtnClose, closeEscEditor };
