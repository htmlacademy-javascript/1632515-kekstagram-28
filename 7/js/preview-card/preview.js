// import { getArrayCard } from './create-card.js';

const pictureListElement = document
  .querySelector('.pictures');

const pictureTemplate = document
  .querySelector('#picture')
  .content
  .querySelector('.picture');

// const similarPictures = getArrayCard();

const pictureListFragment = document.createDocumentFragment();

const addPicture = (obj) => {
  obj.forEach(({ url, likes, comments, id }) => {
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

export { addPicture };
