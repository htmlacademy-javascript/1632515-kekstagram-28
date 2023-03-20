import { getArrayCard } from './create-card.js';

const pictureListElement = document
  .querySelector('.pictures');

const pictureTemplate = document
  .querySelector('#picture')
  .content
  .querySelector('.picture');

const similarPictures = getArrayCard();

const pictureListFragment = document.createDocumentFragment();

similarPictures.forEach((data) => {
  const pictureElementClone = pictureTemplate.cloneNode(true);
  pictureElementClone
    .querySelector('.picture__img').src = data.url;
  pictureElementClone
    .querySelector('.picture__likes').textContent = data.likes;
  pictureElementClone
    .querySelector('.picture__comments').textContent = data.comments.length;
  pictureListFragment
    .append(pictureElementClone);
});

pictureListElement.append(pictureListFragment);
