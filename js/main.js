import { createPhotoDescriptions } from './data.js';
import { drawPhotoDescriptions } from './draw-pictures.js';

const DESCRIPTIONS_COUNT = 25;
const photoDescriptions = createPhotoDescriptions(DESCRIPTIONS_COUNT);
drawPhotoDescriptions(photoDescriptions);
