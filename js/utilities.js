const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (element) =>
  element[getRandomInteger(0, element.length - 1)];

const getStringRange = (element, range) =>
  Array.from({ length: getRandomInteger(range.min, range.max) }, () =>
    getRandomArrayElement(element)).join(' ');

export {
  getRandomInteger,
  getRandomArrayElement,
  getStringRange,
};


