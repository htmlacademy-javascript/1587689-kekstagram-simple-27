import { isEscapeKey } from './utli.js';
import { resetEditPhoto } from './edit-photo.js';
import { filePhoto, closeBtn, editorPhoto, bodyElement, imgUploadForm, imgSubmitBtn } from './dom-elements.js';
import { sendData } from './api.js';

let isErrorModal = false;

const onClose = () => {
  editorPhoto.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  imgUploadForm.reset();
  resetEditPhoto();
};

const clickBtnClose = () => closeBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  onClose();
});

const closeEscEditor = () => document.addEventListener('keydown', (evt) => {
  if (isErrorModal) {
    return false;
  }
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    onClose();
  }
});

const openEditor = () => filePhoto.addEventListener('change', () => {
  editorPhoto.classList.remove('hidden');
  bodyElement.classList.add('modal-open');

  document.addEventListener('keydown', closeEscEditor);
  document.addEventListener('click', clickBtnClose);
});

const closeEditor = () => {
  onClose();

  document.removeEventListener('keydown', closeEscEditor);
  document.removeEventListener('click', clickBtnClose);
};

const succesTemplate = document.querySelector('#success').content;
const errorTemplate = document.querySelector('#error').content;

const closeModal = (modal) => {
  modal.remove();
};

const blockSubmitButton = () => {
  imgSubmitBtn.disabled = true;
  imgSubmitBtn.textContent = 'Отправляю...';
};

const unblockSubmitButton = () => {
  imgSubmitBtn.disabled = false;
  imgSubmitBtn.textContent = 'Опубликовать';
};

const appendSuccesModal = () => {
  const successElement = succesTemplate.cloneNode(true);
  bodyElement.appendChild(successElement);

  const successModalElement = document.querySelector('.success');

  const onSuccessModalEscKeydown = () => document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeModal(successModalElement);
    }
  });

  const onSuccesClickClose = () => successModalElement.addEventListener('click', () => {
    closeModal(successModalElement);
    closeEditor();
  });

  onSuccessModalEscKeydown();
  onSuccesClickClose();
  unblockSubmitButton();
};

const errorDownload = () => {
  isErrorModal = true;
  const errorElement = errorTemplate.cloneNode(true);
  bodyElement.appendChild(errorElement);

  const errorModalElement = document.querySelector('.error');

  const onErrorModalEscKeydown = () => document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeModal(errorModalElement);
      isErrorModal = false;
    }
  });

  const onErrorClickClose = () => document.addEventListener('click', () => {
    closeModal(errorModalElement);
    isErrorModal = false;
  });

  onErrorModalEscKeydown();
  onErrorClickClose();
  unblockSubmitButton();
};

imgUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  blockSubmitButton();
  sendData(formData, appendSuccesModal, errorDownload);
});

export {
  openEditor,
  closeEditor,
  clickBtnClose,
  closeEscEditor,
};
