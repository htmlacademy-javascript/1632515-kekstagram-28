import { getArrayCard } from '../preview-card/create-card.js';
import { addPicture } from '../preview-card/preview.js';
import {
  openUserModal,
  closeUserModal
} from './open-close.js';

const pictureContainerElement = document.querySelector('.pictures');
const closeButtonElement = document.querySelector('.big-picture__cancel');

const pictures = getArrayCard();
addPicture(pictures);

pictureContainerElement.addEventListener('click', (evt) => {
  const picture = evt.target.closest('.picture');
  if (picture) {
    const currentPicture = pictures.find((item) => item.id === Number(picture.dataset.id));
    openUserModal(currentPicture);
  }
});

closeButtonElement.addEventListener('click', () => {
  closeUserModal();
});
