import { MODAL_NEED_HELP } from 'components/Modal/ModalMapContainer/enums';
import { useDispatch } from 'react-redux';
import { setNameModal } from 'redux/modal';
import spriteIcon from '../../images/sprite.svg';
import { Wrapper, Img, Text, Button, BtnTitle, Icon, Logo } from './needHelp.styled'

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
        If you need help with <Logo>TaskPro</Logo>, check out our support
        resources or <br /> reach out to our <br /> customer support team.
      </Text>
      <Button onClick={toggle}>
        <Icon aria-label="icon close" width="18" height="18">
          <use href={spriteIcon + '#icon-help-circle'}></use>
        </Icon>
        <BtnTitle>Need help?</BtnTitle>
      </Button>
    </Wrapper>
  );
};
