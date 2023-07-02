export const ERegisterFieldEmail = 'ERegisterFieldEmail';
export const ERegisterFieldComment = 'ERegisterFieldComment';

export const defaultResponseData = {
  isFetching: false,
  init: false,
  data: null,
  error: null,
}

export const defaultValues = {
  [ERegisterFieldEmail]: '',
  [ERegisterFieldComment]: '',
};

export const checkResponse = (data, callback) => {
  data && callback();
}