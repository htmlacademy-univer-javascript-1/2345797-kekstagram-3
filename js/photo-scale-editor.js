const uploadScaleElement = document.querySelector('.img-upload__scale');
const scaleControlSmallerElement = uploadScaleElement.querySelector('.scale__control--smaller');
const scaleControlValueELement = uploadScaleElement.querySelector('.scale__control--value');
const scaleControlBiggerElement = uploadScaleElement.querySelector('.scale__control--bigger');
const uploadPreviewElement = document.querySelector('.img-upload__preview').children[0];

const scaleControl = {
  step: 25,
  min: 25,
  max: 100,
  start: 100
};

const changeScale = (newScale) => {
  scaleControlValueELement.value = `${newScale}%`;
  uploadPreviewElement.style.transform = `scale(${newScale / scaleControl.max})`;
};

const setScaleToStart = () => changeScale(scaleControl.start);

scaleControlSmallerElement.addEventListener('click', () => {
  const newScale = Number(scaleControlValueELement.value.slice(0, -1)) - scaleControl.step;
  if (newScale < scaleControl.min) {
    return;
  }
  changeScale(newScale);
});

scaleControlBiggerElement.addEventListener('click', () => {
  const newScale = Number(scaleControlValueELement.value.slice(0, -1)) + scaleControl.step;
  if (newScale > scaleControl.max) {
    return;
  }
  changeScale(newScale);
});


export {setScaleToStart};
