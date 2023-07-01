// import React from 'react';
// import { ReactComponent as LogoutIcon } from '../../../../images/SVG/logout.svg';
import { BtnLogOut, SvgIcon } from './Logout.styled';

import spriteIcon from '../../../../images/sprite.svg';

export const Logout = ({ onClickLogout }) => {
  return (
    <BtnLogOut type="button" onClick={onClickLogout}>
      <SvgIcon aria-label="icon logout" width="32" height="32">
        <use href={spriteIcon + '#icon-logout'}></use>
      </SvgIcon>
      {/* <IconWrap>
        <LogoutIcon />
      </IconWrap> */}
      Log out
    </BtnLogOut>
  );
};
