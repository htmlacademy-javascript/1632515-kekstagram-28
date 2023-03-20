import { getArrayCard } from './create-card.js';

const pictureListElement = document
  .querySelector('.pictures');

const pictureTemplate = document
  .querySelector('#picture')
  .content
  .querySelector('.picture');

const similarPictures = getArrayCard();

similarPictures.forEach((data) => {
  const pictureElementClone = pictureTemplate.cloneNode(true);
  pictureElementClone.querySelector('.picture__img').src = data.url;
  pictureElementClone.querySelector('.picture__likes').textContent = data.likes;
  pictureElementClone.querySelector('.picture__comments').textContent = data.comments.length;
  pictureListElement.append(pictureElementClone);
});
