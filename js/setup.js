import { createPhotoDescriptions } from './generate-data.js';
import { getData } from './api.js'
import { drawPhotoDescriptions } from './draw-pictures.js';
const internetErrorMessageElement = document.querySelector('.error_connect');

const DESCRIPTIONS_COUNT = 25;

const drawPhoto = () => getData(
    (data) => drawPhotoDescriptions(data.slice(0, DESCRIPTIONS_COUNT)), 
    () => {
        internetErrorMessageElement.classList.remove('hidden');
        drawPhotoDescriptions(createPhotoDescriptions(DESCRIPTIONS_COUNT));
    }
);

export { drawPhoto }
