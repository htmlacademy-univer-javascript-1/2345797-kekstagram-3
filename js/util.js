// return number from 'start' to 'end'
const getRadomNumber = (start, end) =>
  Math.round(Math.random() * (end - start) + start);
// return the template
const findTemplate = (nameOfTemplate, nameOfElementInTemplate) =>
  document
    .querySelector(nameOfTemplate)
    .content.querySelector(nameOfElementInTemplate);

const isEscapeKey = (evt) => evt.key === 'Escape';

export { getRadomNumber, findTemplate, isEscapeKey};
