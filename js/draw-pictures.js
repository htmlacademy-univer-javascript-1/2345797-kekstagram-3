import { findTemplate } from './util.js';

const drawPhotoDescriptions = (photoDescriptions) => {
  const pictureTemplate = findTemplate('#picture', '.picture');
  const photoListElement = document.querySelector('.pictures');
  photoDescriptions.forEach((description) => {
    const photoElement = pictureTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = description.url;
    photoElement.querySelector('.picture__comments').textContent = description.comments;
    photoElement.querySelector('.picture__likes').textContent = description.likes;
    photoListElement.append(photoElement);
  });
};

export { drawPhotoDescriptions };
