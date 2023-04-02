import {
  openUserModal,
  getInfoPicture,
  getInfoComment,
  commentLoadButton,
  commentCount,
  commentList
} from './fullscreen-modal.js';

import { getArrayCard } from './create-card.js';

const pictureListElement = document
  .querySelector('.pictures');

const pictureTemplate = document
  .querySelector('#picture')
  .content
  .querySelector('.picture');

const stepComment = 5;

const similarPictures = getArrayCard();

const pictureListFragment = document.createDocumentFragment();

const addPicture = () => {
  similarPictures.forEach(({ url, likes, comments, id }) => {
    const pictureElementClone = pictureTemplate.cloneNode(true);
    pictureElementClone
      .querySelector('.picture__img').src = url;
    pictureElementClone
      .querySelector('.picture__likes').textContent = likes;
    pictureElementClone
      .querySelector('.picture__comments').textContent = comments.length;
    pictureElementClone
      .dataset.id = id;
    pictureListFragment
      .append(pictureElementClone);
  });
  pictureListElement.append(pictureListFragment);
};


const onPictureListClick = (evt) => {
  if (evt.target.closest('.picture')) {
    openUserModal();
    const currentElement = evt.target.closest('.picture');
    const currentPicture = similarPictures.find((elem) => elem.id === Number(currentElement.dataset.id));
    getInfoPicture(currentPicture);
    getInfoComment(currentPicture);

    const onLoadComments = () => {
      const lengthArray = currentPicture.comments.length;

      if (lengthArray <= stepComment) {
        commentLoadButton.classList.add('hidden');
      } else {
        commentLoadButton.classList.remove('hidden');
      }

      commentCount.innerHTML = `Показанно ${commentList.children.length} из <span class="comments-count">${lengthArray} </span> комментариев`;
    };
    onLoadComments(currentPicture);
  }
};

pictureListElement.addEventListener('click', onPictureListClick);

export { addPicture };
