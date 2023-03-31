
const EFFECTS = [
  {
    name: 'none',
    style: 'none',
    min: 0,
    max: 100,
    step: 1,
    unit: '',
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  },
];

const DEFAULT_EFFECT = EFFECTS[0];

const previewPicture = document.querySelector('.img-upload__preview img');
const effectsElement = document.querySelector('.effects');
const sliderElement = document.querySelector('.effect-level__slider');
const sliderContainerElement = document.querySelector('.img-upload__effect-level');
const effectLevelValue = document.querySelector('.effect-level__value');


const openSliderElement = () => {
  sliderContainerElement.classList.remove('hidden');
};

const closeSliderElement = () => {
  sliderContainerElement.classList.add('hidden');
};

let selectedEffect = DEFAULT_EFFECT;

const isDefaultValue = () => selectedEffect === DEFAULT_EFFECT;

const updateSlider = () => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: selectedEffect.min,
      max: selectedEffect.max,
    },
    step: selectedEffect.step,
    start: selectedEffect.max,
  });
  if (isDefaultValue()) {
    closeSliderElement();
  } else {
    openSliderElement();
  }
};

const onEffectClick = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  selectedEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  previewPicture.className = `effects__preview--${selectedEffect.name}`;
  updateSlider();
};

const onSliderUpdate = () => {
  const sliderValue = sliderElement.noUiSlider.get();
  previewPicture.style.filter = isDefaultValue()
    ? DEFAULT_EFFECT.style
    : `${selectedEffect.style}(${sliderValue}${selectedEffect.unit})`;
  effectLevelValue.value = sliderValue;
};

const resetEffects = () => {
  selectedEffect = DEFAULT_EFFECT;
  updateSlider();
};

noUiSlider.create(sliderElement, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max,
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower',
});
closeSliderElement();


const sliderEffect = () => {
  effectsElement.addEventListener('change', onEffectClick);
  sliderElement.noUiSlider.on('update', onSliderUpdate);
};

export { sliderEffect, resetEffects };
