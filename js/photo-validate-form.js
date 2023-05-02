const uploadFormElement = document.querySelector('.img-upload__form');

const pristine = new Pristine(uploadFormElement, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'form--invalid',
  successClass: 'form--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'form__error',
}, true);

const hideValidateMessages = () => {
  const errorMessageElement = uploadFormElement.querySelectorAll('.form__error');
  errorMessageElement.forEach((element) => { element.style.display = 'none'; });
};

const checkFormValidation  = (silent = false) => pristine.validate(silent);

export { checkFormValidation, hideValidateMessages };
