import { isEscapeKey } from '../utilities.js';
import {
  getInfoPicture,
  getInfoComment,
  loadComments,
  removeComments,
} from './get-info.js';

const modalElement = document.querySelector('.big-picture');
const commentLoaderButton = document.querySelector('.comments-loader');


const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

function onButtonLoadClick() {
  loadComments();
}

const openUserModal = (obj) => {
  modalElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  getInfoPicture(obj);
  getInfoComment(obj.comments);

  commentLoaderButton.dataset.value = 0;
  commentLoaderButton.dataset.maxValue = obj.comments.length;
  loadComments();

  commentLoaderButton.addEventListener('click', onButtonLoadClick);
};

const closeUserModal = () => {
  modalElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  removeComments();
  commentLoaderButton.removeEventListener('click', onButtonLoadClick);
};

export {
  openUserModal,
  closeUserModal,
};
