//AMOUNTS

const CARD_PHOTO_AMOUNT = 2;//25
const COMMENTS_RANGE = { min: 1, max: 3 };
const LIKES_RANGE = { min: 15, max: 200 };

//DATA
const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

const COMMENTS = [
  'Всё отлично!',
  'В целом все не плохо. Но  не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула  фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTIONS = [
  'Если смогу, я сделаю это. Конец истории.',
  'Смейтесь как только умеете, любите столько, сколько живете.',
  'Помните: вы единственный человек, который может наполнить ваш мир солнечным светом.',
  'Я полностью уверена, что я — диснеевская принцесса, которую еще не придумали.',
];

//FUNCTIONS
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (element) =>
  element[getRandomInteger(0, element.length - 1)];


function getCountNumber() {
  let lastCountNumber = 0;
  return function () {
    lastCountNumber += 1;
    return lastCountNumber;
  };
}

const getStringRange = (element, range) =>
  Array.from({ length: getRandomInteger(range.min, range.max) }, () =>
    getRandomArrayElement(element)).join(' ');

const counterId = getCountNumber();
const counterUrl = getCountNumber();

const createCardPhoto = () => ({
  id: counterId(),
  avatar: `photos/avatar-${counterUrl()}.jpg`,
  likes: getRandomInteger(LIKES_RANGE.min, LIKES_RANGE.max),
  comments: getStringRange(COMMENTS, COMMENTS_RANGE),
  name: getRandomArrayElement(NAMES),
  descriptions: getRandomArrayElement(DESCRIPTIONS),
});

const cardPhoto = Array.from({ length: CARD_PHOTO_AMOUNT }, createCardPhoto);

cardPhoto();
// console.log(cardPhoto);
