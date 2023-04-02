// Функция проверки длины строки.
const islengthStr = (str, syb) => {
  str = str.length;
  if (str <= syb) {
    return true;
  }
  return false;
};
islengthStr();

// Функция палиндромом

const isPalindrome = (str) => {
  str = str.toLowerCase();
  str = str.replace(/\s/g, '');
  let revStr = str;
  revStr = revStr.toLowerCase();
  revStr = revStr.replace(/\s/g, '');
  revStr = revStr.split('');
  revStr = revStr.reverse();
  revStr = revStr.join('');
  return str === revStr;
};
isPalindrome();

// Функция извлекает число

const getExtractNumber = (str) => {
  str = String(str);
  str = str.replace(/\D/g, '');
  str = parseInt(str, 10);
  return (str);
};
getExtractNumber();

//Функция Pad

const getPad = (str, minLength, pad) => {
  const actualPad = minLength - str.length;
  if (actualPad <= 0) {
    return str;
  }
  const tempPad = pad.slice(0, actualPad % pad.length);
  const tempRepeat = pad.repeat(actualPad / pad.length);
  return tempPad + tempRepeat + str;
};
getPad();
