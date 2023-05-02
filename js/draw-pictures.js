import { findTemplate } from './util.js';

const drawPhotoDescriptions = (photoDescriptions) => {
  const pictureTemplateElement = findTemplate('#picture', '.picture');
  const photoListElement = document.querySelector('.pictures');
  photoDescriptions.forEach(({url, comments, likes}) => {
    const photoElement = pictureTemplateElement.cloneNode(true);
    photoElement.querySelector('.picture__img').src = url;
    photoElement.querySelector('.picture__comments').textContent = comments;
    photoElement.querySelector('.picture__likes').textContent = likes;
    photoListElement.append(photoElement);
  });
};

export { drawPhotoDescriptions };
