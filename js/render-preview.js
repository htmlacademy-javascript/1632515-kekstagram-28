import { getArrayCard } from './create-card.js';

const pictureListElement = document
  .querySelector('.pictures');

const pictureTemplate = document
  .querySelector('#picture')
  .content
  .querySelector('.picture');

const similarPictures = getArrayCard();

const pictureListFragment = document.createDocumentFragment();

similarPictures.forEach(({ url, likes, comments }) => {
  const pictureElementClone = pictureTemplate.cloneNode(true);
  pictureElementClone
    .querySelector('.picture__img').src = url;
  pictureElementClone
    .querySelector('.picture__likes').textContent = likes;
  pictureElementClone
    .querySelector('.picture__comments').textContent = comments.length;
  pictureListFragment
    .append(pictureElementClone);
});

pictureListElement.append(pictureListFragment);
