import { findTemplate, isEscapeKey } from './util.js';
const internetErrorMessageElement = document.querySelector('.error_connect');
const uploadOverlayElement = document.querySelector('.img-upload__overlay');

const showGetDataAlert = () => {
  internetErrorMessageElement.classList.remove('hidden');
};

const onSendDataEscKeydown = (closeFunction) => (evt) => {
  if (!isEscapeKey(evt)) {
    return;
  }
  evt.preventDefault();
  closeFunction();
};

const showSendDataAlert = () => {
  const alertElement = findTemplate('#error', '.error').cloneNode(true);
  uploadOverlayElement.classList.add('hidden');
  const onAlertEscKeydown = onSendDataEscKeydown(closeDataAlertMessage);

  function closeDataAlertMessage() {
    document.body.removeChild(alertElement);
    uploadOverlayElement.classList.remove('hidden');
    document.removeEventListener('keydown', onAlertEscKeydown);
  }

  alertElement.addEventListener('click', (evt) => {
    if (evt.target.type === 'button' || evt.target.classList.contains('error')) {
      closeDataAlertMessage(alertElement, onAlertEscKeydown);
    }
  });
  document.addEventListener('keydown', onAlertEscKeydown);
  document.body.appendChild(alertElement);
};

const showSendDataSuccess = () => {
  const successElement = findTemplate('#success', '.success').cloneNode(true);
  const onSuccessEscKeydown = onSendDataEscKeydown(closeDataSuccessMessage);

  function closeDataSuccessMessage() {
    document.body.removeChild(successElement);
    document.removeEventListener('keydown', onSuccessEscKeydown);
  }

  successElement.addEventListener('click', (evt) => {
    if (evt.target.type === 'button' || evt.target.classList.contains('success')) {
      closeDataSuccessMessage(onSuccessEscKeydown);
    }
  });
  document.addEventListener('keydown', onSuccessEscKeydown);
  document.body.appendChild(successElement);
};

export { showGetDataAlert, showSendDataAlert, showSendDataSuccess };
