import { EditProfile } from 'components/EditProfile';
import { NeedHelpPop } from 'components/NeedHelp/NeedHelpPop';
import { MODAL_EDIT_PROFILE, MODAL_NEED_HELP } from './enums';

export const getModalMapData = modalName => {
  const obj = {
    [MODAL_EDIT_PROFILE]: <EditProfile />,
    [MODAL_NEED_HELP]: <NeedHelpPop />,
  };
  return obj[modalName] ?? <></>;
};
