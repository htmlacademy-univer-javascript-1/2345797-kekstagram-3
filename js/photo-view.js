const imgUploadPreviewElement = document.querySelector('.img-upload__preview').children[0];
const imgUploadFormElement = document.querySelector('.img-upload__start input[type=file]');

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const changePhotoPreview = () => {
  const file = imgUploadFormElement.files[0];
  const fileName = file.name.toLowerCase();

  if (FILE_TYPES.some((it) => fileName.endsWith(it))) {
    imgUploadPreviewElement.src = URL.createObjectURL(file);
  }
};

export { changePhotoPreview };
