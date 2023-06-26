import { EditProfile } from 'components/EditProfile';
import { MODAL_EDIT_PROFILE } from './enums';

export const getModalMapData = (modalName) => {
  const obj = {
    [MODAL_EDIT_PROFILE]: <EditProfile />
  };
  return obj[modalName];
};