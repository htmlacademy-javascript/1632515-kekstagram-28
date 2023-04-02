
const SCALE_STEP = 25;
const VALUE_SCALE = {
  min: 25,
  max: 100
};
const DEFAULT_VALUE_SCALE = 100;

const scaleButtonSmaller = document.querySelector('.scale__control--smaller');
const scaleButtonBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const previewPicture = document.querySelector('.img-upload__preview img');

const changeScalePicture = (value) => {
  previewPicture.style.transform = `scale(${value / 100})`;
  scaleControlValue.value = `${value}%`;
};

const onButtonSmallerClick = () => {
  const currentValue = parseInt(scaleControlValue.value, 10);
  let newValue = currentValue - SCALE_STEP;

  if (newValue < VALUE_SCALE.min) {
    newValue = VALUE_SCALE.min;
  }
  changeScalePicture(newValue);
};

const onButtonBiggerClick = () => {
  const currentValue = parseInt(scaleControlValue.value, 10);
  let newValue = currentValue + SCALE_STEP;

  if (newValue > VALUE_SCALE.max) {
    newValue = VALUE_SCALE.max;
  }
  changeScalePicture(newValue);
};

const resetValueScale = () => changeScalePicture(DEFAULT_VALUE_SCALE);

const scalePicture = () => {
  scaleButtonSmaller.addEventListener('click', onButtonSmallerClick);
  scaleButtonBigger.addEventListener('click', onButtonBiggerClick);
};

export {
  scalePicture,
  resetValueScale
};
