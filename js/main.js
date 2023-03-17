// return number from 'start' to 'end'
const getRadomNumber = (start, end) =>
  Math.round(Math.random() * (end - start) + start);
// return true if string's length less or equals when 'maxLen'
const checkStringLen = (str, maxLen) => str.length <= maxLen;

// test prints
getRadomNumber(0, 10);
checkStringLen("aboba", 5);

// return new description photo object
const createDescriptionPhoto = (id) => {
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: `It's my new photo number ${id}`,
    likes: getRadomNumber(15, 200),
    comments: getRadomNumber(0, 200),
  };
};

// return the massive of description obj with size countDescriptions
const createDescriptionMassive = (countDescriptions) => {
  let massive = Array.from({ length: countDescriptions });
  return massive.map((_, id) => createDescriptionPhoto(id + 1));
};

// test prints
const DESCRIPTIONS_COUNT = 25;
createDescriptionMassive(DESCRIPTIONS_COUNT);
