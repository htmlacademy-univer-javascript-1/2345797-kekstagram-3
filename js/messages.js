import { findTemplate, isEscapeKey } from './util.js';
const internetErrorMessageElement = document.querySelector('.error_connect');
const uploadOverlayElement = document.querySelector('.img-upload__overlay');

const showGetDataAlert = () => {
  internetErrorMessageElement.classList.remove('hidden');
};

const getESCListener = (closeFunction) => (evt) => {
  if (!isEscapeKey(evt)) {
    return;
  }
  evt.preventDefault();
  closeFunction();
};

const showSendDataAlert = () => {
  const alertElement = findTemplate('#error', '.error').cloneNode(true);
  uploadOverlayElement.classList.add('hidden');
  const ESCListener = getESCListener(closeDataAlertMessage);

  function closeDataAlertMessage() {
    document.body.removeChild(alertElement);
    uploadOverlayElement.classList.remove('hidden');
    document.removeEventListener('keydown', ESCListener);
  }

  alertElement.addEventListener('click', (evt) => {
    if (evt.target.type === 'button' || evt.target.classList.contains('error')) {
      closeDataAlertMessage(alertElement, ESCListener);
    }
  });
  document.addEventListener('keydown', ESCListener);
  document.body.appendChild(alertElement);
};

const showSendDataSuccess = () => {
  const successElement = findTemplate('#success', '.success').cloneNode(true);
  const ESCListener = getESCListener(closeDataSuccessMessage);

  function closeDataSuccessMessage() {
    document.body.removeChild(successElement);
    document.removeEventListener('keydown', ESCListener);
  }

  successElement.addEventListener('click', (evt) => {
    if (evt.target.type === 'button' || evt.target.classList.contains('success')) {
      closeDataSuccessMessage(ESCListener);
    }
  });
  document.addEventListener('keydown', ESCListener);
  document.body.appendChild(successElement);
};

export { showGetDataAlert, showSendDataAlert, showSendDataSuccess };
