import { isEscapeKey } from './util.js';
import { formIsValid, hideValidateMessages } from './photo-validate-form.js';
import { setScaleToStart } from './photo-scale-editor.js';
import { clearEffect } from './photo-effect.js';
import { sendData } from './api.js';
import { showSendDataAlert, showSendDataSuccess } from './messages.js';
import { changePhotoPreview } from './photo-view.js';
const imgUploadForm = document.querySelector('.img-upload__form');
const uploadFileElement = imgUploadForm.querySelector('#upload-file');
const imgUploadOverlayElement = imgUploadForm.querySelector('.img-upload__overlay');
const imgCloseElement = imgUploadOverlayElement.querySelector('.img-upload__cancel');
const imgUploadTextElement = imgUploadOverlayElement.querySelector('.img-upload__text');
const imgUploadButtonElement = imgUploadOverlayElement.querySelector('.img-upload__submit');

// Функция для закрытия окна редактирования по эвенту ESC
const onPopupEscKeydown = (evt) => {
  if (!isEscapeKey(evt) || imgUploadOverlayElement.classList.contains('hidden')) {
    return;
  }
  evt.preventDefault();
  closePhotoModal();
};

const reloadForm = () => {
  // Убираем сообщение об ошибке при сбросе формы
  hideValidateMessages();
  // Сброс формы
  imgUploadForm.reset();
  // Сброс масштаба
  setScaleToStart();
  // Сброс стиля
  clearEffect();
};

// Функция для открытия окна редактирования
function closePhotoModal() {
  imgUploadOverlayElement.classList.add('hidden');
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
  imgUploadButtonElement.disabled = !formIsValid(true);
};

const blockSubmitButton = () => {
  formUploading = true;
  imgUploadButtonElement.disabled = true;
  imgUploadButtonElement.textContent = 'Сохраняю...';
};

const unblockSubmitButton = () => {
  formUploading = false;
  imgUploadButtonElement.disabled = false;
  imgUploadButtonElement.textContent = 'Сохранить';
};

// Функция для открытия окна редактирования
function openPhotoModal () {
  imgUploadOverlayElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
  changePhotoPreview();
  // Листенер на ESC
  document.addEventListener('keydown', onPopupEscKeydown);
  // Обновление кнопки отправки
  updateButtonStatus();
}

const startModalWindow = () => {
  // Загрузка изображения открывает окно редактирования
  uploadFileElement.addEventListener('change', openPhotoModal);

  // Кнопка закрывает окно редактирования
  imgCloseElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    closePhotoModal();
  });

  // Изменился текст в форме
  imgUploadTextElement.addEventListener('input', updateButtonStatus);

  // Отправка формы
  imgUploadForm.addEventListener('submit', (evt) => {
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
