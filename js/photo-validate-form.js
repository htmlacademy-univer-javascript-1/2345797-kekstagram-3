const imgUploadForm = document.querySelector('.img-upload__form');

const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'form--invalid',
  successClass: 'form--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'form__error',
}, true);

const hideValidateMessages = () => {
  const errorMessage = imgUploadForm.querySelectorAll('.form__error');
  errorMessage.forEach((element) => { element.style.display = 'none'; });
};

const formIsValid = (silent = false) => pristine.validate(silent);

export { formIsValid, hideValidateMessages };
