// return new description photo object
import { getRadomNumber } from './util.js';

// return one description to photo
const createDescriptionPhoto = (id) => ({
  id: id,
  url: `photos/${id}.jpg`,
  description: `It's my new photo number ${id}`,
  likes: getRadomNumber(15, 200),
  comments: getRadomNumber(0, 200),
});

// return the massive of description obj with size countDescriptions
const createDescriptionMassive = (countDescriptions) =>
  Array.from({ length: countDescriptions }, (_, id) =>
    createDescriptionPhoto(id + 1)
  );

export { createDescriptionMassive };
