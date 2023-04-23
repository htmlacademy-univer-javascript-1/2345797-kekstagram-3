import { createPhotoDescriptions } from './generate-data.js';
import { getData } from './api.js';
import { drawPhotoDescriptions } from './draw-pictures.js';
import { showGetDataAlert } from './messages.js';

const DESCRIPTIONS_COUNT = 25;

const drawPhoto = () =>
  getData(
    (data) => drawPhotoDescriptions(data.slice(0, DESCRIPTIONS_COUNT)),
    () => {
      showGetDataAlert();
      drawPhotoDescriptions(createPhotoDescriptions(DESCRIPTIONS_COUNT));
    }
  );

export { drawPhoto };
