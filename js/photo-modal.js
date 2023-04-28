import { isEscapeKey } from './util.js';
import { formIsValid, hideValidateMessages } from './photo-validate-form.js';
import { setScaleToStart } from './photo-scale-editor.js';
import { clearEffect } from './photo-effect.js';
import { sendData } from './api.js';
import { showSendDataAlert, showSendDataSuccess } from './messages.js';
import { changePhotoPreview } from './photo-view.js';
const uploadFormElement = document.querySelector('.img-upload__form');
const uploadFileElement = uploadFormElement.querySelector('#upload-file');
const uploadOverlayElement = uploadFormElement.querySelector('.img-upload__overlay');
const closeButtonElement = uploadOverlayElement.querySelector('.img-upload__cancel');
const uploadTextElement = uploadOverlayElement.querySelector('.img-upload__text');
const uploadButtonElement = uploadOverlayElement.querySelector('.img-upload__submit');

// Функция для закрытия окна редактирования по эвенту ESC
const onPopupEscKeydown = (evt) => {
  if (!isEscapeKey(evt) || uploadOverlayElement.classList.contains('hidden')) {
    return;
  }
  evt.preventDefault();
  closePhotoModal();
};

const reloadForm = () => {
  // Убираем сообщение об ошибке при сбросе формы
  hideValidateMessages();
  // Сброс формы
  uploadFormElement.reset();
  // Сброс масштаба
  setScaleToStart();
  // Сброс стиля
  clearEffect();
};

// Функция для открытия окна редактирования
function closePhotoModal() {
  uploadOverlayElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  // Удалили листенер на ESC
  document.removeEventListener('keydown', onPopupEscKeydown);
  reloadForm();
}

let formUploading = false;
// Обновление состояние кнопки отправки формы
const updateButtonStatus = () => {
  if (formUploading) {
    return;
  }
  uploadButtonElement.disabled = !formIsValid(true);
};

const blockSubmitButton = () => {
  formUploading = true;
  uploadButtonElement.disabled = true;
  uploadButtonElement.textContent = 'Сохраняю...';
};

const unblockSubmitButton = () => {
  formUploading = false;
  uploadButtonElement.disabled = false;
  uploadButtonElement.textContent = 'Сохранить';
};

// Функция для открытия окна редактирования
const openPhotoModal = () => {
  changePhotoPreview();
  updateButtonStatus();
  uploadOverlayElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
  // Листенер на ESC
  document.addEventListener('keydown', onPopupEscKeydown);
  // Обновление кнопки отправки
};

const startModalWindow = () => {
  clearEffect();
  setScaleToStart();

  // Загрузка изображения открывает окно редактирования
  uploadFileElement.addEventListener('change', openPhotoModal);

  // Кнопка закрывает окно редактирования
  closeButtonElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    closePhotoModal();
  });

  // Изменился текст в форме
  uploadTextElement.addEventListener('input', updateButtonStatus);

  // Отправка формы
  uploadFormElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (!formIsValid()) {
      return;
    }
    blockSubmitButton();
    sendData(
      () => {
        closePhotoModal();
        showSendDataSuccess();
        unblockSubmitButton();
      },
      () => {
        showSendDataAlert();
        unblockSubmitButton();
      },
      new FormData(evt.target)
    );
  });
};

export { startModalWindow };
