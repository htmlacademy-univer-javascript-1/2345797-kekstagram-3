// return number from 'start' to 'end'
const getRadomNumber = (start, end) =>
  Math.round(Math.random() * (end - start) + start);
// return true if string's length less or equals when 'maxLen'
const checkStringLen = (str, maxLen) => str.length <= maxLen;
// return the template
const findTemplate = (nameOfTemplate, nameOfElementInTemplate) =>
  document
    .querySelector(nameOfTemplate)
    .content.querySelector(nameOfElementInTemplate);

const isEscapeKey = (evt) => evt.key === 'Escape';

const isHashtagValid = (value) => /^(#[a-zA-Zа-яА-ЯЁё0-9\-_]{3,15} *)+$/.test(value);

export { getRadomNumber, checkStringLen, findTemplate, isEscapeKey, isHashtagValid };
