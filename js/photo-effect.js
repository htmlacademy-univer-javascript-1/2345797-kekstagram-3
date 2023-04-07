import { changeEffect } from './photo-slider.js';
const imgUploadEffectsElement = document.querySelector('.img-upload__effects');
const imgPreviewElement = document.querySelector('.img-upload__preview').children[0];

const setEffect = (effect) => {
  imgPreviewElement.classList = '';
  imgPreviewElement.classList.add(`effects__preview--${effect}`);
  changeEffect(effect);
};

const clearEffect = () => {
  setEffect('none');
};

clearEffect();

imgUploadEffectsElement.addEventListener('click', (evt) => {
  const evtTargetElement = evt.target;
  if (evtTargetElement.tagName !== 'INPUT') {
    return;
  }
  setEffect(evtTargetElement.value);
});

export { clearEffect };
