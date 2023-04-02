
import { isEscapeKey } from '../utilities.js';
import { sliderEffect, resetEffects } from './effect.js';
import { scalePicture, resetValueScale } from './scale.js';
const TAG_AMOUNT = 5;
const REGEXP_VALID = /^#[a-zа-яё0-9]{1,19}$/i;
const ERROR_MESSAGE = 'Неверно заполнены хэштеги';

const uploadFormPicture = document.querySelector('.img-upload__form');
const uploadModalElement = document.querySelector('.img-upload__overlay');
const uploadModalCloseButton = document.querySelector('.img-upload__cancel');
const uploadInputFile = document.querySelector('.img-upload__input');
const tagInputText = document.querySelector('.text__hashtags');
const descriptionInputElement = document.querySelector('.text__description');

const pristine = new Pristine(uploadFormPicture, {
  classTo: 'img-upload__wrapper',
  errorTextParent: 'img-upload__field-wrapper'
});

const openUploadModal = () => {
  uploadModalElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  sliderEffect();
};

const closeUploadModal = () => {
  uploadFormPicture.reset();
  resetEffects();
  uploadModalElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const isInputFocused = () =>
  document.activeElement === tagInputText ||
  document.activeElement === descriptionInputElement;

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt) && !isInputFocused()) {
    evt.preventDefault();
    closeUploadModal();
  }
}

const isValidAmountTag = (tag) =>
  tag.length <= TAG_AMOUNT;

const isUniqueTag = (array) => {
  const collectionHashtags = array.map((newArray) =>
    newArray.toLowerCase());
  return collectionHashtags.length === new Set(collectionHashtags).size;
};

const isValidSymbolTag = (elem) => REGEXP_VALID.test(elem);

const tagAssembly = (value) => {
  const tag = value
    .trim()
    .split(' ')
    .filter((tagCrop) => tagCrop.trim().length);
  return isValidAmountTag(tag)
    && isUniqueTag(tag)
    && tag.every(isValidSymbolTag);
};

pristine.addValidator(
  tagInputText,
  tagAssembly,
  ERROR_MESSAGE
);

const onFileUploadClick = () => {
  openUploadModal();
};

const onCloseButtonClick = () => {
  closeUploadModal();
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  if (pristine.validate()) {
    uploadFormPicture.submit();
  }
};

const uploadModal = () => {
  uploadInputFile.addEventListener('change', onFileUploadClick);
  uploadModalCloseButton.addEventListener('click', onCloseButtonClick);
  uploadFormPicture.addEventListener('submit', onFormSubmit);
};

scalePicture();
resetValueScale();

export { uploadModal };
