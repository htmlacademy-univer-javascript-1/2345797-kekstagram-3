import { findTemplate, isEscapeKey } from './util.js';
const internetErrorMessageElement = document.querySelector('.error_connect');
const imgUploadOverlayElement = document.querySelector('.img-upload__overlay');

const showGetDataAlert = () => {
  internetErrorMessageElement.classList.remove('hidden');
};

const getESCListener = (alertElement) => (evt) => {
  if (!isEscapeKey(evt)) {
    return;
  }
  evt.preventDefault();
  closeDataAlertMessage(alertElement);
};

function closeDataAlertMessage(alertElement) {
  document.body.removeChild(alertElement);
  imgUploadOverlayElement.classList.remove('hidden');
  document.removeEventListener('keydown', getESCListener(alertElement));
}

const showSendDataAlert = () => {
  const alertElement = findTemplate('#error', '.error').cloneNode(true);
  imgUploadOverlayElement.classList.add('hidden');
  alertElement.addEventListener('click', (evt) => {
    if (evt.target.type === 'button' || evt.target.classList.contains('error')) {
      closeDataAlertMessage(alertElement);
    }
  });
  document.addEventListener('keydown', getESCListener(alertElement));
  document.body.appendChild(alertElement);
};

export { showGetDataAlert, showSendDataAlert };
