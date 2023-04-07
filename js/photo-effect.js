const imgUploadEffectsElement = document.querySelector('.img-upload__effects');
const imgPreviewElement = document.querySelector('.img-upload__preview').children[0];

const setEffect = (effect) => {
  imgPreviewElement.classList = '';
  imgPreviewElement.classList.add(`effects__preview--${effect}`);
};

const clearEffect = () => {
  setEffect('none');
};

imgUploadEffectsElement.addEventListener('click', (evt) => {
  const evtTargetElement = evt.target;
  if (evtTargetElement.tagName !== 'INPUT') {
    return;
  }
  setEffect(evtTargetElement.value);
});

export { clearEffect };
