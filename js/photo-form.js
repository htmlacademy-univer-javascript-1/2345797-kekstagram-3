import { isHashtagValid } from './util.js';
const imgUploadForm = document.querySelector('.img-upload__form');
const hashtagsElement = imgUploadForm.querySelector('.text__hashtags');

const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'form--invalid',
  successClass: 'form--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'form__error',
});

pristine.addValidator(
  hashtagsElement,
  isHashtagValid,
  'Формат ввода: #(символы от 3 до 15)',
);

export { pristine };
