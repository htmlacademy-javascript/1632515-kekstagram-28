import {
  NAMES,
  COMMENTS,
  DESCRIPTIONS
} from '../constant.js';

import {
  getRandomInteger,
  getRandomArrayElement,
  getStringRange,
} from '../utilities.js';

const CARD_PHOTO_AMOUNT = 25;//25
const COMMENTS_RANGE = { min: 1, max: 3 };
const COMMENTS_AMOUNT = { min: 1, max: 20 };
const LIKES_RANGE = { min: 15, max: 200 };
const AVATAR_RANGE = { min: 1, max: 6 };

const createComment = (index) => ({
  id: index,
  avatar: `img/avatar-${getRandomInteger(AVATAR_RANGE.min, AVATAR_RANGE.max)}.svg`,
  message: getStringRange(COMMENTS, COMMENTS_RANGE),
  name: getRandomArrayElement(NAMES)
});

const getArrayComment = () => Array
  .from({ length: getRandomInteger(COMMENTS_AMOUNT.min, COMMENTS_AMOUNT.max) })
  .map((_, counterId) => createComment(counterId + 1)
  );

const createCardPhoto = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  likes: getRandomInteger(LIKES_RANGE.min, LIKES_RANGE.max),
  comments: getArrayComment(),
  name: getRandomArrayElement(NAMES),
  descriptions: getRandomArrayElement(DESCRIPTIONS),
});

const getArrayCard = () => Array
  .from({ length: CARD_PHOTO_AMOUNT })
  .map((_, counterId) => createCardPhoto(counterId + 1)
  );

export { getArrayCard, createComment };

