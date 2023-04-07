const imgUploadScaleElement = document.querySelector('.img-upload__scale');
const scaleControlSmallerElement = imgUploadScaleElement.querySelector('.scale__control--smaller');
const scaleControlValueELement = imgUploadScaleElement.querySelector('.scale__control--value');
const scaleControlBiggerElement = imgUploadScaleElement.querySelector('.scale__control--bigger');
const imgUploadPreviewElement = document.querySelector('.img-upload__preview').children[0];

const scaleControl = {
  step: 25,
  min: 25,
  max: 100,
  start: 100
};

const changeScale = (newScale) => {
  scaleControlValueELement.value = `${newScale}%`;
  imgUploadPreviewElement.style['transform'] = `scale(${newScale / scaleControl.max})`;
};

const setScaleToStart = () => changeScale(scaleControl.start);

setScaleToStart();

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
