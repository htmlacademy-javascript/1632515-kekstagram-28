import {
  NAMES,
  COMMENTS,
  DESCRIPTIONS
} from './data.js';

import {
  getRandomInteger,
  getRandomArrayElement,
  getStringRange,
} from './utilities.js';

const CARD_PHOTO_AMOUNT = 20;//25
const COMMENTS_RANGE = { min: 1, max: 3 };
const LIKES_RANGE = { min: 15, max: 200 };

const createCardPhoto = (index) => ({
  id: index,
  avatar: `photos/avatar-${index}.jpg`,
  likes: getRandomInteger(LIKES_RANGE.min, LIKES_RANGE.max),
  comments: getStringRange(COMMENTS, COMMENTS_RANGE),
  name: getRandomArrayElement(NAMES),
  descriptions: getRandomArrayElement(DESCRIPTIONS),
});

const getArrayCard = Array
  .from({ length: CARD_PHOTO_AMOUNT })
  .map((_, counterId) => createCardPhoto(counterId + 1)
  );

export { getArrayCard };
