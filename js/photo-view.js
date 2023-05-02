const uploadPreviewElement = document.querySelector('.img-upload__preview').children[0];
const uploadFormElement = document.querySelector('.img-upload__start input[type=file]');

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const changePhotoPreview = () => {
  const file = uploadFormElement.files[0];
  const fileName = file.name.toLowerCase();

  if (FILE_TYPES.some((it) => fileName.endsWith(it))) {
    uploadPreviewElement.src = URL.createObjectURL(file);
  }
};

export { changePhotoPreview };
