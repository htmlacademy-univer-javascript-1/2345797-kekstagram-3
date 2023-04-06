import { isEscapeKey } from './util.js';
import { pristine } from './photo-form.js';
const imgUploadForm = document.querySelector('.img-upload__form');
const uploadFileElement = imgUploadForm.querySelector('#upload-file');
const imgUploadOverlayElement = imgUploadForm.querySelector('.img-upload__overlay');
const imgCloseElement = imgUploadOverlayElement.querySelector('.img-upload__cancel');

// Функция для закрытия окна редактирования по эвенту ESC
const onPopupEscKeydown = (evt) => {
  if (!isEscapeKey(evt)) {
    return;
  }
  evt.preventDefault();
  closePhotoModal();
};

const reloadForm = () => {
  // Убираем сообщение об ошибке при сбросе формы
  const errorMessage = imgUploadForm.querySelectorAll('.pristine-error');
  errorMessage.forEach((element) => { element.style['display'] = 'none'; });
  // Сброс формы
  imgUploadForm.reset();
};

// Функция для открытия окна редактирования
function closePhotoModal() {
  imgUploadOverlayElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  // Удалили лисенер на ESC
  document.removeEventListener('keydown', onPopupEscKeydown);
  // Сбрасываем форму
  reloadForm();
}

// Функция для открытия окна редактирования
function openPhotoModal () {
  imgUploadOverlayElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
  // Лисенер на ESC
  document.addEventListener('keydown', onPopupEscKeydown);
}

// Загрузка изображения открывает окно редактирования
uploadFileElement.addEventListener('change', () => {
  openPhotoModal();
});

// Кнопка закрывает окно редактирования
imgCloseElement.addEventListener('click', (evt) => {
  evt.preventDefault();
  closePhotoModal();
});

// Отправка формы
imgUploadForm.addEventListener('submit', (evt) => {
  const isValid = pristine.validate();
  if (!isValid) {
    evt.preventDefault();
    // return;
  }
});
