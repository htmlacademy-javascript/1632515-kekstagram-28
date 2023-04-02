
import { isEscapeKey } from './utilities.js';

//Modal
const modalElement = document.querySelector('.big-picture');
const closeModalElement = document.querySelector('.big-picture__cancel');
const commentCount = modalElement.querySelector('.social__comment-count');
const commentLoadButton = modalElement.querySelector('.comments-loader');

//ListComment
const commentList = modalElement.querySelector('.social__comments');
const commentElement = commentList.querySelector('.social__comment');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

const openUserModal = () => {
  modalElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  // commentLoadButton.addEventListener('click', evt);
};

const closeUserModal = () => {
  modalElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  // commentLoadButton.removeEventListener('click', evt);
};

closeModalElement.addEventListener('click', () => {
  closeUserModal();
});

const getInfoPicture = (({ url, likes, comments, descriptions }) => {
  modalElement
    .querySelector('.big-picture__img')
    .querySelector('img').src = url;
  modalElement
    .querySelector('.likes-count').textContent = likes;
  modalElement
    .querySelector('.comments-count').textContent = comments.length;
  modalElement
    .querySelector('.social__caption').textContent = descriptions;
});

const getInfoComment = (obj) => {
  commentList.innerHTML = '';
  obj.comments.forEach(({ avatar, name, message }) => {
    const cloneComment = commentElement.cloneNode(true);
    cloneComment
      .querySelector('.social__picture').src = avatar;
    cloneComment
      .querySelector('.social__picture').alt = name;
    cloneComment
      .querySelector('.social__text').textContent = message;
    commentList
      .append(cloneComment);
  });
};

export {
  openUserModal,
  closeUserModal,
  getInfoPicture,
  getInfoComment,
  commentLoadButton,
  commentCount,
  commentList,
  commentElement,
};
