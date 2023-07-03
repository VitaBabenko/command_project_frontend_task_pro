import { useState } from 'react';
import {
  Wrapper,
  CardButtonStyled,
} from '../ProjectOfficeStyle';
import { CardPopUp } from 'components/CardPopUp/CardPopUp';
import { CustomButton } from 'components/Button/CustomButton';

const ProjectCardAddButton = ({ columnId, boardId, setTasks, task }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleModal = () => {
    setIsOpen(prevstate => !prevstate);
  };

  return (
    <>
      <Wrapper>
        {/* {Array.from(Array(3)).map((_, index) => ( */}
        {/* <CardButtonStyled direction="row" spacing={2} key={index}> */}
        <CardButtonStyled direction="row" spacing={2}>
            <CustomButton isWhiteBackground={false} onClick={handleToggleModal}>
            Add another card
            </CustomButton>
          {/* <ButtonStyled
            startIcon={<AddIconStyled />}
            onClick={handleToggleModal}
          >
            Add another card
          </ButtonStyled> */}
        </CardButtonStyled>
        {/* ))} */}
      </Wrapper>
      {isOpen && (
        <CardPopUp
          isOpen={isOpen}
          onClose={handleToggleModal}
          columnId={columnId}
          boardId={boardId}
          setTasks={setTasks}
        />
      )}
    </>
  );
};

export default ProjectCardAddButton;
