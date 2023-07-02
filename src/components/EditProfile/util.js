export const ERegisterFieldName = 'ERegisterFieldName';
export const ERegisterFieldEmail = 'ERegisterFieldEmail';
export const ERegisterFieldPassword = 'ERegisterFieldPassword';
export const ERegisterFieldAvatar = 'ERegisterFieldAvatar';

export const getDefaultValuesForm = (name, email, avatarURL) => {
  return {
    [ERegisterFieldName]: name ?? '',
    [ERegisterFieldEmail]: email ?? '',
    [ERegisterFieldPassword]: '',
    [ERegisterFieldAvatar]: avatarURL ?? ''
  }
};

const checkedField = [ERegisterFieldName, ERegisterFieldEmail, ERegisterFieldPassword];
export const isAllRequiredFieldsDirty = (dirtyFields) => {
  return checkedField.some((el) => !!dirtyFields?.[el]);
};

export const ECurrentEditOperationEditData = 'ECurrentEditOperationEditData';
export const ECurrentEditOperationEditAvatar = 'ECurrentEditOperationEditAvatar';

export const defaultAvatarEditorValue = {
  position: { x: 0.5, y: 0.5 },
  scale: 2,
  rotate: 0,
  borderRadius: 0,
  preview: null,
  width: 200,
  height: 200,
  newImg: null,
};

export const defaultInputTypeRangeProps = {
  min: 1,
  max: 4,
  step: 0.01,
}

export const rotateValue = 90;

export const isTypeFileImg = (type) => {
  return type.startsWith('image/');
};

export const convertImg = (img, callbakc) => {
  return fetch(img).then((response) => {
    return response.blob()
  }).then((data) => callbakc(data));
};

export async function convert2DataUrl(blobOrFile) {
  let reader = new FileReader()
  reader.readAsDataURL(blobOrFile)
  await new Promise(resolve => reader.onload = function () { resolve() })
  return reader.result
}

export async function url2File(url, fileName) {
  const blob = await (await fetch(url)).blob()
  return new File([blob], fileName, { type: blob.type })
}