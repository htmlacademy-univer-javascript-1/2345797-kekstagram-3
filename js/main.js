// return number from 'start' to 'end'
const getRadomNumber = (start, end) => Math.round(Math.random() * (end - start) + start);
// return true if string's length less or equals when 'maxLen'
const checkStringLen = (str, maxLen) => str.length <= maxLen;