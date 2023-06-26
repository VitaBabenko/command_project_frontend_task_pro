export const ERegisterFieldName = 'ERegisterFieldName';
export const ERegisterFieldEmail = 'ERegisterFieldEmail';
export const ERegisterFieldPassword = 'ERegisterFieldPassword';
export const ERegisterFieldAvatar = 'ERegisterFieldAvatar';

export const getDefaultValuesForm = (name, email, password) => {
  return {
    [ERegisterFieldName]: name ?? '',
    [ERegisterFieldEmail]: email ?? '',
    [ERegisterFieldPassword]: password ?? '',
  }
};

const checkedField = [ERegisterFieldName, ERegisterFieldEmail, ERegisterFieldPassword];
export const isAllRequiredFieldsDirty = (dirtyFields) => {
  return checkedField.every((el) => !!dirtyFields?.[el]);
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