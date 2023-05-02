import { changeEffect } from './photo-slider.js';
const uploadEffectsElement = document.querySelector('.img-upload__effects');
const previewElement = document.querySelector('.img-upload__preview').children[0];

const setEffect = (effect) => {
  previewElement.classList = '';
  previewElement.classList.add(`effects__preview--${effect}`);
  changeEffect(effect);
};

const clearEffect = () => {
  setEffect('none');
};

uploadEffectsElement.addEventListener('click', (evt) => {
  if (evt.target.tagName !== 'INPUT') {
    return;
  }
  setEffect(evt.target.value);
});

export { clearEffect };
