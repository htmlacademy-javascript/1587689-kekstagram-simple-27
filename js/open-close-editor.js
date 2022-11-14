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

const onClickBtnCloseEditor = () => closeBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  onClose();
});

const onEscCloseEditor = () => document.addEventListener('keydown', (evt) => {
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

  document.addEventListener('keydown', onEscCloseEditor);
  document.addEventListener('click', onClickBtnCloseEditor);
});

const closeEditor = () => {
  onClose();

  document.removeEventListener('keydown', onEscCloseEditor);
  document.removeEventListener('click', onClickBtnCloseEditor);
};

const successTemplate = document.querySelector('#success').content;
const errorTemplate = document.querySelector('#error').content;

const showAlert = () => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = 'Не удалось подключиться к серверу';

  document.body.append(alertContainer);
};

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

const appendSuccessModal = () => {
  const successElement = successTemplate .cloneNode(true);
  bodyElement.appendChild(successElement);

  const successModalElement = document.querySelector('.success');

  const onSuccessModalEscKeydown = () => document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeModal(successModalElement);
    }
  });

  const onSuccessClickClose = () => successModalElement.addEventListener('click', () => {
    closeModal(successModalElement);
    closeEditor();
  });

  onSuccessModalEscKeydown();
  onSuccessClickClose();
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
  sendData(formData, appendSuccessModal , errorDownload);
});

export {
  openEditor,
  closeEditor,
  onClickBtnCloseEditor,
  onEscCloseEditor,
  showAlert
};
