export const ERegisterFieldName = 'ERegisterFieldName';
export const ERegisterFieldEmail = 'ERegisterFieldEmail';
export const ERegisterFieldPassword = 'ERegisterFieldPassword';

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
