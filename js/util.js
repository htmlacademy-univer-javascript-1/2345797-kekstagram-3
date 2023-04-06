// return number from 'start' to 'end'
const getRadomNumber = (start, end) =>
  Math.round(Math.random() * (end - start) + start);
// return true if string's length less or equals when 'maxLen'
const checkStringLen = (str, maxLen) => str.length <= maxLen;
// return a copy of template
const findTemplate = (nameOfTemplate, nameOfElementInTemplate) =>
  document
    .querySelector(nameOfTemplate)
    .content.querySelector(nameOfElementInTemplate);

const isEscapeKey = (evt) => evt.key === 'Escape';

export { getRadomNumber, checkStringLen, findTemplate, isEscapeKey };
