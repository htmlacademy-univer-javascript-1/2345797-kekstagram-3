const sliderDivElement = document.querySelector('.effect-level__slider');
const imgUploadEffectLevelElement = document.querySelector('.img-upload__effect-level');
const effectLevelValueElement = document.querySelector('.effect-level__value');
const imgUploadPreviewElement = document.querySelector('.img-upload__preview').children[0];

noUiSlider.create(sliderDivElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  connect: 'lower'
});

const addNumberToPattern = (pattern) => (number) => `${pattern[0]}${number}${pattern[1]}`;

const effects = {
  chrome: {
    settings: {
      range: {
        min: 0,
        max: 1,
      },
      step: 0.1,
    },
    pattern: addNumberToPattern`grayscale(${0})`,
  },
  sepia: {
    settings: {
      range: {
        min: 0,
        max: 1,
      },
      step: 0.1,
    },
    pattern: addNumberToPattern`sepia(${0})`,
  },
  marvin: {
    settings: {
      range: {
        min: 0,
        max: 100,
      },
      step: 1,
    },
    pattern: addNumberToPattern`invert(${0}%)`,
  },
  phobos: {
    settings: {
      range: {
        min: 0,
        max: 3,
      },
      step: 0.1,
    },
    pattern: addNumberToPattern`blur(${0}px)`,
  },
  heat: {
    settings: {
      range: {
        min: 1,
        max: 3,
      },
      step: 0.1,
    },
    pattern: addNumberToPattern`brightness(${0})`,
  },
};

let effectNow = 'none';

sliderDivElement.noUiSlider.on('update', () => {
  const valueSlider = sliderDivElement.noUiSlider.get();
  effectLevelValueElement.value = valueSlider;
  if (effectNow !== 'none') {
    imgUploadPreviewElement.style['filter'] = effects[effectNow]['pattern'](valueSlider);
  }
});

const changeEffect = (effect) => {
  effectNow = effect;
  if (effectNow === 'none') {
    imgUploadEffectLevelElement.classList.add('hidden');
    imgUploadPreviewElement.style['filter'] = '';
    return;
  }
  imgUploadEffectLevelElement.classList.remove('hidden');
  sliderDivElement.noUiSlider.updateOptions(effects[effectNow]['settings']);
  sliderDivElement.noUiSlider.set(effects[effectNow].settings.range.max);
};

export { changeEffect };
