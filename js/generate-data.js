import { getRadomNumber } from './util.js';

// return one description to photo
const createPhotoDescription = (id) => ({
  id: id,
  url: `photos/${id}.jpg`,
  description: `It's my new photo number ${id}`,
  likes: getRadomNumber(15, 200),
  comments: getRadomNumber(0, 200),
});

// return the massive of description obj with size countDescriptions
const createPhotoDescriptions = (countDescriptions) =>
  Array.from({ length: countDescriptions }, (_, id) =>
    createPhotoDescription(id + 1)
  );

export { createPhotoDescriptions };
