import { useState } from 'react';
import {
  Wrapper
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
        <CustomButton
            type='button'
            onClick={handleToggleModal}
            styleOptions={{
                background: 'var(--addCardButtonBackground)',
                color: 'var(--addCardButtonColor)',
            }}
            style={{background: 'var(--addPlusButtonBackground)'}}
            customIcons={{stroke: 'var(--addPlusIconColor'}}
        >
            Add another card
        </CustomButton>
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
