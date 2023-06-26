import spriteIcon from '../../images/sprite.svg';
import './style.css';
import { Modal } from '../Modal';
import { EditProfile } from '../EditProfile';
import { useState } from 'react';
import { Wrapper, Img, Text, Button, BtnTitle, Icon } from './needHelp.styled'
import { NeedHelpPop } from './NeedHelpPop';
import { useDispatch } from 'react-redux';
import { setNameModal } from 'redux/modal';
import { MODAL_NEED_HELP } from 'components/Modal/ModalMapContainer/enums';

export const NeedHelp = () => {
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(setNameModal(MODAL_NEED_HELP));
  };

  return (
    <Wrapper>
      <Img
        src="https://res.cloudinary.com/dxhypjavs/image/upload/v1687412198/command_project_task_pro_images/additionally/flowerpot.png"
        alt="cactus"
      />
      <Text>
        If you need help with <a href="*">TaskPro</a>, check out our support
        resources or reach out to our customer support team.
      </Text>
      {/* <CustomButton onClick={toggle}>
      Need help?
        </CustomButton> */}
      <Button onClick={toggle}>
        <Icon
          aria-label="icon close"
          width="18"
          height="18"
        >
          <use href={spriteIcon + '#icon-help-circle'}></use>
        </Icon>
        <BtnTitle>Need help?</BtnTitle>
      </Button>

      {/* {open && (
        <Modal {...{ open, toggle }}>
          <NeedHelpPop />
        </Modal>
      )} */}
    </Wrapper>
  );
};
